//1------------ogtagorcel reduce vor gtnel bolor tveri gumar@
    // const array_reduce = [1,5,6,2,3]
    // let sum=array_reduce.reduce(function(a,b){
    //     return a+b;
    // },0)
    // console.log(sum);

//2----------ogtagorcel join ev stanal "HELLO" string
    // const array_join = ["H", "E", "L", "L", "O"]
    // console.log(array_join.join(''));


//3---------inchpes karox em tpel 1ic minchev 9 tver@?
    //  const matrix = [[1,2,3], [4,5,6], [7,8,9]]
    //  for(let i=0; i<matrix.length; i++){
    //     for (let j = 0; j < matrix[i].length; j++) {
    //     console.log(matrix[i][j]);
    //      }
    //   }
    //         

//4------------stexcel funkcia vor@ kstana arr en num vorpes parameter,
//ayd funkciain petqe poxancel array ev number, et funckcian
//petq e veradardzi index@ te vortexe ayd number@ gtnvum
//orinak
//function find_index(arr, num){
//    return index
//}
//console.log(find_index([1,5,6,2,3]), 5) // petq e lini 1
//console.log(find_index([1,5,7,1,17]), 1) // petq e lini 3
    // function find_index(arr, num){
    //     index=arr.indexOf(num)
    //     return index
    // }
    // console.log(find_index([1,5,6,2,3], 5));
    // console.log(find_index([1,5,7,1,17], 1));        

 
//5----------inchpes karox em gtnel name - erkarutyun@
//inchpes karox em gtnel et "b" tar@ vorerrordna name-i mej
//Inchpes gtnm te qani angama "e" tar@ krknvum
// const name = "Elizabeth"
    //----1tarberak------
    // const name = "Elizabeth"
    // const array =name.toLowerCase().split('')
    // //tarery darcnum e poqratar,splity darcnum e array
    // console.log(array)
    // let count = array.reduce((acc, cur) => {
    //     if(cur === 'e') {
    //         acc++
    //     }
    //     return acc;
    // }, 0)

    // console.log(count)

    //----2tarberak------
    // const name = "Elizabeth"
    // let count = 0
    // for(let i = 0 ; i < name.length; i ++){
    // if (name[i] == "e" || name[i] == "E"){
    // count ++
    // }
    // }
    // console.log(count)


//6-------------stexcel data structure vor@ kazmvaca arraj-ic, vori mej ka 3 hat object
//amen object petq e unena name ev price banaliner
//dzez petq e ogtagorcelov cankacac cikl tpel hetevyal@
//orinak
//item name: something
//item price: some price
//item name: something
//item price: some price
//item name: something
//item price: some price
    // const data=[
    //     {
    //         name:'pol',
    //         price:3
    //     },    
    //     {
    //         name:'mari',
    //         price:9
    //     },
    //     {
    //         name:'lala',
    //         price:7
    //     }
    //     ]
    //     data.forEach((item)=>{
    //         console.log(`item name:${item.name}`);
    //         console.log(`item price:${item.price}`);
    //     });



//7-------------
//stexcel funkcia vor kveradardzni caknacac tvi qarakusin
    // function square(num){
    // return num**2
    // }
    // console.log(square(2)) //kta 4
    // console.log(square(3)) //kta 9



//8--------------
//grel while loop-ov cikl, vor@ kkangni miayn ayn jamanak erb payman@
//klini true
//let a = 0
//payman, a petqa havasar lini 7
//while loop um amen cikli jamanak ain gumarum enq 1
//zhugh exeq anverj cikl chanel, teche browser/komp kkaxi
    // let n=0;
    // while(n<7){
    //     n++
    //     console.log(n)
    // }



//9------------
//to_map array-i vra ogtagorcel map stexcelov nor array "mapped"
//anunov, vor@ ira mej kunena amen tvi 2ov bazmapatik@
//"mapped" petq e ta [2,4,6,8,10]
        // const to_map = [1,2,3,4,5]
        //  const to_map = [1,2,3,4,5]
        //  let arr=to_map.pap(function(arr){
        //     return arr*2;
        //  })
        //  console.log(arr)