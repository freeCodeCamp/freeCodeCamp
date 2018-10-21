---
title: Docker
---
[logo]: https://www.docker.com/sites/default/files/Whale%20Logo332_5.png "Docker"

Docker is an open-source software aimed at facilitating application deployment. It offers the possibility to build containers, including an operating system,
libraries and all you need to run your application. Therefore, your application can then be deployed on any machine. Its lightweight structure enables you to
run several containers on the same machine. A container image is a lightwieght, stand-alone, executable package of a piece of software that includes everything
needed to run it.

### Features
Docker containers running on a single machine share that machine's operating system kernel; they start instantly and use less compute and RAM. Images are
constructed from filesystem layers and share common files. This minimizes disk usage and image downloads are much faster.

Docker containers are based on open standards and run on all major \*nix distributions, Microsoft Windows, and on any infrastructure including VMs, bare-metal
and in the cloud.

Docker containers isolate applications from one another and from the underlying infrastructure. Docker provides the strongest default isolation to limit app
issues to a single container instead of the entire machine.

## Overview
A container image is a lightweight, stand-alone, executable package of a piece of software that includes everything needed to run it: code, runtime, system tools, system libraries, settings. Available for both Linux and Windows based apps, containerized software will always run the same, regardless of the environment. Containers isolate software from its surroundings, for example differences between development and staging environments and help reduce conflicts between teams running different software on the same infrastructure.

### See also
- Docker Compose : to create and manage several containers at the same time.

### Containers Vs. Virtual Machines

* Containers virtualise the Operating System making them more portable, whereas VMs virtualise the hardware. 
* Containers are an abstraction at the application layer that packages code and dependencies together. VMs are an abstraction of physical hardware turning one server into many. Hypervisor helps VM to do so.
* [CONTAINERS ARE NOT VMS](https://blog.docker.com/2016/03/containers-are-not-vms/)


### Installation of Docker

Docker is available in two editions: Community Edition (CE) and Enterprise Edition (EE).

[Install it from here](https://docs.docker.com/engine/installation/)

Once installed try this

```
$ docker run hello-world

Hello from Docker!
```
This message shows that your installation appears to be working correctly.


### Where to use Docker

* [8 Proven Real-World Ways to Use Docker](https://www.airpair.com/docker/posts/8-proven-real-world-ways-to-use-docker)

* [What is Docker and When to Use It](https://www.ctl.io/developers/blog/post/what-is-docker-and-when-to-use-it/)

### Docker Tutorials

* [Documentation](https://docs.docker.com/get-started/)

* [Docker for beginners](https://docker-curriculum.com/)

* [Docker Tutorials and Courses](https://hackr.io/tutorials/learn-docker)

* [Docker Training. Learn Docker From Docker. Official Docker Training.](https://training.docker.com/)


#### More Information:
You can find plenty of information in the following sites : 
- <a href='https://www.docker.com/' target='_blank' rel='nofollow'>Docker website</a>
- <a href='https://docs.docker.com/' target='_blank' rel='nofollow'>Docker docs</a>
- <a href='https://hub.docker.com/' target='_blank' rel='nofollow'>DockerHub</a>
