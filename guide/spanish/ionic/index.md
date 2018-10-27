---
title: Ionic
localeTitle: Ionic
---
## Framework Ionic

Ionic es un marco de desarrollo de aplicaciones móviles HTML5 destinado a crear aplicaciones móviles híbridas.

Las aplicaciones híbridas tienen muchos beneficios sobre las aplicaciones nativas puras, específicamente en términos de soporte de plataforma, velocidad de desarrollo y acceso a código de terceros.

### Construyendo aplicaciones híbridas con Ionic

Aquellos que estén familiarizados con el desarrollo web encontrarán la estructura de una aplicación Ionic sencilla. En esencia, es solo una página web que se ejecuta en un shell de aplicación nativa. Eso significa que podemos usar cualquier tipo de HTML, CSS y Javascript que queramos.

La mayor parte de una aplicación Ionic se escribirá en HTML, Javascript y CSS. Ionic también utiliza AngularJS para una gran parte de la funcionalidad principal del marco.

### Antes de que podamos empezar a jugar con Ionic. Preparemos nuestro sistema primero:
```
  nodeJS y npm 
  Ionic 2 
  Cordova 
  entorno Android (o iOS si está trabajando sobre MacOS) 
```

### Primero lo primero, necesitamos tener Node.js y npm.
```
  sudo apt-get update 
  sudo apt-get install nodejs 
```

### Gestor de paquetes Node.js (npm)

```  
  sudo apt-get install npm
```

### Ionic 2 y cordova 

```
  sudo npm install -g ionic cordova
```

### Ahora siéntese y relájese, está a punto de finalizar, puede llevar varios minutos dependiendo de su conexión a internet 
 Una vez esté hecho, empezaremos generando un nuevo proyecto basado en una plantilla en blanco ("blank")

```
  ionic start MyFirstApp blank
  cd MyFirstApp 
  ionic serve
```