---
title: Docker pull
---

## Docker pull

`docker pull` downloads images from Docker Hub or other Docker registries.

For example, to download the latest nginx image, the command should be run like this:

```
docker pull nginx
```

This intrinsically assumes the image associated with `latest` tag. To download a specific version, the version info must be added to the image name with a colon:

```
docker pull nginx:1.15.5
```

Docker images can also be downloaded from registries other than Docker Hub by adding the registry address in front of image name:

```
docker pull myregistry.example.com/myapplicationimage
```

Or with a specific version:

```
docker pull myregistry.example.com/myapplicationimage:1.2.11
```

#### More Information:
- [Docker CLI docs: pull](https://docs.docker.com/engine/reference/commandline/pull/)
