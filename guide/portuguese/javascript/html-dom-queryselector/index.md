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
document.querySelector("#id-example"); // Retorna o elemento que contem o id "id-example" 
 document.querySelector(".class-example"); // Retorna o elemento que contem a classe "class-example"
 document.querySelector("a"); // Retorna o elemento "a"
```

Nota `querySelector()` retorna o primeiro elemento correspondente, para retornar todas as correspondências, use o método querySelectorAll ().

```html

<div id="example">First</div> 
 <div id="example">Second</div> 
```

```javascript
document.querySelector("#example"); // Retorna apenas o primeiro elemento com a id="example", no caso a div "First"
```

#### Mais Informações:

[MDN - document.querySelector ()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
