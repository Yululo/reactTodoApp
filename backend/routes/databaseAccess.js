const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem');

// router.get('/add', (req, res) => {
//   res.send('Hello');
// });
router.post('/add', (req, res) => {
  const testTodo = new TodoItem({
    task: req.body.task
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

router.get('/all', (req, res) => {
  TodoItem.find({}, (err, items) => {
    if (err) res.send(err);
    if (!items) res.send('Items not found');

    res.send(items);
  });
});

router.post('/remove', (req, res) => {
  TodoItem.findByIdAndRemove(req.body._id, (err, item) => {
    if (err) res.send(err);
    if (!item) res.send('Todo item attempting to remove is not found');

    res.send('Success!');
  });
});

router.post('/toggle', (req, res) => {
  TodoItem.findById(req.body._id, (err, item) => {
    if (err) res.send(err);
    if (!item) res.send('Todo item attempting to remove is not found');

    // to toggle the item
    item.completed = !item.completed;
    item.save((err, item) => {
      res.send(item);
    });
  });
});

module.exports = router;
