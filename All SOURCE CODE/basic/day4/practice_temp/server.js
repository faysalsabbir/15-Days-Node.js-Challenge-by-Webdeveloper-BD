const http = require('http')
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'post.json')

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url == '/posts') {

        let post = fs.createReadStream(filePath)
        post.on('data', data => {
            res.write(data.toString())
            res.end()
        })

    } else {
        res.write('404 Not Found!')
        res.end()
    }
})


server.listen(3000, () => {
    console.log('Server is listening to port 3000')
})

