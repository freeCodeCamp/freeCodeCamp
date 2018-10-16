---
title: Docker compose
localeTitle: Docker compor
---
## Docker compor

Docker-Compose é uma ferramenta para definir e executar aplicativos Docker com vários contêineres. Com Compose, você usa um arquivo YAML para configurar os serviços do seu aplicativo.

As etapas para usar o docker-compose são
```
1)create a Dockerfile which defines the image and can be produsable every where. 
```

```
2)create a docke-compose yml file to run the services 
```

```
3)use docker-compose up to start the sevices specified in docker-compose.yml file 
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

*   comando para executar contêineres depois de construir as imagens novamente (nota: a primeira vez que executarmos a construção de contêineres do docker acontecerá automaticamente)
```
docker-compose -f docker-compose.yml --build -d 
```

*   Comando para parar contêineres quando corremos em modo desanexado
```
docker-compose -f docker-compose.yml down 
```

#### Mais Informações:

*   \[Mais informações sobre o Docker-compose\] (https://docs.docker.com/compose/)