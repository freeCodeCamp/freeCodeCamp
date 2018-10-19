---
title: Docker
localeTitle: Docker
---
## Docker

O Docker é um projeto de código aberto baseado em contêineres do Linux. Ele usa os recursos do Kernel do Linux, como namespaces e grupos de controle, para criar contêineres sobre um sistema operacional.

O Docker usa contêineres (uma instância de tempo de execução de uma imagem) para criar ambientes que podem criar, enviar e executar aplicativos facilmente. O principal benefício é que os contêineres do Docker são completamente isolados do ambiente do host por padrão, acessando apenas os arquivos e portas do host se estiverem configurados para isso. Essa é uma ótima alternativa para máquinas virtuais (VMs) que geralmente usam muitos recursos. A imagem de disco e o estado do aplicativo das VMs são um emaranhamento de configurações do sistema operacional, dependências instaladas pelo sistema, patches de segurança do sistema operacional e outras coisas efêmeras difíceis de serem replicadas e difíceis de serem replicadas.

O Docker é um programa de computador que realiza virtualização no nível do sistema operacional, também conhecido como "conteinerização".

O Docker é uma plataforma para desenvolvedores e administradores de sistemas desenvolverem, implementarem e executarem aplicativos com contêineres. O uso de contêineres do Linux para implementar aplicativos é chamado de contêiner. Os contêineres não são novos, mas seu uso para implantar aplicativos facilmente é.

A containerização é cada vez mais popular porque os contêineres são:

*   Flexível: Até mesmo os aplicativos mais complexos podem ser contêinerizados.
*   Leve: os contêineres aproveitam e compartilham o kernel do host.
*   Intercambiável: você pode implantar atualizações e up-on-the-fly.
*   Portátil: você pode criar localmente, implantar na nuvem e executar em qualquer lugar.
*   Escalável: você pode aumentar e distribuir automaticamente as réplicas de contêineres.
*   Empilhável: você pode empilhar serviços verticalmente e on-the-fly.

Instalação para [Mac](https://docs.docker.com/docker-for-mac/install/)

Instalação para o [Windows](https://docs.docker.com/docker-for-windows/install/)

Instalação para o [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

_Todos os links são para o Docker CE (Community Edition)_

* * *

## Versão do Docker de Teste

Para testar se o aplicativo foi bem, execute:
```
docker --version 
```

Assegure-se de que você tenha uma saída que se pareça com isto:
```
Docker version 18.06.1-ce, build e68fc7a 
```

* * *

## Instalação do Docker de Teste

Teste que sua instalação funciona executando a imagem simples do Docker, hello-world:
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

### O que é contentorização então:

Simplificando, nada mais é do que empacotamento de um processo / aplicativo e suas dependências em uma imagem distribuível que pode ser executada isoladamente.

### Por que precisamos do Docker:

Isso torna a vida dos engenheiros de software muito tranquila, pois eles sempre funcionarão no mesmo ambiente de desenvolvimento. Isso ajuda a compartilhar o produto final com os clientes / outras equipes sem se preocupar com problemas ambientais. Reduz a quantidade de hardware que precisamos para executar nossos aplicativos, não desperdiçando-os para camadas desnecessárias do sistema operacional.

## Conceitos do Docker Fundamental

### Motor Docker

O mecanismo do Docker é a camada na qual o Docker é executado. É um tempo de execução e ferramentas leves que gerencia contêineres, imagens, construções e muito mais. Ele é executado nativamente em sistemas Linux e é composto de:

1.  Um Daemon do Docker que é executado no computador host.
    
2.  Um Docker Client que se comunica com o Docker Daemon para executar comandos.
    
3.  Uma API REST para interagir remotamente com o Daemon do Docker.
    

### Cliente do Docker

O Docker Client é com o qual você, como usuário final do Docker, se comunica. Pense nisso como a interface do usuário do Docker.

### Daemon do Docker

O daemon do Docker é o que realmente executa comandos enviados para o Docker Client - como construir, executar e distribuir seus contêineres. O Docker Daemon é executado na máquina host, mas como usuário, você nunca se comunica diretamente com o Daemon. O Docker Client também pode ser executado na máquina host, mas não é necessário. Ele pode ser executado em uma máquina diferente e se comunicar com o Docker Daemon que está sendo executado na máquina host.

### Dockerfile

Um Dockerfile é onde você escreve as instruções para criar uma imagem do Docker. Essas instruções podem ser: **RUN apt-get y instalar algum pacote** : para instalar um pacote de software **EXPOSE 8000** : para expor uma porta **ENV ANT\_HOME / usr / local / apache-ant** para passar uma variável de ambiente e assim por diante. Depois de configurar o Dockerfile, você pode usar o comando docker build para criar uma imagem a partir dele. Aqui está um exemplo de um Dockerfile:
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

#### Mais Informações:

*   [Doc. Amigável para iniciantes](https://medium.freecodecamp.org/a-beginner-friendly-introduction-to-containers-vms-and-docker-79a9e3e119b)
*   [Docker Official docs](https://docs.docker.com/get-started/)
*   [Experimente o Docker Online](http://training.play-with-docker.com/)