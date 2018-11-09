---
title: Docker
---

## Docker

Docker is an open-source project based on Linux containers. It uses Linux Kernel features like namespaces and control groups to create containers on top of an operating system.

Docker uses containers (a runtime instance of an image) to create environments that can easily build, ship, and run applications. The main benefit is that Docker containers run completely isolated from the host environment by default, only accessing host files and ports if configured to do so. This is a great alternative to virutal machines(VMs) that are often resource intensive. VMs disk image and application state are an entanglement of OS settings, system-installed dependencies, OS security patches, and other easy-to-lose, hard-to-replicate ephemera.

Docker is a computer program that performs operating-system-level virtualization, also known as "containerization".

Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers. The use of Linux containers to deploy applications is called containerization. Containers are not new, but their use for easily deploying applications is.

Containerization is increasingly popular because containers are:

- Flexible: Even the most complex applications can be containerized.
- Lightweight: Containers leverage and share the host kernel.
- Interchangeable: You can deploy updates and upgrades on-the-fly.
- Portable: You can build locally, deploy to the cloud, and run anywhere.
- Scalable: You can increase and automatically distribute container replicas.
- Stackable: You can stack services vertically and on-the-fly.

Installation for [Mac](https://docs.docker.com/docker-for-mac/install/)

Installation for [Windows](https://docs.docker.com/docker-for-windows/install/)

Installation for [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

_All those links are for Docker CE (Community Edition)_

---

## Test Docker Version

For testing if the application went well, run :

```
docker --version
```

Ensure that you have an output which looks like this :

```
Docker version 18.06.1-ce, build e68fc7a
```

---

## Test Docker Installation

Test that your installation works by running the simple Docker image, hello-world :

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

### What is containerization then:
Simply put, it is nothing more than packaging of a process/application and its dependencies into a distributable image which can run in isolation. 

### Why do we need Docker:
It makes the life of software engineers very smooth as they will always work on the same development environment. 
It helps in sharing the final product to customers/other teams without worrying about environment issues.
It reduces the amount of hardware we need to run our applications by not wasting them for unnecessary OS layer.

## Fundamental Docker Concepts
### Docker Engine
Docker engine is the layer on which Docker runs. It’s a lightweight runtime and tooling that manages containers, images, builds, and more. It runs natively on Linux systems and is made up of:

1. A Docker Daemon that runs in the host computer.

2. A Docker Client that then communicates with the Docker Daemon to execute commands.

3. A REST API for interacting with the Docker Daemon remotely.

### Docker Client
The Docker Client is what you, as the end-user of Docker, communicate with. Think of it as the UI for Docker.

### Docker Daemon
The Docker daemon is what actually executes commands sent to the Docker Client — like building, running, and distributing your containers. The Docker Daemon runs on the host machine, but as a user, you never communicate directly with the Daemon. The Docker Client can run on the host machine as well, but it’s not required to. It can run on a different machine and communicate with the Docker Daemon that’s running on the host machine.

### Dockerfile
A Dockerfile is where you write the instructions to build a Docker image. These instructions can be:
**RUN apt-get y install some-package**: to install a software package
**EXPOSE 8000**: to expose a port
**ENV ANT_HOME /usr/local/apache-ant** to pass an environment variable and so forth. Once you’ve got your Dockerfile set up, you can use the docker build command to build an image from it. Here’s an example of a Dockerfile:

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

#### More Information:

- [Beginner friendly doc](https://medium.freecodecamp.org/a-beginner-friendly-introduction-to-containers-vms-and-docker-79a9e3e119b)
- [Docker Official docs](https://docs.docker.com/get-started/)
- [Try Docker Online](http://training.play-with-docker.com/)
