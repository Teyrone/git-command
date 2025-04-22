const express = require('express')

const port = process.env.PORT || 3001
const app = express()

app.get('/', (req,res) =>{

    console.log('New Feature')
})

app.listen (port, ()=> {

    console.log( `Listen está on PAPAI!!!! na porta: ${port}`)


})