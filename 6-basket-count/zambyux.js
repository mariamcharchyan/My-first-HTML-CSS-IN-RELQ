let qanak=document.getElementById("zambyux");
// const plyus=document.getElementById("plus");
// const minus=document.getElementById("minus");
console.log(qanak.textContent);
// function inc(){
//     qanak.innerHTML++
// }
// function dec(){
//     qanak.innerHTML--
//     if(qanak.innerHTML<0){
//         qanak.innerHTML=0
//     }
// }
function inc(action){
 
    if(action=="plu"){
        qanak.innerHTML++
    }else if(action=="minu"){
        qanak.innerHTML--  
    }
    if(qanak.innerHTML<0){
        qanak.innerHTML=0
    }
}