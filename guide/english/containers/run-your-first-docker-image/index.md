---
What is Docker and How can I use it for Software Development?

What is Docker?
Docker is an open-source suite of software that enables containerization of applications.

How can it be used?
- You can utilize Docker on Development, Testing, and Production.

The benefits of utilizing Docker on Development are:
- Docker allows Developers to all use the same Development environment.
- Docker ensures that if the code works in Development, it should work in Production.
- Docker is faster than a virtual machine.

The benefits of utilizing Docker on Testing are:
- Docker allows the Testing environment to use the exact environment that Development and Production uses.
- Testing inside Docker stacks is faster and uses fewer resources than physical or virtual machines.
- Docker can be seamlessly integrated into Jenkins Pipelines.

The benefits of utilizing Docker on Production are:
- Isolated environments for each individual software being utilized, with that software being used as a Service (SaaS).
- SaaS permitting individual updates to have no impact on other running services, once Testing has been completed.
- SaaS allows source code to be pulled from Source Control, with only a disposable copy exposed to the outside.
- SaaS allows containers to be killed and created quickly and independently.
- Docker-Machine/Kubernetes allows each software instance to be replicated with ease.
- Docker-Machine/Kubernetes allows multiple servers to be utilized to balance the stack.
- Docker-Machine/Kubernetes automates load balancing.


---
title: Run Your First Docker Image
---
## Run Your First Docker Image

After you are done setting up your computer and installing docker, you can test your Docker installation by running the following command:

```shell
$ docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
ca4f61b1923c: Pull complete
Digest: sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.
...
```
If you have no `hello-world` image locally, Docker will automatically download it to your machine.
You can list image that was downloaded or created to your machine by running the command:

```shell
$ docker image ls
```

#### More Information:

Docker installation <a href='https://docs.docker.com/get-started/#test-docker-installation' target='_blank' rel='nofollow'>documentation</a>.
