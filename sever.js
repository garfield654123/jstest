

const http = require("http");
const sever = http.createServer((request, response) =>{
response.end("hello form nodejs server");

});

const port =3000;  //assign the default port 
const ip="127.0.0.1" // point to the local sever
sever.listen(port, ip, () =>{
    console.log('Sever is running at http://${ip}:${port}');
});
/* sever.listen (1.port, 2IP, 3.callvack function)*/ 
 
console.log( "hello world");
