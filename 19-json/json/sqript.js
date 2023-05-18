const h1 = document.getElementById("text")

fetch("http://localhost:3000/fact")
.then(function (response){
    return response.json()
}).then(function (data){
    h1.textContent = data.test
    console.log(data)
})