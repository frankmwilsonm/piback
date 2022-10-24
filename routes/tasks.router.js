const express = require('express');
const router = express.Router();


// const TasksService = require('./../services/tasks.service');

// const service = new TasksService();

router.get('/', (req, res) => {
    const query = 'SELECT * FROM tasks';
    const rta = await this.pool.query(query);
    return rta.rows;
});

module.exports = router;
