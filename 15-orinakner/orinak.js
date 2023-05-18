//--1--// # _ in OOP
//--2--// getter/setter in OOP
//--3--// private/public in OOP
//--4--// pure function/side effects
//--5--// async await
//--6--// try catch
//--7--// setTimeout/setInterval

//--1--// orinak
        // class User {
        //     constructor(name) {
        //     this._name = name;
        //     }
        
        //     get name() {
        //     return this._name;
        //     }
        
        //     set name(value) {
        //     this._name = value;
        //     }
        
        //     _privateMethod() {
        //     console.log(`This is a private method for ${this._name}`);
        //     }
        // }
        
        // const user = new User("John");
        // console.log(user.name); // Output: John
        // user.name = "Jane";
        // console.log(user.name); // Output: Jane
        // user._privateMethod(); // Output: This is a private method for Jane

        //Սա JavaScript դասի սահմանման օրինակ է «Օգտվող» օբյեկտի համար: Այն ունի կոնստրուկտոր, որը սահմանում է օգտագործողի անունը: Այն նաև ունի ստացող և կարգավորիչ անվան հատկության համար, որը թույլ է տալիս մուտք գործել և փոխել մասնավոր «_name» հատկության արժեքը: Գոյություն ունի նաև «_privateMethod» մասնավոր մեթոդ, որը դուրս է բերում «_name» արժեքը: Երբ դուք ստեղծում եք User դասի օրինակ և վերագրում այն «user» հաստատունին, կարող եք օգտագործել ստացողը անունը մուտք գործելու համար և անունը սահմանել սեթերի միջոցով: Կարող եք նաև մուտք գործել մասնավոր մեթոդ, թեև դա խորհուրդ չի տրվում, քանի որ այն նշված է որպես մասնավոր:


//--2--//_____________________________________________________________________________
        // class Example {
        //     constructor(value) {
        //         this._value = value;
        //     }

        //     get value() {
        //         return this._value;
        //     }

        //     set value(newValue) {
        //         this._value = newValue;
        //     }
        // }

        // const example = new Example(10);
        // console.log(example.value); // Output: 10
        // example.value = 20;
        // console.log(example.value); // Output: 20

