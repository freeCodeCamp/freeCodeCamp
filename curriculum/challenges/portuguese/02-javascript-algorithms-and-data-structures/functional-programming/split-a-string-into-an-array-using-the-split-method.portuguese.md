---
id: 587d7daa367417b2b2512b6b
title: Split a String into an Array Using the split Method
challengeType: 1
videoUrl: ''
localeTitle: Dividir uma string em uma matriz usando o método de divisão
---

## Description
<section id="description"> O método <code>split</code> divide uma string em uma matriz de strings. É necessário um argumento para o delimitador, que pode ser um caractere a ser usado para dividir a cadeia ou uma expressão regular. Por exemplo, se o delimitador for um espaço, você obterá uma matriz de palavras e, se o delimitador for uma cadeia vazia, você obterá uma matriz de cada caractere na cadeia. Aqui estão dois exemplos que dividem uma string por espaços, depois outra por dígitos usando uma expressão regular: <blockquote> var str = &quot;Olá mundo&quot;; <br> var bySpace = str.split (&quot;&quot;); <br> // Define bySpace para [&quot;Hello&quot;, &quot;World&quot;] <br><br> var otherString = &quot;How9are7you2today&quot;; <br> var byDigits = otherString.split (/ \ d /); <br> // Define byDigits como [&quot;How&quot;, &quot;are&quot;, &quot;you&quot;, &quot;today&quot;] </blockquote> Como as strings são imutáveis, o método <code>split</code> facilita o trabalho com elas. </section>

## Instructions
<section id="instructions"> Use o método <code>split</code> dentro da função <code>splitify</code> para dividir <code>str</code> em uma matriz de palavras. A função deve retornar a matriz. Observe que as palavras nem sempre são separadas por espaços e a matriz não deve conter pontuação. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve usar o método de <code>split</code> .
    testString: 'assert(code.match(/\.split/g), "Your code should use the <code>split</code> method.");'
  - text: '<code>splitify(&quot;Hello World,I-am code&quot;)</code> deve retornar <code>[&quot;Hello&quot;, &quot;World&quot;, &quot;I&quot;, &quot;am&quot;, &quot;code&quot;]</code> .'
    testString: 'assert(JSON.stringify(splitify("Hello World,I-am code")) === JSON.stringify(["Hello", "World", "I", "am", "code"]), "<code>splitify("Hello World,I-am code")</code> should return <code>["Hello", "World", "I", "am", "code"]</code>.");'
  - text: '<code>splitify(&quot;Earth-is-our home&quot;)</code> deve retornar <code>[&quot;Earth&quot;, &quot;is&quot;, &quot;our&quot;, &quot;home&quot;]</code> .'
    testString: 'assert(JSON.stringify(splitify("Earth-is-our home")) === JSON.stringify(["Earth", "is", "our", "home"]), "<code>splitify("Earth-is-our home")</code> should return <code>["Earth", "is", "our", "home"]</code>.");'
  - text: '<code>splitify(&quot;This.is.a-sentence&quot;)</code> deve retornar <code>[&quot;This&quot;, &quot;is&quot;, &quot;a&quot;, &quot;sentence&quot;]</code> .'
    testString: 'assert(JSON.stringify(splitify("This.is.a-sentence")) === JSON.stringify(["This", "is", "a", "sentence"]), "<code>splitify("This.is.a-sentence")</code> should return <code>["This", "is", "a", "sentence"]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function splitify(str) {
  // Add your code below this line


  // Add your code above this line
}
splitify("Hello World,I-am code");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
