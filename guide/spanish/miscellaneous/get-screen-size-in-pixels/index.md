---
title: Get Screen Size in Pixels
localeTitle: Obtener el tamaño de la pantalla en píxeles
---
Puede haber ocasiones en que su aplicación JS necesite saber cuál es el tamaño de la pantalla para poder realizar ciertas acciones.

Afortunadamente para nosotros, hay funciones de JavaScript integradas que pueden capturar fácilmente diferentes dimensiones de la pantalla en el dispositivo del usuario en píxeles. Lo que usar depende de lo que te gustaría hacer.

## Obtener la resolución del usuario

Es posible que desee hacer algo relacionado con la resolución del dispositivo del usuario. En este caso, debe usar las propiedades `screen.width` y `screen.height` . Estos te dan el tamaño de la pantalla con la que estás tratando. **Esta no es el área con la que tienes que trabajar en la página; estos valores representan la totalidad de la pantalla, es decir, la resolución de visualización del usuario.**

## Obtener el tamaño del navegador

Puede haber una aplicación interesante para tratar con el tamaño actual del navegador. Si necesita acceder a estas dimensiones, use las propiedades `screen.availWidth` y `screen.availHeight` para hacerlo. Recuerde, estas son las dimensiones de toda la ventana del navegador, desde la parte superior de la ventana del navegador hasta donde el navegador se encuentra con la barra de tareas o el borde de su escritorio, según su configuración.

**Una nota interesante** : `screen.availHeight` también se puede usar para averiguar la altura de una barra de tareas en una computadora. Si la resolución de su navegador es de `1366 x 768` , y `screen.availHeight` informa 728 píxeles, entonces su barra de tareas tiene una altura de 40 píxeles. También puede calcular la altura de la barra de tareas restando `screen.height` y `screen.availHeight` :
```
var taskbarHeight = parseInt(screen.height,10) - parseInt(screen.availHeight,10) + " pixels"; 
 /* 
 For a user that has a screen resolution of 1366 x 768 pixels, their taskbar is likely 40 pixels if using Windows 10 with no added accessibility features. 
 */ 
```

## Obtener el tamaño de la ventana de visualización

Estas propiedades son interesantes y podrían usarse para crear algunos efectos ingeniosos. Puede usar `window.innerHeight` y `window.innerWidth` para obtener el tamaño de la ventana de la página web tal como lo ve el usuario. Estos valores no son estáticos y cambiarán dependiendo de lo que esté sucediendo con el navegador en sí. En otras palabras, si el navegador en sí es pequeño, estos valores serán más pequeños y si el navegador está maximizado, serán más grandes.

Si, por ejemplo, está trabajando en Google Chrome y abre la consola (debe estar acoplada a un lado de la ventana), `window.innerHeight` cambiará para reflejar la altura de la consola porque se bloqueará parte de la ventana. Puede probar esto llamando a `window.innerHeight` , tome nota del valor, luego aumente el tamaño de la consola y `window.innerHeight` llamar a `window.innerHeight` .

Estas propiedades también cambiarán si su navegador está maximizado o redimensionado de alguna manera. En el tamaño máximo de un navegador, la propiedad `window.innerWidth` es la misma que `screen.width` y `screen.availWidth` (a menos que haya una barra de tareas en el lado, en cuyo caso `screen.availWidth` no será igual). `window.innerHeight` es igual a la cantidad de área en la ventana de la página en sí (el área de la página web).

## Obtener altura y anchura de la página web

Si necesita ver qué tan alta o ancha es su página web, existen propiedades para captar estas dimensiones: `document.body.offsetWidth` y `document.body.offsetHeight` . Estas propiedades representan el tamaño del contenido en el cuerpo de la página en sí. Una página sin contenido tiene un `document.body.offsetHeight` de casi el mismo valor que `window.innerHeight` dependiendo de qué márgenes / relleno se establecen en el cuerpo del documento. Si los márgenes y el relleno se establecen en `0` en el elemento raíz html y el cuerpo del documento, entonces `document.body.offsetHeight` y `window.innerHeight` serán iguales sin contenido.

Estas propiedades podrían usarse para interactuar con su página / aplicación dependiendo de lo que quiera hacer.

## Conclusión

La propiedad que se utiliza se basa únicamente en lo que desea hacer. Lea lo que hace cada uno de ellos y decida por sí mismo qué propiedades necesita usar para su proyecto.