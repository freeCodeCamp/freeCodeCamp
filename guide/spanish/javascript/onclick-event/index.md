---
title: Onclick Event
localeTitle: Evento onclick
---
## Evento onclick

El evento `onclick` en JavaScript te permite como programador ejecutar una función cuando se hace clic en un elemento.

### Ejemplo

```javascript
<button onclick="myFunction()">Click me</button> 
 
 <script> 
  function myFunction() { 
    alert('Button was clicked!'); 
  } 
 </script> 
```

En el ejemplo simple anterior, cuando un usuario hace clic en el botón, verá una alerta en su navegador que muestra ¡ `Button was clicked!` clic en el botón `Button was clicked!` .

### Añadiendo `onclick` dinámicamente

El evento `onclick` también se puede agregar mediante programación a cualquier elemento usando el siguiente código en el siguiente ejemplo:

```javascript
<p id="foo">click on this element.</p> 
 
 <script> 
  var p = document.getElementById("foo"); // Find the paragraph element in the page 
  p.onclick = showAlert; // Add onclick function to element 
 
  function showAlert(event) { 
    alert("onclick Event triggered!"); 
  } 
 </script> 
```

### Nota

Es importante tener en cuenta que al usar onclick podemos agregar solo una función de escucha. Si desea agregar más, simplemente use addEventListener (), que es la forma preferida para agregar la escucha de eventos.

En el ejemplo anterior, cuando un usuario hace clic en el elemento de `paragraph` en el `html` , verá una alerta que muestra el `onclick Event triggered` en el clic.

### Prevenir la acción por defecto

Sin embargo, si adjuntamos `onclick` a los enlaces (HTML es `a` etiqueta) podríamos querer evitar que ocurra una acción predeterminada:

```javascript
<a href="https://guide.freecodecamp.org" onclick="myAlert()">Guides</a> 
 
 <script> 
  function myAlert(event) { 
    event.preventDefault(); 
    alert("Link was clicked but page was not open"); 
  } 
 </script> 
```

En el ejemplo anterior, evitamos el comportamiento predeterminado de `a` elemento (enlace de apertura) utilizando `event.preventDefault()` dentro de nuestra función de devolución de llamada `onclick` .

[MDN](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick)

#### Otros recursos

[jQuery .on () Adjunto al controlador de eventos](https://api.jquery.com/on/)