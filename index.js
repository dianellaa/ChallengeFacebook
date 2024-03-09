const express = require('express')
const app = express()
require('./config/mongo')      
const routes = require('./config/routes')        
const feed = require('./model/feed')


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))












app.use(routes)
let port = 5000
app.listen(port, console.log(`app is on ${port}`))
