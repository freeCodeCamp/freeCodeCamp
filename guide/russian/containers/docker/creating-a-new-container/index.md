---
title: Creating a new container
localeTitle: Создание нового контейнера
---
Создание контейнера с использованием Docker CLI

```yaml
docker create [OPTIONS] IMAGE [COMMAND] [ARG...] 
```

# Примеры

Создание и запуск контейнера

```sh
$ docker create -t -i fedora bash 

```