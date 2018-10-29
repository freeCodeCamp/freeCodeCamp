---
title: Docker compose
localeTitle: Docker сочиняют
---
## Docker сочиняют

Docker-Compose - это инструмент для определения и запуска многоконтейнерных приложений Docker. С помощью Compose вы используете файл YAML для настройки служб вашего приложения.

Шаги по использованию docker-compose
```
1)create a Dockerfile which defines the image and can be produsable every where. 
```

```
2)create a docke-compose yml file to run the services 
```

```
3)use docker-compose up to start the sevices specified in docker-compose.yml file 
```

#### Основные команды в сборке докеров

*   Команда запуска контейнеров-докеров
```
docker-compose -f docker-compose.yml up 
```

*   Команда запуска контейнеров в отдельном режиме
```
docker-compose -f docker-compose.yml up -d 
```

*   команду запуска контейнеров после создания изображений снова (обратите внимание: первый раз, когда мы запускаем сборку докеров, сборка произойдет автоматически)
```
docker-compose -f docker-compose.yml --build -d 
```

*   Команда для остановки контейнеров при запуске в автономном режиме
```
docker-compose -f docker-compose.yml down 
```

#### Дополнительная информация:

*   \[Дополнительная информация о Docker-compose\] (Https://docs.docker.com/compose/)