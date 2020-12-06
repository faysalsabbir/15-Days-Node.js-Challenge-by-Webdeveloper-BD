const express = require('express')
const app = express();
const cors = require('cors')

// IMPORT COOKIE PARSER
const cookieParser = require('cookie-parser')

// CONNECTION DB
const { connectionDB } = require('./db/dbConnection')

// ERROR MIDDLEWERE
const { error } = require('./middleware/error')


// db connection 
connectionDB();

// ROUTES IMPORT

const noteRoutes = require('./routes/noteRoute')
const userRoutes = require('./routes/userRoutes')

// DOT ENV FILE
require('dotenv').config({ path: "./config/config.env" })

app.use(express.json())
app.use(cookieParser(process.env.COOKIES_SECRET))
app.use(cors())

// ROUTES
app.use('/note', noteRoutes)
app.use('/users', userRoutes)
app.use(error)

app.get('*', (req, res) => {
    res.status(404).send('Page not found 404')
})

// SERVER PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server Started To PORT ${POST}`)
})