---
title: HTML5 Web Storage
localeTitle: Almacenamiento web HTML5
---
## Almacenamiento web HTML5

El almacenamiento web permite que las aplicaciones web almacenen hasta 5 MB de información en el almacenamiento del navegador por origen (por dominio y protocolo).

### Tipos de almacenamiento web

Hay dos objetos para almacenar datos en el cliente:

`window.localStorage` : almacena datos sin fecha de caducidad y vive hasta que se eliminan.

```javascript
// Store Item 
 localStorage.setItem("foo", "bar"); 
 
 // Get Item 
 localStorage.getItem("foo"); //returns "bar" 
```

`window.sessionStorage` : almacena datos para una sesión, donde los datos se pierden cuando se cierra la pestaña navegador / navegador.

```javascript
// Store Item 
 sessionStorage.setItem("foo", "bar"); 
 
 // Get Item 
 sessionStorage.getItem("foo"); //returns "bar" 
```

Dado que la implementación actual solo admite asignaciones de cadena a cadena, debe serializar y deserializar otras estructuras de datos.

Puede hacerlo utilizando JSON.stringify () y JSON.parse ().

Por ejemplo, para el JSON dado
```
var jsonObject = { 'one': 1, 'two': 2, 'three': 3 }; 
```

Primero convertimos el objeto JSON en cadena y guardamos en el almacenamiento local:
```
localStorage.setItem('jsonObjectString', JSON.stringify(jsonObject)); 
```

Para obtener el objeto JSON de la cadena almacenada en el almacenamiento local:
```
var jsonObject = JSON.parse(localStorage.getItem('jsonObjectString')); 
```

#### Más información:

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) [Rocas HTML5](https://www.html5rocks.com/en/features/storage) [Escuelas w3](https://www.w3schools.com/html/html5_webstorage.asp)