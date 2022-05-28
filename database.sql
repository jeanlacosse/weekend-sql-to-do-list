CREATE TABLE "todo-list" (
	"id" SERIAL PRIMARY KEY,
	"list_item" VARCHAR (250) NOT NULL,
	"completed" BOOLEAN DEFAULT FALSE,
	"time_completed" VARCHAR(250)
);

INSERT INTO "todo-list"
	(list_item)
VALUES
	('Complete my todo list!');