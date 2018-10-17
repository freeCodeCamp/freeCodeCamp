---
title: Run Your First Docker Image
localeTitle: Executar sua primeira imagem do Docker
---
## Executar sua primeira imagem do Docker

Depois que você terminar de configurar o computador e instalar a janela de encaixe, basta testar o Docker executando o comando:

```shell
$ docker run hello-world 
 Unable to find image 'hello-world:latest' locally 
 latest: Pulling from library/hello-world 
 ca4f61b1923c: Pull complete 
 Digest: sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7 
 Status: Downloaded newer image for hello-world:latest 
 
 Hello from Docker! 
 This message shows that your installation appears to be working correctly. 
 ... 
```

Se você não tem imagens de hello-world, o Docker irá baixá-las automaticamente para sua máquina. Você pode listar a imagem que foi baixada ou criada para sua máquina executando o comando:

```shell
$ docker image ls 
```

Mais Informações:

[documentação de](https://docs.docker.com/get-started/#test-docker-installation) instalação do Docker de teste.