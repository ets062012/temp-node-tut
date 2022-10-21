// console.log(__dirname)
// const names=require('./names')
// require('./sayHi')
//  sayHi(names.john);
//  sayHi(names.susan);

// const os=require('os');
// const user=os.userInfo();
// console.log(user);
// console.log(os.uptime());
// const currentOs={
// name:os.type(),
// release:os.release(),
// totalMem:os.totalmem(),
// freeMem:os.freemem()

// }
// console.log(currentOs);

//const { rmSync } = require('fs');
const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
    res.end("hello every body")
    }
    else if(req.url==='/about'){
    res.end("here is our history");
    }
    else {res.end(
`<h1>oops</h1>
<p>we can't find this url</P>
<a href="/">back home</a>

`

    );}
})
server.listen(5000);