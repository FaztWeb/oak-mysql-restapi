CREATE DATABASE dbusers;

USE dbusers;

CREATE TABLE user (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  country varchar(50) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

DESCRIBE user;

INSERT INTO user(name, country) VALUES ('Ryan Ray', 'USA'), ('JoeMcMillan', 'USA');

select * from user;