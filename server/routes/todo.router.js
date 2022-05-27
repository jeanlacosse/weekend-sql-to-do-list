const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

module.exports = router;

// GET for router, will grab the current todo list
router.get('/', (req, res) => {
    let queryText =
        `SELECT * FROM "todo-list" 
    ORDER BY "id";`;
    // send query text to DB
    pool.query(queryText)
        .then(result => {
            // Sends back the results in an object
            res.send(result.rows);
        })
        .catch(error => {
            console.log('error getting books', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    let newTodo = req.body;
    console.log(`Adding todo`, newTodo);

    let queryText = `
    INSERT INTO "todo-list" ("list_item")
    VALUES ($1);
    `;

    pool.query(queryText, [newTodo.list_item])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error adding new todo`, error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    // this is the url sent over from client
    let todoId = req.params.id;
    const sqlQuery = `
    DELETE FROM todo_list
    WHERE id = $1;
    `;
  
    const sqlParams = [
      todoId
    ];
  
    console.log('in DELETE /books', todoId);
  
    pool.query(sqlQuery, sqlParams)
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(`DELETE to db failed: ${err}`);
        res.sendStatus(500);
      });
  });