# 2. Desafio Docker + Nginx + NodeJS

## 2.1 Run

Para executar as imagens diretamente, terás que executar as 3 imagens na ordem

1 - Crie a network
  docker network create desafios

2 - Execute os containers:

  2.1 .Mysql
    docker run -it -d --rm --name mysql -p 3306:3306 --network desafios -v "$(pwd)"/db/_mysql:/var/lib/mysql/ -v "$(pwd)"/db/scripts:/docker-entrypoint-initdb.d/:ro -e MYSQL_DATABASE=db_desafios -e MYSQL_ROOT_PASSWORD=root mysql:8.3.0
  2.2 Node
    docker run -d -it --rm --name node -p 3000:3000 --network desafios -v "$(pwd)"/app:/usr/src/app ghcr.io/guisegers/fullcycle-desafio:docker-nodejs
  2.3 Nginx
    docker run -d -it --rm --name nginx -p 80:80 --network desafios -v "$(pwd)"/nginx/html:/www/data/html ghcr.io/guisegers/fullcycle-desafio:docker-nginx

ou execute usando o docker compose up -d --build

## 2.2 Build

Para o Build será necessário o código fonte do repositório: https://github.com/guisegers/fullcycle-desafio-docker.git
Entre na pasta 2_NodeJS, e faça os builds individuais usando os comandos:

1. Mysql
  docker bui

[Voltar aos Desafios](../README.md)
