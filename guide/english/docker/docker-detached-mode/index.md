---
title: Docker detached mode
---

## Docker detached mode

Detached mode, shown by the option `--detach` or `-d`, means that a Docker container runs in the background of your terminal. It does not receive input or display output.

```
docker run -d IMAGE
```

If you run containers in the background, you can find out their details using `docker ps` and then reattach your terminal to its input and output.


#### More Information:
- [Attach to and detach from a running container | Docker Docs](https://docs.docker.com/engine/reference/commandline/attach/#examples)
- [Detached vs foreground | Docker docs](https://docs.docker.com/engine/reference/run/#detached-vs-foreground)
