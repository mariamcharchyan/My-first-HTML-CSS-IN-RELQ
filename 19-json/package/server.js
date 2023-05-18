const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors());
const port = 3000
const fact = [
    {
        id: 1,
        test: 'some fact'
    },
    {
        id: 2,
        test: 'other fact'
    },
    {
        id: 3,
        test: 'third fact'
    }
]

console.log(fact[2]);

app.get('/', (req, res) => {
  res.send('Helo world!')
})

app.get('/fact',(req,res)=>{
    const num = Math.floor(Math.random()*fact.length);
    res.json(fact[num]);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})