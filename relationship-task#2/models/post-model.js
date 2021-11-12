const mongoose = require('mongoose')
const postSchema = new mongoose.Schema(
    {
        username: String, 
        title : String,
        body : String,
    }
)

module.exports = mongoose.model('Post', postSchema)