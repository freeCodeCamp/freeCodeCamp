---
title: Docker compose
---

## Docker compose

Docker-Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. 

The steps to use docker-compose are

```
1)Create a Dockerfile which defines the image and can be producible everywhere
```
```
2)Create a docker-compose.yml file to run the services
```
```
3)Use docker-compose up to start the sevices specified in the docker-compose.yml file
```

#### Basic commands in docker-compose

* Command to run docker-containers 

```
docker-compose -f docker-compose.yml up
```

* Command to run containers in detached mode

```
docker-compose -f docker-compose.yml up -d
```

* Command to run containers after building the images again (note: first time we run docker containers build will happen automatically)

```
docker-compose -f docker-compose.yml --build -d
```

* Command to stop containers when we run in detached mode

```
docker-compose -f docker-compose.yml down
```

* Command to remove service containers

```
docker-compose -f docker-compose.yml rm
```

* Command to pull Images for all service containers from repository (by default from Docker Hub)

```
docker-compose -f docker-compose.yml pull
```

* Command to view logs of all service contaienrs (add -f to follow logs)

```
docker-compose -f docker-compose.yml logs 
```


#### More Information:
- [More information on Docker-compose](https://docs.docker.com/compose/)
    
