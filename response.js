const http= require('http') //import mdule


//create server
const server = http.createServer((req,res)=>{
console.log("URL:", req.http,"method",req.method,"header",req.headers);
//response
res.write("<html>");
res.write("<head><title>this is hiffi</title></head>");
res.write("<body>this is hiffi here</body>");

 res.write("</html>");
});
//listen to server
server.listen(3000);