---
title: Docker image
---

## List docker images

`docker image` command is for viewing and working with the docker images currently built/saved on the machine.

To list final builds type the following command:

```
docker image ls
```

And for a list of all images, including intermediate containers type:

```
docker image ls -a
```

### Remove unused images

If you wish to remove unused intermediate images you can clean up using the prune command:

```
docker image prune
```

In order to remove all unused images you can use the prune command with the -a flag applied.
To remove a specific image you can type the following:

```
docker image rm <image name>
```

This will remove the named image.
All removed images will have to pulled/built again prior to container redeployment.

#### More Information:
- [Docker CLI docs: image](https://docs.docker.com/engine/reference/commandline/image/)
