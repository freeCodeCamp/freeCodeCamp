---
id: 587d7db4367417b2b2512b92
title: Extract Matches
challengeType: 1
videoUrl: ''
localeTitle: Extrair correspondências
---

## Description
<section id="description"> Até agora, você só verifica se um padrão existe ou não em uma string. Você também pode extrair as correspondências reais encontradas com o método <code>.match()</code> . Para usar o método <code>.match()</code> , aplique o método em uma string e passe o regex dentro dos parênteses. Aqui está um exemplo: <blockquote> &quot;Olá, mundo!&quot;. Match (/ Hello /); <br> // Retorna [&quot;Olá&quot;] <br> vamos ourStr = &quot;Expressões regulares&quot;; <br> vamos ourRegex = / expressões /; <br> ourStr.match (ourRegex); <br> // Retorna [&quot;expressões&quot;] </blockquote></section>

## Instructions
<section id="instructions"> Aplique o método <code>.match()</code> para extrair a <code>coding</code> palavras. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O <code>result</code> deve ter a palavra <code>coding</code>
    testString: 'assert(result.join() === "coding", "The <code>result</code> should have the word <code>coding</code>");'
  - text: Seu regex <code>codingRegex</code> deve procurar por <code>coding</code>
    testString: 'assert(codingRegex.source === "coding", "Your regex <code>codingRegex</code> should search for <code>coding</code>");'
  - text: Você deve usar o método <code>.match()</code> .
    testString: 'assert(code.match(/\.match\(.*\)/), "You should use the <code>.match()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
