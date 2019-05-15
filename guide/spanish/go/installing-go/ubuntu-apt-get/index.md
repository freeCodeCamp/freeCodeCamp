---
title: Installing Go in Ubuntu using apt-get
localeTitle: Instalar Go en Ubuntu utilizando apt-get
---
### Instalar Go en Ubuntu utilizando apt-get

Usar el Administrador de paquetes fuente de Ubuntu (apt-get) es la forma más fácil de instalar Go. No obtendrá la última versión estable, pero con el propósito de aprender esto debería ser suficiente.

> A partir de este escrito, la versión de Ubuntu Xenial de go es 1.6.1, mientras que la última La versión estable es 1.9.1

```shell
$ sudo apt-get update 
 $ sudo apt-get install golang-go 
```

#### Compruebe la instalación y la versión de go

Para comprobar si Go se instaló correctamente, use:

```shell
$ go version 
 > go version go1.9.1 linux/amd64 
```

Esto imprimirá en la consola la versión de go, al mismo tiempo que se asegura de que la instalación se realizó sin problemas.