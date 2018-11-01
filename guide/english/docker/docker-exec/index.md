---
title: Docker exec
---

## Docker exec

`docker exec` allows you to run a command in a running container.  
By command, any available command (inside of container) is meant,  
allowing you to start/stop/execute any kind of routine and even some complex actions.  
Also combined with args `-it` and `bash|sh|csh|zsh` (depending on container) allows you to enter a container, just like ssh-ing it.  
(It'll throw you into your `WORKDIR`)  

Example:
```bash
docker exec -it ee49f9048356 bash
root@ee49f9048356 \ $
```
#### Reference
```bash

Usage:  docker exec [OPTIONS] CONTAINER COMMAND [ARG...]

Run a command in a running container

Options:
  -d, --detach               Detached mode: run command in the background
      --detach-keys string   Override the key sequence for detaching a container
  -e, --env list             Set environment variables
  -i, --interactive          Keep STDIN open even if not attached
      --privileged           Give extended privileges to the command
  -t, --tty                  Allocate a pseudo-TTY
  -u, --user string          Username or UID (format: <name|uid>[:<group|gid>])
  -w, --workdir string       Working directory inside the container
```

[Documentation](https://docs.docker.com/engine/reference/commandline/exec/)
