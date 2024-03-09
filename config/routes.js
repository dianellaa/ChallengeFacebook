const express = require('express')
const routes = express.Router()
const feedFun = require('../controller/postController')


routes.get('/feed', feedFun.getHomePage)

routes.post('/feed', feedFun.createArticle)
routes.get('/fullFeed/:id', feedFun.getFullFeed)

routes.post('/delete-feed/:id', feedFun.deleteFeed)
routes.get('/editFeed/:id', feedFun.getUpdate)
routes.post('/edit-feed/:id', feedFun.editFeed)

module.exports = routes 