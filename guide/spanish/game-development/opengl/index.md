---
title: OpenGL
localeTitle: OpenGL
---
## Desarrollo de juegos con OpenGL

Open Graphics Library (OpenGL) es una interfaz de programación de aplicaciones (API) multiplataforma y multiplataforma para renderizar gráficos vectoriales 2D y 3D. La API se utiliza normalmente para interactuar con una unidad de procesamiento de gráficos (GPU), para lograr una representación acelerada por hardware.

Silicon Graphics Inc., (SGI) comenzó a desarrollar OpenGL en 1991 y lo lanzó en enero de 1992; Las aplicaciones lo utilizan ampliamente en los campos del diseño asistido por computadora (CAD), realidad virtual, visualización científica, visualización de información, simulación de vuelo y videojuegos. Desde 2006, OpenGL ha sido administrado por el consorcio tecnológico sin fines de lucro Khronos Group.

## Implementaciones

Mesa 3D es una implementación de código abierto de OpenGL. Puede realizar la representación de software puro y también puede utilizar la aceleración de hardware en BSD, Linux y otras plataformas aprovechando la Infraestructura de representación directa. A partir de la versión 13.0, implementa la versión 4.5 del estándar OpenGL.

## Prerrequisitos

No se necesita ningún requisito previo especial para seguir la mayoría de los tutoriales. La experiencia con cualquier lenguaje de programación (C, Java, Lisp, Javascript) es mejor para entender completamente el código, pero no es necesario; Simplemente será más complicado aprender dos cosas al mismo tiempo.

## Instalación de OpenGL en Linux

Mesa es la biblioteca de GL utilizada. Ubuntu 16.04 incluye Mesa 11.2 que soporta OpenGL 4.1. Simplemente instale los `libgl1-mesa-dev` y `mesa-common-dev` para instalar los archivos de desarrollo.

Si realmente necesita 4.5, es probable que deba desarrollarse contra los controladores de AMD o NVidia, y necesitará una tarjeta que admita 4.5 para ejecutar cualquier software que cree con esa versión de la API.

#### Más información:

[OpenGL Wiki](https://en.wikipedia.org/wiki/OpenGL) [Tutoriales de OpenGL](http://www.opengl-tutorial.org/)