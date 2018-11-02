---
title: Onload Event
localeTitle: Evento de carga
---
## Evento de carga

El evento `onload` se utiliza para ejecutar una función de JavaScript inmediatamente después de que se haya cargado una página.

### Ejemplo:

```javascript
<body onload="myFunction()"> 
 
 <script> 
  function myFunction() { 
    alert('Page finished loading'); 
  } 
 </script> 
```

En el ejemplo anterior, tan pronto como la página web se haya cargado, se `myFunction` función `myFunction` , que muestra la alerta de `Page finished loading` la `Page finished loading` para el usuario.

El evento `onload` se usa con más frecuencia dentro del elemento `<body>` para ejecutar el script. Si se adjunta al `<body>` , el script se ejecutará una vez que la página web haya cargado completamente todo el contenido (imágenes, archivos de script, archivos CSS, etc.).

#### Más información:

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload)

#### Otros recursos

[jQuery .on () Adjunto al controlador de eventos](https://api.jquery.com/on/) [Desbordamiento de pila: window.onload vs. document.onload](https://stackoverflow.com/questions/588040/window-onload-vs-document-onload)