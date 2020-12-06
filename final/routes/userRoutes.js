const express = require('express')
const { check, param } = require('express-validator');
const { auth } = require('../middleware/auth')
const { admin } = require('../middleware/admin')
const {
    getUserController,
    getUsersController,
    addUserController,
    updateUserController,
    deleteUserController,
    loginUserController,
    getMeController,
    logOutController } = require('../controllers/userController')
const router = express.Router()


router.post('/login', [
    check('email', 'Email reqired').notEmpty(),
    check('email', 'Enter a valid email').isEmail(),
    check('password', 'Password required').notEmpty(),
    check('password', 'Password  minimum 3 characters').isLength({ min: 3 }),
], loginUserController)


router.get('/', [auth, admin], getUsersController)


router.get('/me', auth, getMeController)


router.get('/:id', check('id', 'User not found with this id').isMongoId(), getUserController)

router.post('/',
    [
        check('name', 'Name required').notEmpty(),
        check('email', 'Emial required').notEmpty(),
        check('email', 'Enter a valid email').isEmail(),
        check('password', 'Password  required').notEmpty(),
        check('password', 'Password minimum 6 characters').isLength({ min: 6 }),
        check('password').custom((value, { req }) => {
            if (value !== 'password') {
                return true
            } else {
                throw new Error('Password must not contain "password"')
            }
        }),
        check('confirmPassword', 'Confirm password is reqired').notEmpty(),
        check('confirmPassword').custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("Password dosen't match with confirm password")
            } else {
                return true
            }
        })
    ],
    addUserController
)

router.put('/:id', [
    param('id', 'User not found with this id').isMongoId(),
    check('name', 'Name  required').optional().notEmpty(),
    check('emial', 'email  required').optional().notEmpty(),
    check('password', 'password  required').optional().notEmpty(),
], updateUserController)


router.delete('/:id', check('id', "No user found with this id").isMongoId(), deleteUserController)

// logout user 
router.post('/logout', auth, logOutController)


module.exports = router
