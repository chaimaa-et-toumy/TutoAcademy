const express = require('express')

const app = express()


// middleware
app.use(express.json())
app.use(express.urlencoded({extend: true}))

// set the view engine to ejs
app.set('views','./view');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


// routers
const router = require('./routes/articleRouter.js')
app.use('/api/articles',router)


const routerCategorie = require('./routes/categorieRouter.js')
app.use('/api/categories',routerCategorie)



//testing api 
app.get("/",(req,res) => {
    res.render('index')
})
app.get("/Developpement",(req,res) => {
    res.render('Developpement')
})
app.get("/Design",(req,res) => {
    res.render('Design')
})
app.get("/Music",(req,res) => {
    res.render('Music')
})
app.get("/Marketing",(req,res) => {
    res.render('Marketing')
})
app.get("/Photography",(req,res) => {
    res.render('Photography')
})
app.get("/Business",(req,res) => {
    res.render('Business')
})

// port

const PORT = process.env.PORT || 8080

// server

app.listen(PORT, ()=> {
    console.log('server is running port' + PORT)
})