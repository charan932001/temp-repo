const { error } = require("console");

function f1(){
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('Success');
        }
        else{
            reject('Failure')
        }
    })
}
f1().then((result)=>{
   console.log(result);
   
}).catch((error)=>{
    console.log(error);
    
})