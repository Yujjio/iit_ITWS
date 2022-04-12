-- create the tables for our movies

CREATE TABLE `movies` (
 `movieid` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `title` varchar(100) NOT NULL,
 `year` char(4) DEFAULT NULL,
 PRIMARY KEY (`movieid`)
);

CREATE TABLE `actors` (
  `showed` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first` varchar(100) NOT NULL,
  `last` varchar(100) NOT NULL,
  `date` char(4) DEFAULT NULL,
  PRIMARY KEY (`showed`)
);

CREATE TABLE `ma` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `movied` int(10) unsigned NOT NULL,
  `showed` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
);

-- insert data into the tables

INSERT INTO movies VALUES
  (1, "Elizabeth", "1998"),
  (2, "Elling", "2001"),
  (3, "Oh Brother Where Art Thou?", "2000"),
  (4, "The Lord of the Rings: The Fellowship of the Ring", "2001"),
  (5, "Up in the Air", "2009");

INSERT INTO actors VALUES
  (6, "Blanchett", "Cate", 1998),
  (7, "Nordin", "Sven", 2001),
  (8, "Turturro", "John", 2000),
  (9, "Mortensen", "Viggo", 2001),
  (10, "Kendrick", "Anna", 2009);
