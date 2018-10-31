---
title: HTML Dom Innerhtml Property
localeTitle: HTML Dom Innerhtml Propiedad
---
## HTML Dom Innerhtml Propiedad

La propuesta `innerHTML` devuelve el contenido HTML dentro de un elemento seleccionado y también le permite definir un nuevo contenido HTML.

**_OBTENER CONTENIDO DE ELEMENTOS_**

```html

<div id="demo"> 
  <p>Demo</p> 
 </div> 
```

```javascript
var element = document.getElementById("demo"); 
 console.log(element.innerHTML) //logs <p>Demo</p> 
```

**_SET ELEMENTO CONTENIDO_**

```html

<div id="demo"></div> 
```

```javascript
var element = document.getElementById("demo"); 
 element.innerHTML = "<div>Demo</div>"; 
```

El HTML ahora será como

```html

<div id="demo"> 
  <div>Demo</div> 
 </div> 
```

**_CONSIDERACIONES DE SEGURIDAD_**

El valor establecido en `innerHTML` debe provenir de fuentes confiables, ya que Javascript colocará cualquier elemento dentro de ese elemento y se ejecutará como HTML simple.

Ejemplo:

Al establecer un valor de " `<script>alert();</script>` " se activará la función Javascript "alert ()":

```javascript
var element = document.getElementById("demo"); 
 
 element.innerHTML = "<script>alert();</script>"; 
```

Este tipo de ataque se llama [Cross Site Scripting, o XSS para abreviar](https://en.wikipedia.org/wiki/Cross-site_scripting) .

Esta es una de las formas más comunes de cometer un ataque XSS. Si quieres aprender un poco más y aprender a defenderte, [echa un vistazo a este recurso](https://xss-game.appspot.com/)