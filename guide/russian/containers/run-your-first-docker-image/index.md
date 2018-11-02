---
title: Run Your First Docker Image
localeTitle: Запустите свое первое изображение докеров
---
## Запустите свое первое изображение докеров

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

Дополнительная информация:

тестовая [документация по](https://docs.docker.com/get-started/#test-docker-installation) установке Docker.