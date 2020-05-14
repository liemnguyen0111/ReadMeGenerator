const {getUser} = require('../develop/utils/api.js')
const generateMarkdown = require('../develop/utils/generateMarkdown.js')
const {prompt} = require('inquirer')
const {appendFile, writeFile} = require('fs')
const {promisify} = require('util')
const appendFileSync = promisify(appendFile)
const writeFileSync = promisify(writeFile)

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

function writeToFile(fileName, userInfo) {

  userInfo.then(({data}) => {

    writeFileSync(fileName,'', function(err){
        if(err)
        console.log(err)
    })
    .then(() =>{
     prompt(questions)
    .then(resp => {
        appendFileSync(fileName,"# Profile:")
        appendFileSync(fileName,`![profile Image](${data.avatar_url})`)
        appendFileSync(fileName,`Name: ${data.name}`)
        console.log(data)
       for(const key in resp)
       {
            appendFileSync(fileName,generateMarkdown(key))
            appendFileSync(fileName,resp[key])
            console.log(key)
            console.log(resp[key])
       }
   })})

})
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
