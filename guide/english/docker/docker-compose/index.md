---
title: Docker compose
---

## Docker compose

Docker-Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. 

The steps to use docker-compose are

```
1)create a Dockerfile which defines the image and can be producible every where.
```
```
2)create a docker-compose yml file to run the services
  
  Contents of a sample docker-compose.yml are as below:
  
    version: '2'
    services:
      example1:
          image: exampleimage1 
          environment:
          - 'EXAMPLE_ENV_PARAM=eg1'
```
```
3)use docker-compose up to start the sevices specified in docker-compose.yml file

    For example, considering the sample docker-compose.yml in step 2 aboev, we can run example1 service as
    
    docker-compose up example1
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

* command to run containers after building the images again(note: first time we run docker containers build will happen automatically)

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
    
