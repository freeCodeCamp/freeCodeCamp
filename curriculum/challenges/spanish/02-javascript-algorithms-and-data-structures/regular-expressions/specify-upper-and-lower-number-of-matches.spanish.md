---
id: 587d7db9367417b2b2512ba5
title: Specify Upper and Lower Number of Matches
localeTitle: Especifique el número superior e inferior de coincidencias
challengeType: 1
---

## Description
<section id='description'> 
Recuerde que usa el signo más <code>+</code> para buscar uno o más caracteres y el asterisco <code>*</code> para buscar cero o más caracteres. Estos son convenientes, pero a veces usted quiere hacer coincidir un cierto rango de patrones. 
Puede especificar el número inferior y superior de patrones con <code>quantity specifiers</code> . Los especificadores de cantidad se utilizan con llaves ( <code>{</code> y <code>}</code> ). Pones dos números entre las llaves: para el número inferior y superior de patrones. 
Por ejemplo, para hacer coincidir solo la letra <code>a</code> aparece entre <code>3</code> y <code>5</code> veces en la cadena <code>&quot;ah&quot;</code> , su expresión regular sería <code>/a{3,5}h/</code> . 
<blockquote>let A4 = "aaaah";<br>let A2 = "aah";<br>let multipleA = /a{3,5}h/;<br>multipleA.test(A4); // Returns true<br>multipleA.test(A2); // Returns false</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Cambie el regex <code>ohRegex</code> para que coincida solo con <code>3</code> a <code>6</code> letras <code>h</code> en la palabra <code>&quot;Oh no&quot;</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su expresión regular debe utilizar llaves.
    testString: 'assert(ohRegex.source.match(/{.*?}/).length > 0, "Your regex should use curly brackets.");'
  - text: Su expresión regular no debe coincidir con <code clase = "notranslate"> "Ohh no" </code>
    testString: 'assert(!ohRegex.test("Ohh no"), "Your regex should not match <code>"Ohh no"</code>");'
  - text: Su expresión regular debe coincidir con <code clase = "notranslate"> "Ohhh no" </code>
    testString: 'assert(ohRegex.test("Ohhh no"), "Your regex should match <code>"Ohhh no"</code>");'
  - text: Su expresión regular debe coincidir con <code clase = "notranslate"> "Ohhhh no" </code>
    testString: 'assert(ohRegex.test("Ohhhh no"), "Your regex should match <code>"Ohhhh no"</code>");'
  - text: Su expresión regular debe coincidir con <code clase = "notranslate"> "Ohhhhh no" </code>
    testString: 'assert(ohRegex.test("Ohhhhh no"), "Your regex should match <code>"Ohhhhh no"</code>");'
  - text: Su expresión regular debe coincidir con <code clase = "notranslate"> "Ohhhhhh no" </code>
    testString: 'assert(ohRegex.test("Ohhhhhh no"), "Your regex should match <code>"Ohhhhhh no"</code>");'
  - text: Su expresión regular no debe coincidir con <code clase = "notranslate"> "Ohhhhhhh no" </code>
    testString: 'assert(!ohRegex.test("Ohhhhhhh no"), "Your regex should not match <code>"Ohhhhhhh no"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
