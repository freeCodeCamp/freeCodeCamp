---
title: Installing Go in Windows using the MSI Installer
localeTitle: Instalar Go en Windows usando el instalador MSI
---
### Instalar Go en Windows usando el instalador MSI

Desde la [página de descarga de golang](https://golang.org/dl/) , obtenga el instalador MSI de Windows y ejecútelo. Tendrás que elegir entre las versiones de 64 bits y 32 bits. Si no sabe qué arquitectura está ejecutando su versión de Windows, simplemente haga una búsqueda rápida en Google para averiguarlo.

> La mayoría de las versiones actuales de Windows son de 64 bits, por lo que debería estar bien obteniendo la versión de 64 bits en la sección de descargas destacadas, pero si su computadora es bastante antigua, la versión de 32 bits debería ser la apuesta más segura.

##### Instalador de Windodows de 64 bits

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/win_installerx64.jpg "Enlace del instalador de Windows msi x64")

##### Instalador de Windodows de 32 bits

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/win_installerx86.jpg "Enlace del instalador de Windows msi x86")

#### Compruebe la instalación y la versión de go

Para comprobar si Go se instaló correctamente, abra su símbolo del sistema y use:
```
> go version 
```

Esto debería imprimir a la consola la versión de go, al mismo tiempo que se asegura de que la instalación se realizó sin problemas.