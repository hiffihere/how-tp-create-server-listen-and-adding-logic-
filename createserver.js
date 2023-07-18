const http= require('http') //import mdule


//create server
const server = http.createServer(()=>{
console.log("hello world");
});
//listen to server
server.listen(3000);