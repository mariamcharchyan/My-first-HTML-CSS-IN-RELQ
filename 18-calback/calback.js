//-------------------------------------
//setTimeout-y het e kanchum myFunc-in 2000 intervalov
        // const myFunc = (number) => {
        //     console.log("number=" + number);
        // }
        // setTimeout (function(){
        //     return myFunc(2)
        // },2000)


//----------------------------------
//grel funkcia vory uni payman ev het e kanchvum//
//function callbackExample(interval, callback)  {
//  };
//callbackExample(4000, callback)
        //---orinak-1------------
        // function callbackExample(interval, callback)  {
        //     if (interval > 2000) {
        //         setTimeout(callback, interval, 'Zara');
        //     } else {
        //         setTimeout(() => {callback('Nara')}, interval);
        //     }
        // };

        // function show(name) {
        //     console.log(name);
        // }

        // callbackExample(4000, show);
        // callbackExample(1000, show);

        //---------orinak-2-------------
        // function callbackExample(interval, callback)  {
        //     setTimeout(function(){
        //         if(interval < 5000){
        //           callback("true")
        //         }else{
        //           callback("false")
        //         }
        //     }, interval)
        // };
        
        // function callback(bool){
        //     console.log(`it is ${bool}`);
        // }
        
        // callbackExample(4000, callback)


        //---------orinak-3-------------
        const myFunc = (number) => {
            if(number%2===0){
                console.log("zuyg")
            }else{
                console.log("kent")
            }
        }
        setTimeout (function(){
            return myFunc(5)
        },2000)