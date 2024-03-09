
const feed = require('../model/feed')

const getHomePage = (req, res)=> {
 feed.find()
 .sort({created_at : -1})
 .then((result) => res.render('index', {feed: result}))
 .catch(err => console.log(err))
}


const createArticle = (req, res) => {
    const newArticle = new feed(req.body)
    newArticle.save()
    .then(() => res.redirect('/feed'))
    .catch(err => console.log(err))
  }

const getFullFeed = (req, res) => {
feed.findById(req.params.id)
.then((result) => res.render(`fullFeed`,{feed: result}))
.catch(err => console.log(err))
}

const deleteFeed = (req, res) => {
feed.findByIdAndDelete(req.params.id)
.then(() => res.redirect('/feed'))
.catch(err => console.log(err))
}

const getUpdate = (req, res) => {
  feed.findById(req.params.id)
  .then((result) => res.render('eddit', {feed: result}))
  .catch(err => console.log(err))
}

const editFeed = (req, res) => {
  feed.findByIdAndUpdate(req.params.id, req.body)
  .then((feed) => res.redirect(`/fullFeed/${feed.id}`))
  .catch(err => console.log(err))

}




module.exports = { 
    getHomePage, 
    getFullFeed,
    createArticle,
    getUpdate,
    editFeed,
    deleteFeed
    

}