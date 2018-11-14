---
title: Docker
localeTitle: докер
---
## докер

Docker - проект с открытым исходным кодом, основанный на контейнерах Linux. Он использует функции ядра Linux, такие как пространства имен и группы управления, для создания контейнеров поверх операционной системы.

Docker использует контейнеры (экземпляр среды выполнения образа) для создания сред, которые могут легко создавать, отправлять и запускать приложения. Основное преимущество заключается в том, что контейнеры Docker по умолчанию полностью изолированы от среды хоста, но только для доступа к файлам хоста и портам, если они настроены для этого. Это отличная альтернатива вирутальным машинам (VM), которые часто являются ресурсоемкими. Образ диска и состояния виртуальных машин - это запутанность настроек ОС, установленных на системе зависимостей, патчей безопасности ОС и других несложных, труднореплицируемых эфемеров.

Docker - это компьютерная программа, которая выполняет виртуализацию на уровне операционной системы, также известную как «контейнеризация».

Docker - это платформа для разработчиков и системных администраторов для разработки, развертывания и запуска приложений с контейнерами. Использование контейнеров Linux для развертывания приложений называется контейнеризацией. Контейнеры не новы, но их использование для простого развертывания приложений.

Контейнеры становятся все более популярными, поскольку контейнеры:

*   Гибкость: даже самые сложные приложения могут быть контейнерными.
*   Легкий: Контейнеры используют и совместно используют ядро ​​хоста.
*   Взаимозаменяемый: вы можете развертывать обновления и обновления на лету.
*   Portable: вы можете создавать локально, развертываться в облаке и работать в любом месте.
*   Масштабируемость. Вы можете увеличивать и автоматически распространять реплики контейнеров.
*   Stackable: вы можете выполнять стек вертикально и «на лету».

Установка для [Mac](https://docs.docker.com/docker-for-mac/install/)

Установка для [Windows](https://docs.docker.com/docker-for-windows/install/)

Установка для [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

_Все ссылки на thoses для Docker CE (Community Edition)_

* * *

## Версия тестового докера

Для тестирования, если приложение прошло хорошо, запустите:
```
docker --version 
```

Убедитесь, что у вас есть вывод, который выглядит следующим образом:
```
Docker version 18.06.1-ce, build e68fc7a 
```

* * *

## Установка тестового докера

Проверьте, что ваша установка работает, запустив простой образ Docker, hello-world:
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

### Что такое контейнеризация:

Проще говоря, это не что иное, как упаковка процесса / приложения и его зависимостей в распространяемое изображение, которое может выполняться изолированно.

### Зачем нам Docker:

Это делает жизнь инженеров-программистов очень плавными, так как они всегда будут работать в одной и той же среде разработки. Это помогает делиться конечным продуктом с клиентами / другими командами, не беспокоясь о проблемах окружающей среды. Это уменьшает количество аппаратных средств, необходимых для запуска наших приложений, не тратя их на ненужный уровень ОС.

## Фундаментальные концепции докеров

### Докерный двигатель

Двигатель Docker - это слой, на котором работает Docker. Это легкая среда выполнения и инструменты, которые управляют контейнерами, изображениями, сборками и т. Д. Он запускается изначально на системах Linux и состоит из:

1.  Docker Daemon, который запускается на главном компьютере.
    
2.  Клиент Docker, который затем взаимодействует с Docker Daemon для выполнения команд.
    
3.  REST API для взаимодействия с Docker Daemon удаленно.
    

### Докер-клиент

Клиент Docker - это то, с чем вы, как конечный пользователь Docker, общаетесь. Подумайте об этом как о UI для Docker.

### Docker Daemon

Демон Docker - это то, что на самом деле выполняет команды, отправленные клиенту Docker - например, создание, запуск и распространение ваших контейнеров. Docker Daemon работает на главной машине, но, как пользователь, вы никогда не общаетесь напрямую с Daemon. Клиент Docker также может работать на хост-машине, но этого не требуется. Он может работать на другой машине и взаимодействовать с Docker Daemon, который работает на главной машине.

### Dockerfile

Файл Dockerfile - это то, где вы пишете инструкции для создания образа Docker. Эти инструкции могут быть следующими: **RUN apt-get y install some-package** : для установки программного пакета **ЭКСПОЗИЦИЯ 8000** : открыть порт **ENV ANT\_HOME / usr / local / apache-ant** передать переменную среды и так далее. Как только вы настроите свой файл Dockerfile, вы можете использовать команду сборки docker для создания изображения из него. Вот пример файла Docker:
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

#### Дополнительная информация:

*   [Начальный дружественный документ](https://medium.freecodecamp.org/a-beginner-friendly-introduction-to-containers-vms-and-docker-79a9e3e119b)
*   [Официальные документы Докера](https://docs.docker.com/get-started/)
*   [Попробуйте Docker Online](http://training.play-with-docker.com/)