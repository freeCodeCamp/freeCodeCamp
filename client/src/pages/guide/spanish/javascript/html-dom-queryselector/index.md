---
title: HTML DOM querySelector()
localeTitle: HTML DOM querySelector ()
---
El método de documento `querySelector()` devuelve el `first` elemento dentro del documento que coincide con el selector o grupo de selectores especificado. Si no se encuentran coincidencias, se devuelve nulo.

**Contenido HTML:**

```html

<div id="id-example"></div> 
 <div class="class-example"></div> 
 <a>element-example</a> 
```

**Contenido de JavaScript:**

```javascript
document.querySelector("#id-example"); // Returns the element with id "id-example" 
 document.querySelector(".class-example"); // Returns the element with class "class-example" 
 document.querySelector("a"); // Returns the "a" element 
```

Tenga en cuenta que `querySelector()` devuelve el primer elemento coincidente, para devolver todas las coincidencias, use el método querySelectorAll () en su lugar.

```html

<div id="example">First</div> 
 <div id="example">Second</div> 
```

```javascript
document.querySelector("#example"); // Returns only the element containing 'First' 
```

#### Más información:

[MDN - document.querySelector ()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)