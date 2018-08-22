exports.getTodos = function(req, res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.createTodos = function(req, res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.showTodos = function(req, res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        res.status(200).json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.updateTodos = function(req, res){
    db.Todo.findByIdAndUpdate(req.params.todoId, req.body, {new: true})
    .then(function(updatedTodo){
        res.status(200).json(updatedTodo);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.removeTodos = function(req, res){
    db.Todo.findByIdAndRemove(req.params.todoId)
    .then(function(deletedTodo){
        res.status(200).send("Deleted Todo");
        console.log("Deleted Todo");
    })
    .catch(function(err){
        res.send(err);
    });
};

module.exports = exports;