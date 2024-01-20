CREATE DATABASE IF NOT EXISTS db_desafios;
USE db_desafios;
CREATE TABLE IF NOT EXISTS people (id char(36) not null, firstName varchar(150), lastName varchar(150), nickName varchar(150), primary key(id));
CREATE USER IF NOT EXISTS 'desafio'@'%' IDENTIFIED BY 'desafio123';
GRANT ALL PRIVILEGES ON db_desafios.* TO 'desafio'@'%' WITH GRANT OPTION;