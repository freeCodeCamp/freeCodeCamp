---
title: Docker
localeTitle: Estibador
---
Docker es un software de código abierto destinado a facilitar el despliegue de aplicaciones. Ofrece la posibilidad de construir contenedores, incluyendo un sistema operativo, Bibliotecas y todo lo que necesitas para ejecutar tu aplicación. Por lo tanto, su aplicación se puede implementar en cualquier máquina. Su estructura ligera le permite Ejecutar varios contenedores en la misma máquina. Una imagen de contenedor es un paquete ejecutable, autónomo y liviano de una pieza de software que incluye todo necesario para ejecutarlo.

### Caracteristicas

Los contenedores Docker que se ejecutan en una sola máquina comparten el núcleo del sistema operativo de esa máquina; se inician instantáneamente y usan menos computación y RAM. Las imágenes son Construido a partir de capas del sistema de archivos y compartir archivos comunes. Esto minimiza el uso del disco y las descargas de imágenes son mucho más rápidas.

Los contenedores de Docker se basan en estándares abiertos y se ejecutan en todas las distribuciones principales \* nix, Microsoft Windows, y en cualquier infraestructura, incluidas máquinas virtuales, sin restricciones. y en la nube.

Los contenedores Docker aíslan las aplicaciones entre sí y de la infraestructura subyacente. Docker proporciona el aislamiento predeterminado más fuerte para limitar la aplicación problemas a un solo contenedor en lugar de toda la máquina.

## Visión de conjunto

Una imagen de contenedor es un paquete liviano, independiente y ejecutable de una pieza de software que incluye todo lo necesario para ejecutarlo: código, tiempo de ejecución, herramientas del sistema, bibliotecas del sistema, configuración. Disponible para aplicaciones basadas tanto en Linux como en Windows, el software en contenedor siempre se ejecutará de la misma manera, independientemente del entorno. Los contenedores aíslan el software de su entorno, por ejemplo, las diferencias entre los entornos de desarrollo y de preparación y ayudan a reducir los conflictos entre equipos que ejecutan software diferente en la misma infraestructura.

### Ver también

*   Docker Compose: para crear y administrar varios contenedores al mismo tiempo.

### Contenedores Vs. Maquinas virtuales

*   Los contenedores virtualizan el sistema operativo haciéndolos más portátiles, mientras que las máquinas virtuales virtualizan el hardware.
*   Los contenedores son una abstracción en la capa de aplicación que agrupa código y dependencias. Las máquinas virtuales son una abstracción del hardware físico que convierte un servidor en muchos. Hypervisor ayuda a VM a hacerlo.
*   [LOS CONTENEDORES NO SON VMS](https://blog.docker.com/2016/03/containers-are-not-vms/)

### Instalación de Docker

Docker está disponible en dos ediciones: Community Edition (CE) y Enterprise Edition (EE).

[Instálalo desde aquí](https://docs.docker.com/engine/installation/)

Una vez instalado intente esto
```
$ docker run hello-world 
 
 Hello from Docker! 
```

Este mensaje muestra que su instalación parece estar funcionando correctamente.

### Donde usar Docker

*   [8 maneras comprobadas en el mundo real de usar Docker](https://www.airpair.com/docker/posts/8-proven-real-world-ways-to-use-docker)
    
*   [Qué es Docker y cuándo usarlo](https://www.ctl.io/developers/blog/post/what-is-docker-and-when-to-use-it/)
    

### Tutoriales Docker

*   [Documentación](https://docs.docker.com/get-started/)
    
*   [Docker para principiantes](https://docker-curriculum.com/)
    
*   [Docker tutoriales y cursos](https://hackr.io/tutorials/learn-docker)
    
*   [Entrenamiento Docker. Aprende Docker de Docker. Entrenamiento oficial Docker.](https://training.docker.com/)
    

#### Más información:

Puedes encontrar mucha información en los siguientes sitios:

*   [Sitio web de Docker](https://www.docker.com/)
*   [Docker docs](https://docs.docker.com/)
*   [DockerHub](https://hub.docker.com/)