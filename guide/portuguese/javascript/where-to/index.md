---
title: Where to
localeTitle: Para onde
---
## Para onde

JavaScript é a linguagem de programação do HTML e da Web. Em HTML, o JavaScript deve ser inserido na tag do contêiner `<script>` .

### Exemplo

```html

<script> 
  window.alert("This JavaScript Works!"); 
 </script> 
```

Além disso, lembre-se de que você pode colocar qualquer número de tags `<script>` em um documento HTML.

### Para onde vai a tag `<script>` ?

A tag `<script>` pode ser colocada no `<head>` ou no `<body>` .

### JavaScript no `<head>`

Neste exemplo, o JavaScript é colocado na seção `<head>` do documento. Uma função **onClicked** é criada, que é chamada quando um botão é pressionado.

```html

<!DOCTYPE html> 
 <html> 
 <head> 
 <script> 
 function onClicked() { 
    window.alert("Hi, there!"); 
 } 
 </script> 
 </head> 
 
 <body> 
 
 <h1>JavaScript Testing</h1> 
 <button type="button" onclick="onClicked()">Try it</button> 
 
 </body> 
 </html> 
```

### JavaScript no `<body>`

Aqui, o JavaScript é colocado no . A função **onClicked** é criada e está configurada para ser acionada quando o botão é clicado.

```html

<!DOCTYPE html> 
 <html> 
 <body> 
 
 <h1>JavaScript Testing</h1> 
 <button type="button" id="buttonClicked">Try it</button> 
 
 <script> 
 document.getElementById("buttonClicked").onclick = onClicked; 
 
 function onClicked() { 
    window.alert("Hi, there!"); 
 } 
 </script> 
 
 </body> 
 </html> 
```

### Scripts externos

Scripts também podem ser colocados em arquivos externos. Vamos criar um arquivo **script.js** .

##### script.js

```javascript
window.alert("Hi!"); 
```

Este script pode ser incluído em um documento HTML da seguinte forma:

```html

<!DOCTYPE html> 
 <html> 
 <body> 
 
 <script src="script.js"></script> 
 
 </body> 
 </html> 
```

_Oi!_ ainda será alertado quando a página for renderizada. Lembre-se, você não precisa incluir tags `<script>` em arquivos JavaScript (os arquivos que possuem a extensão **.js** ).

#### Mais Informações:

Yahoo recomenda colocar scripts na parte inferior. Isso é elaborado [aqui](https://developer.yahoo.com/performance/rules.html#js_bottom) , com o motivo dessa recomendação.