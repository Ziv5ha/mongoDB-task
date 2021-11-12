const mongoose = require('mongoose')
const questionSchema = new mongoose.Schema(
    {
        title: {type: String, required: true}, 
        answers : {type: Array, required: true},
        correctAnswer : {type: String, required: true},
        difficulty :  {type: Number, required: true},
    }
)

module.exports = mongoose.model('Question', questionSchema)