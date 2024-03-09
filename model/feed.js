const mongoose = require('mongoose')
const schema =   mongoose.Schema
const moment = require('moment')

const feedSchema = new schema({
    name: {
        type: String,
        require: true,
         maxlength: 15,
    },
    text: {
         type: String,
         require: true,
         maxlength: 40,
    },
    created_at: {
        type: Date,
        default: Date.now,
        get: function(createdAt){
            return moment(createdAt).format('L');
        }
    }

}, {timestamps: true})

module.exports = mongoose.model('feed', feedSchema)


