---
title: Docker
localeTitle: докер
---
## докер

[Docker](https://www.docker.com/) - широко используемая контейнерная платформа, доступная для Linux, Windows и Mac, а также облачные провайдеры, такие как AWS и Azure.

Обычным вариантом использования было бы упаковать приложение и все его требования в контейнере. Затем контейнер может использоваться во время разработки, передаваться на проверку качества / тестирование и на производство / операции. Это устраняет менталитет «работает на моей машине», поскольку контейнер эффективно _является_ машиной, независимо от того, на каком конкретном оборудовании он может работать.

После того, как вы закончите настройку своего компьютера и установочного док-станции, вы можете просто протестировать свой Docker, выполнив команду:

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

Если у вас нет изображения hello-world, локальная Docker автоматически загрузит его на ваш компьютер. Вы можете загрузить изображение, которое было загружено или создано на вашем компьютере, выполнив команду:

```shell
$ docker image ls 
```

[Docker Store](https://hub.docker.com/explore/) содержит множество распространенных приложений, упакованных в контейнеры и готовых к использованию.

## дальнейшее чтение

*   [Документация докеров](https://docs.docker.com)