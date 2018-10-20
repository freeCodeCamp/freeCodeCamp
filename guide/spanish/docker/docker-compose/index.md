---
title: Docker compose
localeTitle: Docker componer
---
## Docker componer

Docker-Compose es una herramienta para definir y ejecutar aplicaciones Docker de múltiples contenedores. Con Compose, utiliza un archivo YAML para configurar los servicios de su aplicación.

Los pasos para utilizar la ventana acoplable-componer son
```
1)create a Dockerfile which defines the image and can be produsable every where. 
```

```
2)create a docke-compose yml file to run the services 
```

```
3)use docker-compose up to start the sevices specified in docker-compose.yml file 
```

#### Comandos básicos en docker-componer

*   Comando para ejecutar contenedores docker
```
docker-compose -f docker-compose.yml up 
```

*   Comando para ejecutar contenedores en modo separado
```
docker-compose -f docker-compose.yml up -d 
```

*   comando para ejecutar contenedores después de construir las imágenes nuevamente (nota: la primera vez que ejecutamos la construcción de contenedores de ventana acoplable ocurrirá automáticamente)
```
docker-compose -f docker-compose.yml --build -d 
```

*   Comando para detener los contenedores cuando corremos en modo separado
```
docker-compose -f docker-compose.yml down 
```

#### Más información:

*   \[Más información sobre Docker-compose\] (https://docs.docker.com/compose/)