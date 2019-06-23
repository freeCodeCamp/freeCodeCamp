---
title: Installing Go in Arch Linux using pacman
localeTitle: Instalar Go en Arch Linux usando pacman
---
### Instalar Go en Arch Linux usando pacman

Usar Arch Linux Package Manager (pacman) es la forma más fácil de instalar Go. Basado en la filosofía de Arch Linux de proporcionar nuevas versiones de software muy rápido, obtendrá una versión muy actual de go. Antes de que pueda instalar el paquete go, debe actualizar el sistema.

```shell
$ sudo pacman -Syu 
 $ sudo pacman -S go 
```

#### Compruebe la instalación y la versión de go

Para comprobar si Go se instaló correctamente, use:

```shell
$ go version 
 > go version go2.11.1 linux/amd64 
```

Esto imprimirá en la consola la versión de go, al mismo tiempo que se asegura de que la instalación se realizó sin problemas.