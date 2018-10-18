---
title: Docker
---
## Docker

Docker is an open platform use to build, ship, and run standard unit software along with all it’s dependencies reliably from one computing environment to another. The runtime only Docker container is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings. Docker. Developed by Docker Inc. and was first released in 2013.

The advantage of using a Docker container over virtual machines is that containers will share hardware resources with the host computer while containing only what is necessary to run the application. Virtual machines will emulate the computer hardware and installing a complete system of Linux. This makes the Docker containers much more efficient with a boost in performance and easier to transport to a different host. 

Docker containers are "Runtime Only" meaning that once the container is stopped, all changes in the container will be lost with it going back to it’s initial image state. Container with changes to it’s content can be “Saved As” a new container. When started backup, these changes will be reflected in the new container. Anything additional from this point forward will be lost once the container is stopped. 

Docker-compose files are created to have containers start with defined services and perimeters along with the ability to start multi-container applications. Docker-compose can also be used to map volumes and configuration files to exist outside the container. This will allow the container to be started and stopped while ensuring that data is not lost. These are created as docker-compose.yml files. 

One of Docker’s biggest advantages is that it can be used by a team using different operating systems to build projects without needing to worry about software conflicts.

### Installation

* Ubuntu: `sudo apt install docker`

* RedHat: `yum install docker-ce`

* Windows / macOS: [Download](https://www.docker.com/get-started)

* Linux:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

#### More Information:

* For download and documentation check the docker official site: [Docker official site](https://www.docker.com)
* For more on containerization, checkout [Search IT Operations](https://searchitoperations.techtarget.com/definition/application-containerization-app-containerization)
* A Docker 101 course [Docker 101](https://github.com/docker/labs/tree/master/beginner/)

