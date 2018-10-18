---
title: Docker
localeTitle: Docker
---
## Docker

Docker (literalmente "Estibador") es un proyecto de código abierto basado en contenedores de Linux. Utiliza las características del kernel de Linux, como los espacios de nombres y los grupos de control, para crear contenedores sobre el sistema operativo.

Docker usa contenedores (una instancia de tiempo de ejecución de una imagen) para crear entornos que pueden construir, desplegar y ejecutar aplicaciones fácilmente. El principal beneficio es que los contenedores Docker se ejecutan completamente aislados del entorno del host de forma predeterminada, solo acceden a los archivos y puertos del host si están configurados para hacerlo. Esta es una excelente alternativa a las máquinas virutales (VM) que a menudo requieren muchos recursos. La imagen de disco y el estado de la aplicación de las máquinas virtuales son complicadas por la configuración del sistema operativo, las dependencias instaladas en el sistema, los parches de seguridad del sistema operativo y otros elementos efímeros fáciles de perder y difíciles de replicar.

Docker es un programa informático que realiza la virtualización a nivel de sistema operativo, también conocido como "contenedorización".

Docker es una plataforma para desarrolladores y administradores de sistemas para desarrollar, implementar y ejecutar aplicaciones con contenedores. El uso de contenedores de Linux para implementar aplicaciones se denomina contenedorización. Los contenedores no son nuevos, pero su uso para implementar aplicaciones fácilmente sí lo es.

La contenedorización es cada vez más popular porque los contenedores son:

*   Flexibles: Incluso las aplicaciones más complejas se pueden contener en contenedores.
*   Ligeros: los contenedores aprovechan y comparten el núcleo del host.
*   Intercambiables: pueden implementar actualizaciones y subidas de versión sobre la marcha.
*   Portátiles: pueden construirse localmente, desplegarse en la nube y ejecutarse en cualquier lugar.
*   Escalables: pueden aumentar y distribuir automáticamente réplicas de contenedor.
*   Apilables: pueden apilar servicios verticalmente y sobre la marcha.

Instalacion para [Mac](https://docs.docker.com/docker-for-mac/install/)

Instalación para [Windows](https://docs.docker.com/docker-for-windows/install/)

Instalación para [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

_Todos estos enlaces son para Docker CE (Community Edition)_

* * *

## Comprobar la Versión de Docker

Para probar si la aplicación se instaló bien, ejecuta:
```
docker --version 
```

Asegúrate de tener una salida que se vea así:
```
Docker version 18.06.1-ce, build e68fc7a 
```

* * *

## Prueba de la Instalación de Docker

Compruebe que su instalación funciona correctamente ejecutando la imagen más simple de Docker, hello-world:
```
docker run hello-world 
 
 Unable to find image 'hello-world:latest' locally 
 latest: Pulling from library/hello-world 
 ca4f61b1923c: Pull complete 
 Digest: sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7 
 Status: Downloaded newer image for hello-world:latest 
 
 Hello from Docker! 
 This message shows that your installation appears to be working correctly. 
 ... 
```

### ¿Qué es entonces la contenedorización?

En pocas palabras, no es más que el empaquetado de un proceso / aplicación y sus dependencias en una imagen distribuible que puede ejecutarse de forma aislada.

### ¿Por qué necesitamos a Docker?

Hace que la vida de los ingenieros de software sea más cómoda, ya que siempre trabajarán en el mismo entorno de desarrollo. Ayuda a compartir el producto final con los clientes / otros equipos sin preocuparse por los problemas del entorno. Reduce la cantidad de hardware que necesitamos para ejecutar nuestras aplicaciones al no desperdiciarlo en una capa de SO innecesaria.

## Conceptos Fundamentales de Docker

### Docker Engine

El motor Docker es la capa en la que Docker se ejecuta. Es un motor de ejecución ligero y herramientas para administrar contenedores, imágenes, compilaciones y más. Se ejecuta de forma nativa en sistemas Linux y se compone de:

1.  Un Docker Daemon que se ejecuta en la computadora host.
    
2.  Un cliente de Docker que se comunica con el demonio de Docker para ejecutar comandos.
    
3.  Una API REST para interactuar con el Docker Daemon de forma remota.
    

### Cliente Docker

El cliente Docker es con lo que usted, como usuario final de Docker, se comunica. Piense en ello como la interfaz de usuario para Docker.

### Docker Daemon

El demonio de Docker es lo que realmente ejecuta los comandos enviados al cliente de Docker, como construir, ejecutar y distribuir sus contenedores. Docker Daemon se ejecuta en la máquina host, pero como usuario, nunca se comunica directamente con Daemon. Docker Client también puede ejecutarse en la máquina host, pero no es obligatorio. Puede ejecutarse en una máquina diferente y comunicarse con el Docker Daemon que se ejecuta en la máquina host.

### Dockerfile

Un Dockerfile es donde escribes las instrucciones para construir una imagen de Docker. Estas instrucciones pueden ser: **Ejecute apt-get y install some-package** : para instalar un paquete de software **EXPONER 8000** : exponer un puerto **ENV ANT\_HOME / usr / local / apache-ant** para pasar una variable de entorno y así sucesivamente. Una vez que haya configurado su Dockerfile, puede usar el comando de construcción de Docker para construir una imagen a partir de él. Aquí hay un ejemplo de un Dockerfile:
```
# Start with ubuntu 14.04 
 FROM ubuntu:14.04 
 
 MAINTAINER freeCodeCamp@gmail.com 
 
 # For SSH access and port redirection 
 ENV ROOTPASSWORD sample 
 
 # Turn off prompts during installations 
 ENV DEBIAN_FRONTEND noninteractive 
 RUN echo "debconf shared/accepted-oracle-license-v1-1 select true" | debconf-set-selections 
 RUN echo "debconf shared/accepted-oracle-license-v1-1 seen true" | debconf-set-selections 
 
 # Update packages 
 RUN apt-get -y update 
 
 # Install system tools / libraries 
 RUN apt-get -y install python3-software-properties \ 
    software-properties-common \ 
    bzip2 \ 
    ssh \ 
    net-tools \ 
    vim \ 
    curl \ 
    expect \ 
    git \ 
    nano \ 
    wget \ 
    build-essential \ 
    dialog \ 
    make \ 
    build-essential \ 
    checkinstall \ 
    bridge-utils \ 
    virt-viewer \ 
    python-pip \ 
    python-setuptools \ 
    python-dev 
 
 # Install Node, npm 
 RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash - 
 RUN apt-get install -y nodejs 
 
 # Add oracle-jdk7 to repositories 
 RUN add-apt-repository ppa:webupd8team/java 
 
 # Make sure the package repository is up to date 
 RUN echo "deb http://archive.ubuntu.com/ubuntu precise main universe" > /etc/apt/sources.list 
 
 # Update apt 
 RUN apt-get -y update 
 
 # Install oracle-jdk7 
 RUN apt-get -y install oracle-java7-installer 
 
 # Export JAVA_HOME variable 
 ENV JAVA_HOME /usr/lib/jvm/java-7-oracle 
 
 # Run sshd 
 RUN apt-get install -y openssh-server 
 RUN mkdir /var/run/sshd 
 RUN echo "root:$ROOTPASSWORD" | chpasswd 
 RUN sed -i 's/PermitRootLogin without-password/PermitRootLogin yes/' /etc/ssh/sshd_config 
 
 # SSH login fix. Otherwise user is kicked off after login 
 RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd 
 
 # Expose Node.js app port 
 EXPOSE 8000 
 
 # Create tap-to-android app directory 
 RUN mkdir -p /usr/src/my-app 
 WORKDIR /usr/src/my-app 
 
 # Install app dependencies 
 COPY . /usr/src/my-app 
 RUN npm install 
 
 # Add entrypoint 
 ADD entrypoint.sh /entrypoint.sh 
 RUN chmod +x /entrypoint.sh 
 ENTRYPOINT ["/entrypoint.sh"] 
 
 CMD ["npm", "start"] 
```

#### Más información:

*   [Doc amigable para principiantes](https://medium.freecodecamp.org/a-beginner-friendly-introduction-to-containers-vms-and-docker-79a9e3e119b)
*   [Docker documentos oficiales](https://docs.docker.com/get-started/)
*   [Prueba Docker en línea](http://training.play-with-docker.com/)
