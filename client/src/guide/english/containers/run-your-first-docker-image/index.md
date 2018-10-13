---
title: Run Your First Docker Image
---
## Run Your First Docker Image

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

More Information:

test Docker installation <a href='https://docs.docker.com/get-started/#test-docker-installation' target='_blank' rel='nofollow'>documentation</a>.
