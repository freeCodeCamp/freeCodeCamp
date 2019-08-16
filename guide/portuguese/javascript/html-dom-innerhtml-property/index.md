---
title: HTML Dom Innerhtml Property
localeTitle: Propriedade HTML Dom Innerhtml
---
## Propriedade HTML Dom Innerhtml

A propriedade `innerHTML` retorna o conteúdo HTML dentro de um elemento selecionado e também permite definir um novo conteúdo HTML.

**OBTER O CONTEÚDO DO ELEMENTO**

```html
<div id="demo"> 
  <p>Demo</p> 
 </div> 
```

```javascript
var element = document.getElementById("demo"); 
 console.log(element.innerHTML) //logs <p>Demo</p> 
```

**CONTEÚDO DO ELEMENTO DO ELEMENTO**

```html

<div id="demo"></div> 
```

```javascript
var element = document.getElementById("demo"); 
 element.innerHTML = "<div>Demo</div>"; 
```

O HTML agora será como

```html

<div id="demo"> 
  <div>Demo</div> 
 </div> 
```

**CONSIDERAÇÕES DE SEGURANÇA**

O valor definido como `innerHTML` deve vir de fontes confiáveis, pois o JavaScript colocará qualquer coisa dentro desse elemento e será executado como HTML simples.

Exemplo:

Definir um valor " `<script>alert();</script>` " fará com que a função "alert" () JavaScript seja acionada:

```javascript
var element = document.getElementById("demo"); 
 
 element.innerHTML = "<script>alert();</script>"; 
```

Esse tipo de ataque é chamado de [Cross Site Scripting ou XSS, abreviado](https://en.wikipedia.org/wiki/Cross-site_scripting) .

Esta é uma das formas mais comuns de cometer um ataque XSS. Se você quer aprender um pouco mais e aprender a se defender, [confira este recurso](https://xss-game.appspot.com/)
