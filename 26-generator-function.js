// //գեներատոր ֆունկցիան վերադարձնում է մի քանի արժեք
//-------------1---------------------------------------------------------
// function* generator () {
//     console.log(1);
//     yield 10
//     console.log(2);
//     yield 20
//     console.log(3);
//     yield 30
// }

// const generatorObject = generator();
// console.log(generatorObject);//Object [Generator] {}
// console.log(generatorObject.next());//{ value: 1, done: false }
// console.log(generatorObject.next());//{ value: 2, done: false }
// console.log(generatorObject.next());//{ value: 3, done: false }
// console.log(generatorObject.next());//{ value: undefined, done: true }

// const generatorObject2 = generator();
// console.log(generatorObject2);//Object [Generator] {}
// console.log(generatorObject2.next());//{ value: 1, done: false }




//-------------2---------------------------------------------------------
// function* generator2 () {
//     let id = 1;
//     while (true) {
//         yield id;
//         id++;
//     }
// }
// const generatorObject2 = generator2();
// console.log(generatorObject2.next()); // { value: 1, done: false }
// console.log(generatorObject2.next()); // { value: 2, done: false }
// console.log(generatorObject2.next()); // { value: 3, done: false }
// console.log(generatorObject2.next()); // { value: 4, done: false }
// console.log(generatorObject2.next()); // { value: 5, done: false }




//-------------3---------------------------------------------------------
// function* generator3 () {
//     let id = 1;
//     while (true) {
//         const val = yield id;
//         if(val!=null){
//             id+=val;
//         } else {
//             id++;
//         }

//     }
// }

// const generatorObject3 = generator3();
// //արժեք կարանք փոխանցենք երկրորդ next-ին, քանի որ առաջինի դեպքում չի վերցնում
// console.log(generatorObject3.next()); // { value: 1, done: false }
// console.log(generatorObject3.next(4)); // { value: 5, done: false }
// console.log(generatorObject3.next()); // { value: 6, done: false }
// console.log(generatorObject3.next(10)); // { value: 16, done: false }
// console.log(generatorObject3.next()); // { value: 17, done: false }




// //-------------4---------------------------------------------------------
// function* generator4 () {
//     const value = yield 'Jon'
//     yield value
// }

// const g4 = generator4();
// console.log(g4.next()); // { value: 'Jon', done: false }
// // հենց return գրենք done-ը կդառնա true 
// // և այդ քայլից հետո միշտ կլինի value-ն undefined, done-ը true
// console.log(g4.return(54)); // { value: 54, done: true }
// console.log(g4.next(54)); // { value: undefined, done: true }




//-------------5---------------------------------------------------------
function* generator5 (arr) {
    for(let i=0; i<arr.length; i++){
        yield arr[i];
    }
}

const g5 = generator5([1,2,3]);
console.log(g5.next()); // { value: 1, done: false }
console.log(g5.next()); // { value: 2, done: false }
console.log(g5.next()); // { value: 3, done: false }
console.log(g5.next()); // { value: undefined, done: true }