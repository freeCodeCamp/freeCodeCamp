---
title: Where to
localeTitle: A donde
---
## A donde

JavaScript es el lenguaje de programación de HTML y la web. En HTML, JavaScript debe insertarse en la etiqueta del contenedor `<script>` .

### Ejemplo

```html

<script> 
  window.alert("This JavaScript Works!"); 
 </script> 
```

Además, recuerde que puede colocar cualquier número de etiquetas `<script>` en un documento HTML.

### ¿A dónde va la etiqueta `<script>` ?

La etiqueta `<script>` se puede colocar en `<head>` o `<body>` .

### JavaScript en el `<head>`

En este ejemplo, el JavaScript se coloca en la sección `<head>` del documento. Se **crea** una función **onClicked** , que se llama cuando se presiona un botón.

```html

<!DOCTYPE html> 
 <html> 
 <head> 
 <script> 
 function onClicked() { 
    window.alert("Hi, there!"); 
 } 
 </script> 
 </head> 
 
 <body> 
 
 <h1>JavaScript Testing</h1> 
 <button type="button" onclick="onClicked()">Try it</button> 
 
 </body> 
 </html> 
```

### JavaScript en el `<body>`

Aquí, el JavaScript se coloca en el . La función **onClicked** se crea y se configura para **activarse** cuando se hace clic en el botón.

```html

<!DOCTYPE html> 
 <html> 
 <body> 
 
 <h1>JavaScript Testing</h1> 
 <button type="button" id="buttonClicked">Try it</button> 
 
 <script> 
 document.getElementById("buttonClicked").onclick = onClicked; 
 
 function onClicked() { 
    window.alert("Hi, there!"); 
 } 
 </script> 
 
 </body> 
 </html> 
```

### Scripts externos

Los scripts también se pueden colocar en archivos externos. Vamos a crear un archivo **script.js** .

##### script.js

```javascript
window.alert("Hi!"); 
```

Este script se puede incluir en un documento HTML como tal:

```html

<!DOCTYPE html> 
 <html> 
 <body> 
 
 <script src="script.js"></script> 
 
 </body> 
 </html> 
```

_¡Hola!_ aún será alertado cuando la página sea renderizada. Recuerde, no es necesario incluir etiquetas `<script>` en los archivos JavaScript (los archivos que tienen la extensión **.js** ).

#### Más información:

Yahoo recomienda colocar scripts en la parte inferior. Esto se elabora [aquí](https://developer.yahoo.com/performance/rules.html#js_bottom) , con el motivo de esta recomendación.