---
title: Installing Go in Mac OS X using a tarball
localeTitle: Instalar Go en Mac OS X usando un tarball
---
### Instalar Go en Mac OS X usando un tarball

#### Enlace a tarball

Puede obtener el enlace al archivo tarball de Mac OS en la sección Últimos Estables de la [página de descarga de golang](https://golang.org/dl/) .

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/mac_tarball.jpg "Enlace tarball mac")

#### Proceso de instalación

> En este proceso de instalación usaremos la última versión estable a partir de este escrito (vaya 1.9.1). Para una versión más nueva o más antigua, simplemente reemplace el enlace en el primer paso. Consulte la [página de descarga de golang](https://golang.org/dl/) para ver qué versiones están disponibles actualmente.

##### Instalación de Go 1.9.1
```
$ curl -O https://storage.googleapis.com/golang/go1.9.1.darwin-amd64.tar.gz 
 $ sudo tar -C /usr/local -xzf go1.9.1.darwin-amd64.tar.gz 
 $ export PATH=$PATH:/usr/local/go/bin 
```

#### Compruebe la instalación y la versión de go

Para comprobar si Go se instaló correctamente, use:

```shell
$ go version 
```

Esto debería imprimir a la consola la versión de go, al mismo tiempo que se asegura de que la instalación se realizó sin problemas.