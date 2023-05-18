//-------------1-----------------------------------------------------------------------------------------------------
///hashvel fibonacci-i tvery
        //-------------1.1--------------------------------
          // function fibonacci(x){
          //     let fib=[0,1];
          //     let i = fib.length;
          //     for(let i = 2; i < x; i++){
          //         y=fib[i-1]+fib[i-2]
          //         fib.push(y)
          //     }
          //     return fib;
          // }
          // console.log(fibonacci(5));

        //-------------1.2--------------------------------
          // function fib(n) {
          //     if (n <= 1) {
          //       return n;
          //     } else {
          //       return fib(n - 1) + fib(n - 2);
          //     }
          //   }
          //   let result = fib(6);
          //   console.log(result);

        //-------------1.3--------------------------------
          // function fib(a, x){
          //   let array = [];
          //   array.push(a);
          //   array.push(a+1);
          //   for (let i=0; i<x; i++){
          //       array.reverse();
          //       y=array[0]+array[1];
          //       array.reverse();
          //       array.push(y);
          //   }
          //   return array
          //   }
          //   console.log(fib(0, 5));//[0, 1, 1, 2, 3, 5, 8]

//-------------2-----------------------------------------------------------------------------------------------------
// // Algorithm Example.
// function letters(str){
//     // Here goes all your code.
//   }
//   letters("abce");
//   // letters("abce") Should return "d".
//   // letters("bcdf") should return "e".
//   // letters("abcdefghi") should return undefined.
  
//   charCodeAt

    //-------------2.1--------------------------------
          // const str = 'abde';
          // const str1 = 'abcde';

          // function letter(str) {
          // const first = str.charCodeAt(0);
          // let char;
          // for ( let i = 1; i < str.length; i++) {
          //     if (str.charCodeAt(i) !== first + i) {
          //     char = String.fromCharCode(first + i)
          //     break;
          //     }
          // }
          // return char;
          // }

          // console.log(letter(str));
          // console.log(letter(str1));

  
            
//-------------3----------------------------------------------------------------------------------------------------         
// Duq uneq array
// const array = [-10, -4, 1,3,5,6,9, 10, 15,20]
// gteq qani combinacia kta 11
// orinak -4 15, 1 10, 5, 6

    //-------------3.1-optimal-lucum-------------------------------
          // const array = [-10, -4, 1,3,5,6,9, 10, 15,20];

          // while(array.length >1 ){
          //     if(array[0] + array[array.length-1] == 11){
          //         console.log(array[0], array[array.length-1]);
          //         array.shift(); 
          //         array.pop();
          //     } else {if(array[0] + array[array.length-1] > 11){
          //                 array.pop();
          //             } else {
          //                 array.shift();
          //             }
          //           }
          //   }

    //-------------3.2--------------------------------
          // const array = [-10,-9, -4, 1,3,5,6,9, 10, 15,20]
          // let start = 0
          // let end = array.length - 1
          // const target = 11

          // while(start < end){
          //     if(array[start] + array[end] == target){
          //         console.log(array[start], array[end])
          //         start ++
          //         end --
          //     }
          //     else if(array[start] + array[end]  > target){
          //         end --
          //     }
          //     else{
          //         start ++
          //     }
          // }

    //-------------3.3--------------------------------
          // const array = [-10, -4, 1, 3, 5, 6, 9, 10, 15, 20];

          // for (let i = 0; i < array.length; i++) {
          //   for (let j = i + 1; j < array.length; j++) {
          //     if (array[i] + array[j] === 11) {
          //       console.log(`(${array[i]}, ${array[j]})`);
          //     }
          //   }
          // }



//-------------4---------------------------------------------------------------------------------------------------
//gtnel te trvac tivy vorerord indeqsum e   
      //-------------4.1--------------------------------
            // const arr = [1,5,6,10,15,27,29, 39,56,90]

            // function lin_search(arr, target){
            // for(let i = 0; i < arr.length; i++){
            //       if(arr[i] === target){
            //             return i;
            //       }
            // }
            // return "does not exist";
            // }

            // const index = lin_search(arr, 5);
            // console.log(index);
      
      
      //-------------4.1--------------------------------
            // const arr = [1,5,6,10,15,27,29, 39,56,90]

            // function bin_search(arr, target){
            // let low = 0;
            // let high = arr.length - 1;
            // let mid;

            // while(low <= high){
            //       mid = Math.floor((low + high) / 2);
            //       if(arr[mid] === target){
            //             return mid;
            //       }
            //       else if(arr[mid] < target){
            //             low = mid + 1;
            //       }
            //       else{
            //             high = mid - 1;
            //       }
            // }
            // return "does not exist";
            // }

            // const index = bin_search(arr, 5);
            // console.log(index);


//-------------5---------------------------------------------------------------------------------------------------
//patakakan tverov matrica stanal 3-y 4-i vra
      //-------------5.1--------------------------------
      // function generateMatrix(rows, columns){
      //       const matrix = [];
      //       for (let i = 0; i < rows; i++) {
      //         const row = [];
      //         for (let j = 0; j < columns; j++) {
      //           row.push(Math.floor(Math.random() * 10));
      //         }
      //         matrix.push(row);
      //       }
      //       return matrix;
      //     }
          
      //     const test=generateMatrix(3, 4)
      //     console.log(test)


          //-------------5.2--------------------------------
            // function generateMatrix(rows, columns){
            //       let resultArray = [];
            //       for(let i = 0; i < rows; i++){
            //             console.log("row")
            //             resultArray.push([])
            //             for(j = 0; j < columns; j++){
            //                   console.log("column")
            //                   resultArray[i].push(Math.floor(Math.random() * 100)) 
            //             }
            //       }
            //       return resultArray;
            // }
            // const test = generateMatrix(3,4);
            // console.log(test)

        //-------------5.debugger--------------------------------
      //   function generateMatrix(rows, columns){
      //       let resultArray = [];
      //       for(let i = 0; i < rows; i++)
      //       {
      //           resultArray.push([])
      //           debugger
      //           for(j = 0; j < columns; j++)
      //           {
      //               debugger
      //               resultArray[i].push(Math.floor(Math.random() * 100)) 
      //           }
      //       }
      //       return resultArray;
      //   }
      //   const test = generateMatrix(3,4);
      //   console.log(test)

//-------------6---------------------------------------------------------------------------------------------------
//qrti verji 4 nisheric baci mnacacy sarqel #
      //-------------6.1-forEach-------------------------------
      // function maskify(cc) {
      //       const arr = cc.split("")
      //       const newArr = []
      //       if(arr.length > 4){
      //             arr.forEach(function(el, i){
      //                   if(i < arr.length-4){
      //                   newArr.push( "#")
      //            } else {
      //                   newArr.push(el)
      //            }
      //            })
      //       }
      //       return newArr.join("")
      // }
      // console.log(maskify("455636"))

      //-------------6.2--------------------------------
      // function maskify(cc) {
      //       const arr = cc.split("");
      //       return arr.map((el, i) => i < arr.length - 4 ? "#" : el).join("");
      // }
          
      // console.log(maskify("12345678"));
      
      //-------------6.3--------------------------------
      // function maskify(cc) {
      //       const arr = cc.split("");
      //       for(let i = 0; i < arr.length - 4; i++){
      //             arr[i] = "#";
      //       }
      //       return arr.join("")
      // }
      // console.log(maskify("455636"))





//-------------7---------------------------------------------------------------------------------------------------
// Implement algorithm which calculates the sum of smallest and largest elements
// function calculateMinMax(arr){

// }
// const arr_example_1 = [1,6,7,2,-6,-16,20,19]
// console.log(calculateMinMax(arr_example_1) // should return 4 (20 + (-16))
      //-------------7.1-----------------------------------------
      // function calculateMinMax(arr) {
      //       arr.sort(function(a, b){return a - b});//Տեսակավորել զանգվածը աճման կարգով
      //       let min = arr[0];
      //       let max = arr[arr.length - 1];
      //       return min + max;
      // }
      // const arr_example_1 = [1,6,7,2,-6,-16,20,19];
      // console.log(calculateMinMax(arr_example_1));

      //-------------7.2-----------------------------------------
      // function calculateMinMax(arr){
      //       let max=arr[0];
      //       let min=arr[0];
      //       for(let i=0;i<arr.length;i++){
      //           if(arr[i]<min){
      //               min=arr[i];
      //           }
      //         else if(arr[i]>max){
      //               max=arr[i];
      //           }
      //       }
      //       return min+max;
      // }
      // const arr_example_1 = [1,6,7,2,-6,-16,20,19];
      // console.log(calculateMinMax(arr_example_1));

      //-------------7.3-----------------------------------------
      // function calculateMinMax(arr) {
      // let min = Math.min(...arr)
      // let max = Math.max(...arr)
      // return min + max
      // }
      // const arr_example_1 = [1,6,7,2,-6,-16,20,19];
      // console.log(calculateMinMax(arr_example_1));





//-------------8---------------------------------------------------------------------------------------------------
// Implement function which takes in an object, and returns each key's value in an array in a sorted order
//Իրականացնել ֆունկցիա, որն ընդունում է օբյեկտ 
//և վերադարձնում է յուրաքանչյուր բանալու արժեքը զանգվածում դասավորված հերթականությամբ
// function objectToArray(obj){
  
// }

// const obj_test = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// console.log(objectToArray(obj_test) //should return ["John", 30, "New York"]
      //-------------8.1-----------------------------------------
      // function objectToArray(obj){
      //       // return Object.values(obj); 
      //       return [obj.name, obj.age, obj.city];
      //     }
      //     const obj_test = {
      //        name: "John",
      //        age: 30,
      //        city: "New York"
      //      };
      //     console.log(objectToArray(obj_test));

          //-------------8.2-----------------------------------------
          //stugel
          function objectToArray(obj) {
            let arr = [];
            for (let key in obj) {
              if (obj.hasOwnProperty(key)) {
                arr.push(obj[key]);
              }
            }
            return arr;
          }
          const obj_test = {
            name: "John",
            age: 30,
            city: "New York"
          };
         console.log(objectToArray(obj_test));





//-------------9---------------------------------------------------------------------------------------------------
// Implement bubble sort with JavaScript (first google what is bubble sort, try to do it yourself, if you can't for 30 minutes, try to find ready made algorithm and study it so you can answer questions)
//Իրականացրեք փուչիկների տեսակավորում JavaScript-ով 
//(նախ google-ում, թե ինչ է փուչիկ տեսակավորումը, փորձեք դա անել ինքներդ, 
//եթե չեք կարողանում 30 րոպե, փորձեք գտնել պատրաստի ալգորիթմ և ուսումնասիրեք այն)
// function bubbleSort(arr){
    
// }
// const arr_example_2 = [1,6,2, 20,16,29]
// console.log(bubbleSort(arr_example_2) // should return [1,2,6,16,20,29]
      //-------------9.1-----------------------------------------
      // function bubbleSort(arr) {
      //       let len = arr.length;
      //       let swapped;
      //       do {
      //             swapped = false;
      //             for (let i = 0; i < len - 1; i++) {
      //                   if (arr[i] > arr[i + 1]) {
      //                         let temp = arr[i];
      //                         arr[i] = arr[i + 1];
      //                         arr[i + 1] = temp;
      //                         swapped = true;
      //                   }
      //             }
      //             len--;
      //       } while (swapped);
      //       return arr;
      // }
      // const arr_example_2 = [1,6,2, 20,16,29]
      // console.log(bubbleSort(arr_example_2))


      //-------------9.2-----------------------------------------
      // function bubbleSort(arr) {
      //       let n = arr.length;
      //       let swapped = true;
      //       while (swapped) {
      //             swapped = false;
      //             for (let i = 0; i < n - 1; i++) {
      //                   if (arr[i] > arr[i + 1]) {
      //                         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      //                         swapped = true;
      //                   }
      //             }
      //             n--;
      //       }
      //       return arr;
      // }
      // const arr_example_2 = [1,6,2, 20,16,29]
      // console.log(bubbleSort(arr_example_2))

      //-------------9.3-----------------------------------------
      // function bubbleSort(arr) {
      //       const n = arr.length;
      //       for (let i = 0; i < n; i++) {
      //         for (let j = 0; j < n - i - 1; j++) {
      //           if (arr[j] > arr[j + 1]) {
      //             // let temp = arr[j];
      //             // arr[j] = arr[j + 1];
      //             // arr[j + 1] = temp;
      //             // swapped = true;
      //             // ays 4 toxi poxaren karox enq mi tox` aranc popoxakan ogtagorcelu
      //             [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      //           }
      //         }
      //       }
      //       return arr;
      //     }
      //     const arr_example_2 = [1,6,2, 20,16,29]
      //     console.log(bubbleSort(arr_example_2))
            





//-------------10---------------------------------------------------------------------------------------------------

      //-------------10.1-----------------------------------------