---
title: Docker save
---

## Docker save

`docker save` stores a Docker image to a tar archive. It is useful to make an offline backup of an image or transfer an image to a computer in a corporate environment which does not have a direct access to the Internet.

For example, to save the nginx image already in local computer to a file named `nginx-backup.tar`, the following command can be run:

```
docker save -o nginx-backup.tar nginx
```

Or with a specific version:

```
docker save -o nginx-backup.tar nginx:1.15.5
```

Tip : The following one-line command can be used to send a local image to a remote server using ssh :

```
docker save <image> | bzip2 | ssh user@host 'bunzip2 | docker load'
```

#### More Information:
- [Docker CLI docs: save](https://docs.docker.com/engine/reference/commandline/save/)
