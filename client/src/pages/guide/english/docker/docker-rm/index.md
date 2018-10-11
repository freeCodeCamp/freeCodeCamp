---
title: Docker rm
---

## Docker rm

`docker rm` removes containers by their name or ID.  

When you have Docker containers running, you first need to stop them before deleting them.  

- Stop all running containers: `docker stop $(docker ps -a -q)`  
- Delete all stopped containers: `docker rm $(docker ps -a -q)`

### Remove multiple containers

You can stop and delete multiple containers by passing the commands a list of the containers you want to remove. The shell syntax `$()` returns the results of whatever is executed within the brackets. So you can create your list of containers within this to be passed to the `stop` and `rm` commands.

##### Here is a breakdown of docker ps -a -q

- `docker ps` list containers
- `-a` the option to list all containers, even stopped ones. Without this, it defaults to only listing running containers
- `-q` the quiet option to provide only container numeric IDs, rather than a whole table of information about containers

#### More Information:
- [Docker CLI docs: rm](https://docs.docker.com/engine/reference/commandline/rm/)
