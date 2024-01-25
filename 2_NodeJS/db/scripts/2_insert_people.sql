SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;

USE db_desafios;
INSERT INTO people (id, firstName, lastName, nickName) VALUES (UUID(), "Jose", "da Silva", "Zezinho");
INSERT INTO people (id, firstName, lastName, nickName) VALUES (UUID(), "Joao", "Oliveira", "Jaozinho");
COMMIT;