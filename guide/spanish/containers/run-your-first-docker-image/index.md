---
title: Run Your First Docker Image
localeTitle: Ejecute su primera imagen de Docker
---
## Ejecute su primera imagen de Docker

Una vez que haya terminado de configurar su computadora y de instalar la ventana acoplable, simplemente puede probar su Docker ejecutando el comando:

```shell
$ docker run hello-world 
 Unable to find image 'hello-world:latest' locally 
 latest: Pulling from library/hello-world 
 ca4f61b1923c: Pull complete 
 Digest: sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7 
 Status: Downloaded newer image for hello-world:latest 
 
 Hello from Docker! 
 This message shows that your installation appears to be working correctly. 
 ... 
```

Si no tiene una imagen de hello-world localmente, Docker la descargará automáticamente a su máquina. Puede enumerar la imagen que se descargó o creó en su máquina ejecutando el comando:

```shell
$ docker image ls 
```

Más información:

Prueba la [documentación de](https://docs.docker.com/get-started/#test-docker-installation) instalación de Docker.