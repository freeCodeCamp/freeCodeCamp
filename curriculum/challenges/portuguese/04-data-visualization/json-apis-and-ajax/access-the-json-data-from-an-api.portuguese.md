---
id: 587d7fae367417b2b2512be4
title: Access the JSON Data from an API
challengeType: 6
videoUrl: ''
localeTitle: Acessar os dados JSON de uma API
---

## Description
<section id="description"> No desafio anterior, você viu como obter dados JSON da FreeCodeCamp Cat Photo API. Agora, você examinará mais de perto os dados retornados para entender melhor o formato JSON. Lembre-se de algumas notações em JavaScript: <blockquote> [] -&gt; colchetes representam uma matriz <br> {} -&gt; colchetes encaracolados representam um objeto <br> &quot;&quot; -&gt; Aspas duplas representam uma string. Eles também são usados ​​para nomes de chaves no JSON </blockquote> Compreender a estrutura dos dados que uma API retorna é importante porque influencia a maneira como você recupera os valores necessários. À direita, clique no botão &quot;Obter Mensagem&quot; para carregar o JSON da API do FreeCodeCamp Cat Photo no HTML. O primeiro e último caractere que você vê nos dados JSON são colchetes <code>[ ]</code> . Isso significa que os dados retornados são uma matriz. O segundo caractere nos dados JSON é um colchete <code>{</code> cruzado, que inicia um objeto. Olhando de perto, você pode ver que existem três objetos separados. Os dados JSON são uma matriz de três objetos, onde cada objeto contém informações sobre uma foto de gato. Você aprendeu anteriormente que os objetos contêm &quot;pares de valores-chave&quot; separados por vírgulas. No exemplo Cat Photo, o primeiro objeto tem <code>&quot;id&quot;:0</code> onde &quot;id&quot; é uma chave e 0 é seu valor correspondente. Da mesma forma, existem chaves para &quot;imageLink&quot;, &quot;altText&quot; e &quot;codeNames&quot;. Cada objeto de foto de gato tem essas mesmas chaves, mas com valores diferentes. Outro par &quot;chave-valor&quot; interessante no primeiro objeto é <code>&quot;codeNames&quot;:[&quot;Juggernaut&quot;,&quot;Mrs. Wallace&quot;,&quot;ButterCup&quot;]</code> . Aqui &quot;codeNames&quot; é a chave e seu valor é uma matriz de três strings. É possível ter matrizes de objetos, bem como uma chave com uma matriz como um valor. Lembre-se de como acessar dados em matrizes e objetos. Os arrays usam a notação de colchetes para acessar um índice específico de um item. Os objetos usam a notação entre colchetes ou pontos para acessar o valor de uma determinada propriedade. Aqui está um exemplo que imprime o &quot;altText&quot; da primeira foto do gato - note que os dados JSON analisados ​​no editor são salvos em uma variável chamada <code>json</code> : <blockquote> console.log (json [0] .altText); <br> // Prints &quot;Um gato branco usando um capacete verde em forma de melão na cabeça.&quot; </blockquote></section>

## Instructions
<section id="instructions"> Para o gato com o &quot;id&quot; de 2, imprima para o console o segundo valor na matriz <code>codeNames</code> . Você deve usar a notação de colchetes e pontos no objeto (que é salvo na variável <code>json</code> ) para acessar o valor. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar a notação de colchetes e pontos para acessar o nome de código adequado e imprimir "Loki" no console.
    testString: 'assert(code.match(/(?:json\[2\]\.codeNames\[1\]|json\[2\]\[("|")codeNames\1\]\[1\])/g), "Your code should use bracket and dot notation to access the proper code name, and print "Loki" to the console.");'

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
        document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(json);
        // Add your code below this line


        // Add your code above this line
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
