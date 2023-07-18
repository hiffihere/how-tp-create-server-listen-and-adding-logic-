const http= require('http') //import mdule


//create server
const server = http.createServer((req,res)=>{
console.log("URL:", req.http,"method",req.method,"header",req.headers);
});
//listen to server
server.listen(3000);