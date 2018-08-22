var express = require("express"),
     router = express.Router(),
helperTodos = require("./helpers");
         db = require("../models");

router.route('/') 
    .get(helperTodos.getTodos)
    .post(helperTodos.createTodos);

router.route('/:todoId')
    .get(helperTodos.showTodos)
    .put(helperTodos.updateTodos)
    .delete(helperTodos.removeTodos);

module.exports = router;