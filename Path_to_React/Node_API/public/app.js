$(document).ready(function() {
    $.getJSON('/api/todos')
    .then(addTodos)
    .catch(function() {
        console.log('error occurred.');
    });

    $('#todoInput').keypress(function(event){
        if(event.which == 13) {
            //create todo
            createTodo();
        }
    });
});

function addTodos(todos) {
    todos.forEach(function (todo){
        addTodo(todo);
    });
} 

function addTodo(todo) {
    console.log(todo.name);
        var newTodo = $('<li class="task">' + todo.name + '</li>');
        if(todo.completed) {
            newTodo.addClass('done');
        }
        $('.list').append(newTodo);
}

function createTodo() {
    //send request to create new todo
    var userInput =  $('#todoInput').val();
    $.post('/api/todos', {name: userInput})
    .then(function(newTodo) {
        $('#todoInput').val('');        
        addTodo(newTodo);
    })
    .catch(function(err) {
        console.log(err);
    });
}