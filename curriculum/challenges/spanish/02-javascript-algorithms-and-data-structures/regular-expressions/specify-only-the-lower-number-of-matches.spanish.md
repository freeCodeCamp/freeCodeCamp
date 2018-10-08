---
id: 587d7db9367417b2b2512ba6
title: Specify Only the Lower Number of Matches
localeTitle: Especifique solo el número inferior de coincidencias
challengeType: 1
---

## Description
<section id='description'> 
Puede especificar el número inferior y superior de patrones con <code>quantity specifiers</code> utilizando llaves. A veces solo desea especificar el número más bajo de patrones sin límite superior. 
Para especificar solo el número más bajo de patrones, mantenga el primer número seguido de una coma. 
Por ejemplo, para hacer coincidir solo la cadena <code>&quot;hah&quot;</code> con la letra <code>a</code> aparece al menos <code>3</code> veces, su expresión regular sería <code>/ha{3,}h/</code> . 
<blockquote>let A4 = "haaaah";<br>let A2 = "haah";<br>let A100 = "h" + "a".repeat(100) + "h";<br>let multipleA = /ha{3,}h/;<br>multipleA.test(A4); // Returns true<br>multipleA.test(A2); // Returns false<br>multipleA.test(A100); // Returns true</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Cambie el regex <code>haRegex</code> para que coincida con la palabra <code>&quot;Hazzah&quot;</code> solo cuando tenga cuatro o más letras <code>z</code> &#39;s. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su expresión regular debe utilizar llaves.
    testString: 'assert(haRegex.source.match(/{.*?}/).length > 0, "Your regex should use curly brackets.");'
  - text: Su expresión regular no debe coincidir con <code clase = "notranslate"> "Hazzah" </code>
    testString: 'assert(!haRegex.test("Hazzah"), "Your regex should not match <code>"Hazzah"</code>");'
  - text: Su expresión regular no debe coincidir con <code clase = "notranslate"> "Hazzzah" </code>
    testString: 'assert(!haRegex.test("Hazzzah"), "Your regex should not match <code>"Hazzzah"</code>");'
  - text: Su expresión regular debe coincidir con <code clase = "notranslate"> "Hazzzzah" </code>
    testString: 'assert(haRegex.test("Hazzzzah"), "Your regex should match <code>"Hazzzzah"</code>");'
  - text: Su expresión regular debe coincidir con <code class = "notranslate"> "Hazzzzzah" </code>
    testString: 'assert(haRegex.test("Hazzzzzah"), "Your regex should match <code>"Hazzzzzah"</code>");'
  - text: Su expresión regular debe coincidir con <code class = "notranslate"> "Hazzzzzzah" </code>
    testString: 'assert(haRegex.test("Hazzzzzzah"), "Your regex should match <code>"Hazzzzzzah"</code>");'
  - text: Su expresión regular debe coincidir con <code class = "notranslate"> "Hazzah" </code> con 30 <code class = "notranslate"> z </code> \ 's en ella.
    testString: 'assert(haRegex.test("Ha" + "z".repeat(30) + "ah"), "Your regex should match <code>"Hazzah"</code> with 30 <code>z</code>\"s in it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
