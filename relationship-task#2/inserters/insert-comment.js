const rawData = [
    {
        username : 'GoodGuyGreg',
        comment : 'Hope you got a good deal!',
        post: 'Borrows something'
    },
    {
        username : 'GoodGuyGreg',
        comment : "What's mine is yours!",
        post: 'Borrows everything'
    },
    {
        username : 'GoodGuyGreg',
        comment : "Don't violate the licensing agreement!",
        post: 'Forks your repo on github'

    },
    {
        username : 'ScumbagSteve',
        comment : "It still isn't clean",
        post: 'Passes out at party'
    },
    {
        username : 'ScumbagSteve',
        comment : 'Denied your PR cause I found a hack',
        post: 'Reports a bug in your code'
    }
]

const mongoose = require('mongoose')
const Comment = require('../models/comment-model')
const Post = require('../models/post-model')
require('dotenv').config()
mongoose.connect(process.env.DATABASE).then(() => {console.log('DB connected')})

async function processDataAndUpload(rawData){
    rawData.map(async comment => {
        const post = await Post.findOne({title: comment.post})
        comment.post =  post._id.toString()
        const commentData = new Comment({
            username: comment.username,
            comment : comment.comment,
            post : comment.post,
        })
        await commentData.save()
        console.log(`saved ${commentData}`);
    })
}
processDataAndUpload(rawData)


// Comment.insertMany(data)
//     .then(function(){
//         console.log("Data inserted")  // Success
//     }).catch(function(error){
//         console.log(error)      // Failure
//     });