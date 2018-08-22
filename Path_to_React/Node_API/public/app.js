$(document).ready(function() {
    $.getJSON('/api/todos')
    .then(addTodos)
    .catch(function() {
        console.log('error occurred.');
    });
});

function addTodos(todos) {
    todos.forEach(function (todo){
        console.log(todo.name);
        var newTodo = $('<li class="task">' + todo.name + '</li>');
        if(todo.completed) {
            newTodo.addClass('done');
        }
        $('.list').append(newTodo);
    });
} 