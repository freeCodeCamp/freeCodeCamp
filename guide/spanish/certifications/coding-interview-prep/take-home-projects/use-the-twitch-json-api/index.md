---
title: Use the Twitch JSON API
localeTitle: Utilice la API de JLS de Twitch
---
Actualización del 29 de septiembre de 2016: Twitch ha cambiado su API y ahora requiere una clave API para ejecutar consultas. Si está utilizando las páginas CodePen o GitHub para compilarlas, no recomendamos agregar una clave API a su proyecto por razones de seguridad.

En lugar de usar la API de Twitch, recomendamos que codifique [este JSON](https://gist.github.com/QuincyLarson/2ff6892f948d0b7118a99264fd9c1ce8) en su aplicación como una variable. Es una serie de respuestas para diferentes cuentas de Twitch.

* * *

Si está tratando de enfrentar este desafío con el `$.getJSON()` jQuery, es probable que reciba un mensaje de error relacionado con el Intercambio de recursos entre orígenes (CORS).

La forma más fácil de resolver esto es usar las capacidades JSONP de jQuery. Desde la [página readme de](https://github.com/justintv/Twitch-API#json-p) la API de Twitch:

> Todos los métodos API admiten JSON-P proporcionando un parámetro de devolución de llamada con la solicitud.

También la [documentación de jQuery](http://api.jquery.com/jQuery.getJSON/) establece:

> Si la URL incluye la cadena "devolución de llamada =?" (o similar, según lo definido por la API del lado del servidor), la solicitud se trata como JSONP en su lugar.

Aquí hay un ejemplo de llamada para obtener los datos del canal Twitch de Free Code Camp:
```
$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) { 
  console.log(data); 
 }); 
```

JSONP se considera inseguro [según Wikipedia](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing#CORS_vs_JSONP) , pero debería ser suficiente para nuestros propósitos. Para una discusión detallada sobre la restricción CORS de Twitch, lea el [problema \# 133](https://github.com/justintv/Twitch-API/issues/133) en el repositorio de Twitch-API.