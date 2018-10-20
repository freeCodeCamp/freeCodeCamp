---
title: Click Method
localeTitle: Método de clic
---
# Método de clic

El método jQuery Click activa una función cuando se hace clic en un elemento. La función se conoce como "manejador" porque maneja el evento click. Funciones pueden afecte el elemento HTML que está vinculado al clic utilizando el método jQuery Click, o pueden cambiar algo completamente. La forma más utilizada es:

```javascript
$("#clickMe").click(handler) 
```

El método de hacer clic toma la función del controlador como un argumento y la ejecuta cada vez que se hace clic en el elemento `#clickMe` . La función de controlador recibe un parámetro conocido como [eventObject](http://api.jquery.com/Types/#Event) que puede ser útil para controlar la acción.

#### Ejemplos

Este código muestra una alerta cuando un usuario hace clic en un botón:

```html

<button id="alert">Click Here</button> 
```

```javascript
$("#alert").click(function () { 
  alert("Hi! I'm an alert"); 
 }); 
```

[jsFiddle](https://jsfiddle.net/pL63cL6m/)

El [eventObject](http://api.jquery.com/Types/#Event) tiene algunos métodos integrados, incluido `preventDefault()` , que hace exactamente lo que dice: se detiene El evento por defecto de un elemento. Aquí evitamos que la etiqueta de anclaje actúe como un enlace:

```html

<a id="myLink" href="www.google.com">Link to Google</a> 
```

```javascript
$("#myLink").click(function (event) { 
  event.preventDefault(); 
 }); 
```

[jsFiddle](https://jsfiddle.net/dy457gbh/)

#### Más formas de jugar con el método de clic.

La función de controlador también puede aceptar datos adicionales en forma de un objeto:

```javascript
jqueryElement.click(usefulInfo, handler) 
```

Los datos pueden ser de cualquier tipo.

```javascript
$("element").click({firstWord: "Hello", secondWord: "World"}, function(event){ 
    alert(event.data.firstWord); 
    alert(event.data.secondWord); 
 }); 
```

Al invocar el método de clic sin una función de controlador se activa un evento de clic:

```javascript
$("#alert").click(function () { 
  alert("Hi! I'm an alert"); 
 }); 
 
 $("#alert").click(); 
```

Ahora, cada vez que se carga la página, el evento de clic se activará cuando ingresemos o recarguemos la página, y mostraremos la alerta asignada.

También debería preferir usar .on ('clic', ...) sobre .click (...) porque el primero puede usar menos memoria y trabajar para elementos agregados dinámicamente.

[jsFiddle](https://jsfiddle.net/gspk6gxt/)

#### Errores comunes

El evento de clic solo está vinculado a los elementos que se encuentran actualmente en el DOM en el momento de la vinculación, por lo que cualquier elemento que se agregue después no se vinculará. Atar todo Los elementos en el DOM, incluso si se crearán en un momento posterior, utilizan el método `.on()` .

Por ejemplo, este ejemplo de método de clic:

```javascript
$( "element" ).click(function() { 
  alert("I've been clicked!"); 
 }); 
```

Se puede cambiar a esto en el ejemplo de método:

```javascript
$( document ).on("click", "element", function() { 
  alert("I've been clicked!"); 
 }); 
```

#### Más información:

Para obtener más información, visite el [sitio web oficial](https://api.jquery.com/click/#click) .