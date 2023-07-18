const http= require('http') //import mdule
const fs  = require("fs");

//create server
const server = http.createServer((req,res)=>{
console.log("URL:", req.http,"method",req.method,"header",req.headers);
//response
const url = req.url;
if(url==="/"){
    res.write("<html>");
    res.write("<head><title>this is hiffi</title></head>");
    res.write("<body>this is hiffi here</body>");
    
   return  res.write("</html>");
}
if(url==="/file"){
fs.writeFileSync("userfile.txt","hello hiffi here");
res.statusCode=303;
res.setHeader("Location", "/");
return res.end();
}
res.write("<html>");
res.write("<head><title>this is hiffi</title></head>");
res.write("<body>this is code red here</body>");

 res.write("</html>");
});
//listen to server
server.listen(3000);