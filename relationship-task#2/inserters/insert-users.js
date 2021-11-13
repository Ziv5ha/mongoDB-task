const rawData = [
    {
        username : 'GoodGuyGreg',
        first_name : "Good Guy",
        last_name : "Greg"
    },
    {
        username : 'ScumbagSteve',
        full_name :{
            first : "Scumbag",
            last : "Steve"
        }
    }
]

const mongoose = require('mongoose')
const User = require('../models/user-model')
require('dotenv').config()
mongoose.connect(process.env.DATABASE).then(() => {console.log('DB connected')})

function refineUsersData(rawData){
    return rawData.map( user => {
        if (user.full_name){
            user.first_name = user.full_name.first
            user.last_name = user.full_name.last
            delete user.full_name
        }
        return user
    })
}

User.insertMany(refineUsersData(rawData))
    .then(function(){
        console.log("Data inserted")  // Success
    }).catch(function(error){
        console.log(error)      // Failure
    });