//-------------------1------------------
// const data={
//     notebook:[
//         {
//             name:"abc",
//             price:10
//         },
//         {
//             name:"abcd",
//             price:15
//         }
//     ],
//     house:[
//         {
//             name:"abc",
//             price:10
//         },
//         {
//             name:"abcd",
//             price:15
//         }
//     ]
// };
// data.notebook.forEach(function(el){
//     console.log(el.name,el.price)
// })


//---------------------2-----------------
////------inchpes ira vra franq vor bolor tvery cosol anenq
// const matrix=[
//     [1,5,3],
//     [2,4,6],
//     [8,7,9]
//     ]
// for(let i=0; i<matrix.length; i++){
//     console.log(matrix[i])
//     //-----ayspes tpum enq 3 hat zangvac
//     for(let j=0;j<matrix[i].length; j++){
//         console.log(matrix[i][j])
//         //ktpi bolor tvery
//     }
// }
  

//---------------------3----------------------
//----stugum enq 3-y vor indeqsum e
const nambers=[1,5,8,7,6,3,7,8,2,4];
for(let i=0; i<nambers.length; i++){
    if(nambers[i]==3){
        console.log(i);
    }
}
    
//------------------4-----------------------
//----aystex zngvaci tvery achman kargov en    
const a=[3,7,10,11,15,20,22,27,30,31,35,39,41,47]  
for(let i=0; i<a.length; i++){
    if(a[i]==35){
        console.log(i);
    }
}
        // ---------Linear search  O(n) time complexity
        // ---------Binary search O(log n ) timecomplexity

        // ---------Matrix search O(n^2) time complexity
        // ---------Big O notation