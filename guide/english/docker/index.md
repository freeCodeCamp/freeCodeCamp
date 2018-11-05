---
title: Docker
---
![alt text](https://www.docker.com/sites/default/files/horizontal.png)
## Docker

Docker is an open platform to build, ship, and run distributed applications. It is written in Go. It was first released in 2013 and is developed by Docker, Inc.

Docker is used to run packages called "containers". Containers are isolated from each others and from the OS. These are more lightweight than virtual machines as they do not use the host machine to run an operating system.

Containerization, which is a way of deploying and running applications, runs isolated services which run natively on the Linux kernel. Memory can be set manually for each container in Docker.

Docker is used to simplify configurations, and ensure a smooth continuous integration and deployment flow. Specific containers can be specified for development, staging, and production environments. A true implementation of a container in production, according to the Docker manual, is to run it as a service, using the  `docker-compose.yml` file for setup. This is a YAML file that defines how Docker containers should behave in production.

One of Docker's biggest advantages is that it can be used by a team using different operating systems to build projects without needing to worry about software conflicts.

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

