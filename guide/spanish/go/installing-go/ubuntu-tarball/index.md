---
title: Installing Go in Ubuntu using a tarball
localeTitle: Instalar Go en Ubuntu usando un tarball
---
### Instalar Go en Ubuntu usando un tarball

> Esta es la forma recomendada de instalar go si desea obtener la última versión estable disponible en el sitio web de golang.

#### Revisa tu sistema de arquitectura

Antes de continuar, asegúrese de saber si su sistema es de 32 o 64 bits. Si no lo sabes, ejecuta el siguiente comando para averiguarlo:

```shell
$ lscpu | grep Architecture 
```

Si ve `Architecture: x86_64` su sistema es de 64 bits, de lo contrario, si obtiene `Architecture: i686` , entonces su sistema es de 32 bits. Ahora que conoce la arquitectura de su sistema, prosigamos.

#### Escoger el tarball correcto

Desde la [página de descarga de golang](https://golang.org/dl/) , deberá obtener el enlace al archivo tarball correcto (.tar.gz) para su sistema.

Si su sistema es de 64 bits, copie el enlace al archivo .tar.gz para sistemas Linux con arquitectura x86\_64. Por ejemplo, la última versión estable para sistemas de 64 bits en este momento es `go1.9.1.linux-amd64.tar.gz`

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/ubuntux64.jpg "enlace tarball x64")

Si su sistema es de 32 bits, copie el enlace al archivo .tar.gz para sistemas Linux con arquitectura x86. A partir de este escrito, el último archivo es `go1.9.1.linux-386.tar.gz`

![screenshot of golang's download page as of this writting, highliting link](https://raw.githubusercontent.com/AlexandroPerez/resources/master/img/ubuntux86.jpg "enlace tarball x86")

Después de copiar el enlace, simplemente reemplace el enlace en el proceso de instalación que se encuentra a continuación con el enlace que recibió de la página de descarga.

#### Proceso de instalación

> En este proceso de instalación usaremos los enlaces a los archivos comprimidos go 1.9.1 como ejemplo. Para una versión más nueva o más antigua, simplemente reemplace el enlace en el primer paso. Consulte la [página de descarga de golang](https://golang.org/dl/) para ver qué versiones están disponibles actualmente.

##### Ir 1.9.1 para sistemas de 64 bits:
```
$ wget https://storage.googleapis.com/golang/go1.9.1.linux-amd64.tar.gz 
 $ sudo tar -C /usr/local -xzf go1.9.1.linux-amd64.tar.gz 
 $ export PATH=$PATH:/usr/local/go/bin 
```

##### Ir 1.9.1 para sistemas de 32 bits:
```
$ wget https://storage.googleapis.com/golang/go1.9.1.linux-386.tar.gz 
 $ sudo tar -C /usr/local -xzf go1.9.1.linux-386.tar.gz 
 $ export PATH=$PATH:/usr/local/go/bin 
```

#### Compruebe la instalación y la versión de go

Para comprobar si Go se instaló correctamente, use:

```shell
$ go version 
 > go version go1.9.1 linux/amd64 
```

Esto imprimirá en la consola la versión de go, al mismo tiempo que se asegura de que la instalación se realizó sin problemas.