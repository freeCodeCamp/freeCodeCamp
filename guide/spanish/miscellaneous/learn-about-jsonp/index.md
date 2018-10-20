---
title: Learn About Jsonp
localeTitle: Aprenda sobre Jsonp
---
## JSONP

JSONP significa "JSON con relleno". Supongamos que desea realizar solicitudes AJAX a un dominio diferente. Bueno, no puedes hacer esto con XMLHttpRequest, como lo harías normalmente, pero PUEDES hacer esto con etiquetas de script, como se ve [en StackOverflow](https://stackoverflow.com/questions/2067472/what-is-jsonp-all-about) :

```javascript
script = document.createElement('script'); 
 script.type = 'text/javascript'; 
 script.src = 'http://www.someWebApiServer.com/some-data'; 
```

Pero esto es feo, ahora tenemos que sacar elementos de un JSON de una etiqueta de script, bruto. Afortunadamente, los creadores de JSONP estaban pensando en el futuro, así que en lugar de configurar nuestros scripts como lo hicimos anteriormente, hacemos esto:

```javascript
script.src = 'http://www.someWebApiServer.com/some-data?callback=my_callback'; 
```

Esto activa una devolución de llamada automática después de que los datos se hayan cargado, creando una función con los datos deseados dentro de ella.

### Más información:

*   [Wikipidea / JSONP](https://en.wikipedia.org/wiki/JSONP)
*   [JSONP y JQuery](https://learn.jquery.com/ajax/working-with-jsonp)
*   [Más JSONP con JQuery](http://api.jquery.com/jquery.getjson/#jsonp)
*   [Ajax y JSONP](http://stackoverflow.com/questions/5943630/basic-example-of-using-ajax-with-jsonp)