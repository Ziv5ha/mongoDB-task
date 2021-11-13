const rawData = [
    {
        username : 'GoodGuyGreg',
        title : 'Passes out at party',
        body : 'Wakes up early and cleans house'
    },
    {
        username : 'GoodGuyGreg',
        title : 'Steals your identity',
        body : 'Raises your credit score'
    },
    {
        username : 'GoodGuyGreg',
        title : 'Reports a bug in your code',
        body : 'Sends you a Pull Request'
    },
    {
        username : 'ScumbagSteve',
        title : 'Borrows something',
        body : 'Sells it'
    },
    {
        username : 'ScumbagSteve',
        title : 'Borrows everything',
        body : 'The end'
    },
    {
        username : 'ScumbagSteve',
        title : 'Forks your repo on github',
        body : 'Sets to private'
    }
]

const mongoose = require('mongoose')
const Post = require('../models/post-model')
require('dotenv').config()
mongoose.connect(process.env.DATABASE).then(() => {console.log('DB connected')})

Post.insertMany(rawData)
    .then(function(){
        console.log("Data inserted")  // Success
    }).catch(function(error){
        console.log(error)      // Failure
    });