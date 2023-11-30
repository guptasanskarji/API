const express = require('express');
const router = express.Router();
const student = require('../controllers/studentController');

router.get('/', student.getStudent);
router.post('/createStudent', student.createStudent);
router.put('/updateStudent', student.updateStudent);

module.exports = router;