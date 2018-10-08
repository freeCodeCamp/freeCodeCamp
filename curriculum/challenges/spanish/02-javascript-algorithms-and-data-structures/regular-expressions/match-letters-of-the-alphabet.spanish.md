---
id: 587d7db5367417b2b2512b96
title: Match Letters of the Alphabet
localeTitle: Combina las letras del alfabeto
challengeType: 1
---

## Description
<section id='description'> 
Vio cómo puede usar los <code>character sets</code> para especificar un grupo de caracteres para hacer coincidir, pero eso es mucho para escribir cuando necesita hacer coincidir una gran variedad de caracteres (por ejemplo, todas las letras del alfabeto). Afortunadamente, hay una característica incorporada que hace que esto sea breve y simple. 
Dentro de un <code>character set</code> , puede definir un rango de caracteres para hacer coincidir usando un carácter de <code>hyphen</code> : <code>-</code> . 
Por ejemplo, para que coincida con las letras minúsculas <code>a</code> medio <code>e</code> que usaría <code>[ae]</code> . 
<blockquote>let catStr = "cat";<br>let batStr = "bat";<br>let matStr = "mat";<br>let bgRegex = /[a-e]at/;<br>catStr.match(bgRegex); // Returns ["cat"]<br>batStr.match(bgRegex); // Returns ["bat"]<br>matStr.match(bgRegex); // Returns null</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Coinciden con todas las letras en la cadena <code>quoteSample</code> . 
<strong>Nota</strong> <br> Asegúrese de hacer coincidir las <strong>letras</strong> mayúsculas y minúsculas <strong><strong>. <code>0</code></strong></strong> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su regex <code>alphabetRegex</code> debe coincidir con 35 elementos.
    testString: 'assert(result.length == 35, "Your regex <code>alphabetRegex</code> should match 35 items.");'
  - text: Su regex <code>alphabetRegex</code> debe usar la bandera global.
    testString: 'assert(alphabetRegex.flags.match(/g/).length == 1, "Your regex <code>alphabetRegex</code> should use the global flag.");'
  - text: Su regex <code>alphabetRegex</code> debe usar la bandera que no distingue entre mayúsculas y minúsculas.
    testString: 'assert(alphabetRegex.flags.match(/i/).length == 1, "Your regex <code>alphabetRegex</code> should use the case insensitive flag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex; // Change this line
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
