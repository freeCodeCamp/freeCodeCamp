---
title: HTML DOM querySelector()
localeTitle: HTML DOM querySelector ()
---
O método Documento `querySelector()` retorna o `first` Elemento dentro do documento que corresponde ao seletor especificado ou grupo de seletores. Se nenhuma correspondência for encontrada, será retornado nulo.

**Conteúdo HTML:**

```html

<div id="id-example"></div> 
 <div class="class-example"></div> 
 <a>element-example</a> 
```

**Conteúdo JavaScript:**

```javascript
document.querySelector("#id-example"); // Returns the element with id "id-example" 
 document.querySelector(".class-example"); // Returns the element with class "class-example" 
 document.querySelector("a"); // Returns the "a" element 
```

Nota `querySelector()` retorna o primeiro elemento correspondente, para retornar todas as correspondências, use o método querySelectorAll ().

```html

<div id="example">First</div> 
 <div id="example">Second</div> 
```

```javascript
document.querySelector("#example"); // Returns only the element containing 'First' 
```

#### Mais Informações:

[MDN - document.querySelector ()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)