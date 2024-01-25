# 2. Desafio Docker + Nginx + NodeJS

Código fonte em https://github.com/guisegers/fullcycle-desafio-docker.git

## 2.1 Compose

execute o ambiente com docker compose up -d --build
Certifique-se de que está no diretório ./fullclycle-desafio-docker/2_NodeJS

## 2.2 Build

As imagens do nginx e do node estão disponiveis no github e no dockerhub

Github publico
ghcr.io/guisegers/fullcycle-desafio:docker-node
ghcr.io/guisegers/fullcycle-desafio:docker-nginx

Dockerhub
guisegers/fullcycle-desafio:docker-node
guisegers/fullcycle-desafio:docker-nginx

## 2.3 Acessando o sistema

Para acessar o sistema pela pagina html, va em http://localhost pelo navegador
É possível verificar a API node em http://localhost:3000/people
Execute o comando docker logs --follow node para visualizar os logs da API node

[Voltar aos Desafios](../README.md)
