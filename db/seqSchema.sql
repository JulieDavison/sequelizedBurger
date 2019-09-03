DROP DATABASE IF EXISTS seqBurgers_db;

CREATE DATABASE seqBurgers_db;
USE seqBurgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burgername varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	createdAt TIMESTAMP,
	updatedAt TIMESTAMP,
	PRIMARY KEY (id)
);



