$(document).ready(function () {
    console.log('jQuery sourced.');
    refreshTodo();
    addClickHandlers();
  });
  
  function addClickHandlers() {
    $('#submitBtn').on('click', handleSubmit);
//   create handlers for delete and completed item
  }

  function handleSubmit(){

  }

  function refreshTodo(){
      
  }