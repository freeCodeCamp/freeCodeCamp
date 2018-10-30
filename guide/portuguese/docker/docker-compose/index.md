---
title: Docker Compose
localeTitle: Docker Compose
---
## Docker Compose

Docker-Compose é uma ferramenta para definir e executar aplicativos Docker com vários contêineres. Com Compose, você usa um arquivo YAML para configurar os serviços do seu aplicativo.

As etapas para usar o docker-compose são
```
1)criar um Dockerfile que define a imagem que pode ser sempre replicada
```

```
2)criar um arquivo docker-compose.yml para rodar os serviços
```

```
3)usar o docker-compose para iniciar os serviços especificados no arquivo docker-compose.yml
```

#### Comandos básicos no docker-compose

*   Comando para executar contêineres docker
```
docker-compose -f docker-compose.yml up 
```

*   Comando para executar contêineres no modo desanexado
```
docker-compose -f docker-compose.yml up -d 
```

*   Comando para executar contêineres depois de construir as imagens novamente (nota: a primeira vez que executarmos, a construção de contêineres do docker acontecerá automaticamente)
```
docker-compose -f docker-compose.yml --build -d 
```

*   Comando para parar contêineres quando rodamos em modo desanexado
```
docker-compose -f docker-compose.yml down 
```

*   Comando para remover todos os contêineres do serviço

```
docker-compose -f docker-compose.yml rm
```

*   Comando para baixar as imagens de todos os contêineres do serviço do repositório (por padrão do Docker Hub)

```
docker-compose -f docker-compose.yml pull
```

*   Comando para visualizar os logs de todos os contêineres do serviço (adicione -f para seguir os logs)

```
docker-compose -f docker-compose.yml logs 
```

#### Mais Informações:

*   \[Mais informações sobre o Docker-compose\] (https://docs.docker.com/compose/)
