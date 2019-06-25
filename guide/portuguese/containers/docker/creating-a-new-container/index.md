---
title: Creating a new container
localeTitle: Criando um novo contêiner
---
Criando um contêiner usando o Docker CLI

```yaml
docker create [OPTIONS] IMAGE [COMMAND] [ARG...] 
```

# Exemplos

Crie e inicie um contêiner

```shell
$ docker create -t -i fedora bash 

```