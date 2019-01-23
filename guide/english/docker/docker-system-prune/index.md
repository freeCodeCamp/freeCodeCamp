---
title: Docker System Prune
---

## Docker System Prune

`docker system prune` This command will remove unused data which includes below:

* all stopped containers
* all networks not used by at least one container
* all dangling images
* all build cache


The basic usage is:

```
docker system prune
```

#### More Information:
- [Docker CLI docs: System Prune](https://docs.docker.com/engine/reference/commandline/system_prune/)
