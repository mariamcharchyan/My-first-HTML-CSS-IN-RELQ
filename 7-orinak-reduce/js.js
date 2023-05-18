const studentsData = [
    {
      name: "Albert",
      lastName: "Einstein",
      score: 53
    },
    {
      name: "Charles",
      lastName: "Dickens",
      score: 84
    },
    {
      name: "Marilyn",
      lastName: "vos Savant",
      score: 99
    },
  ];
// stanal es anunnery voronc score 60ic barcr e ---- ['Charles','Marilyn']

//1 tarberak
          //  let result=studentsData.filter(function(value){
          //   return value.score>60;
          //  })
          // let names=result.map(function(val){
          //   return val.name;
          // })
          //  console.log(names);

//2 tarberak
          // let result=studentsData.reduce(function(acc,value){
          //   if (value.score>60){
          //     acc.push(value.name);
          //   }
          //   return acc;
          //  },[])
          //  console.log(result);

   //3 tarberak
          //  let result=[];
          //  studentsData.forEach(function(value){
          //   if (value.score>60){
          //     result.push(value.name);
          //   }
          //   return result;
          //  })
          //  console.log(result);

//ays tarberakov stanum enq zangvac, vori yuraqanchyur tarry 'name' ev 'score' tarreri miavorumn e
          // let result=studentsData.reduce(function(acc,value){
          //   acc.push(`${value.name} ${value.score}`);
          //   return acc;
          //  },[])
          //  console.log(result);

// arajadranq
// reduce ogtaagorcelov studentsData-ic staceq {
//   Albert: 53,
//   Charles: 84,
//   Marilyn: 99
// } objecty

//------------------lucum-1----------------------------------
const a = studentsData.reduce ( ( acc, value ) => { acc[value.name] = value.score ; return acc } , {} )
console.log(a);

//------------------lucum-2----------------------------------
// let myObject={}
// studentsData.forEach(function(value){
//     myObject[value.name]=value.score;
// })
//   console.log(myObject)
  
//------------------lucum-3----------------------------------  
const myObject=studentsData.reduce(function(acc,value){
    acc[value.name]=value.score;
    return acc
},{})
  console.log(myObject)
  