const express = require('express')
const { check, param } = require('express-validator');
const router = express.Router()
//controllers
const {
    getNotesController,
    getNoteController,
    addNoteController,
    updateNoteController,
    deleteNoteController,
} = require("../controllers/noteController");

//middleware
const { auth } = require("../middleware/auth");



// get all notes
router.get('/', getNotesController)

// get single note
router.get('/:id', auth, check('id', 'Note not found with this id').isMongoId(), getNoteController)

//add note
router.post('/',
    auth,
    [
        check('title', 'Title must be required').notEmpty(),
        check('description', 'Description must be required').notEmpty(),
    ],
    addNoteController
)

// update note 
router.put('/:id', auth, [
    param('id', 'Note not found with this id').isMongoId(),
    check('title', 'Title must be required').optional().notEmpty(),
    check('description', 'Description must be required').optional().notEmpty(),
], updateNoteController)


// delete note 
router.delete('/:id', auth, check('id', "No note found with this id").isMongoId(), deleteNoteController)

module.exports = router
