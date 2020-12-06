/************************* This is day3 of Node.js Challenge *************************** */




/********************************************************************************************/
/***************************************** Stream and Buffer  ****************************************/
/********************************************************************************************/

// const fs = require('fs')
// const path = require('path')
// fs.readFile('log.txt', (err, data) => {
//     console.log(data.toString())
// })

// const stream = fs.createReadStream(path.join(__dirname, 'log.txt'))

// stream.on('once', () => {
//     console.log('starting to reading data')
// })
// stream.on('data', (data) => {
//     console.log(data.toString())
// })




/********************************************************************************************/
/***************************************** Http module  ****************************************/
/********************************************************************************************/


const http = require('http')
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write(`<h1>Welcome to homepage</h1>`)
        res.end()
    } else if(req.url === '/blog') {
        res.write(`<h1>Welcome to blogpage</h1>`)
        res.end()
    }
})
server.listen(3000, () => {
    console.log('Listening to port 3000')
})


