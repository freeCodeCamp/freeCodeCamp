---
title: Onclick Event Attribute
localeTitle: Atributo do Evento Onclick
---
## Atributo do Evento Onclick

Quando o elemento é clicado, é acionado um evento.

Funciona exatamente como o _método onclick_ ou o `addEventListener('click')` no elemento.

```html

<element onclick="event"></element> 
```

> `event` pode ser uma função JavaScript ou você pode escrever JavaScript bruto

### Exemplos

Alterando a cor de um elemento `<p>` quando clicado

```html

<p id="text" onclick="redify()">Change my color</p> 
 
 <script> 
 function redify(){ 
  let text = document.querySelector('#text'); 
  text.style.color = "red"; 
 } 
 </script> 
```

Usando o atributo onclick de JavaScript bruto:

```html

<button onclick="alert('Hello')">Hello World</button> 
```

#### Mais Informações:

*   [MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onclick)