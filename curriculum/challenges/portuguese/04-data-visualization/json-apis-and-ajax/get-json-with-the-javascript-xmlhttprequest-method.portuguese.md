---
id: 587d7fae367417b2b2512be3
title: Get JSON with the JavaScript XMLHttpRequest Method
challengeType: 6
videoUrl: ''
localeTitle: Obtenha o JSON com o método JavaScript XMLHttpRequest
---

## Description
<section id="description"> Você também pode solicitar dados de uma fonte externa. É aqui que entram as APIs. Lembre-se de que as APIs - ou Interfaces de Programação de Aplicativos - são ferramentas que os computadores usam para se comunicarem entre si. Você aprenderá a atualizar o HTML com os dados que obtemos das APIs usando uma tecnologia chamada AJAX. A maioria das APIs da web transfere dados em um formato chamado JSON. JSON significa JavaScript Object Notation. A sintaxe JSON é muito semelhante à notação literal do objeto JavaScript. O JSON tem propriedades de objeto e seus valores atuais, entre um <code>{</code> e um <code>}</code> . Essas propriedades e seus valores são geralmente chamados de &quot;pares de valor-chave&quot;. No entanto, o JSON transmitido por APIs é enviado como <code>bytes</code> e seu aplicativo o recebe como uma <code>string</code> . Estes podem ser convertidos em objetos JavaScript, mas eles não são objetos JavaScript por padrão. O método <code>JSON.parse</code> analisa a sequência e constrói o objeto JavaScript descrito por ela. Você pode solicitar o JSON da Cat Photo API do freeCodeCamp. Aqui está o código que você pode colocar no seu evento de clique para fazer isso: <blockquote> req = new XMLHttpRequest (); <br> req.open (&quot;GET&quot;, &#39;/ json / cats.json&#39;, true); <br> req.send (); <br> req.onload = function () { <br> json = JSON.parse (req.responseText); <br> document.getElementsByClassName (&#39;message&#39;) [0] .innerHTML = JSON.stringify (json); <br> }; </blockquote> Aqui está uma revisão do que cada peça está fazendo. O objeto JavaScript <code>XMLHttpRequest</code> possui várias propriedades e métodos usados ​​para transferir dados. Primeiro, uma instância do objeto <code>XMLHttpRequest</code> é criada e salva na variável <code>req</code> . Em seguida, o método <code>open</code> inicializa uma solicitação - este exemplo está solicitando dados de uma API, portanto, é uma solicitação &quot;GET&quot;. O segundo argumento para <code>open</code> é o URL da API da qual você está solicitando dados. O terceiro argumento é um valor booleano em que <code>true</code> faz dele uma solicitação assíncrona. O método <code>send</code> envia o pedido. Finalmente, o manipulador de eventos <code>onload</code> analisa os dados retornados e aplica o método <code>JSON.stringify</code> para converter o objeto JavaScript em uma string. Essa sequência é inserida como o texto da mensagem. </section>

## Instructions
<section id="instructions"> Atualize o código para criar e enviar uma solicitação &quot;GET&quot; para a FreeCodeCamp Cat Photo API. Em seguida, clique no botão &quot;Obter mensagem&quot;. Sua função AJAX substituirá o texto &quot;A mensagem irá para cá&quot; pela saída JSON bruta da API. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve criar um novo <code>XMLHttpRequest</code> .
    testString: 'assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g), "Your code should create a new <code>XMLHttpRequest</code>.");'
  - text: Seu código deve usar o método <code>open</code> para inicializar uma solicitação &quot;GET&quot; para a FreeCodeCamp Cat Photo API.
    testString: 'assert(code.match(/\.open\(\s*?("|")GET\1\s*?,\s*?("|")\/json\/cats\.json\2\s*?,\s*?true\s*?\)/g), "Your code should use the <code>open</code> method to initialize a "GET" request to the freeCodeCamp Cat Photo API.");'
  - text: Seu código deve usar o <code>send</code> método para enviar o pedido.
    testString: 'assert(code.match(/\.send\(\s*\)/g), "Your code should use the <code>send</code> method to send the request.");'
  - text: Seu código deve ter um manipulador de eventos <code>onload</code> configurado para uma função.
    testString: 'assert(code.match(/\.onload\s*=\s*function\(\s*?\)\s*?{/g), "Your code should have an <code>onload</code> event handler set to a function.");'
  - text: Seu código deve usar o método <code>JSON.parse</code> para analisar o <code>responseText</code> .
    testString: 'assert(code.match(/JSON\.parse\(.*\.responseText\)/g), "Your code should use the <code>JSON.parse</code> method to parse the <code>responseText</code>.");'
  - text: Seu código deve obter o elemento com <code>message</code> classe e alterar seu HTML interno para a string de dados JSON.
    testString: 'assert(code.match(/document\.getElementsByClassName\(\s*?("|")message\1\s*?\)\[0\]\.innerHTML\s*?=\s*?JSON\.stringify\(.+?\)/g), "Your code should get the element with class <code>message</code> and change its inner HTML to the string of JSON data.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick=function(){
      // Add your code below this line


      // Add your code above this line
    };
  });
</script>
<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>
<h1>Cat Photo Finder</h1>
<p class="message">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
