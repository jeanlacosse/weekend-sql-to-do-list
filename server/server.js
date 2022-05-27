const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// require route from the router file
const todoRouter = require('./routes/todo.router');

// use above router for /todo
app.use('/todo', todoRouter)

// Serve back static files by default from public
app.use(express.static('server/public'))

// Start listening for requests on a specific port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listening on port', PORT);
});

