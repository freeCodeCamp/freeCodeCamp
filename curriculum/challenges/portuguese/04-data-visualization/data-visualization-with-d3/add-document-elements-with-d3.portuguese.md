---
id: 587d7fa6367417b2b2512bc2
title: Add Document Elements with D3
challengeType: 6
videoUrl: ''
localeTitle: Adicionar elementos do documento com D3
---

## Description
<section id="description"> O D3 possui vários métodos que permitem adicionar e alterar elementos no documento. O método <code>select()</code> seleciona um elemento do documento. Leva um argumento para o nome do elemento desejado e retorna um nó HTML para o primeiro elemento no documento que corresponde ao nome. Aqui está um exemplo: <code>const anchor = d3.select(&quot;a&quot;);</code> O exemplo acima encontra a primeira tag âncora na página e salva um nó HTML para ela na <code>anchor</code> da variável. Você pode usar a seleção com outros métodos. A parte &quot;d3&quot; do exemplo é uma referência ao objeto D3, que é como você acessa os métodos D3. Dois outros métodos úteis são <code>append()</code> e <code>text()</code> . O método <code>append()</code> recebe um argumento para o elemento que você deseja adicionar ao documento. Ele anexa um nó HTML a um item selecionado e retorna um identificador para esse nó. O método <code>text()</code> define o texto do nó selecionado ou obtém o texto atual. Para definir o valor, você passa uma string como um argumento dentro dos parênteses do método. Aqui está um exemplo que seleciona uma lista não ordenada, acrescenta um item de lista e adiciona texto: <blockquote> d3.select (&quot;ul&quot;) <br> .append (&quot;li&quot;) <br> .text (&quot;Item muito importante&quot;); </blockquote> O D3 permite encadear vários métodos em conjunto com períodos para executar várias ações seguidas. </section>

## Instructions
<section id="instructions"> Use o método <code>select</code> para selecionar a tag <code>body</code> no documento. Em seguida, <code>append</code> uma tag <code>h1</code> a ela e adicione o texto &quot;Learning D3&quot; no elemento <code>h1</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O <code>body</code> deve ter um elemento <code>h1</code> .
    testString: 'assert($("body").children("h1").length == 1, "The <code>body</code> should have one <code>h1</code> element.");'
  - text: O elemento <code>h1</code> deve ter o texto &quot;Aprendizagem D3&quot;.
    testString: 'assert($("h1").text() == "Learning D3", "The <code>h1</code> element should have the text "Learning D3" in it.");'
  - text: Seu código deve acessar o objeto <code>d3</code> .
    testString: 'assert(code.match(/d3/g), "Your code should access the <code>d3</code> object.");'
  - text: Seu código deve usar o método <code>select</code> .
    testString: 'assert(code.match(/\.select/g), "Your code should use the <code>select</code> method.");'
  - text: Seu código deve usar o método <code>append</code> .
    testString: 'assert(code.match(/\.append/g), "Your code should use the <code>append</code> method.");'
  - text: Seu código deve usar o método de <code>text</code> .
    testString: 'assert(code.match(/\.text/g), "Your code should use the <code>text</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    // Add your code below this line



    // Add your code above this line
  </script>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
