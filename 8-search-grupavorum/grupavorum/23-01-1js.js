let arr = [
    {name: 'Alice', score: 10},
    {name: 'Bob', score: 20},
    {name: 'Juliana', score: 30},
    {name: 'Karen', score: 30},
    {name: 'Jona', score: 10},
    {name: 'Lewis', score: 10},
  ]

//----------------1-------------------
//   const newObj = arr.reduce((acc,el)=>{
//     const score = el.score;
//     if(!acc[score]){  
//       acc[score] = [el];
//     }else{
//       acc[score].push(el);
//       console.log(acc,'acc')
//     }
//     return acc;
//   },{})
  
//   console.log(newObj)


// ---------------------2--------------
let result = arr.reduce(function(acc, value){
  if(!acc[value.score]){
      acc[value.score]=[];
  
  }
      acc[value.score].push(value)
      console.log(acc)
      return acc
  }, {})
  console.log(result)