---
title: Docker rm
localeTitle: Docker rm
---
## Docker rm

`docker rm` elimina los contenedores por su nombre o ID.

Cuando tiene contenedores Docker en ejecución, primero debe detenerlos antes de eliminarlos.

*   Detenga todos los contenedores en ejecución: `docker stop $(docker ps -a -q)`
*   Eliminar todos los contenedores detenidos: `docker rm $(docker ps -a -q)`

### Quitar múltiples contenedores

Puede detener y eliminar varios contenedores pasando los comandos a una lista de los contenedores que desea eliminar. La sintaxis de shell `$()` devuelve los resultados de lo que se ejecuta dentro de los corchetes. Por lo tanto, puede crear su lista de contenedores dentro de este para pasar a los comandos `stop` y `rm` .

##### Aquí hay un desglose de la ventana acoplable ps -a -q

*   contenedores de lista `docker ps`
*   `-a` opción para listar todos los contenedores, incluso los detenidos. Sin esto, por defecto solo se listan los contenedores en ejecución
*   `-q` la opción silenciosa para proporcionar solo identificadores numéricos de contenedor, en lugar de una tabla completa de información sobre contenedores

#### Más información:

*   [Docker CLI docs: rm](https://docs.docker.com/engine/reference/commandline/rm/)