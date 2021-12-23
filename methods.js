const express = require('express');
const app = express();
//middleware function->post(converts frontend data to json)
app.use(express.json());
app.listen(3000);

let users = [
    {
        'id':1,
        'name':"Sameer"
    },
    {
        'id':2,
        'name':"Vats"
    },
    {
        'id':3,
        'name':"Jim"
    }
];
//mini app
const userRouter = express.Router();
//base route, route to use
app.use("/users",userRouter);
userRouter
.route("/")
.get(getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser)

// app.get('/users',(req,res)=>{
//     console.log(req.query);
//     res.send(users);
// });
//POST
// app.post('/users',(req,res)=>{
//     console.log(req.body);
//     users=req.body;
//     res.json({
//         message:"data received successfully",
//         user:req.body
//     });
// }); 

//DELETE
// app.delete('/users',(req,res)=>{
//     users={};
//     res.json({
//         message:"data has been deleted"
//     })
// })

//update -> PATCH
// app.patch('/users',(req,res)=>{
//     console.log('req.body-> ', req.body);
//     //update data in  user's object
//     let dataToBeUpdated=req.body;
//     for(key in dataToBeUpdated){
//         users[key] = dataToBeUpdated[key];
//     }
//     res.json({
//         message:"data updated successfully"
//     })
// })

//parameters are used to serach the data and queries are used to filter out the data.

userRouter
.route("/:id")
.get(getUserbyId)

//params
// app.get('/users/:username',(req,res)=>{
//     console.log(req.params.username);
//     console.log(req.params);
//     res.send("User-ID received!",);
// })


function getUser(req,res){
    res.send(users);
}
function postUser(req,res){
    console.log(req.body);
    users=req.body;
    res.json({
        message:"data received successfully",
        user:req.body
    });
}
function updateUser(req,res){
    console.log('req.body-> ', req.body);
    //update data in  user's object
    let dataToBeUpdated=req.body;
    for(key in dataToBeUpdated){
        users[key] = dataToBeUpdated[key];
    }
    res.json({
        message:"data updated successfully"
    });
}

function deleteUser(req,res){
    users={};
    res.json({
        message:"data has been deleted"
    })
}

function getUserbyId(req,res){
    console.log(req.params.id);
    let paramId = req.param.id;
    let obj={};
    for(let i=0;i<users.length;i++){
        if(users[i]['id'] == paramId){
            obj = users[i];
        }
    }
    res.json({
        message:"req received",
        data:obj
    });
}