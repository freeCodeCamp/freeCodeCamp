---
title: Useful commands for Docker
---
# Useful commands for Docker

- Docker is mainly used for run programs on server side.
- Companies customize their OS before use. They don't require many things like GUI.
-  Less program means less RAM used and more security.
	- More features means more chances to hack, more vulnerabilities.
- We use OS to run program. Docker gives us an environment to run our program.

## Installing docker-engine
### For  Redhat OS
- First, setup yum repo
	```
	[docker]
	baseurl = https://yum.dockerproject.org/repo/main/centos/7
	gpgcheck=0
	```
- Then, install **docker-engine**
`$ yum install docker-engine`

 ###  Start the services of docker
 `$ systemctl restart docker`
 It starts the docker server.

### See all the images available in docker
`$ docker images`
The default _docker images_ will show all top level images, their repository and tags, and their size.

### Load an image in docker
`$ docker load -i ubuntu-14.04.tar`
- **i** - Read from tar archive file, instead of STDIN

It loads an image or repository from a tar archive (even if compressed with gzip, bzip2, or xz) from a file or STDIN. It restores both images and tags.

### Docker run reference
- Docker runs processes in isolated containers.
- A container is a process which runs on a host. The host may be local or remote.
- When an operator executes `docker run`, the container process that runs is isolated in that it has its own file system, its own networking, and its own isolated process tree separate from the host.

### Run or start a new OS
`$ docker run -it ubuntu:14.04`
- The `docker run` command first `creates` a writeable container layer over the specified image, and then `starts` it using the specified command.
- The above example runs a container using the `ubuntu:14.04` image. The `-it` instructs Docker to allocate a pseudo-TTY connected to the container’s stdin; creating an interactive `bash` shell in the container.

### See all the running OSs
`$ docker ps`
- The  `docker ps`  command only shows running containers by default.
- To see all containers, use the  `-a`  (or  `--all`) flag:

`$ docker ps -a`

### Come out from docker OS console
`exit`

### From shell of docker OS, for coming out without exiting container
press _ctrl + p + q_

### From terminal of base system, to run a command in docker OS
`$ docker exec mycontainer ifconfig`
- **mycontainer** is the name of container.
- The `docker exec` command runs a new command in a running container.


### Usually run docker using this command
`$ docker run –dit ubuntu:14.04`
- **i** - interactive
- **t** - terminal
- **d** - detach

### Stop all running OSs
```
$ docker ps -q //shows id of every running OS
$ docker stop  $(docker ps -q)
```

### Permanently remove a container
`$ docker rm id`

### Permanently Remove all the stopped containers
`$ docker rm $(docker ps -a -q)`
- This command will delete all stopped containers.
- The command `docker ps -a -q` will return all existing container IDs and pass them to the `rm` command which will delete them.
- Any running containers will not be deleted.

### Remove containers while running (forcefully)
`$ docker rm -f $(docker ps -a -q)`

### Giving docker OS a name when starting
- By default, docker gives unique name to every container with a unique id.
- We can also give a name to container using following command -
`$ docker run -it --name adarsh centos:latest`

### Copy a file in container
`$ docker cp /root/form.txt  myconatiner:/`
This command will copy a file form.txt from the base system to the specified container.

### Download docker images
[docker hub](http://hub.docker.com) - All the available docker images can be downloaded from this URL.

### Check different versions of OS that are available
```
$ docker search ubuntu //search
$ docker pull ubuntu:17.10 //downlaod required version
```

## Docker Storage

### Basic Storage types
1.	**Empheral disk (temporary)** – OS removal will remove data (like windows C drive)
2.	**Persistent disk (permanent)** -  OS removal will not erase data (like windows D drive)
    - **-v** gives persistent storage. OS removal will not remove data.

### Docker volume manager
Docker by default takes space from **/** drive of host system to store data. Overall **/** drive amount of storage docker can use.

### Give separate space to a docker container
- Make a partition, format it and mount in base system.
Let the partition created is **mypart**
- Then, run following command
`$ docker run –it -v /mypart:/data centos`
  - **mypart** is a partition in base system and **data** is the folder where docker will store its data.
  - **v** - volume

### Attaching dvd to a container
`$ docker run –it –v /run/media/root/RHEL-7.3\ Server.. centos`
This command will attach a RHEL to the container.

### Copy content from a folder of base system to _/data_ in docker centos
`$ docker run –it -v /folder_name:/data centos`