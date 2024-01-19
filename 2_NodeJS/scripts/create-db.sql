-- Cria a base de dados
CREATE DATABASE db_desafios;
-- Entra na base de dados
USE db_desafios
-- Cria table People
CREATE TABLE people (id char(36) not null, firstName varchar(150), lastName varchar(150), nickName varchar(150), primary key(id));

-- Cria o usuario
CREATE USER 'desafio'@'%' IDENTIFIED BY 'desafio123';
-- Da permissão para o usuario desafio as tabelas da database db_desafios
GRANT ALL PRIVILEGES ON db_desafios.* TO 'desafio'@'%' WITH GRANT OPTION;