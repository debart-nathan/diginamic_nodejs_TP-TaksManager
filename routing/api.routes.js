const router = require('express').Router();
const {
  getTodos,
  createTodo,
  editTodo
} = require('../controllers/api.ctrl');

router.get('/api/todos', getTodos);
router.post('/api/todos', createTodo);
router.put('/api/todos/:id', editTodo);

module.exports = router;
