const {readFile,writeFile}=require('fs')
readFile('./content/subfolder/text.txt','utf8',(err,result)=>{
if(err){
console.log(err);
return

}
const first=result;
console.log(first);

readFile('./content/subfolder/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
        
        }
        const second=result;
        console.log(second);
        writeFile('./content/subfolder/result.txt',first+second,(err,result)=>{
if(err){
    console.log(err)
    return
}
console.log("successfully written");

        }
        )
});

//

}

);
