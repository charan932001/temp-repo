// const {readFileSync}=require('fs');
// const file1=readFileSync('./context/first.txt','utf8');
// console.log(file1)

const {readFile}=require('fs');
readFile('./context/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
    }
    console.log(result)
})



