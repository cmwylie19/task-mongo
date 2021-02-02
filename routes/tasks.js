const express = require('express');
const router = express.Router();
const task = require('../controllers/tasks');

router.get('/', function(req, res){
    task.index(req,res);
});

router.post('/addtask', function(req, res) {
    task.create(req,res);
});

router.get('/gettask', function(req, res) {
    task.list(req,res);
});

module.exports = router;
