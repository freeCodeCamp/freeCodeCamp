---
title: HTML DOM getElementById Method
localeTitle: Метод HTML DOM getElementById
---
Метод `getElementById()` возвращает элемент с атрибутом id с указанным значением. Он принимает один аргумент, который представляет собой чувствительную к регистру строку идентификатора для нужного элемента.

Этот метод является одним из наиболее распространенных методов в HTML DOM и используется почти каждый раз, когда вы хотите манипулировать или получать информацию от элемента в вашем документе. Вот простой пример синтаксиса:

**Содержание HTML:**

```html

<div id="demo"></div> 
```

**Содержание JavaScript:**

```javascript
document.getElementById("demo"); // Returns the element with id "demo" 
```

Если у вас более одного элемента с одинаковым значением `id` (неверная практика!), `getElementById` вернет первый найденный элемент:

```html

<div id="demo">First</div> 
 <div id="demo">Second</div> 
```

```javascript
document.getElementById("demo"); // Returns the element with id "demo" containing 'First' 
```

#### Дополнительная информация:

[document.getElementById ()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

#### Альтернативные решения:

Обычно используемая альтернатива `document.getElementById` использует селектор jQuery, который вы читаете [здесь](https://github.com/freeCodeCamp/guides/tree/master/src/pages/jquery) .