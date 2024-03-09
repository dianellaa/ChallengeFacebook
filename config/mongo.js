// somethingyouaretofreeforlive
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://diananas:somethingyouaretofreeforlive@cluster0.rfadzxp.mongodb.net/challeng ')
.then(() => console.log(`DB is connectd`))
.catch(err => console.log(err))