---
title: HTML DOM querySelector()
localeTitle: HTML DOM querySelector ()
---
Метод метода `querySelector()` возвращает `first` элемент в документе, который соответствует указанному селектору или группе селекторов. Если совпадений не найдено, возвращается null.

**Содержание HTML:**

```html

<div id="id-example"></div> 
 <div class="class-example"></div> 
 <a>element-example</a> 
```

**Содержание JavaScript:**

```javascript
document.querySelector("#id-example"); // Returns the element with id "id-example" 
 document.querySelector(".class-example"); // Returns the element with class "class-example" 
 document.querySelector("a"); // Returns the "a" element 
```

Примечание `querySelector()` возвращает первый соответствующий элемент, чтобы вернуть все совпадения, вместо этого используйте метод querySelectorAll ().

```html

<div id="example">First</div> 
 <div id="example">Second</div> 
```

```javascript
document.querySelector("#example"); // Returns only the element containing 'First' 
```

#### Дополнительная информация:

[MDN - document.querySelector ()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)