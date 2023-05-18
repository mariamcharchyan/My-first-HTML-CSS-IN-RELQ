//---------------1---------------------------------------------
// Write a function that takes an array of integers and returns the sum of all the even numbers in the array.
// Գրե՛ք ֆունկցիա, որն ընդունում է ամբողջ թվերի զանգված և վերադարձնում զանգվածի բոլոր զույգ թվերի գումարը։
    //---------------1.1---------------------------------------
        // function sumEvenNumbers(arr) {
        //     let sum = 0;
        //     for (let i = 0; i < arr.length; i++) {
        //       if (arr[i] % 2 === 0) {
        //         sum += arr[i];
        //       }
        //     }
        //     return sum;
        //   }
        
        //   const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        //   console.log(sumEvenNumbers(arr)); // Output: 20
    //---------------1.2---------------------------------------




//---------------2---------------------------------------------
// Write a function that takes two arrays and returns a new array with all the elements that are unique to each array (i.e. not present in both arrays).
// Գրեք մի ֆունկցիա, որը վերցնում է երկու զանգված և վերադարձնում է նոր զանգված՝ բոլոր այն տարրերով,
// որոնք եզակի են յուրաքանչյուր զանգվածի համար (այսինքն՝ չկան երկու զանգվածում):
    //---------------2.1---------------------------------------
        // function uniqueElements(arr1, arr2) {
        //     const uniqueArr1 = arr1.filter(element => !arr2.includes(element));
        //     const uniqueArr2 = arr2.filter(element => !arr1.includes(element));
        //     return [...uniqueArr1, ...uniqueArr2];
        // }
        // const array1 = [1, 2, 3, 4];
        // const array2 = [3, 4, 5, 6];
        
        // const uniqueArray = uniqueElements(array1, array2);
        
        // console.log(uniqueArray); // Output: [1, 2, 5, 6]
    //---------------2.2---------------------------------------
        // function getUniqueElements(arr1, arr2) {
        //     const uniqueArr = [];
            
        //     arr1.forEach(element => {
        //     if (!arr2.includes(element) && !uniqueArr.includes(element)) {
        //         uniqueArr.push(element);
        //     }
        //     });
            
        //     arr2.forEach(element => {
        //     if (!arr1.includes(element) && !uniqueArr.includes(element)) {
        //         uniqueArr.push(element);
        //     }
        //     });
            
        //     return uniqueArr;
        // }
        
        // const array1 = [1, 2, 3, 4];
        // const array2 = [3, 4, 5, 6];
        
        // const uniqueArray = getUniqueElements(array1, array2);
        
        // console.log(uniqueArray); // Output: [1, 2, 5, 6]
    




//---------------3---------------------------------------------
// Write a function that takes a string and returns a new string with the first letter of each word capitalized.
// Գրեք ֆունկցիա, որը վերցնում է տող և վերադարձնում նոր տող՝ յուրաքանչյուր բառի առաջին տառը մեծատառով:

    //---------------3.1---------------------------------------
    // function capitalizeWords(str) {
    //     const words = str.split(' ');
    //     const capitalizedWords = [];
      
    //     for (let i = 0; i < words.length; i++) {
    //       const word = words[i];
    //       const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    //       capitalizedWords.push(capitalizedWord);
    //     }
      
    //     return capitalizedWords.join(' ');
    //   }
      
    //   const sentence = "the quick brown fox jumps over the lazy dog";
    //   const capitalizedSentence = capitalizeWords(sentence);
      
    //   console.log(capitalizedSentence); // Output: "The Quick Brown Fox Jumps Over The Lazy Dog"
    //---------------3.2---------------------------------------
    



//---------------4---------------------------------------------
//Write a function accepts a string and returns true if string is valid and only has alphabetical characters
//Գրեք ֆունկցիա, որն ընդունում է տողը և վերադարձնում է true, եթե տողը վավեր է և ունի միայն այբբենական նիշեր
//example: "hello" ==> true, "hel1o" ==> false
    //---------------4.1---------------------------------------
    //Ֆունկցիան ստուգում է՝ արդյոք մուտքային տողը համապատասխանում է /^[a-zA-Z]+$/ կանոնավոր
    //արտահայտությանը, որը համապատասխանում է միայն մեկ կամ մի քանի այբբենական նիշ պարունակող 
    //տողերին (մեծատառ և փոքրատառ):
    //Եթե մուտքային տողը չի համընկնում կանոնավոր արտահայտության հետ, ֆունկցիան վերադարձնում է 
    //false, հակառակ դեպքում՝ true:
        // function isAlphabeticalString(s) {
        //     if (!/^[a-zA-Z]+$/.test(s)) {
        //       return false;
        //     }
        //     return true;
        //   }
        // console.log(isAlphabeticalString("hell3o"))

    //---------------4.2---------------------------------------
    //Split('') մեթոդը օգտագործվում է մուտքային տողը նիշերի զանգվածի փոխարկելու համար,
    //որն այնուհետև փոխանցվում է յուրաքանչյուր մեթոդին:
    //Յուրաքանչյուր մեթոդ կիրառում է տրամադրված հետ կանչի ֆունկցիան զանգվածի յուրաքանչյուր տարրի
    // վրա և վերադարձնում է true, եթե հետադարձման ֆունկցիան վերադարձնում է 
    //true յուրաքանչյուր տարրի համար:
    //Այս դեպքում, հետ կանչելու ֆունկցիան օգտագործում է կանոնավոր արտահայտությունը 
    ///[a-zA-Z]/՝ ստուգելու համար, թե արդյոք յուրաքանչյուր նիշ այբբենական նիշ է (և մեծատառ և փոքրատառ):
    //Եթե գտնվի որևէ ոչ այբբենական նիշ, յուրաքանչյուր մեթոդ վերադարձնում է false, 
    //հակառակ դեպքում՝ այն վերադարձնում է true:

        // function isAlphabeticalString(s) {
        //     return s.split('').every(function(char) {
        //       return /[a-zA-Z]/.test(char);
        //     });
        //   }
        //   console.log(isAlphabeticalString("hell3o"))


    //---------------4.3---------------------------------------
        // const alp = "abcdefghijklmnopqrstuvwxyz";

        // function string(str) {
        // const arr = str.split("");
        // for (let i in arr) {
        //     if (!alp.includes(arr[i])) {
        //     return false;
        //     }
        // }
        // return true;
        // }

        // console.log(string("hel2lo"));

    //     const alp = "abcdefghijklmnopqrstuvwxyz";

    // function string(str) {
    // const arr = str.split("");
    // for (let i = 0; i < arr.length; i ++) {
    //     if (!alp.includes(arr[i])) {
    //     return false;
    //     }
    // }
    // return true;
    // }

    // console.log(string("he1llo"));

    //---------------4.4---------------------------------------
        // function isAlphabetical(str) {
        //     for (let i = 0; i < str.length; i++) {
        //       const code = str.charCodeAt(i);
        //       if (!(code > 64 && code < 91) && !(code > 96 && code < 123)) {
        //         return false;
        //       }
        //     }
        //     return true;
        //   }
        
        //   console.log(isAlphabetical("hello"))
    



//---------------5---------------------------------------------
//Implement a function that takes an array of integers and returns the highest product of any three numbers in the array.
//Իրականացնել ֆունկցիա, որն ընդունում է ամբողջ թվերի զանգված և վերադարձնում զանգվածի ցանկացած երեք թվերի ամենաբարձր արտադրյալը:
//example: [1,6,7,2,10, 11]. = 28
    //---------------5.1---------------------------------------
        // function highestProductOfThree(arr) {
        //     if (arr.length < 3) {
        //         return 'Array must have at least 3 numbers';;
        //     }
        
        //     let max1 = -Infinity;
        //     let max2 = -Infinity;
        //     let max3 = -Infinity;

        //     for (let i = 0; i < arr.length; i++) {
        //         let num = arr[i];
        //         if (num > max1) {
        //         max3 = max2;
        //         max2 = max1;
        //         max1 = num;
        //         } else if (num > max2) {
        //         max3 = max2;
        //         max2 = num;
        //         } else if (num > max3) {
        //         max3 = num;
        //         }
            
        //         console.log(max1 , max2 , max3) 
        //     }
            
        //     return max1 * max2 * max3;
            
        //     }
        
        // console.log(highestProductOfThree([1,6,7,2,10, 11]))
    //---------------5.2---------------------------------------
    



//---------------6---------------------------------------------
//Write a function that takes an array of integers and returns the two numbers that sum up to a given target number.
//Գրել ֆունկցիա, որը վերցնում է ամբողջ թվերի զանգված և վերադարձնում է այն երկու թվերը, որոնք գումարում են տվյալ թիրախային թիվը:
//example: function(arr, target). [1,5,8,2,10] , 18 = > index 2 index 4
    //---------------6.1---------------------------------------
        // function findTwoNumbers(arr, target) {
        //     const map = new Map();
        
        //     for (let i = 0; i < arr.length; i++) {
        //       const num = arr[i];
        //       const complement = target - num;
        
        //       if (map.has(complement)) {
        //         return [map.get(complement), i];
        //       }
        
        //       map.set(num, i);
        //     }
        
        //     return null;
        //   }
        
        //   console.log(findTwoNumbers([1,5,8,2,10] , 18) )

    //---------------6.2---------------------------------------
        // function findTwoNumbers(arr, target) {
        //     let arrTwoNumbers=[]
        //     for (let i = 0; i < arr.length; i++) {
        //         for (let j = i + 1; j < arr.length; j++) {
        //             if (arr[i] + arr[j] === target) {
        //                 arrTwoNumbers.push([arr[i], arr[j]]);
        //                 break;
        //             }
        //         }
        //     }
            
        //     return arrTwoNumbers;
        // }
            
        // console.log(findTwoNumbers([1,5,8,2,10,13,16,16] , 18) )
      
    //---------------6.3---------------------------------------
        // function twoSum(int, target) {
        //     const intMap = new Map();
        //     const result = []; 
        //     for (let i = 0; i < int.length; i++) {
        //       const complement = target - int[i];
        //       if (intMap.has(complement)) {
        //         result.push([complement, int[i]]); 
        //       }
        //       intMap.set(int[i], i);
        //     }
        //     return result;
        //   }
        
        //   console.log(twoSum([1,5,3,9,11,1,15],12))




//---------------7---------------------------------------------
//Write a function that takes an array of integers and returns the maximum sum of adjacent elements in the array.
//Գրեք ֆունկցիա, որը վերցնում է ամբողջ թվերի զանգված և վերադարձնում զանգվածի հարակից տարրերի առավելագույն գումարը:
//[1,6,7,2,10] =>13
    //---------------7.1---------------------------------------
        // function maxAdjacentSum(arr) {
        //     let maxSum = arr[0] + arr[1];
        //     for (let i = 1; i < arr.length - 1; i++) {
        //       if (arr[i] + arr[i + 1] > maxSum) {
        //         maxSum = arr[i] + arr[i + 1];
        //       }
        //     }
        //     return maxSum;
        //   }
        
        //   console.log(maxAdjacentSum([1,6,7,2,10]));
    //---------------7.2---------------------------------------





//---------------8---------------------------------------------
//Reversing a string: Write a function that takes a string as input and returns a new string
// with the characters in reverse order, example "hello" =>> "olleh"
//Գրեք ֆունկցիա, որն ընդունում է տողը որպես մուտք և վերադարձնում է նոր տող՝ հակառակ հերթականությամբ նիշերով,
//օրինակ՝ «hello» =>> «olleh»
    //---------------8.1---------------------------------------
        // function reverseString(s) {
        //     return s.split("").reverse().join("");
        //   }
        
        //   let myString = "hello";
        //   let reversedString = reverseString(myString);
        //   console.log(reversedString); // Output: "olleh"
        
    //---------------8.2---------------------------------------
        // function reverseString(str) {
        //     let result = "";
        //     for(let i = str.length; i>=0; i--){
        //         result += str[i];
        //     };
        //     return result;
        // };
        
        // console.log(reverseString("hello")); // Output: "olleh"



//---------------9---------------------------------------------
//Finding the first non-repeating character in a string: Write a function that takes a string
// as input and returns the first non-repeating character in the string, example "aadbccb" ==> d,
// because d is the first non-repeating character
//Գտնել տողի առաջին չկրկնվող նիշը. Գրեք մի ֆունկցիա, որն ընդունում է տողը որպես մուտք և 
///վերադարձնում է տողի առաջին չկրկնվող նիշը, օրինակ «aadbccb» ==> d, 
//քանի որ d-ն առաջին չկրկնվող նիշն է:
    //---------------9.1---------------------------------------
    // function firstNonRepeatingCharacter(s) {
    //     let charCount = {};
        
    //     for (let char of s) {
    //       if (char in charCount) {
    //         charCount[char] += 1;
    //       } else {
    //         charCount[char] = 1;
    //       }
    //     }
    //     for (let char of s) {
    //       if (charCount[char] === 1) {
    //         return char;
    //       }
    //     }
    //     return null;
    //   }
      
    //   let myString = "aadbccbv";
    //   let result = firstNonRepeatingCharacter(myString);
    //   console.log(result); // Output: "d"

    //---------------9.2---------------------------------------
    //   function firstNonRepeatingCharacter(s) {
    //     const charCount = new Map();
        
    //     // Count the frequency of each character in the string
    //     for (const char of s) {
    //       charCount.set(char, (charCount.get(char) || 0) + 1);
    //     }
        
    //     // Find the first non-repeating character in the string
    //     for (const char of s) {
    //       if (charCount.get(char) === 1) {
    //         return char;
    //       }
    //     }
        
    //     // If there are no non-repeating characters, return null
    //     return null;
    //   }
            
    //         let myString = "aadbccbv";
    //         let result = firstNonRepeatingCharacter(myString);
      
    //   console.log(result);
    
    //---------------9.3---------------------------------------
    // function nonRep(str){  
    //     for(let i = 0; i < str.length; i++){
    //       if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
    //         return str[i];
    //       }
    //     }
    //   }
    //   console.log(nonRep("aadbccb"));




//---------------10---------------------------------------------
//FizzBuzz: Write a program that prints the numbers from 1 to 100. But for multiples 
//of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
//For numbers that are multiples of both three and five print "FizzBuzz".
//Hackerrank link https://www.hackerrank.com/challenges/fizzbuzz/problem
//FizzBuzz. Գրեք ծրագիր, որը տպում է 1-ից մինչև 100 թվերը: Բայց երեքի բազմապատիկի դեպքում 
//թվի փոխարեն տպեք «Fizz», իսկ հինգի բազմապատիկի համար տպեք «Buzz»: 
//Երեքի և հինգի բազմապատիկ թվերի համար տպեք «FizzBuzz»:

    //---------------10.1---------------------------------------
    // for (let i = 1; i <= 100; i++) {
    //     if (i % 15 === 0) {
    //       console.log("FizzBuzz");
    //     } else if (i % 3 === 0) {
    //       console.log("Fizz");
    //     } else if (i % 5 === 0) {
    //       console.log("Buzz");
    //     } else {
    //       console.log(i);
    //     }
    //   }
    //---------------10.2---------------------------------------





//---------------11---------------------------------------------
//Palindrome: Write a program that takes a string as input and returns true if it is a palindrome 
//and false otherwise. example, racecar <> racecar = palindrome, hello <> olleh not a palindrome 
//Palindrome. Գրեք ծրագիր, որն ընդունում է տողը որպես մուտքագրում և վերադարձնում է true, 
//եթե այն palindrome է, իսկ հակառակ դեպքում՝ false: օրինակ, racecar <> racecar = palindrome, 
//բարև <> olleh ոչ թե palindrome
    //---------------11.1---------------------------------------
    // function isPalindrome(str) {
    //     return str === str.split('').reverse().join('');
    //   }
      
    //   console.log(isPalindrome('racecar')); // true
    //   console.log(isPalindrome('hello'));   // false

    
    //---------------11.2---------------------------------------
    // function isPalindrome(str) {
    //     for(let i=0; i<Math.floor(str.length/2); i++){
    //         if (str[i].toLowerCase() !== str[str.length-i-1].toLowerCase()){
    //            return false; 
    //         }
    //     };
    //     return true;
    //   }
      
    //   console.log(isPalindrome('racecar')); // true

    //---------------11.3---------------------------------------
    // function isPalindrome(str) {
    //     // Convert string to lowercase and remove non-alphanumeric characters
    //     str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    //     // Loop through string from both ends and compare characters
    //     for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    //     if (str[i] !== str[j]) {
    //         return false; // Not a palindrome
    //     }
    //     }
    
    //     return true; // Palindrome
    // }
    
    // // Example usage:
    // console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
    // console.log(isPalindrome("race a car")); // false



//---------------12---------------------------------------------
//write a function which counts vowels(Գրիր ֆունկցիա, որը հաշվում է ձայնավորները)
//example: "hello" == 2 ( e , o)
    //---------------12.1---------------------------------------
    // function countVowels(str) {
    //     const vowels = ['a', 'e', 'i', 'o', 'u'];
    //     const strVowels = [];
    //     let count = 0;
      
      
    //     for (let i = 0; i < str.length; i++) {
    //       if (vowels.includes(str[i].toLowerCase())) {
    //        strVowels.push(str[i])
    //         count++;
    //       }
    //     }
      
    //     return [count,strVowels];
    //   }
      
    //   console.log(countVowels('hello')); // Output: [ 2, [ 'e', 'o' ] ]
    //   console.log(countVowels('JavaScript')); // Output: [ 3, [ 'a', 'a', 'i' ] ]
    
    //---------------12.2---------------------------------------






//---------------13---------------------------------------------
//write a function that checks if 2 arrays are equal
//example [1,2,3][1,2,3] true, [1,2,3], [3,1,2] false
    //---------------13.1---------------------------------------
    // function arraysEqual(arr1, arr2) {
    
    //     if (arr1.length !== arr2.length) return false;
      
    //     for (let i = 0; i < arr1.length; ++i) {
    //       if (arr1[i] !== arr2[i]) return false;
    //     }
    //     return true;
    //   }
      
    //   console.log(arraysEqual([1,2,3], [1,2,3]));
    //   console.log(arraysEqual([1,2,3], [3,1,2]));
    // //---------------13.2---------------------------------------


//---------------14---------------------------------------------
    // write a function to generate a matrix in the following format
    // [[1,2,3],[4,5,6],[7,8,9]]
    //  by giving parameters for rows and columns
    // example
    // function genMatix(3,4) 
    // [[1,2,3], [4,5,6],[7,8,9],[10,11,12]] 3 rows and 4 columns

    //---------------14.1---------------------------------------
    // function genMatrix(cols, rows) {
    //     let matrix = [];
    //     let count = 1;
      
    //     for (let i = 0; i < rows; i++) {
    //       let row = [];
    //       for (let j = 0; j < cols; j++) {
    //         row.push(count);
    //         count++;
    //       }
    //       matrix.push(row);
    //     }
      
    //     return matrix;
    //   }
    //   console.log(genMatrix(3, 4))
    //---------------14.2---------------------------------------
    // function* genMatrix(cols, rows) {
    //     let num = 1;
    //     for (let i = 0; i < rows; i++) {
    //       let row = [];
    //       for (let j = 0; j < cols; j++) {
    //         row.push(num++);
    //       }
    //       yield row;
    //     }
    //   }
      
    //   let matrix = Array.from(genMatrix(3, 4));
    //   console.log(matrix); // Output: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ] ]

      //---------------14.3---------------------------------------
    //   function* genMatrix(cols, rows) {
    //     let num = 1;
    //     for (let i = 0; i < rows; i++) {
    //       let row = [];
    //       for (let j = 0; j < cols; j++) {
    //         row.push(num++);
    //       }
    //       yield row;
    //     }
    //   }
    //   let matrixGen = genMatrix(3, 4);
    //   for (let row of matrixGen) {
    //     console.log(row);
    //   }
    //   // Output:
    //   // [ 1, 2, 3 ]
    //   // [ 4, 5, 6 ]
    //   // [ 7, 8, 9 ]
    //   // [ 10, 11, 12 ]




//---------------15---------------------------------------------
    // Write a function to merge to sorted arrays and keep them sorted
    // [1,5,6] [ 2,4,7] => [1,2,4,5,6,7]

    // //---------------15.1---------------------------------------
    // function mergeSortedArrays(arr1, arr2) {
    //     // Combine the arrays using the concat() method
    //     const combinedArray = arr1.concat(arr2);
      
    //     // Sort the array using the sort() method
    //     combinedArray.sort((a, b) => a - b);
      
    //     return combinedArray;
    //   }
      
    //   // Example usage:
    //   const arr1 = [1, 5, 6];
    //   const arr2 = [2, 4, 7];
    //   const mergedArray = mergeSortedArrays(arr1, arr2);
      
    //   console.log(mergedArray); // Output: [1, 2, 4, 5, 6, 7]
   
    // //---------------15.2---------------------------------------
    // function mergeSortedArrays(arr1, arr2) {
    //     let result = [];
    //     let i = 0;
    //     let j = 0;
        
    //     // Loop through both arrays and add the smaller element to the result array
    //     while (i < arr1.length && j < arr2.length) {
    //       if (arr1[i] < arr2[j]) {
    //         result.push(arr1[i]);
    //         i++;
    //       } else {
    //         result.push(arr2[j]);
    //         j++;
    //       }
    //     }
        
    //     // If there are any remaining elements in the first array, add them to the result
    //     while (i < arr1.length) {
    //       result.push(arr1[i]);
    //       i++;
    //     }
        
    //     // If there are any remaining elements in the second array, add them to the result
    //     while (j < arr2.length) {
    //       result.push(arr2[j]);
    //       j++;
    //     }
        
    //     return result;
    //   }
      
    //   const arr1 = [1, 2, 5, 6];
    //   const arr2 = [2, 4, 5, 7];
    //   const mergedArray = mergeSortedArrays(arr1, arr2);
    //   console.log(mergedArray); // Output: [1, 2, 4, 5, 6, 7]

    // //---------------15.3---------------------------------------
    // const array1 = [1, 5, 6];
    // const array2 = [2, 4, 5, 7, 11];
    // function merge(arr1, arr2) {
    //     const arr = arr1.concat(arr2);
    //     const obj = {};
    //     for (let char of arr) {
    //         obj[char] = obj[char] + 1 || 1;
    //     }
    //     console.log(obj);
    //     const sort_array = [];
    //     for (let char in obj){
    //         sort_array.push(char)
    //     }
    //     console.log(sort_array);
    // }

    // merge(array1, array2)





//---------------16---------------------------------------------
    // Task: Flatten a nested array
    // Description: Write a function that takes a nested array as input and returns a flattened array. A nested array is an array that contains one or more arrays as elements.
    // Example:
    // Input: [1, [2, [3, 4], 5], 6]
    // Output: [1, 2, 3, 4, 5, 6]

    //---------------16.1---------------------------------------
    // function flattenArray(arr) {
    //     const flatArr = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         debugger
    //       if (Array.isArray(arr[i])) {
    //         flatArr.push(...flattenArray(arr[i]));
    //       } else {
    //         flatArr.push(arr[i]);
    //       }
    //     }
    //     return flatArr;
    //   }
      
    //   // Example usage:
    //   const nestedArr = [1, [2, [3, 4], 5], 6];
    //   const flatArr = flattenArray(nestedArr);
    //   console.log(flatArr); // Output: [1, 2, 3, 4, 5, 6]

    //---------------16.2---------------------------------------
    // function flattenArray(arr) {
    //   const result = [];
    //   arr.forEach((item) => {
        
    //     if (Array.isArray(item)) {
    //         debugger
    //       result.push(...flattenArray(item));
    //     } else {
    //       result.push(item);
    //     }
    //   });
    //   return result;
    // }

    // const nestedArray = [1, [2, [3, 4], 5], 6];
    // const flattenedArray = flattenArray(nestedArray);
    // console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

    //---------------16.3---------------------------------------
    // function flattenArray(arr) {
    //     const flattenedArray = [];
    //     let i = 0;
    //     while (i < arr.length) {
    //       if (Array.isArray(arr[i])) {
    //         flattenedArray.push(...flattenArray(arr[i]));
    //       } else {
    //         flattenedArray.push(arr[i]);
    //       }
    //       i++;
    //     }
    //     return flattenedArray;
    //   }
      
    //   const nestedArray = [1, [2, [3, 4], 5], 6];
    //   const flattenedArray = flattenArray(nestedArray);
    //   console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

    //---------------16.4---------------------------------------
    //   function flat(arr) {
    //     return arr.reduce(
    //         (acc, el) =>
    //             Array.isArray(el)
    //             ? [...acc, ...flat(el)]
    //             : [...acc, el]
    //         , []
    //     );
    // }
    
    
    // console.log(flat( [1, [2, [3, 4], 5], 6]))




//---------------17---------------------------------------------
    // Task: Find the intersection of two arrays
    // Description: Write a function that takes two arrays as input and returns an array containing only the elements that are common to both arrays.
    // Example:
    // Input: [1, 2, 3], [2, 3, 4]
    // Output: [2, 3]
    
    //---------------17.1---------------------------------------

    //---------------17.2---------------------------------------