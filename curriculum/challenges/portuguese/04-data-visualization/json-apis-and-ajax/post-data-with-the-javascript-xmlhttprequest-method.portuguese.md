---
id: 587d7faf367417b2b2512be9
title: Post Data with the JavaScript XMLHttpRequest Method
challengeType: 6
videoUrl: ''
localeTitle: Postar dados com o método JavaScript XMLHttpRequest
---

## Description
<section id="description"> Nos exemplos anteriores, você recebeu dados de um recurso externo. Você também pode enviar dados para um recurso externo, desde que esse recurso suporte solicitações AJAX e você saiba o URL. O método <code>XMLHttpRequest</code> do JavaScript também é usado para postar dados em um servidor. Aqui está um exemplo: <blockquote> req = new XMLHttpRequest (); <br> req.open (&quot;POST&quot;, url, true); <br> req.setRequestHeader (&#39;Content-Type&#39;, &#39;text / plain&#39;); <br> req.onreadystatechange = function () { <br> if (req.readyState == 4 &amp;&amp; req.status == 200) { <br> document.getElementsByClassName (&#39;message&#39;) [0] .innerHTML = req.responseText; <br> } <br> }; <br> req.send (userName); </blockquote> Você já viu vários desses métodos antes. Aqui, o método <code>open</code> inicializa a solicitação como um &quot;POST&quot; para a URL fornecida do recurso externo e usa o booleano <code>true</code> para torná-lo assíncrono. O método <code>setRequestHeader</code> define o valor de um cabeçalho de solicitação HTTP, que contém informações sobre o remetente e a solicitação. Deve ser chamado após o método <code>open</code> , mas antes do método <code>send</code> . Os dois parâmetros são o nome do cabeçalho e o valor a ser definido como o corpo desse cabeçalho. Em seguida, o ouvinte de evento <code>onreadystatechange</code> manipula uma alteração no estado da solicitação. Um <code>readyState</code> de 4 significa que a operação está completa e um <code>status</code> de 200 significa que foi uma solicitação bem-sucedida. O HTML do documento pode ser atualizado. Finalmente, o método <code>send</code> envia a solicitação com o valor <code>userName</code> , que foi dado pelo usuário no campo de <code>input</code> . </section>

## Instructions
<section id="instructions"> Atualize o código para criar e enviar uma solicitação &quot;POST&quot;. Em seguida, digite seu nome na caixa de entrada e clique em &quot;Enviar mensagem&quot;. Sua função AJAX substituirá &quot;Responder pelo servidor estará aqui&quot;. com a resposta do servidor. Neste caso, é o seu nome acrescentado com &quot;ama gatos&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve criar um novo <code>XMLHttpRequest</code> .
    testString: 'assert(code.match(/new\s+?XMLHttpRequest\(\s*?\)/g), "Your code should create a new <code>XMLHttpRequest</code>.");'
  - text: Seu código deve usar o método <code>open</code> para inicializar uma solicitação &quot;POST&quot; para o servidor.
    testString: 'assert(code.match(/\.open\(\s*?("|")POST\1\s*?,\s*?url\s*?,\s*?true\s*?\)/g), "Your code should use the <code>open</code> method to initialize a "POST" request to the server.");'
  - text: Seu código deve usar o método <code>setRequestHeader</code> .
    testString: 'assert(code.match(/\.setRequestHeader\(\s*?("|")Content-Type\1\s*?,\s*?("|")text\/plain\2\s*?\)/g), "Your code should use the <code>setRequestHeader</code> method.");'
  - text: Seu código deve ter um manipulador de eventos <code>onreadystatechange</code> definido para uma função.
    testString: 'assert(code.match(/\.onreadystatechange\s*?=/g), "Your code should have an <code>onreadystatechange</code> event handler set to a function.");'
  - text: Seu código deve obter o elemento com <code>message</code> classe e alterar seu HTML interno para o <code>responseText</code> .
    testString: 'assert(code.match(/document\.getElementsByClassName\(\s*?("|")message\1\s*?\)\[0\]\.innerHTML\s*?=\s*?.+?\.responseText/g), "Your code should get the element with class <code>message</code> and change its inner HTML to the <code>responseText</code>.");'
  - text: Seu código deve usar o método <code>send</code> .
    testString: 'assert(code.match(/\.send\(\s*?userName\s*?\)/g), "Your code should use the <code>send</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('sendMessage').onclick=function(){

      var userName=document.getElementById('name').value;
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
<h1>Cat Friends</h1>
<p class="message">
  Reply from Server will be here
</p>
<p>
  <label for="name">Your name:
    <input type="text" id="name"/>
  </label>
  <button id="sendMessage">
    Send Message
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
