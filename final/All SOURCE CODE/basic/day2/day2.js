/********************************************************************************************/
/***************************************** Readline module  ****************************************/
/********************************************************************************************/


// const readline = require('readline')
// const fs = require('fs')

// const myInterface = readline.createInterface({
//     input: fs.createReadStream('demofile1.html')
// })

// let lineno = 0
// myInterface.on('line', line => {
//     lineno++
//     console.log(`Line number ${lineno} : ${line}`)
// })


// rl.question('What is your age ? ', age => {
//     userAge(age)
// })

// function userAge(age) {
//     console.log('Your age is : ' , age)
//     rl.close()
// }



// const readline = require('readline')

// const rl = readline.createInterface(process.stdin, process.stdout)
// const questions = ["What's your name?", "how old are you?"]
// const answers = []

// rl.question(questions[0], data => {
//     answers.push(data)
//     if (answers.length < questions.length) {
//         rl.setPrompt(questions[answers.length])
//         rl.prompt()
//         rl.on('line', data => {
//             if (data.trim().toLowerCase() === 'exit') {
//                 rl.close()
//                 return
//             }

//             rl.setPrompt(`What else you want to say(write EXIT to leave)`)
//             rl.prompt()
//             answers.push(data)
//         })

//     }
// })

// rl.on('close', ()=> {
//     console.log(`You are exiting the app and your result is : ${answers}`)
// })

/********************************************************************************************/
/***************************************** EventEmitter  ****************************************/
/********************************************************************************************/

// const EventEmitter = require('events').EventEmitter
// const eventEmitter = new EventEmitter()

// eventEmitter.on('greet', (arg) => {
//     setTimeout(() => {
//         console.log('hello')
//     },1000)
// })
// eventEmitter.emit('greet')

// console.log('I am first one')


//////Extending EventEmitter

// class Greetings extends EventEmitter {
//     constructor(name) {
//         super()
//         this.name = name
//     }
//     greet() {
//         this.on('greet', (greet) => {
//             console.log(`${greet} , ${this.name}`)
//         })
//     }
// }

// const greetings = new Greetings('sabbir')

// greetings.greet()
// greetings.emit('greet', 'hello')



/********************************************************************************************/
/***************************************** fs module  ****************************************/
/********************************************************************************************/

// const fs = require('fs')
// const path = require('path')
// const myFilePath = path.join(__dirname, 'sample.txt')

// if (fs.existsSync(myFilePath)) {
//     fs.appendFile(myFilePath, 'world welcome to Node.js', (err) => {
//         if(err) {
//             console.log(err)
//         } else {
//             console.log('Data is appeded in the file')
//             fs.readFile(myFilePath, (err, data) => {
//                 console.log(data.toString())
//             })
//         }
//     })

// } else {
//     fs.writeFile(myFilePath, 'Hello', (err) => {
//         if(err) {
//             console.log(err)
//         }
//     })
// }




/********************************************************************************************/
/***************************************** deleting and renaming file  ****************************************/
/********************************************************************************************/

// const fs = require('fs')
// const path = require('path')
// const myFilePath = path.join(__dirname, 'files', 'sample.txt')
// const newFilePath = path.join(__dirname, 'files', 'sample2.txt')


// if (fs.existsSync(myFilePath)) {
//     fs.unlink(myFilePath, (err) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log('File removed successfully!')
//         }
//     })
// } else {
//     console.log('File is already removed!')
// }


////////////////////// Rename 

// fs.rename(myFilePath, newFilePath, (err) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log('File renamed successfully😊')
//     }
// })




/********************************************************************************************/
/***************************************** directory   ****************************************/
/********************************************************************************************/

const fs = require('fs')
const path = require('path')
// const myFilePath = path.join(__dirname, 'files', 'sample.txt')
const myPath = path.join(__dirname, 'test')


// fs.mkdir('folders', (err) => {
//     if(err) {
//         console.log(err)
//     }
// })

// Rmdir use for remove a directory
fs.rmdir(myPath, err => {
    if (err) console.log(err)
})
