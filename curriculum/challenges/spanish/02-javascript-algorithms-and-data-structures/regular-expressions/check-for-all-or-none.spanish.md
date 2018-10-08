---
id: 587d7dba367417b2b2512ba8
title: Check for All or None
localeTitle: Comprobar por todos o ninguno
challengeType: 1
---

## Description
<section id='description'> 
A veces, los patrones que desea buscar pueden tener partes que pueden o no existir. Sin embargo, puede ser importante verificarlos de todas formas. 
Puede especificar la posible existencia de un elemento con un signo de interrogación, <code>?</code> . Esto comprueba si hay cero o uno de los elementos anteriores. Puede pensar que este símbolo dice que el elemento anterior es opcional. 
Por ejemplo, hay ligeras diferencias entre el inglés americano y el británico y puede usar el signo de interrogación para hacer coincidir ambas ortografías. 
<blockquote>let american = "color";<br>let british = "colour";<br>let rainbowRegex= /colou?r/;<br>rainbowRegex.test(american); // Returns true<br>rainbowRegex.test(british); // Returns true</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Cambie el regex <code>favRegex</code> para que coincida con la versión del inglés americano (favorito) y del inglés británico (favorito) de la palabra. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39;Su expresión regular debe utilizar el símbolo opcional, <code>?</code> .
    testString: 'assert(favRegex.source.match(/\?/).length > 0, "Your regex should use the optional symbol, <code>?</code>.");'
  - text: Tu expresión regular debe coincidir con <code>&quot;favorite&quot;</code>
    testString: 'assert(favRegex.test("favorite"), "Your regex should match <code>"favorite"</code>");'
  - text: Tu expresión regular debe coincidir con <code>&quot;favourite&quot;</code>
    testString: 'assert(favRegex.test("favourite"), "Your regex should match <code>"favourite"</code>");'
  - text: Tu expresión regular no debe coincidir con <code>&quot;fav&quot;</code>
    testString: 'assert(!favRegex.test("fav"), "Your regex should not match <code>"fav"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
