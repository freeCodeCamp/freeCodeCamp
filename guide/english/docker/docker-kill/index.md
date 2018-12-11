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

You can specify which signal is emitted to the container using the `--signal` (or `-s`) option. For example, you can reload your `nginx` container configuration using:

```
docker kill -s HUP container_name
```


#### More Information:
- [Docker CLI docs: kill](https://docs.docker.com/engine/reference/commandline/kill/)
