//---------------1---------------------------------------------
// You have a function which will get 3 inputs, total amount of water in grams, how much water 
// has already been spilled per minute shown in an array(array of integers), and how many seconds have passed
// If the water hasn't been completely spilled, estimate the rate at which the remaining water
// will be spilled
// Write a function:
// function solution(x,y,z), where x is the total water, y is the array of k length with integers of how much was spilled
// z is the time passed
// Example:
// x = 100, y = [10,6,6,8], z = 2
// x = total amount in grams
// y = first second spilled 8, second 6, third, 6, fourth, 10
// z = how many seconds have passed
// 30 grams of water was spilled (10+6+6+8)
// 70 grams remain (100-30)
// The average of the last 2 s is 7(6+8)/2
// Your function should return 10 (70/7)

// У вас есть функция, которая получит 3 входа, общее количество воды в граммах, сколько воды
// уже было пролито за минуту показанное в массиве (массив целых чисел), и сколько секунд прошло
// Если вода не была полностью пролита, оцените скорость, с которой оставшаяся вода
// будет пролит
// Напишите функцию:
// function solution(x,y,z), где x — общее количество воды, y — массив длины k с целыми числами того, сколько воды было пролито
// z - время, прошедшее
// Пример:
// х = 100, у = [10,6,6,8], г = 2
// x = общее количество в граммах
// y = первая вторая пролитая 8, вторая 6, третья, 6, четвертая, 10
// z = сколько секунд прошло
// Пролито 30 грамм воды (10+6+6+8)
// Осталось 70 грамм (100-30)
// Среднее значение за последние 2 секунды равно 7(6+8)/2.
// Ваша функция должна вернуть 10 (70/7)
    //---------------1.1---------------------------------------
    // function solution(x,y,z){
    //     let sum = y.reduce((a,b)=> a+b);
    //     let remind = x - sum;
    //     let lastNum = y.slice(y.length-z)
    //     let time =  lastNum.reduce((a,b)=>a+b)/z;
    //     let output = remind/time
    //     console.log(output)
    // }
    // solution(100,[10,6,6,8,],2)
    // solution(50, [11,3,4,5,3], 3) // 8
    // solution(10, [2,3], 2)

    //---------------1.2---------------------------------------
    // function solution(x,y,z){
    //     let sumy = 0;
    //     let sumz = 0;
    //     for (let i =0; i <y.length ; i++) {
    //         sumy += y[i];
    //         if(y.length-i<=z){
    //             sumz += y[i];
    //         }
    //     }
    //     return (x-sumy)/(sumz/z);
    // }
    // console.log(solution(100,[10,6,6,8,],2)) //10
    // console.log(solution(50, [11,3,4,5,3], 3) ) //6
    // console.log(solution(10, [2,3], 2)) //2





//---------------2---------------------------------------------
//
    //---------------2.1---------------------------------------
    //---------------2.2---------------------------------------




//---------------3---------------------------------------------
//
    //---------------3.1---------------------------------------
    //---------------3.2---------------------------------------