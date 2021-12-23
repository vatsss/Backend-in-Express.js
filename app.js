const express = require('express');
const app=express();
app.listen(3000);

app.get('/', function(req,res){
    res.send('<h1>Hello!</h1>'); //
});
app.get('/about', function(req,res){
    res.send('<h1>About-!</h1>');
    //use res.sendFile to send a file.
});

//redirects
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
});
//404 Page
app.use((req,res)=>{
    //res.sendFile('./views/404.html',{root:__dirname});
});