$(document).ready(function () {
    console.log('jQuery sourced.');
    refreshTodo();
    addClickHandlers();
});

function addClickHandlers() {
    $('#submitBtn').on('click', handleSubmit);
    //   create handlers for delete and completed item
}

function handleSubmit() {
    //   on submit (POST) going to grab input value into a variable, will run addTodo with that variable
    console.log('button working')
}

function refreshTodo() {
    // on page start (GET) will garb all items from server and render to DOM with a seperate function
    console.log('refresh working')

    $.ajax({
        type: 'GET',
        url: '/todo'
    })
        .then((response) => {
            console.log(response);
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