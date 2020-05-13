const {prompt} = require('inquirer')
const {getUser} = require('../develop/utils/api.js')
const list = ['Project title', 'Description','Table of contents','Installation','Usage','License', 'Contributing', 'Tests','Questions']
const questions = []

list.forEach(item =>
{
    questions.push({
        type: 'input',
        name: item,
        message: item
    })
})

function writeToFile(fileName, data) {

   data.then(({data}) => {})

   prompt(questions)
   .then(resp => console.log(resp))
}

function init() {
    prompt({
        type: 'input',
        name: 'username',
        message: 'What is your username? '
    })
    .then(({username}) => {
      writeToFile('Readme.md',getUser(username)) 
    })
    .catch(err => console.log(err))
}

init();
