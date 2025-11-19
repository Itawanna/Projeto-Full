const express = require('express');
const routes =express.Router();
const {
getTasks,
createTasks,
updateTasks,
deleteTasks
} = require('../controllers/tasksController');

router.get('/', getTasks)
router.post('/', createTasks)
router.put('/:id', updateTasks)
router.delete('/:id', deleteTasks)

module.exports = router;