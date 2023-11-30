const express = require('express');
const router = express.Router();

const user = require('../controllers/userController');

router.get('/', user.getUsers);
router.post('/createUser', user.createUser);
router.put('/updateUser/:id', user.updateUser);

module.exports = router;