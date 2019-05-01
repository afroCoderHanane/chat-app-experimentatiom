//Step 1:use npm init --yes
//Step 2:use npm install -s express
//Step 3:create a varibale express
var express= require('express')
var app= express()//create an html
app.use(express.static(__dirname))// serving  a static file 
var server = app.listen(8080,()=>{
console.log('server is listening on port ',server.address().port)//set a callback
})