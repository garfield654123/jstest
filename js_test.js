

const http = require("http");
const sever = http.createServer((request, response) =>{
response.end("hello form nodejs server");

});

sever.listen();
/* sever.listen (1.port, 2IP, 3.callvack function)*/ 

console.log( "hello world");
