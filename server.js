//server creation

//1 http module
const http = require('http');
const server = http.createServer((req,res)=>{
    console.log('request has been made from browser to server');
    //request object
    //console.log(req);
   // console.log(req.method);
    //console.log(req.url);

    //response object.
    res.setHeader('Content-Type','text/html'); //what kind of request has to be mentioned.
    res.write('<h1>Hello Sameer ! :)</h1>'); //user prompt/response.
    res.write('<h2>How Are You?</h2>');
    res.end();    //every request has to be ended
});

//port number, host,callback func
server.listen(3000,'localhost',() => {
    console.log('server is listening on port 3000');
});