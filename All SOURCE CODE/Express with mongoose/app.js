const express = require('express')
const app = express()
// utlity function
const utility = require('./utility')

// Express validator
const { check, validationResult } = require('express-validator')

// Models
const Note = require('./models/notes')

// Mongoose
const mongoose = require('mongoose');

// Connecting database
mongoose.connect('mongodb://localhost:27017/notes-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected successfully')
}).catch(err => console.log(err))


// Middlewere

app.use(express.json())

// Homepage
app.get('/', (req, res) => {
    res.send('<h1>Welcome to our note app. here you can manage you notes</h1>')
})

// Store note data
// let notes = [
//     {
//         id: 1,
//         name: 'sabbir ahmed',
//         passion: 'work to be a billioner'
//     },
//     {
//         id: 2,
//         name: 'sabbir ahmed',
//         passion: 'work to be a billioner'
//     }
// ]

// Get All Notes
app.get('/notes', async (req, res) => {
    // let allNotes = notes.length !== 0 ? notes : '<h1>No Notes Found!</h1>'
    // res.send(allNotes)

    try {
        const notes = await Note.find()
        res.send(notes)
    } catch (err) {
        res.status(500).send(err)
    }
})


// Get Note By Id
app.get('/notes/:noteId', [
    check('noteId', 'Note not found!').isMongoId()
], async (req, res) => {
    // const note = utility.getNoteById(notes, req.params.noteId) || '<h1>Note Not Found!</h1>'
    // res.send(note)

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(404).send({ errors: errors.array() })
    }
    try {
        const id = req.params.noteId
        const note = await Note.findById(id)
        if (!note) return res.status(404).send('No Note Found')
        res.send(note)
    } catch (err) {
        res.status(500).send(err)
    }
})

// Add Note
app.post('/notes',
    [
        check('title').notEmpty().withMessage('Title is required').isLength({ min: 3, max: 10 }).withMessage('Title is required and must be 3 to 10 character'),
        check('description').notEmpty().withMessage('description is required').isLength({ min: 10, max: 100 }).withMessage('description is required and must be 10 to 100 character')
    ], async (req, res) => {
        // const note = req.body
        // notes = [...notes, note]
        // res.send(notes)


        const note = new Note(req.body)
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).send({ errors: errors.array() })
        }
        try {
            await note.save()
            res.send(note)

        } catch (err) {
            res.status(400).send(`Error occured : ${err.message}`)
        }
    })

// Update single note

app.patch('/notes/:noteId', async (req, res) => {
    try {
        const updatedPost = await Note.updateOne({ _id: req.params.noteId },
            { title: req.body.title, description: req.body.description });
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
});


// Delete single note
app.delete('/notes/:noteId', async (req, res) => {
    try {
        const deletedPost = await Note.remove({ _id: req.params.noteId });
        res.json(deletedPost);
    } catch (err) {
        res.json({ message: err });
    }
})

// Not Found and all other route handle
app.get('*', (req, res) => {
    // res.status(404) for pass error accurately  to server
    res.status(404).send('<h1>404 Not Found</h1>')
})


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`)
})
