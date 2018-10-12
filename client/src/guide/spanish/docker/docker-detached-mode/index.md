---
title: Docker detached mode
localeTitle: Modo separado Docker
---
## Modo separado Docker

El modo separado, que se muestra con la opción `--detach` o `-d` , significa que un contenedor Docker se ejecuta en el fondo de su terminal. No recibe entrada ni muestra salida.
```
docker run -d IMAGE 
```

Si ejecuta contenedores en segundo plano, puede averiguar sus detalles usando la `docker ps` y luego volver a conectar su terminal a su entrada y salida.

#### Más información:

*   [Adjuntar y separar de un contenedor en ejecución | Docker docs](https://docs.docker.com/engine/reference/commandline/attach/#examples)
*   [Separado vs primer plano | Docker docs](https://docs.docker.com/engine/reference/run/#detached-vs-foreground)