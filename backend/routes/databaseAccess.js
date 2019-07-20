const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem');

// router.get('/add', (req, res) => {
//   res.send('Hello');
// });
router.get('/add', (req, res) => {
  const testTodo = new TodoItem({
    task: 'test task',
    completed: 'false'
  });

  testTodo
    .save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    });
});

module.exports = router;
