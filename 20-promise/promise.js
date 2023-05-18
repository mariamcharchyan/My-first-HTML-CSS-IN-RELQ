//promise-i masin kardal"https://javascript.info/promise-basics
function getAge(age){
    return new Promise((resolve,reject) => {
        if(age<13){
            resolve("success")
        }else {
            reject("fail")
        }
    })
 }
 getAge(12)
   .then(result => {
       console.log(result)
   })
   .catch(error => {
       console.log(error)
   })