---
title: Docker Network
---

By design containers are isolated from the host and other running containers. The virtual networking of Docker containers allows them to talk to services inside other containers or on the host.

By default, every container gets a virtual Ethernet interface that gets connected via a bridge on the host.

## List all Docker networks

`docker network ls` lists all current Docker networks. 

When installing Docker it creates three default networks:

- *bridge*:  
Default for containers that are run without a network specified
- *host*:  
Allows a container to directly use the network stack of the host
- *none*:  
No networking to other containers is possible

You can use these, but when you plan on running your service containers in production it is advised to create special networks.

## Inspect a Docker Network

`docker network inspect NAMEOFNETWORK` outputs details on the configuration of the network in JSON format. For example, the containers that are part of the network, or their private IPv4-adresses.

```json
"Containers": {
            "156693991b505f5c17ae524ee31fe18775e62011db816cce5313cd2f22576a9c": {
                "Name": "app",
                "EndpointID": "ac4d2dff6f2191fa22749d6c00a2005f400ee74771e0e9186ffa35c94f9b9994",
                "MacAddress": "02:42:ac:18:00:02",
                "IPv4Address": "172.24.0.2/16",
                "IPv6Address": ""
            },
            "64b4328f46a7c4f26e925b66cd6783dc024a93210e958b768292427e52b35bf3": {
                "Name": "database",
                "EndpointID": "b7dcf87f8a8501eab01c6e7fe58aa9454ae81c84c3bc41d9490bcd92e2ab531a",
                "MacAddress": "02:42:ac:18:00:03",
                "IPv4Address": "172.24.0.3/16",
                "IPv6Address": ""
            }
```

## Create a Docker network

To create a network simply run: 

`docker network create my_app_network`

## Attach Containers to a network

To directly attach a new container to the newly created network run:

`docker run --name my_new_webapp --network="my_app_network" -d httpd:2.4-alpine`

To attach an already running container to a network run:

`docker network connect my_app_network my_running_webapp`

They can now talk to each other. 

## Networking with Docker Compose

When running your containers with Docker Compose it by default creates a network of all service containers in the `docker-compose.yml` file.

#### For More Information:
- [Docker Networking: Overview](https://docs.docker.com/network/)
- [Docker Networking: Tutorial for standalone containers](https://docs.docker.com/network/network-tutorial-standalone/)
- [Docker Compose: Networking in Compose](https://docs.docker.com/compose/networking/)

