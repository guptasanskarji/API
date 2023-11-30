const Student = require('../models/student');

exports.getStudent = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message : error.message});
    }
};

exports.createStudent = async (req, res) => {
    const studentData = new Student({ roll_no: req.body.roll_no, name: req.body.name, department: req.body.department, branch: req.body.branch, university: req.body.university });
    try {
        const newData = await studentData.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const updatedStudent = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(updatedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};