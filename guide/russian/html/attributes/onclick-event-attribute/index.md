---
title: Onclick Event Attribute
localeTitle: Атрибут события Onclick
---
## Атрибут события Onclick

При щелчке элемента происходит событие.

Он работает так же, как _метод onclick_ или `addEventListener('click')` к элементу.

```html

<element onclick="event"></element> 
```

> `event` может быть функцией JavaScript или вы можете написать сырой JavaScript

### Примеры

Изменение цвета элемента `<p>` при нажатии

```html

<p id="text" onclick="redify()">Change my color</p> 
 
 <script> 
 function redify(){ 
  let text = document.querySelector('#text'); 
  text.style.color = "red"; 
 } 
 </script> 
```

Использование исходного атрибута JavaScript onclick:

```html

<button onclick="alert('Hello')">Hello World</button> 
```

#### Дополнительная информация:

*   [MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onclick)