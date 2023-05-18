//-------Xndir-1-------------------------------------------------------
//ka 2 hat array, gtnel tarberutyun@ ev push anel nor arrayi mej
//chogtagorcel fitler, miayn for loop
// const myarr = [1,5,6,7,2];
// const myarr2 = [1,5,8,2,9];

    //-------------Lucum-1----------------
        // const myarr = [1, 5, 6, 7, 2];
        // const myarr2 = [1, 5, 8, 2, 9];
        // const result = [];

        // for (let i = 0; i < myarr.length; i++) {
        // if (!myarr2.includes(myarr[i])) {
        //     result.push(myarr[i]);
        // }
        // }

        // for (let j = 0; j < myarr2.length; j++) {
        // if (!myarr.includes(myarr2[j])) {
        //     result.push(myarr2[j]);
        // }
        // }

        // console.log(result);

    //-------------Lucum-2----------------
        // const myarr = [1,5,6,7,2];
        // const myarr2 = [1,5,8,2,9];
        // const array3 = myarr.concat(myarr2);
        // console.log(array3)
        // let z=[]
        // for(let i=0;i<array3.length;i++){
        // if(array3.indexOf(array3[i])==array3.lastIndexOf(array3[i]) && !z.includes(array3[i]) ){
        //     z.push(array3[i])  
        // }

        // }
        // console.log(z)

    //-------------Lucum-3----------------
    //---------------contcat anelov arrayner@ lucum, O(n^2)
        // const myarr = [1, 5, 6, 7, 2];
        // const myarr2 = [1, 7, 8, 2, 9, 10, 15];
        // const difference = [];
        // const combined = myarr.concat(myarr2);
        // const hash = {};

        // for (let i = 0; i < combined.length; i++) {
        // if (!hash[combined[i]]) {
        //     hash[combined[i]] = 1;
        // } else {
        //     hash[combined[i]] += 1;
        // }
        // }

        // for (let key in hash) {
        // if (hash[key] === 1) {
        //     difference.push(parseInt(key));
        // }
        // }

        // console.log(difference);


//-------Xndir-2-------------------------------------------------------
//gtnel duplicatner arrayi mej ev iranc push anel nor arrayi mej
////chogtagorcel fitler, miayn for loop
// const myarr3 = [1,2,5,6,7,8, 7,1,8,10];
    //-------------Lucum-1----------------
        // onst myarr3 = [1,2,5,6,7,8, 7,1,8,10,2,15];
        // const duplicates = [];
        // for (let i = 0; i < myarr3.length; i++) {
        // if (!duplicates[myarr3[i]]) {
        //     duplicates[myarr3[i]] = true;
        // } else {
        //     console.log(myarr3[i]);
        // }
        // }

    //-------------Lucum-2.1----------------
        // const myarr3 = [1,2,5,6,7,8, 7,1,8,10];
        // let myarrDubl = [];
        // for (let i=0; i<myarr3.length; i++){
        //     for (let j=i+1; j<myarr3.length; j++){
        //         if(myarr3[i] === myarr3[j]){
        //             myarrDubl.push(myarr3[i])
        //         } 
        // }
        // }
        // console.log(myarrDubl)

    //-------------Lucum-2.2----------------
        // const myarr3 = [1,2,5,6,7,8, 7,1,8,10,8,8];
        // let myarrDubl = [];
        // for (let i=0; i<myarr3.length; i++){
        //     for (let j=i+1; j<myarr3.length; j++){
        //         if(myarr3[i] === myarr3[j] && !myarrDubl.includes(myarr3[i])){
                    
        //             myarrDubl.push(myarr3[i])
        //         }
            
        // }
        // }
        // console.log(myarrDubl)
    


    //-------------Lucum-3----------------
        // function sol1(array){
        //     const duplicates = [];
        //         for (let i = 0; i < array.length; i++) {
        //         for (let j = i + 1; j < array.length; j++) {
        //             if (array[i] === array[j]) {
        //             duplicates.push(array[i]);
        //             }
        //         }
        // }
        //     return duplicates
        // }
        // console.log(sol1([1,5,6,5,6,7,1,20,15]))
        // //time complexity O(n^2) qani vor ka 2 for loop, ev menq chgitenq qani angama cikl fralu, 
        // //aysninqn anverjutyan qarakusi


    //-------------Lucum-4----------------
        // function findDuplicates(array) {
        //     let duplicates = [];
        //     let seen = {}; 
        
        //     for (let i = 0; i < array.length; i++) {
        //     if (seen[array[i]]) {
        //         duplicates.push(array[i]);
        //     } else {
        //         seen[array[i]] = true;
        //     }
        //     }
        //     console.log(seen)
        //     return duplicates;
        // }
        
        // console.log(findDuplicates([1,5,6,5,6,7,1,20,15]))
        
        // //time complexity O(n) qani vor ka 1 hat for loop,
        // //ev menq chgitenq qani angama cikl fralu, aysninqn anverjutyun
            // function findDuplicates(array) {
            //     let duplicates = [];
            //     let seen = {}; 
            
            //     for (let i = 0; i < array.length; i++) {
            //     if (seen[array[i]] == true) {
            //         console.log(seen[array[i]], i)
            //         duplicates.push(array[i]);
            //     } else {
            //         console.log(seen[array[i]], i)
            //         seen[array[i]] = true;
            //     }
            //     }
            //     return duplicates;
            // }


//-------Xndir-3-------------------------------------------------------
//reverse anel string@, orinak "example" bar@ petq e darna "elpmaxe"
//chogtagorcel reverse, miayn for loop
// const word = "tester";
    //-------------Lucum-1----------------
        // const word = "tester";
        // let wordArray2 = []; 
        // let wordArray = Array.from(word);
        // console.log(wordArray);
        // for(let i=wordArray.length-1; i>=0; i--){
        //     wordArray2.push(wordArray[i])
        // }
        // console.log(wordArray2);
        // let word2 = wordArray2.join('');
        // console.log(word2);

    //-------------Lucum-2----------------
        // const word = "tester";
        // let reversed = '';
        // for(let i = word.length-1; i>=0; i--){
        // reversed += word[i];
        // }
        // console.log(reversed);