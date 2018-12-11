---
title: Docker
---
## Docker

[Docker](https://www.docker.com/) is a widely-used container platform available for Linux, Windows, and Mac, as well as cloud providers like AWS and Azure.

A common use case would be to package an app and all its requirements in a container. The container can then be used during development, passed to quality assurance/testing, and on to production/operations. This eliminates the "works on my machine" mentality, as the container effectively _is_ the machine, no matter what actual hardware it may be running on.

After you are done setting up your computer and installig docker, you can simply test your Docker by running command:

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
If you have no hello-world image locally Docker will automatically download it to your machine.
You can list image that was downloaded or created to your machine by running command:

```shell
$ docker image ls
```


[Docker Store](https://hub.docker.com/explore/) contains many common applications packaged up into containers and ready to be used.

## Further reading
* [Docker Documentation](https://docs.docker.com)
