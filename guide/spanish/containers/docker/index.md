---
title: Docker
---
![alt text](https://www.docker.com/sites/default/files/horizontal.png)
## Docker

[Docker](https://www.docker.com/) es una plataforma de contenedor ampliamente utilizada para Linux, Windows y Mac, así como para proveedores de nube como AWS y Azure.

Un caso de uso común sería empaquetar una aplicación y todos sus requisitos en un contenedor. El contenedor se puede utilizar durante el desarrollo, pasar al control de calidad / pruebas y a la producción / operaciones. Esto elimina la mentalidad de "funciona en mi máquina", ya que el contenedor _es_ efectivamente la máquina, sin importar en qué hardware real se esté ejecutando. Al contenerizar una la plataforma y dependencias de una aplicación, las diferencias en las distribuciones de sistemas operativos e infraestructura que lo soporta se abstraen.

## Contenedor

Los contenedores se basan en imágenes construidas por archivos de texto llamados Dockerfile. Los Dockerfiles contienen instrucciones para poder hacer una imágen de una aplicación. 

## Orquestración
Existen frameworks para poder orquestrar los contenedores en producción como docker-swarm y Kubernetes.

## Prueba

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



[Docker Store](https://hub.docker.com/explore/) contiene muchas aplicaciones comunes empaquetadas en contenedores y listas para ser utilizadas.


## Lista de proveedores de contenedores

- [Docker](https://www.docker.com/)
- [Kubernetes](https://kubernetes.io/)
- [Amazon AWS ECS](https://aws.amazon.com/ecs/?nc1=h_ls)
- [RKT](https://github.com/rkt/rkt)
- [Azure Fabric](https://azure.microsoft.com/en-us/services/service-fabric/)

## Otras lecturas

*   [Documentación Docker](https://docs.docker.com)
