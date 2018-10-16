---
title: Docker load
---

## Docker load

`docker load` restores a Docker image from a tar archive.

It is mostly used in conjunction with `docker save` command to transfer a Docker image without using Docker Hub or another registry.

To load an image from a file named `nginx-backup.tar`, the following command can be run:

```
docker load -i nginx-backup.tar
```

This command also recognizes gzip, bzip2 and xz compression, and decompresses the file automatically. Therefore, it can be used even without decompressing manually:

```
docker load -i nginx-backup.tar.gz
```

#### More Information:
- [Docker CLI docs: load](https://docs.docker.com/engine/reference/commandline/load/)
