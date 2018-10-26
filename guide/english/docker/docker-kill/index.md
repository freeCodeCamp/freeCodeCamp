---
title: Docker kill
---

## Docker kill

`docker kill` kills one or more running Docker containers by names or IDs.

The basic usage is:

```
docker kill mycontainer
```

Or with container ID:

```
docker kill 769b9341d937
```

To kill more than one container, container names or IDs must be added with a whitespace character between them:

```
docker kill mycontainer mysecondcontainer mythirdcontainer
```

#### More Information:
- [Docker CLI docs: kill](https://docs.docker.com/engine/reference/commandline/kill/)
