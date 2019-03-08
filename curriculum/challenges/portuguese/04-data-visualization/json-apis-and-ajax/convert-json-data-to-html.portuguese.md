---
id: 587d7fae367417b2b2512be5
title: Convert JSON Data to HTML
challengeType: 6
videoUrl: ''
localeTitle: Converter dados JSON em HTML
---

## Description
<section id="description"> Agora que você está obtendo dados de uma API JSON, é possível exibi-los no HTML. Você pode usar um método <code>forEach</code> para percorrer os dados, pois os objetos photo do cat são mantidos num array. Em cada item, você pode modificar os elementos HTML. Primeiro, declare uma variável html com <code>var html = &quot;&quot;;</code> . Em seguida, percorra o JSON, adicionando HTML à variável que encapsula os nomes das chaves em tags <code>strong</code> , seguida do valor. Quando o loop terminar, você o renderiza. Aqui está o código que faz isso: <blockquote> json.forEach (function (val) { <br> var keys = Object.keys (val); <br> html + = &quot;&lt;div class = &#39;cat&#39;&gt;&quot;; <br> keys.forEach (função (chave) { <br> html + = &quot;&lt;strong&gt;&quot; + chave + &quot;&lt;/ strong&gt;:&quot; + val [tecla] + &quot;&lt;br&gt;&quot;; <br> }); <br> html + = &quot;&lt;/ div&gt; &lt;br&gt;&quot;; <br> }); </blockquote></section>

## Instructions
<section id="instructions"> Adicione um método <code>forEach</code> para fazer um loop pelos dados JSON e crie os elementos HTML para os exibir. Aqui está um exemplo de JSON <blockquote> [ <br> { <br> &quot;id&quot;: 0, <br> &quot;imageLink&quot;: &quot;https://s3.amazonaws.com/freecodecamp/funny-cat.jpg&quot;, <br> &quot;altText&quot;: &quot;Um gato branco usando um capacete verde em forma de melão na cabeça.&quot;, <br> &quot;codeNames&quot;: [&quot;Juggernaut&quot;, &quot;Sra. Wallace&quot;, &quot;Buttercup&quot; <br> ] <br> } <br> ] </blockquote></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O seu código deve armazenar os dados na variável <code>html</code>
    testString: 'assert(code.match(/html\s+?(\+=|=\shtml\s\+)/g), "Your code should store the data in the <code>html</code> variable");'
  - text: O seu código deve usar um método <code>forEach</code> para executar um loop pelos dados JSON da API.
    testString: 'assert(code.match(/json\.forEach/g), "Your code should use a <code>forEach</code> method to loop over the JSON data from the API.");'
  - text: Seu código deve envolver os nomes das chaves em tags <code>strong</code> .
    testString: 'assert(code.match(/<strong>.+<\/strong>/g), "Your code should wrap the key names in <code>strong</code> tags.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('getMessage').onclick=function(){
      req=new XMLHttpRequest();
      req.open("GET",'/json/cats.json',true);
      req.send();
      req.onload=function(){
        json=JSON.parse(req.responseText);
        var html = "";
        // Add your code below this line



        // Add your code above this line
        document.getElementsByClassName('message')[0].innerHTML=html;
      };
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
