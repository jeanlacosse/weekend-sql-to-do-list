Startup
    [x] create file structure
        [x]publuc, modules, server, routers, sql
            [x] source in jquery
            [x] create a pool module
    [x] npm install express, body parser, nodemon, pg
        [x] create start script
    [x] create DB weekend-to-do-app in postico
        [X] run sql to create table
            [X] needs id, list_item, completed
    [x] setup server and client w/ required npm and port listener

HTML
    [x] h1 for list name
    [x] create to-do input box for the todo item
    [x] submit button ofr item
    [x] ul where it will be appended

CRUD CAKE..!

CREATE 
    [x] client ajax post
        [x] grabs the values from the input and put into object
        [x] send object to server
        [x] recalls the append function
    [x] server router.post
        [x] sends req.body as a variable to DB in SQL 
            [x] will be an INSERT 

READ
    [x] client ajax get
        [x] grabs what is sent from server and appends to DOM
            [x] will need to loop over the sent object
            [x] appends an update button
            [x] will append the tr with data for id and completed
    [x]server router.get
        [x] grabs the table info from DB w/ SELECT
        [x] sends back info to client to append

UPDATE
    [x] client ajax put
        [x] create variable for both id and completed
        [x] send the SQL table.completed as info to the server
            [x] convert the above from false to true
    [x] server router.post
        [x] use '/:id/ to get the id num from client and send in an SQL
            [x] use an UPDATE to change from false to true

DELETE
    [x] client ajax delete
        [x] use the id data and (this) to get the id current item
        [x] send that id to the server
    [x] server router.delete
        [x] use '/:id' to get the item sent from client
            [x] SQL DELETE to remove from the server


CSS
    [] change background color
        [] fint family and size of font
    [x] change task color when completed
        [x] .addClass method on click?
        [x] create an if statement to replace the true/false under completed