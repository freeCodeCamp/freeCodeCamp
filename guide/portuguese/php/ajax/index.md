---
title: AJAX
localeTitle: AJAX
---
## AJAX

**AJAX** significa **asynchronous JavaScript And XML** . Não é uma linguagem de programação. É uma tecnologia para desenvolver aplicativos da Web melhores, mais rápidos e interativos usando HTML, CSS, JavaScript e XML.

1.  HTML: Hypertext Markup Language (HTML) é usado para definir a estrutura de um aplicativo da Web.
2.  CSS: CSS (Cascading Style Sheet) é usado para fornecer aparência e estilo a um aplicativo da Web.
3.  JavaScript: JavaScript é usado para tornar um aplicativo da Web interativo, interessante e amigável.
4.  XML: Extensible Markup Language (XML) é um formato para armazenar e transportar dados do servidor da Web.

#### Qual é o significado de assíncrono no AJAX?

Assíncrono significa que o aplicativo da Web pode enviar e receber dados do servidor da Web sem atualizar a página. Esse processo em segundo plano de envio e recebimento de dados do servidor, juntamente com a atualização de diferentes seções de uma página da Web, define a propriedade / recurso Assíncrono do AJAX.

#### Como o **AJAX** funciona?

AJAX faz uso de um **objeto XMLHttpRequest** interno do navegador para solicitar dados de um servidor Web e **HTML DOM** para exibir ou usar os dados.

**Objeto XMLHttpRequest** : É uma API na forma de um objeto cujos métodos ajudam na transferência de dados entre um navegador da web e um servidor da web.

**DOM HTML** : Quando uma página da Web é carregada, o navegador cria um Modelo de Objeto de Documento da página.

![](https://cdn-media-1.freecodecamp.org/imgr/pfC7QFH.png "Como funciona o AJAX")

**Crie um objeto XMLHttpRequest:**

```javascript
var xhttp = new XMLHttpRequest(); 
```

**Propriedades do objeto XMLHttpRequest:**

`readystate` é uma propriedade do objeto XMLHttpRequest que contém o status do XMLHttpRequest.

*   0: pedido não inicializado
*   1: conexão do servidor estabelecida
*   2: pedido recebido
*   3: solicitação de processamento
*   4: pedido finalizado e resposta pronta

`onreadystatechange` é uma propriedade do objeto XMLHttpRequest que define uma função a ser chamada quando a propriedade readyState é alterada.  

`status` é uma propriedade do objeto XMLHttpRequest que retorna o número de status de uma solicitação

*   200: "OK"
*   403: "Proibido"
*   404 não encontrado"

**Métodos de objeto XMLHttpRequest:** Para enviar uma solicitação para um servidor da Web, usamos os métodos open () e send () do objeto XMLHttpRequest.

```javascript
xhttp.open("GET", "content.txt", true); 
 xhttp.send(); 
```

**Crie uma função changeContent () usando JavaScript:**

```javascript
function changeContent() { 
  var xhttp = new XMLHttpRequest(); 
  xhttp.onreadystatechange = function() { 
    if (this.readyState == 4 && this.status == 200) { 
     document.getElementById("foo").innerHTML = this.responseText; 
    } 
  }; 
  xhttp.open("GET", "content.txt", true); 
  xhttp.send(); 
 } 
```

**Exemplo de AJAX para alterar o conteúdo de uma página da web:**

```HTML
<!DOCTYPE html> 
 <html> 
 <body> 
 
 <div id="foo"> 
 <h2>The XMLHttpRequest Object</h2> 
 <button type="button" onclick="changeContent()">Change Content</button> 
 </div> 
 
 <script> 
 function changeContent() { 
  var xhttp = new XMLHttpRequest(); 
  xhttp.onreadystatechange = function() { 
    if (this.readyState == 4 && this.status == 200) { 
      document.getElementById("foo").innerHTML = 
      this.responseText; 
    } 
  }; 
  xhttp.open("GET", "content.txt", true); 
  xhttp.send(); 
 } 
 </script> 
 
 </body> 
 </html> 
```

O arquivo `content.txt` deve estar presente no diretório raiz do aplicativo da Web.

### Fontes

*   [W3Schools](https://www.w3schools.com/js/js_ajax_intro.asp)
*   [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)

### Outros recursos

*   [W3Schools](https://www.w3schools.com/js/js_ajax_intro.asp)
*   [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)