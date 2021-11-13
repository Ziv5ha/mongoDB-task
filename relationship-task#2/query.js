const mongoose = require('mongoose')
const User = require('./models/user-model')
const Post = require('./models/post-model')
const Comment = require('./models/comment-model')
require('dotenv').config()
mongoose.connect(process.env.DATABASE).then(() => {console.log('DB connected')})

async function getUsers(){
    const users = await User.find({})
    console.log(users);
    return users
}

async function getPosts(){
    const posts = await Post.find({})
    console.log(posts);
    return posts
}
async function getPostsByUser(username){
    const posts = await Post.find({username})
    console.log(posts);
    return posts
}
// getPostsByUser('ScumbagSteve')

async function getComments(){
    const comments = await Comment.find({})
    console.log(comments);
    return comments
}
// getComments()
async function getCommentsByUser(username){
    const comments = await Comment.find({username})
    console.log(comments);
    return comments
}
// getCommentsByUser('ScumbagSteve')
async function getCommentsForPost(title){
    const post = await Post.findOne({title})
    console.log(post._id.toString());
    const comments = await Comment.find({post: post._id.toString()})
    console.log(comments);
    return comments
}
getCommentsForPost('Reports a bug in your code')
