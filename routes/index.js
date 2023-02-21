var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require("uuid");

const todoController = require('../controllers/todoController');

router.get('/all', todoController.getAllTodo);
router.post('/create', todoController.createOneToDo);
router.delete('/delete/:id', todoController.deleteT);
router.put("/update-one/:id", todoController.updateToDo);


module.exports = router;
