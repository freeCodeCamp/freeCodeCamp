---
title: Onclick Event Attribute
localeTitle: Onclick atributo de evento
---
## Onclick atributo de evento

Cuando se hace clic en el elemento se dispara un evento.

Funciona igual que el _método onclick_ o `addEventListener('click')` al elemento.

```html

<element onclick="event"></element> 
```

> `event` puede ser una función de JavaScript o puede escribir JavaScript en bruto

### Ejemplos

Cambiar el color de un elemento `<p>` al hacer clic

```html

<p id="text" onclick="redify()">Change my color</p> 
 
 <script> 
 function redify(){ 
  let text = document.querySelector('#text'); 
  text.style.color = "red"; 
 } 
 </script> 
```

Usando el atributo onclick en bruto de JavaScript:

```html

<button onclick="alert('Hello')">Hello World</button> 
```

#### Más información:

*   [MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onclick)