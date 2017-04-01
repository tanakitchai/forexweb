var express = require('express')
var app = express()
app.use(express.static('public'))
app.engine('html', require('ejs').renderFile)

app.listen(3000)

app.get('/',showIndex)
app.get('/broker',showBroker)
app.get('/couser',showCouser)
app.get('/products',showProducts)

function showIndex(req,res) {
    res.render('index.html')
} 

function showBroker(req,res) {
    res.render('broker.html')
} 

function showCouser(req,res) {
    res.render('couser.html')
} 

function showProducts(req,res) {
    res.render('products.html')
} 