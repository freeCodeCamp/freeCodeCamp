---
title: Location Reload Method
localeTitle: Método de recarga de ubicación
---
## Método de recarga de ubicación

`Location.reload()` método `Location.reload()` JavaScript proporciona medios para volver a cargar la página en la URL actual.

La sintaxis es la siguiente:

`object.reload(forcedReload);` , donde `forceReload` es un parámetro opcional.

Para simplemente recargar la página, puede ingresar `window.location` como objeto.

Los parámetros opcionales `force reload` es un valor booleano, que si se establece en:

*   `True` vuelve a cargar la página desde el servidor (por ejemplo, no almacena los datos almacenados en caché por el navegador):
```
window.location.reload(true); 
```

*   `False` vuelve a cargar la página utilizando la versión de la página almacenada en caché por el navegador.
```
window.location.reload(false); 
```

`False` es el parámetro predeterminado, por lo que si se deja en blanco, `object.reload()` vuelve a cargar la página utilizando los datos en caché del navegador, es decir, es idéntico a usar el método como `object.reload(false)` .

Para crear el efecto de la opción "Actualizar" proporcionada por el navegador, es posible que desee crear un botón HTML y realizar una de las siguientes acciones:

*   adjunte `Location.reload()` a la marca de botones HTML, como esto:
```
<input type="button" value="Refresh Button" onClick="window.location.reload()"> 
```

*   Asigne un evento de clic al botón con la función que utiliza el método, donde el botón se parece a
```
<button type="button" onClick="reloadThePage()">Refresh!</button> 
```

```
<script> 
 function reloadThePage(){ 
    window.location.reload(); 
 } 
 </script> 
```

### Ejemplo:

```javascript
// Reload the current resources from the server 
 window.location.reload(true); 
 
 // Reload the current resources from the browser's cache 
 window.location.reload(); 
```

Esto volverá a cargar la página en la URL actual del servidor.

#### Más información:

*   [MDN](https://developer.mozilla.org/docs/Web/API/Location/reload)
*   [Escuelas w3](https://www.w3schools.com/jsref/met_loc_reload.asp)