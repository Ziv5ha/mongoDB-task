const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema(
    {
        username: String, 
        comment : String,
        post : String,
    }
)

module.exports = mongoose.model('Comment', commentSchema)