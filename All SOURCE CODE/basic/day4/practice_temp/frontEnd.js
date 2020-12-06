const path = require('path')
const fs = require('fs')
const filePath = path.join(__dirname, 'post.json')

// fs.readFile(filePath, (err, data) => {
//     console.log(data.toString())
// })

let post = fs.createReadStream(filePath)

post.on('data', (data) => {
    console.log(data)
})


// console.log(filePath)
// fs.createReadStream(filePath, (err, data) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(data)
//     } 
// })