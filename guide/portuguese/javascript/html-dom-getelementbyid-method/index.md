---
title: HTML DOM getElementById Method
localeTitle: Método getElementById do HTML DOM
---
O método `getElementById()` retorna o elemento que possui o atributo id com o valor especificado. É preciso um argumento, que é uma string com distinção entre maiúsculas e minúsculas para o elemento que você deseja.

Esse método é um dos métodos mais comuns no HTML DOM e é usado quase sempre que você deseja manipular ou obter informações de um elemento em seu documento. Aqui está um exemplo simples da sintaxe:

**Conteúdo HTML:**

```html

<div id="demo"></div> 
```

**Conteúdo JavaScript:**

```javascript
document.getElementById("demo"); // Returns the element with id "demo" 
```

Se você tiver mais de um elemento com o mesmo valor de `id` (má prática!), `getElementById` retornará o primeiro elemento encontrado:

```html

<div id="demo">First</div> 
 <div id="demo">Second</div> 
```

```javascript
document.getElementById("demo"); // Returns the element with id "demo" containing 'First' 
```

#### Mais Informações:

[document.getElementById ()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

#### Soluções alternativas:

Uma alternativa comumente usada para `document.getElementById` é usar um seletor jQuery sobre o qual você lê mais [aqui](https://github.com/freeCodeCamp/guides/tree/master/src/pages/jquery) .