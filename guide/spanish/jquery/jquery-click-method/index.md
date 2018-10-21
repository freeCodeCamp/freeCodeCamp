---
title: Click Method
localeTitle: Método de click
---
# Método de clic

El método jQuery Click activa una función cuando se hace clic en un elemento. La función se conoce como "manejador" porque maneja el evento click. Las funciones pueden afectar el elemento HTML que está vinculado al click utilizando el método jQuery Click, o pueden cambiar algo completamente. La forma más utilizada es:

```javascript
$("#clickMe").click(handler) 
```

El método de hacer click toma la función del controlador como un argumento y la ejecuta cada vez que se hace clic en el elemento `#clickMe` . La función de controlador recibe un parámetro conocido como [eventObject](http://api.jquery.com/Types/#Event) que puede ser útil para controlar la acción.

#### Ejemplos

Este código muestra una alerta cuando un usuario hace click en un botón:

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

#### Más formas de jugar con el método de click.

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

Al invocar el método de click sin una función de controlador se activa un evento de click:

```javascript
$("#alert").click(function () { 
  alert("Hi! I'm an alert"); 
 }); 
 
 $("#alert").click(); 
```

Ahora, cada vez que se carga la página, el evento de click se activará cuando ingresemos o recarguemos la página, y mostraremos la alerta asignada.

También debería preferir usar .on ('click', ...) sobre .click (...) porque el primero puede usar menos memoria y trabajar para elementos agregados dinámicamente.

[jsFiddle](https://jsfiddle.net/gspk6gxt/)

#### Errores comunes

El evento de click solo está vinculado a los elementos que se encuentran actualmente en el DOM en el momento de la vinculación, por lo que cualquier elemento que se agregue después no se vinculará. Atar todos Los elementos en el DOM, incluso si se crearán en un momento posterior, utilizan el método `.on()` .

Por ejemplo, este ejemplo de método de click:

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
