---
title: Docker
localeTitle: Docker
---
## Docker

[O Docker](https://www.docker.com/) é uma plataforma de contêiner amplamente usada disponível para Linux, Windows e Mac, bem como provedores de nuvem, como AWS e Azure.

Um caso de uso comum seria empacotar um aplicativo e todos os requisitos em um contêiner. O contêiner pode então ser usado durante o desenvolvimento, passado para garantia / teste de qualidade e para produção / operações. Isso elimina a mentalidade de "funciona na minha máquina", já que o contêiner _é_ efetivamente a máquina, não importa em qual hardware ele esteja sendo executado.

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

[O Docker Store](https://hub.docker.com/explore/) contém muitos aplicativos comuns empacotados em contêineres e prontos para serem usados.

## Leitura adicional

*   [Documentação do Docker](https://docs.docker.com)