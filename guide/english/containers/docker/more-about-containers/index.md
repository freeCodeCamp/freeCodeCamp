---
title: More About Docker Containers
---

## More Commands to manage Docker Containers

* Command to list Running Containers

```
docker conatiner ls

```

* Command to list all the containers (including the stopped containers)

```
docker container ls -a 

```

* Command to execute command in the container

```
docker exec -it <container name> run --rm <command>

```

* Command to view logs of the container 

```
docker logs <container name>

```

* Command to remove all stopped containers

```
docker container prune

```

#### More Information
- [More commands for docker containers]
(https://docs.docker.com/engine/reference/commandline/container/)