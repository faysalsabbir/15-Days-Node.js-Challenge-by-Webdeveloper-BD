// Get a note by it's id
const getNoteById = (notes, id) => {
    const intId = parseInt(id)
    const note = notes.find(note => note.id === intId)
    return note
}

module.exports = {
    getNoteById
}