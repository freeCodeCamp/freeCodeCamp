---
title: Docker build
---

## Docker ps

`docker ps` list containers on your system.  
A simple `docker ps` will only list all *running* containers, whereas for example a `docker ps -a` will list you all containers (including exited).  
It will provide you with crucial informations regarding your containers like the `CONTAINER ID`, which is especially useful for accessing your container(s).  

```bash
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                   PORTS               NAMES
ee49f9048356        container1        "/bin/bash"              7 weeks ago         Up 7 weeks                                     spooky_ghost
5999014fd133        container2        "/bin/sh -c 'python3…"   7 weeks ago         Up 7 weeks                                     ghastly_cats
```
#### Reference
```bash
Usage:  docker ps [OPTIONS]

List containers

Options:
  -a, --all             Show all containers (default shows just running)
  -f, --filter filter   Filter output based on conditions provided
      --format string   Pretty-print containers using a Go template
  -n, --last int        Show n last created containers (includes all states) (default -1)
  -l, --latest          Show the latest created container (includes all states)
      --no-trunc        Don't truncate output
  -q, --quiet           Only display numeric IDs
  -s, --size            Display total file sizes

```

[Documentation](https://docs.docker.com/engine/reference/commandline/ps/)
