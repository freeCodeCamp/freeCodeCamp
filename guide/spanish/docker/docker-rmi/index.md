---
title: Docker rmi
localeTitle: Docker rmi
---
## Docker rmi

`docker rmi` elimina las imágenes por su ID.

Para eliminar la imagen, primero debe enumerar todas las imágenes para obtener las ID de imagen, el nombre de la imagen y otros detalles. Ejecutando simples `docker images -a` comandos `docker images -a` `docker images` .

Después de eso, asegúrese de qué imagen desea eliminar, para hacerlo ejecutando este sencillo comando `docker rmi <your-image-id>` . Luego puede confirmar que la imagen ha sido eliminada o no, listando todas las imágenes y verificando.

### Eliminar múltiples imagenes

Hay una forma de eliminar más de una imagen a la vez, cuando desea eliminar varias imágenes específicas. Entonces para hacer eso, primero obtenga las ID de imagen simplemente listando las imágenes y luego ejecute el comando seguido simple.

`docker rmi <your-image-id> <your-image-id> ...`

Escriba las ID de imágenes en el comando seguido por los espacios entre ellas.

### Eliminar todas las imágenes a la vez

Para eliminar todas las imágenes hay un comando simple para hacer eso. `docker rmi $(docker images -q)`

Aquí, en el comando anterior, hay dos comandos, el primero que se ejecuta en `$()` es la sintaxis de shell y devuelve los resultados que se ejecutan en esa sintaxis. Entonces, en este `-q- is a option is used to provide to return the unique IDs,` $ () devuelve los resultados de las ID de imagen y luego `docker rmi` elimina todas esas imágenes.

#### Para más información:

*   [Docker CLI docs: rmi](https://docs.docker.com/engine/reference/commandline/rm/)