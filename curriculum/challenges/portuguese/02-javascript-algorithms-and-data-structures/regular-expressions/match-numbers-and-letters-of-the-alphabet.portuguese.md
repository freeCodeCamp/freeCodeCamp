---
id: 587d7db5367417b2b2512b97
title: Match Numbers and Letters of the Alphabet
challengeType: 1
videoUrl: ''
localeTitle: Corresponder números e letras do alfabeto
---

## Description
<section id="description"> Usar o hífen ( <code>-</code> ) para corresponder a um intervalo de caracteres não está limitado a letras. Ele também funciona para corresponder a um intervalo de números. Por exemplo, <code>/[0-5]/</code> corresponde a qualquer número entre <code>0</code> e <code>5</code> , incluindo <code>0</code> e <code>5</code> . Além disso, é possível combinar um intervalo de letras e números em um único conjunto de caracteres. <blockquote> deixe jennyStr = &quot;Jenny8675309&quot;; <br> deixe myRegex = / [a-z0-9] / ig; <br> // combina todas as letras e números em jennyStr <br> jennyStr.match (myRegex); </blockquote></section>

## Instructions
<section id="instructions"> Crie um único regex que corresponda a um intervalo de letras entre <code>h</code> <code>s</code> e um intervalo de números entre <code>2</code> e <code>6</code> . Lembre-se de incluir os sinalizadores apropriados na regex. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex <code>myRegex</code> deve corresponder a 17 itens.
    testString: 'assert(result.length == 17, "Your regex <code>myRegex</code> should match 17 items.");'
  - text: Seu regex <code>myRegex</code> deve usar o sinalizador global.
    testString: 'assert(myRegex.flags.match(/g/).length == 1, "Your regex <code>myRegex</code> should use the global flag.");'
  - text: Seu regex <code>myRegex</code> deve usar o sinalizador insensível a maiúsculas e minúsculas.
    testString: 'assert(myRegex.flags.match(/i/).length == 1, "Your regex <code>myRegex</code> should use the case insensitive flag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
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
