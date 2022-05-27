$(document).ready(function () {
    console.log('jQuery sourced.');
    refreshTodo();
    addClickHandlers();
});

function addClickHandlers() {
    $('#submitBtn').on('click', handleSubmit);
    //   create handlers for delete and completed item
    $(document).on('click', '.deleteBtn', deleteTodo)
}

function handleSubmit() {
    //   on submit (POST) going to grab input value into a variable, will run addTodo with that variable
    console.log('button working')
    let todo = {};
    todo.list_item = $('#listItem').val();
    addTodo(todo);
}

function addTodo(todo) {
    $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
    })
        .then(function (response) {
            console.log('Response from server.', response);
            refreshTodo();
        })
        .catch(function (error) {
            console.log('Error in POST', error)
            alert('Unable to add item at this time. Please try again later.');
        });
}

function refreshTodo() {
    // on page start (GET) will garb all items from server and render to DOM with a seperate function
    console.log('refresh working')

    $.ajax({
        type: 'GET',
        url: '/todo'
    })
        .then((response) => {
            console.log('in client GET', response);
            renderTodo(response);
        })
        .catch(function (error) {
            console.log('error in GET', error);
        });
}

function renderTodo(todos) {
    $('#listArea').empty();

    // loop over todo list and append to the DOM
    for (let todo of todos) {
        // create a delete button and a completed button on append
        // give data for id and boolean for if completed to use in the DELETE and PUT
        $('#listArea').append(`
        <tr 
        data-todo-id="${todo.id}"
        data-todo-completed="${todo.completed}"
        >
          <td>${todo.list_item}</td>
          <td>${todo.completed}</td>
          <td><button class="deleteBtn">Delete</button></td>
          <td><button class="readBtn">Read?</button></td>
        </tr>
        `)
    }
}

function deleteTodo() {
    // grab the data/id from the appended button
    let todoId = $(this).parents('tr').data('todo-id');
    console.log('in delete todo', todoId);

    $.ajax({
        method: 'DELETE',
        url: `/todo/${todoId}`
    }).then(() => {
        console.log('DELETE /todo success')
        refreshTodo();
    })
    .catch((err) => {
        alert('failed to delete book')
        console.log('Delete /todo failed', err)
    })

}