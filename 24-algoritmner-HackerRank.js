//---------------1---------------------------------------------
//HackerRanc / Prepare / Algorithms / Warmup / Plus Minus
//-------------------------------------------------------------
// https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
//-------------------------------------------------------------
//Տրվաց զանգվացի մեջ հաշվել զրոների, դրական և բացասական թվերի քանակները։
//Վերադարձնել դրական և բացասական թվերի և զրոների քանակների հարաբերությունները զանգվացի երկարությանը։
        //---------------1.1---------------------------------------
        // let arr=[1,1,0,-1,-1]
        // function plusMinus(arr) {
        //     let positiveCount = 0;
        //     let negativeCount = 0;
        //     let zeroCount = 0;
            
        //     for (let i = 0; i < arr.length; i++) {
        //         if (arr[i] > 0) {
        //             positiveCount++;
        //         } else if (arr[i] < 0) {
        //             negativeCount++;
        //         } else {
        //             zeroCount++;
        //         }
        //     }

        //     console.log((positiveCount / arr.length).toFixed(6));
        //     console.log((negativeCount / arr.length).toFixed(6));
        //     console.log((zeroCount / arr.length).toFixed(6));
        // }
        

        //---------------1.2---------------------------------------





//---------------2---------------------------------------------
//HackerRanc / Prepare / Algorithms / Warmup / Mini-Max Sum
//-------------------------------------------------------------
// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
//-------------------------------------------------------------
//Տրված է հինգ դրական ամբողջ թվերի զանգված։ Գտնել այն նվազագույն և առավելագույն արժեքները,
//որոնք կարելի է հաշվարկել՝ գումարելով հինգ ամբողջ թվերից ուղիղ չորսը:
        //---------------2.1---------------------------------------
        // let arr = [1,3,5,7,9];

        // function miniMaxSum(arr) {
        //     let sum = 0;

        //     for (let i = 0; i < arr.length; i++) {
        //         sum += arr[i];
        //     }

        //     const max = Math.max(...arr);
        //     const min = Math.min(...arr);
        //     console.log(sum - max,sum - min);
        // }

        // miniMaxSum(arr);

        //---------------2.1---------------------------------------





//---------------3---------------------------------------------
//HackerRanc / Prepare / Algorithms / Warmup / Birthday Cake Candles
//-------------------------------------------------------------
// https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
//-------------------------------------------------------------
// Տրված է մոմերի զանգված։ Գտնել և վերադարձնել ամենամեծ մոմերի քանակը։
        //---------------3.1---------------------------------------
        // const candles = [4, 4, 1, 3];

        // function birthdayCakeCandles(candles) {
        //     const maxHeight = Math.max(...candles); // Find the maximum height of the candles
        //     const tallestCandles = candles.filter(candle => candle === maxHeight); // Filter out the tallest candles
        //     return tallestCandles.length; // Return the number of tallest candles
        // }

        // console.log(birthdayCakeCandles(candles)); // Output: 2

        //---------------3.2---------------------------------------
        // const candles = [4, 4, 1, 3];

        // function birthdayCakeCandles(candles) {
        //     let maxHeight = candles[0];
        //     let quantityMaxHeight = 1;
        //     for(let i=1;i<candles.length;i++){
        //         if(candles[i] > maxHeight){
        //             maxHeight = candles[i];
        //             quantityMaxHeight = 1;
        //         } else if(candles[i] === maxHeight) {
        //             quantityMaxHeight++;
        //         }
        //     }
        // return quantityMaxHeight;
        // }

        // console.log(birthdayCakeCandles(candles));





//---------------4---------------------------------------------
//HackerRanc / Prepare / Algorithms / Implementation / Migratory Birds
//-------------------------------------------------------------
// https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true
//-------------------------------------------------------------
// Տրված է զանգված, որտեղ ներկաըացված է թռչունների տեսանելիությունը, ըստ տեսակի id-ի։
// Վերադարձնել այն թռչունի այդին, որը ամենաշատն է տեսանելի եղել,
// Եթե 1-ից ավելի տեսակ է նկատվել առավելագույն քանակով,
// ապա վերադարձնել այն տեսակի id-ին, որն ամենափոքրն է: 
        //---------------4.1---------------------------------------
        // const arr=[1,1,2,2,3];

        // function migratoryBirds(arr) {
        //     let map = new Map();
        //     let maxCount = 0;
        //     let maxType = 0;

        //     for (let i = 0; i < arr.length; i++) {
        //         let count = (map.get(arr[i]) || 0) + 1;
        //         map.set(arr[i], count);
        //         if (count > maxCount) {
        //         maxCount = count;
        //         maxType = arr[i];
        //         } else if (count === maxCount) {
        //         maxType = Math.min(maxType, arr[i]);
        //         }
        //     }

        //     return maxType;
        
        // }

        // console.log(migratoryBirds(arr));

        //---------------4.2---------------------------------------
        // const arr=[1,1,2,2,3];

        // function migratoryBirds(arr) {
        //     const counts = new Map();
        //     let maxCount = 0;
        //     let maxType = Infinity;
          
        //     for (const type of arr) {
        //       const count = counts.get(type) || 0;
        //       counts.set(type, count + 1);
        //       if (count + 1 > maxCount) {
        //         maxCount = count + 1;
        //         maxType = type;
        //       } else if (count + 1 === maxCount) {
        //         maxType = Math.min(maxType, type);
        //       }
        //     }
          
        //     return maxType;
        //   }

        //   console.log(migratoryBirds(arr));

        //---------------4.3---------------------------------------
        // const arr=[1,1,2,2,3];

        // function migratoryBirds(arr) {
        //     let counts = {};
        //     let maxCount = 0;
        //     let maxType = 0;
        
        //     for (let i = 0; i < arr.length; i++) {
        //         let type = arr[i];
        //         counts[type] = (counts[type] || 0) + 1;
        //         if (counts[type] > maxCount) {
        //             maxCount = counts[type];
        //             maxType = type;
        //         } else if (counts[type] === maxCount) {
        //             maxType = Math.min(maxType, type);
        //         }
        //     }
        
        //     return maxType;
        // }

        // console.log(migratoryBirds(arr));

        //---------------4.4---------------------------------------
        // const arr=[1,1,2,2,3];

        // function findMostFrequentBird(arr) {
        //     const counts = {};
        //     let maxCount = 0;
        //     let maxType = 0;
        //     // Գտնում է թռչնի յուրաքանչյուր տեսակի տեսանելիության քանակը
        //     for (let i = 0; i < arr.length; i++) {
        //         const type = arr[i];
        //         counts[type] = (counts[type] || 0) + 1;
        //         if (counts[type] > maxCount) {
        //             maxCount = counts[type];
        //             maxType = type;
        //         }
        //     }
        //     // Գտնում է ամենահաճախ երեվացող տեսակներից ամենափոքրի ID-ն
        //     const mostFrequentTypes = [];
        //     for (const type in counts) {
        //         if (counts[type] === maxCount) {
        //             mostFrequentTypes.push(Number(type));
        //         }
        //     }
        //     mostFrequentTypes.sort((a, b) => a - b);
        //     return mostFrequentTypes[0];
        // }

        // console.log(findMostFrequentBird(arr));





//---------------5---------------------------------------------
//HackerRanc / Prepare / Algorithms / Implementation / Grading Students
//-------------------------------------------------------------
// https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true
//-------------------------------------------------------------
// Յուրաքանչյուր ուսանող ստանում է գնահատական 0-ից 100 ներառական միջակայքում:
// 40-ից ցածր ցանկացած գնահատական համարվում է անհաջող գնահատական:
// Յուրաքանչյուր ուսանողի գնահատական կլորացնել հետևյալ կանոններին համաձայն.
// Եթե գնահատականի և 5-ի հաջորդ բազմապատիկի միջև տարբերությունը 3-ից փոքր է,
// ապա կլորացնել մինչև 5-ի հաջորդ բազմապատիկը:
// Եթե գնահատականի արժեքը 38-ից փոքր է, ապա ոչ մի կլորացում տեղի չի ունենում,
// քանի որ արդյունքը դեռևս կլինի ձախողված գնահատական:
// կլորացրու, եթե մնացորդը 3-ից պակաս է,
// մի կլորացնել, եթե մնացորդը 3 կամ ավելի բարձր է
// մի կլորացրու, եթե արդյունքը 40-ից պակաս է
        //---------------5.1---------------------------------------
        // let grades=[73,67,38,33,39,73]

        // function gradingStudents(grades){
        //     const data=grades.map((el, index)=>{
        //         if(el<38){
        //             return el
        //         } else if (el%5>=3) {
        //             console.log(el%5)
        //             return el+(5-el%5);
        //         } else {
        //             return el;
        //         }
        //     })
        //     return data;
        // }

        // console.log(gradingStudents(grades))

        //---------------5.2---------------------------------------
        // let grades=[73,67,38,33,39,73]

        // function gradingStudents(grades) {
        //     let newArray=[];
        //     // Write your code here
        //     for (let i = 0; i < grades.length; i++){
        //         if(grades[i]<38){
        //             newArray.push(grades[i])
        //             continue
        //         }
        //         if((grades[i]+1)%5==0){
        //             newArray.push(grades[i]+1)
        //             continue
        //         }
        //         if((grades[i]+2)%5==0){
        //             newArray.push(grades[i]+2)
        //             continue
        //         }
        //         else{
        //             newArray.push(grades[i])}
        //     }
        //     return newArray;
        // }
        // console.log(gradingStudents(grades))

        //---------------5.փ---------------------------------------
        // let grades=[73,67,38,33,39,73]

        // function gradingStudents(grades) {
        //     const newGrades = [];
        //      for (let i = 0; i < grades.length; i++) {
        //         const residue = grades[i] % 5;
        //         const sub = 5 - residue;
        //         if (grades[i] < 37 || sub >= 3) {
        //             newGrades.push(grades[i]);
        //         } else {
        //             const item = grades[i] + sub;
        //             newGrades.push(item);
        //         } 
        //     }
        //     return newGrades
        // }

        // console.log(gradingStudents(grades))





//---------------6---------------------------------------------
//HackerRanc / Prepare / Algorithms / Implementation / Cats and a Mouse
//-------------------------------------------------------------
// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true
//-------------------------------------------------------------
// Պետք էորոշել, թե որ կատուն առաջինը կհասնի մկնիկին, ենթադրելով, որ մկնիկը չի շարժվում,
// և կատուները շարժվում են հավասար արագությամբ: Եթե կատուները ժամանեն միևնույն ժամանակ,
// ապա մկնիկը կփախչի, մինչ նրանք կռվում են:
// Եթե A կատուն է առաջինը բռնում մկնիկը, տպել Cat A-ն:
// Եթե B կատուն է առաջինը բռնում մկնիկը, տպել Cat B-ը:
// Եթե երկու կատուները միաժամանակ հասնում են մկնիկի մոտ, տպել Mouse C,
// քանի որ երկու կատուները կռվում են, իսկ մկնիկը փախչում է:
// Օրինակ
// x = 2
// y = 5
// z = 4
// Կատուները գտնվում են 2-րդ (Cat A) և 5 (Cat B) դիրքերում, իսկ մկնիկը գտնվում է 4-րդ դիրքում:
// B կատուն, 5-րդ դիրքում, առաջինը կժամանի, քանի որ այն գտնվում է ընդամենը 1 միավոր հեռավորության վրա,
// իսկ մյուսը գտնվում է 2 միավոր հեռավորության վրա: Վերադարձել Cat B:
        //---------------6.1---------------------------------------
        // function catAndMouse(x, y, z) {

        //     const catA = Math.abs(x - z);
        //     const catB = Math.abs(y - z);
            
        //     console.log(catA,catB)
        //     if (catA === catB) {
        //         return 'Mouse C';
        //     } else if (catA < catB) {
        //         return 'Cat A';
        //     } else if (catA > catB) {
        //         return 'Cat B';
        //     }
        // }

        //---------------6.2---------------------------------------





//---------------7---------------------------------------------
//https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true
//-------------------------------------------------------------
//HackerRanc / Prepare / Algorithms / WarmupTime / Conversion
//-------------------------------------------------------------
//
        //---------------7.1---------------------------------------
        function timeConversion(s) {
                let lastTwo = s.slice(-2);
            let firstTwo = s.slice(0, 2)
            if(firstTwo==="12"){
                firstTwo = '00'
            }
            if(lastTwo==='PM'){
                firstTwo = parseInt(firstTwo)+12;
            }
            s=firstTwo+s.slice(2, -2)
            return s
        }
        
        console.log(timeConversion("12:45:54PM"))
        
        //---------------7.2---------------------------------------
        function timeConversion(s) {
                let [hour, minute, second] = s.slice(0, -2).split(":")
                let period = s.slice(-2)
                if (hour === '12') {
                    hour = '00';
                }
                if(period === "PM"){
                    hour = parseInt(hour, 10) + 12
                }
                return `${hour}:${minute}:${second}`
            
            }




//---------------8---------------------------------------------
//https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true
//-------------------------------------------------------------
//HackerRanc / Prepare / Algorithms / Implementation / Apple and Orange
//-------------------------------------------------------------
//
        //---------------8.1---------------------------------------
        function countApplesAndOranges(s, t, a, b, apples, oranges) {
                let appleCount = 0;
                let orangeCount = 0;
                
                for (let i = 0; i < apples.length; i++) {
                    let landing = a + apples[i];
                    if (landing >= s && landing <= t) {
                        appleCount++;
                    }
                }
                
                for (let i = 0; i < oranges.length; i++) {
                    let landing = b + oranges[i];
                    if (landing >= s && landing <= t) {
                        orangeCount++;
                    }
                }
                
                console.log(appleCount);
                console.log(orangeCount);
            }
            countApplesAndOranges(7, 11, 5, 15, [-2,2,1], [5, -6])

        //---------------8.2---------------------------------------
        function countApplesAndOranges(s, t, a, b, apples, oranges) {
                let applArr = [];
                let res = 0;
                for(let elem of apples){
                    res = a + elem;
                    applArr.push(res); 
                }
                let orangeArr = [];
                
                for(let elem of oranges){
                    orangeArr.push(b + elem); 
                }
                let countApple = 0;
             let countOrange = 0;
             
             for (let i = 0; i < applArr.length; i++) {
               if (applArr[i] >= s && applArr[i] <= t) {
                 countApple++;
               }
             }
             
             for (let i = 0; i < orangeArr.length; i++) {
               if (orangeArr[i] >= s && orangeArr[i] <= t) {
                 countOrange++;
               }
             }
             
               console.log(countApple)
               console.log(countOrange) 
             }
             countApplesAndOranges(7, 11, 5, 15, [-2,2,1], [5, -6])





//---------------9---------------------------------------------
//
//-------------------------------------------------------------
//HackerRanc / Prepare / Algorithms / ----- / -----
//-------------------------------------------------------------
//
        //---------------9.1---------------------------------------
        //---------------9.2---------------------------------------

    






















