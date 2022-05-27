Startup
    [x] create file structure
        [x]publuc, modules, server, routers, sql
            [x] source in jquery
            [] create a pool module
    [x] npm install express, body parser, nodemon, pg
        [x] create start script
    [x] create DB weekend-to-do-app in postico
        [X] run sql to create table
            [X] needs id, list_item, completed

HTML
    [] h1 for list name
    [] create to-do input box for the todo item
    [] submit button ofr item
    [] ul where it will be appended

CRUD CAKE..!

CREATE 
    [] client ajax post
        [] grabs the values from the input and put into object
        [] send object to server
        [] recalls the append function
    [] server router.post
        [] sends req.body as a variable to DB in SQL 
            [] will be an INSERT 

READ
    [] client ajax get
        [] grabs what is sent from server and appends to DOM
            [] will need to loop over the sent object
            [] appends an update button
            [] will append the tr with data for id and completed
    []server router.get
        [] grabs the table info from DB w/ SELECT
        [] sends back info to client to append

UPDATE
    [] client ajax put
        [] create variable for both id and completed
        [] send the SQL table.completed as info to the server
            [] convert the above from false to true
    [] server router.post
        [] use '/:id/ to get the id num from client and send in an SQL
            [] use an UPDATE to change from false to true

DELETE
    [] client ajax delete
        [] use the id data and (this) to get the id current item
        [] send that id to the server
    [] server router.delete
        [] use '/:id' to get the item sent from client
            [] SQL DELETE to remove from the server


CSS
    [] change background color
        [] fint family and size of font
    [] change task color when completed
        [] .addClass method on click?