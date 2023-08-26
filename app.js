const express = require('express')
const app = express()
const db = require('./db/connection')

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`O express está rodando na porta ${PORT}`)
})

//db connection 
db
.authenticate()
.then(()=>{
    console.log('conectou')
})
.catch(err =>{
    console.log('erro: ', err)
})





//routes
app.get('/', (req,res)=>{
    res.send("olá mundo")
})