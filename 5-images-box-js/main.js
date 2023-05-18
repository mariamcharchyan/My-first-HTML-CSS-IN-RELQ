const toys = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05lRiDhRuQBRQD9TD8Yh1UbvTym49DQ-ntA&usqp=CAU",
        name: "Cake 1",
        price : 25
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05lRiDhRuQBRQD9TD8Yh1UbvTym49DQ-ntA&usqp=CAU",
        name: "Cake 11",
        price : 252
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05lRiDhRuQBRQD9TD8Yh1UbvTym49DQ-ntA&usqp=CAU",
        name: "Cake 10",
        price : 24
    }
]

//stexcel function vor@ uni 3 hat popokxakan parameter, name price ev img
function addProduct(name, price,img) {
    //stexcum enq 2 hat texti hamar constant
                   const name_of_toy = document.createTextNode(name);
                       const price_of_toy = document.createTextNode(price);

    //stecum enq 4 hat element, newDiv, newH2 newP ev newIMG
    const newDiv = document.createElement("div");
    const newH2 = document.createElement("h2");
    const newP = document.createElement("p");
    const newIMG = document.createElement("img");

    // //h2in ev p in avelacnum enq text@
                  newH2.appendChild(name_of_toy);
                 newP.appendChild(price_of_toy);
    // //img in src ov avelacnum enq parameter@
                 newIMG.src = img;


    //new div in petqa avelacnel, nkar, h2 ev p vorpeszi stananq 
    //<div>
    //  <img>
    //  <h2></h2>
    //  <p></p>
    //</div>
    //append child hat hat
    // newDiv.appendChild(newIMG);
    // newDiv.appendChild(newH2);
    // newDiv.appendChild(newP);

    //append bolor@ miasin
    newDiv.append(newIMG, newH2, newP);
    //talis enq style 
           newDiv.style.cssText = "padding: 15px; border: solid; width:18%; heigth: auto; display: inline-block";
    newDiv.className = "box-toys"
    //gtnum enq ayn div@ vorin uzum enq amen inch kcenq ev miacnum enq irar
    const currentDiv = document.getElementById("box-toys1");
    currentDiv.appendChild(newDiv);
}

//for loopi shnorhiv kanchum enq ays funkcian aynqan, inchqan petqa, amen angam poxancelov mer
//cakes data-i meji tvlayner@
for(let i = 0; i < toys.length; i ++){
    addProduct(toys[i].name, toys[i].price, toys[i].img)
}
