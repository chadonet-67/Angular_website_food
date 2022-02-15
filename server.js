const express = require('express');
const path = require('path')
const app = express();

app.use(express.static('./dist/food'));

app.get('/*',(req,res)=>{
    res.sendFile('index.html',{root:'dist/food'})
})

app.listen(process.env.PORT || 3000);