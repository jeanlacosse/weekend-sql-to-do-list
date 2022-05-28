const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');
const moment = require('moment');

module.exports = router;

// GET for router, will grab the current todo list
router.get('/', (req, res) => {
    let queryText = `
    SELECT * FROM "todo-list" 
    ORDER BY "id" DESC;
    `;
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
    DELETE FROM "todo-list"
    WHERE id = $1;
    `;

    const sqlParams = [
        todoId
    ];

    console.log('in DELETE /todo', todoId);

    pool.query(sqlQuery, sqlParams)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(`DELETE to db failed: ${err}`);
            res.sendStatus(500);
        });
});

router.put('/:id', (req, res) => {
    // create the moment to add to the DB
    const start = moment().format('LLL');
    console.log(moment(start));

    console.log('updating todo', req.params.id, req.body.isMarked, start);
    // params = id of this
    // body = true
    let todoId = req.params.id;

    const sqlQuery = `
    UPDATE "todo-list"
    SET 
        "completed" = $2,
        "time_completed" = $3
    WHERE id = $1;
    `;

    const sqlParams = [
        todoId, // $1
        req.body.isMarked, // $2, 
        start, // $3
    ]

    pool.query(sqlQuery, sqlParams)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(`PUT to db failed: ${err}`);
            res.sendStatus(500);
        });
})