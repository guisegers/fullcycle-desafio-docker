# 2. Desafio Docker + Nginx + NodeJS

Código fonte em https://github.com/guisegers/fullcycle-desafio-docker.git

Todos os comandos devem ser executados da pasta 2_NodeJS.

## 2.1 Compose

Execute o ambiente com:
docker compose up -d --build

Certifique-se de que está no diretório ./fullclycle-desafio-docker/2_NodeJS

## 2.2 Build

As imagens do nginx e do node estão disponiveis no github e no dockerhub

Github publico
ghcr.io/guisegers/fullcycle-desafio:docker-node
ghcr.io/guisegers/fullcycle-desafio:docker-nginx

Dockerhub
guisegers/fullcycle-desafio:docker-node
guisegers/fullcycle-desafio:docker-nginx

Não é necessario imagem customizada para o mysql

## 2.3 Mysql

Scripts de inicialização do banco de dados estão na pasta ./db/scripts/

Ao iniciar o container mysql todos os scripts serão executados na ordem alfabetica

Ao executar o script 1_init.sql, serão criados a database, a tabela e o usuario. Além de garantir acesso ao usuario.
Ao executar o script 2_insert_people.sql serão criados 2 registros na tabela people. Pra facilitar o exemplo.

## 2.4 Verificando logs e acessando o sistema

Os containeres podem demorar um pouco a funcionar por conta da criação do banco de dados.
Aguarde uns 2 minutos após iniciar o compose.

Para acessar o sistema pela pagina html, va em http://localhost pelo navegador
É possível verificar a API node em http://localhost:3000/people
Execute o comando docker logs --follow node para visualizar os logs da API node

[Voltar aos Desafios](../README.md)