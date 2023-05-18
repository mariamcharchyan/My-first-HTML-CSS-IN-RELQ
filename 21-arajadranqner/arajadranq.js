//-1-//duq uneq array
// const myArr = [1,6,7,2,10,16,26]

    //-1.1-//ogtagorceq map vorpeszi nor array stanaq [2,12,14,4,20,32,52] arjeqnerov
            // const myArr = [1,6,7,2,10,16,26]
            // newArr=myArr.map(function(value){
            //     return value*2;
            // })
            // console.log(newArr);//[ 2, 12, 14, 4, 20, 32, 52]

    //-1.2-//ogtagorceq reduce ev staceq 1+6+7+2+10+16+26 = 68
            // const myArr = [1,6,7,2,10,16,26]
            // newArr=myArr.reduce(function(a,b){
            //     return a+b;
            // },0)
            // console.log(newArr);//68

    //-1.3-//ogtagorceq includes vorpeszi stugeq ardyoq arrayi mej ka 15,10, kam 98
            // const myArr = [1,6,7,2,10,16,26]
            // console.log(myArr.includes(15)); // false
            // console.log(myArr.includes(10)); // true
            // console.log(myArr.includes(98)); // false





//-2-//duq uneq object
    // const data = {
    //     name: "John",
    //     surname: "Doe",
    //     age: 67
    // }

    //-2.1-//ogtagorceq JSON.stringify() vorpesszi ays object sarqeq json formatov
            // const data = {
            //     name: "John",
            //     surname: "Doe",
            //     age: 67
            // }
            // const json = JSON.stringify(data);
            // console.log(json); // {"name":"John","surname":"Doe","age":67}

    //-2.2-//ogtagorceq Object.keys vorpesszi veradardzneq bolor banaliner@
            // const data = {
            //     name: "John",
            //     surname: "Doe",
            //     age: 67
            // }
            // const keys = Object.keys(data);
            // console.log(keys); // [ 'name', 'surname', 'age' ]

    //-2.3-//porceq avelacnel vor banali/arjeq objecti mej status: "married" arjeqov
            // const data = {
            //     name: "John",
            //     surname: "Doe",
            //     age: 67
            // }
            // data.status="married"; //kam data["status"] = "married";
            // console.log(data); // { name: 'John', surname: 'Doe', age: 67, status: 'married' }





//-3-//duq uneq class` class Employee{}

    //-3.1-//haytarareq constructor classum vor@ kunena name, position ev salary popoxakanner
            // class Employee {
            //     constructor(name, position, salary) {
            //     this.name = name;
            //     this.position = position;
            //     this.salary = salary;
            //     }
            // }

    //-3.2-//stexceq method showSalary arjeqov vor@ return kani ashxatoxi anun@ ev ira ashxatavardz@
            // class Employee {
            //     constructor(name, position, salary) {
            //         this.name = name;
            //         this.position = position;
            //         this.salary = salary;
            //     }
            //     showSalary() {
            //         return `${this.name}'s salary is ${this.salary}`;
            //     }
            // }
            // const myEmployee = new Employee('John', 'Developer', 80000);
            // console.log(myEmployee);
            // console.log(myEmployee.showSalary());
    //-3.3-//stexceq method vor@ kbardzracni ashxatoxi ashxatavardz@ 10 tokosov
            // class Employee {
            //     constructor(name, position, salary) {
            //     this.name = name;
            //     this.position = position;
            //     this.salary = salary;
            //     }
            //     increaseSalary() {
            //     this.salary = this.salary * 1.1;
            //     }
            // }
            // const myEmployee = new Employee('John', 'Developer', 80000);
            // myEmployee.increaseSalary();
            // console.log(myEmployee.salary);

    //-3.4-//stexceq 2 hat tarber ashxatov Employee classic
            // const myEmployee2 = new Employee('Mari', 'Developer', 66000);
            // const myEmployee3 = new Employee('Ani', 'Developer', 50000);


            class Employee {
                constructor(name, position, salary) {
                  this.name = name;
                  this.position = position;
                  this.salary = salary;
                }
                showSalary() {
                  return `${this.name}'s salary is ${this.salary}`
                }
                increaseSalary(percent) {
                  return (this.salary * percent) / 100 + this.salary
                }
              }
              
              const employee1 = new Employee('Lilit', 'manager', 200000);
              console.log(employee1);
              console.log(employee1.showSalary());
              const employee2 = new Employee('Artyom', 'developer', 300000);
              console.log(employee2);
              console.log(employee2.increaseSalary(20));