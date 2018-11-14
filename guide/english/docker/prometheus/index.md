---
title: Prometheus
---

## Prometheus with Docker

Prometheus is a time-series database and monitoring solution.


### Run Prometheus in Docker

#### Define a Docker compose
```
version: "3"
services:
  prometheus:
    image: quay.io/prometheus/prometheus:latest
    ports:
     - 9090:9090
```     

#### Deploy the stack file:
```
run docker swarm init
run docker stack deploy monitoring --compose-file=./docker-compose.yml
```
Nabigate to: http://locahost:9090 to view the UI.
