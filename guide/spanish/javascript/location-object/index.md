---
title: Location Object
localeTitle: Objeto de ubicación
---
## Objeto de ubicación

El objeto "Ubicación" proporciona una API (Interfaz de programación de aplicaciones) que permite la recuperación de una URL, la configuración de una URL o el acceso a partes de una URL. Ya está implementado de forma predeterminada en los objetos de Ventana y Documento. Nota: no existe un estándar público que se aplique al objeto de ubicación, pero todos los principales navegadores lo admiten.

### Propiedades del objeto de ubicación

| Propiedad | Descripción | | ---------- | -------------------------------------- ------------------- | | hash | Establece o devuelve la parte de anclaje (#) de una URL | | host | Establece o devuelve el nombre de host y el número de puerto de una URL | | nombre de host | Establece o devuelve el nombre de host de una URL | | href | Establece o devuelve la URL completa | | origen | Devuelve el protocolo, nombre de host y número de puerto de una URL | | nombre de ruta | Establece o devuelve el nombre de ruta de una URL | | puerto | Establece o devuelve el número de puerto de una URL | | protocolo | Establece o devuelve el protocolo de una URL | | búsqueda | Establece o devuelve la parte de la cadena de consulta de una URL |

### Métodos de localización de objetos

| Método | Descripción | | ----------- | ------------------------------------- --------- | | asignar () | Carga un nuevo documento | | recargar () | Recarga el documento actual | | reemplazar () | Sustituye el documento actual por uno nuevo |

### Ejemplos

Los objetos de ubicación son accesibles por:

```javascript
    console.log(window.location); 
    // > https://guide.freecodecamp.org/javascript/location-object 
    console.log(document.location); 
    // > https://guide.freecodecamp.org/javascript/location-object 
```

También puede configurar el objeto Ubicación de un elemento HTML `<a>` o un elemento HTML `<area>` programación con JavaScript.

```javascript
    var anchor = document.createElement('a'); 
    anchor.url = "https://guide.freecodecamp.org/javascript/location-object"; 
```

Una vez que tenga un objeto con un conjunto de URL (incluida la ventana), la API de ubicación le permite acceder a partes de la URL.

```javascript
    console.log(anchor.protocol); 
    // > https: 
    console.log(anchor.host); 
    // > guide.freecodecamp.org (includes port number if applicable. Example: guide.freecodecamp.org:8080) 
```

Otras propiedades de "Ubicación" a las que puede acceder son:

*   `anchor.hostname` - _guide.freecodecamp.org_
*   `anchor.port` - _8080_
*   `anchor.pathname` - _/ javascript / location-object_
*   `anchor.origin` - _https://developer.mozilla.org_

Si su URL contiene parámetros o hashes, puede acceder a ellos de la siguiente manera:

```javascript
    // If your URL is https://guide.freecodecamp.org/javascript?param=location#other-properties 
    console.log(window.location.search); 
    // > "?param=location" 
    console.log(document.location.hash); 
    // > "#other-properties" 
```

#### Más información:

[W3C - Objeto de ubicación](https://www.w3schools.com/jsref/obj_location.asp) [Ubicación](https://developer.mozilla.org/en-US/docs/Web/API/Location)