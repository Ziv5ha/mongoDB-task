const mongoose = require('mongoose')
const Student = require('./student-schema')
require('dotenv').config()
mongoose.connect(process.env.DATABASE).then(() => {console.log('DB connected')})

async function gellAllStudets(){
    const students = await Student.find({})
    return students
}

async function getStudentsWithName(name){
    const students = await Student.find({name})
    return students
}

async function getStudentsWithcourse(course, gender){
    const studentsWithCourse = []
    const students = await Student.find({})
    students.forEach( student => {
        if (student.courses.incluses(course)){
            if (gender) {
                if (student.gender === gender) studentsWithCourse.push(student)
            } else {
                studentsWithCourse.push(student)
            }
        }
    })
    return studentsWithCourse
}

async function getStudentsByBirth(birthStr){
    const birth = new Date(birthStr)
    const studentsByBirth = await Student.find({birth})
    return studentsByBirth
}

async function getStudentsByPhone(query){
    const studentsFound = []
    const students = await Student.find({})
    students.forEach(student => {
        if (student.phone.startsWith(query)) studentsFound.push(student)
    })
    return studentsFound
}