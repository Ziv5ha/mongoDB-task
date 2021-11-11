const mongoose = require('mongoose')
const Student = require('./student-model')
require('dotenv').config()
mongoose.connect(process.env.DATABASE).then(() => {console.log('DB connected')})

// Query/ Find
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

// Update
async function addCousesToStudents(studentNames, courses){
    try {
        studentNames.forEach( name => {
            Student.updateOne({ name }, { $addToSet: { courses } })
        })
    } catch (error) {
        console.log(error)
    }
}

async function addCousesToStudents(name, birthStr){
    try {
        const borth = new Date(birthStr)
        Student.updateOne({ name }, { birth })
    } catch (error) {
        console.log(error)
    }
}

// Text search
async function getStudentsWithFirstNameQuery(str){
    const studentsFound = []
    const students = await Student.find({})
    students.forEach(student => {
        if (student.name.indludes(str)) studentsFound.push(student)
    })
    return studentsFound
}
async function getStudentsWithLastNameQuery(strArr){
    const studentsFound = []
    const students = await Student.find({})
    students.forEach(student => {
        strArr.array.forEach(str => {
            if (student.surName .indludes(str)) {
                studentsFound.push(student)
            }
        })
    })
    return studentsFound
}

// Delete
function deleteStudentsWithName(name){
    Student.findOneAndDelete({name})
}

async function deleteStudentsByBirth(birthStr){
    const birth = new Date(birthStr)
    Student.findOneAndDelete({birth})
}