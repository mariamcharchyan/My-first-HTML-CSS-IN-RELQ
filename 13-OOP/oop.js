//-------------varj-1------------------------------------------------
    // class Car {
    //     constructor(model,price, color){
    //         this.model = model
    //         this.price = price
    //         this.color = color
    //     }
    //     show_details(){
    //         console.log("price: " + this.price, "model: " + this.model, "color: " + this.color)
    //     }
    // }

    // class Electric extends Car{
    //     show_battery(num){
    //         console.log("battery is: " + num)
    //     }
    // }

    // const jorj_car = new Car("Volvo", 5000, "red")
    // jorj_car.show_details()

    // const lina_car = new Car("BMW", 3000, "green")
    // lina_car.show_details()
    // const bob_car = new Electric("Tesla", 10000, "white")
    // bob_car.show_details()
    // bob_car.show_battery(90)

//-------------varj-2------------------------------------------------
    // class Print{
    //     log (num){
    //         console.log(num*2)
    //     }
    // }
    // const my_console=new Print()
    // my_console.log(6)


//-------------varj-3------------------------------------------------
    // class A{
    //     area(x,y){
    //         console.log(x*y);
    //     }
    // }
    // class B extends A{
    //     area(a,b){
    //         super.area(a,b);
    //         console.log("class B");
    //     }
    // }
    // const test1 = new A();
    // test1.area(5,7);
    // const test2 = new B();
    // test2.area(4,6);



//------------arajadranq-1------------------------------------------------
// Grel 2 funkcia, arajin funkcian petq e stanana 2 tiv ev veradardzni iranc mnacord@
// erkrord funkcian petq e arajin funkciai veradardzrac arjeq@ sarqi qarakusi ev noric veradardzni
        //------------1-tarberak-
        // function remainder(x, y) {
        //     return x % y;
        // }
        // console.log(remainder(8,3))
        // function squareAndReturn(x, y) {
        //     return Math.pow(remainder(x, y), 2);
        // }
        // console.log(squareAndReturn(8,3))

        //---------------2-tarberak
        // function module(a,b){
        //     return a%b
        // }
        
        // function square (res) {
        //     return Math.pow(res,2)
        // }
        // let res = module(15,6)
        // console.log(res)
        // console.log(square(res))

        // ---------------3-tarberak
        // function remainder(num1, num2) {
        //     const rem = num1 % num2;
        //     return square(rem);
        //  }
        //  function square(num) {
        //     return num ** 2;
        //  }
        // console.log(remainder(7, 5));


//------------arajadranq-2------------------------------------------------
// Stexcel class Animal anunov, ayn petqa e unena constructorum name: type: age: sound:. 
// Animal-in tal 2 method, make_sound ev show_info. make_sound method@ petq e stana sound@, ev tpi mi text,
//  orinak "this animal's sound is " + sound
// show_info method@ petq e uxxaki veradardzni amboxj informacian kendanu masin
// stexcel 3 hat tarber kendani ays class-ov
        //------------1-tarberak-
        // class animal {
        //     constructor(name, type, age, sound) {
        //     this.age = age;
        //     this.type = type;
        //     this.sound = sound;
        //     this.name = name;
        //     }
        // }
        
        // animal.prototype.stexcir_dzayn = function () {
        //     console.log(this.sound);
        // };
        
        // animal.prototype.show_info = function () {
        //     console.log(`Name: ${this.name}`);
        //     console.log(`Type: ${this.type}`);
        //     console.log(`Age: ${this.age}`);
        // };
        
        // const dog = new animal("Dog", "Canine", 5, "Haff");
        // const cat = new animal("Cat", "Feline", 3, "Myaauu");
        // const bird = new animal("Bird", "Avian", 2, "Chikchirik");
        
        // dog.stexcir_dzayn();
        // dog.show_info();
        // cat.stexcir_dzayn();
        // cat.show_info();
        // bird.stexcir_dzayn();
        // bird.show_info();

        //---------------2-tarberak
        // class Animal {
        //     constructor(name,type,age,sound){
        //         this.name = name
        //         this.type = type
        //         this.age = age
        //         this.sound = sound        
        //     }
        //     make_sound() {
        //         return 'This animal sound is ' + this.sound
        //     }
        //     show_info() {
        //        return name - ${this.name}\ntype - ${this.type}\nage - ${this.age}\nsound - ${this.sound};
        //     }
        // }
        
        // let my_animal = new Animal("Lady","Husky",5,"barking")
        // console.log(my_animal.show_info())
        // console.log(my_animal.make_sound())
        // let horse = new Animal("Maria","Arabian horse",2,"snorting")
        // console.log(horse.show_info())
        // console.log(horse.make_sound())
        // let snake = new Animal("Mia","Cobra",1,"hissing")
        // console.log(snake.show_info())
        // console.log(snake.make_sound())

//------------arajadranq-3------------------------------------------------
// Hishum eq indexOf method@? Menq mer indexOf method@ petq e stexcenq. 
// Stexcel class Relq_array anunov, ev mtaceq, inch karox eq anel, vorpeszi Relq_array class@ unena mek hat method indexOf anunov,
//  ev ani ayn funkcian inch@ iskakan indexOf-na anum
        //---------------1-tarberak
        // class Relq_array {
        //     constructor(value) {
        //     this.value = value
        //     }
        
        //     findIndex(elem) {
        //     for (let i = 0; i < this.value.length; i++) {
        //         if (this.value[i] === elem) {
        //         return i
        //         }
        //     }
        //     return -1
        //     }
        // }
        
        // const myArray = new Relq_array([16,4,8,1,0,3])
        // console.log(myArray.findIndex(3))


        //---------------2-tarberak
        // class RelqArray {
        //     constructor(array) {
        //       this.array = array;
        //     }
        //   }
        //   RelqArray.prototype.indexOf = function (el) {
        //     for (i = 0; i < this.array.length; i++) {
        //       if (this.array[i] == el) {
        //         return i;
        //       }
        //     }
        //   };
        //   const arr1 = new RelqArray(["a", "b", "c", "d"]);
        //   console.log(arr1.indexOf("d"));



//------------arajadranq-4------------------------------------------------
// Stexcel Dog class vor@ kjarangi Animal class@,
//  Dog class@ petqa unena ir method@ command anunov,
//   vor@ uxxaki console log kani ayd methodin poxancvac text@. 
//   Nayev Dog class@ petqa unena make_sound method@, 
//   vor@ polymorphismov stanuma Animal classic, 
//   ev nayev baci ira funkcionalic vor@ trvaca Animal classum tpi "dog's usually bark" text@



//------------arajadranq-5------------------------------------------------
// Duq petq e stexceq ashxatanqi vayri hamar database
// ashxatanqi texum kan mardik, iranq karox en linen manager, kam boss, kam developer
// amen mek@ karoxa unena ashxatavardz, anun ,tariq, guce menak mi tesaki mard karoxa ani konkret gorcoxutyun
// porceq design aneq ays amen@ ev greq OOP style-ov
/////ete uzum eq, gteq incha getter ev setter, ev ogtagorceq, partadir chi
        class ashxatoxner {
            constructor(anun,tariq, ashx){
                this.anun = anun
                this.tariq = tariq
                this.ashx = ashx
            }
            show_details(){
                console.log("anun: " + this.anun, "tariq: " + this.tariq, "ashx: " + this.ashx)
            }
        }

        class Other extends ashxatoxner{
            show_other(education){
                console.log("education is: " + education)
            }
        }

        const manager = new ashxatoxner("Jorj", 40, "500$")
        manager.show_details()

        const boss = new ashxatoxner("Meri", 35, "800$")
        boss.show_details()

        const developer = new Other("Daniel", 40, "500$")
        developer.show_details()
        developer.show_other("Higher Education")