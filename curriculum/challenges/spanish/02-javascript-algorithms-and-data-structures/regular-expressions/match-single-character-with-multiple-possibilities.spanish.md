---
id: 587d7db5367417b2b2512b95
title: Match Single Character with Multiple Possibilities
localeTitle: Coincidir con un solo personaje con múltiples posibilidades
challengeType: 1
---

## Description
<section id='description'> 
Aprendió cómo hacer coincidir patrones literales ( <code>/literal/</code> ) y caracteres comodín ( <code>/./</code> ). Esos son los extremos de las expresiones regulares, donde uno encuentra coincidencias exactas y el otro todo. Hay opciones que son un equilibrio entre los dos extremos. 
Puede buscar un patrón literal con cierta flexibilidad con las <code>character classes</code> . Las clases de caracteres le permiten definir un grupo de caracteres que desea hacer coincidiendo colocándolos entre corchetes cuadrados ( <code>[</code> y <code>]</code> ). 
Por ejemplo, desea hacer coincidir <code>&quot;bag&quot;</code> , <code>&quot;big&quot;</code> y <code>&quot;bug&quot;</code> pero no <code>&quot;bog&quot;</code> . Puede crear la expresión regular <code>/b[aiu]g/</code> para hacer esto. La <code>[aiu]</code> es la clase de caracteres que solo coincidirá con los caracteres <code>&quot;a&quot;</code> , <code>&quot;i&quot;</code> o <code>&quot;u&quot;</code> . 
<blockquote>let bigStr = "big";<br>let bagStr = "bag";<br>let bugStr = "bug";<br>let bogStr = "bog";<br>let bgRegex = /b[aiu]g/;<br>bigStr.match(bgRegex); // Returns ["big"]<br>bagStr.match(bgRegex); // Returns ["bag"]<br>bugStr.match(bgRegex); // Returns ["bug"]<br>bogStr.match(bgRegex); // Returns null</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Use una clase de caracteres con vocales ( <code>a</code> , <code>e</code> , <code>i</code> , <code>o</code> , <code>u</code> ) en su regex <code>vowelRegex</code> para encontrar todas las vocales en la cadena <code>quoteSample</code> . 
<strong>Nota</strong> <br> Asegúrese de hacer coincidir las vocales mayúsculas y minúsculas. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Debes encontrar las 25 vocales.
    testString: 'assert(result.length == 25, "You should find all 25 vowels.");'
  - text: Su regex <code class = "notranslate"> vowelRegex </code> debe usar una clase de caracteres.
    testString: 'assert(/\[.*\]/.test(vowelRegex.source), "Your regex <code>vowelRegex</code> should use a character class.");'
  - text: Su regex <code class = "notranslate"> vowelRegex </code> debe usar la bandera global.
    testString: 'assert(vowelRegex.flags.match(/g/).length == 1, "Your regex <code>vowelRegex</code> should use the global flag.");'
  - text: Su regex <code class = "notranslate"> vowelRegex </code> debe usar la marca que no distingue entre mayúsculas y minúsculas.
    testString: 'assert(vowelRegex.flags.match(/i/).length == 1, "Your regex <code>vowelRegex</code> should use the case insensitive flag.");'
  - text: Su expresión regular no debe coincidir con ninguna consonante.
    testString: 'assert(!/[b-df-hj-np-tv-z]/gi.test(result.join()), "Your regex should not match any consonants.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
