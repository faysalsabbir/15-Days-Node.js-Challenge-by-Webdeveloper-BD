/************************* This is day4 of Node.js Challenge *************************** */




/********************************************************************************************/
/***************************************** Working with req and res  ****************************************/
/********************************************************************************************/

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to homepage')
        res.end()
    } else if (req.url === '/contact') {
        res.write('Welcome to contact page')
        res.end()
    } else {
        res.write('404 Not Found!')
        res.end()
    }
})

server.listen(3000, () => {
    console.log('Listening to port 3000')
})

