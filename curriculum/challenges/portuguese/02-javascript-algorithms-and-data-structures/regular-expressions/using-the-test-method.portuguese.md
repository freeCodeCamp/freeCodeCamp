---
id: 587d7db3367417b2b2512b8e
title: Using the Test Method
challengeType: 1
videoUrl: ''
localeTitle: Usando o método de teste
---

## Description
<section id="description"> Expressões regulares são usadas em linguagens de programação para corresponder partes de strings. Você cria padrões para ajudá-lo a fazer essa correspondência. Se você quiser encontrar a palavra <code>&quot;the&quot;</code> na string <code>&quot;The dog chased the cat&quot;</code> , você pode usar a seguinte expressão regular: <code>/the/</code> . Observe que as marcas de aspas não são necessárias na expressão regular. O JavaScript tem várias maneiras de usar regexes. Uma maneira de testar um regex é usando o método <code>.test()</code> . O método <code>.test()</code> pega o regex, aplica-o a uma string (que é colocada dentro dos parênteses) e retorna <code>true</code> ou <code>false</code> se o padrão encontrar algo ou não. <blockquote> deixe testStr = &quot;freeCodeCamp&quot;; <br> deixe testRegex = / Code /; <br> testRegex.test (testStr); <br> // Retorna true </blockquote></section>

## Instructions
<section id="instructions"> Aplique o regex <code>myRegex</code> na string <code>myString</code> usando o método <code>.test()</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Você deve usar <code>.test()</code> para testar o regex.
    testString: 'assert(code.match(/myRegex.test\(\s*myString\s*\)/), "You should use <code>.test()</code> to test the regex.");'
  - text: Seu resultado deve retornar <code>true</code> .
    testString: 'assert(result === true, "Your result should return <code>true</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
