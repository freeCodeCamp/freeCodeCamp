---
title: HTML DOM querySelector()
localeTitle: HTML DOM querySelector ()
---
Метод объекта Document `querySelector()` возвращает `первый` элемент в документе, который соответствует указанному селектору или группе селекторов. Если совпадений не найдено, возвращается null.

**Содержание HTML:**

```html

<div id="id-example"></div> 
 <div class="class-example"></div> 
 <a>element-example</a> 
```

**Содержание JavaScript:**

```javascript
document.querySelector("#id-example"); // Возвращает элемент с id "id-example" 
 document.querySelector(".class-example"); // Возвращает элемент с классом "class-example" 
 document.querySelector("a"); // Возвращает элемент "a" 
```

Заметим, что `querySelector()` возвращает первый соответствующий элемент, чтобы вернуть все совпадения, используйте метод querySelectorAll ().

```html

<div id="example">First</div> 
 <div id="example">Second</div> 
```

```javascript
document.querySelector("#example"); // Возвращает только элемент с содержанием 'First' 
```

#### Дополнительная информация:

[MDN - document.querySelector ()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
