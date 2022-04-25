CREATE DATABASE `iitQuiz3`;

CREATE TABLE `myProjects` (
 `title` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `link` varchar(100) NOT NULL,
 `image_over` varchar(100) NOT NULL,
 `image_out` varchar(100) NOT NULL,
 PRIMARY KEY (`id`)
);

INSERT INTO myProjects (title,link,image_over,image_out) VALUES
(0, "lab/goals and expectations.docx", "pic/docx.png", "pic/docx_close.png"),
(1,"lab/Lab1.docx", "pic/docx.png", "pic/docx_close.png"),
(2,"menu_lab2.html", "pic/folder_visit.png", "pic/folder.png"),
(3,"../index.html", "pic/folder_visit.png", "pic/folder.png"),
(4,"menu_lab4.html", "pic/html.png", "pic/html_close.png"),
(5,"lab/lab5/lab5.html", "pic/html.png", "pic/html_close.png"),
(6,"lab/lab6/lab6.html", "pic/html.png", "pic/html_close.png"),
(8,"lab/lab8/lab8.html", "pic/html.png", "pic/html_close.png");