---
title: Docker compose
---

## Docker compose

Docker-Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. 

The steps to use docker-compose are

```
1)create a Dockerfile which defines the image and can be produsable every where.
```
```
2)create a docke-compose yml file to run the services
```
```
3)use docker-compose up to start the sevices specified in docker-compose.yml file
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

* command to run containers after buildingthe images again(note: first time we run docker containers build will happen automatically)

```
docker-compose -f docker-compose.yml --build -d
```

* Command to stop containers when we run in detached mode

```
docker-compose -f docker-compose.yml down
```

#### More Information:
- [More information on Docker-compose]
(https://docs.docker.com/compose/)
    
