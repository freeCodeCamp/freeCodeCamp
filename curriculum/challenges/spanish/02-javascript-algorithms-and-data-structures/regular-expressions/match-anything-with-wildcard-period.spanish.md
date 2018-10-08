---
id: 587d7db5367417b2b2512b94
title: Match Anything with Wildcard Period
localeTitle: Coincidir cualquier cosa con el período de comodín
challengeType: 1
---

## Description
<section id='description'> 
A veces no (o no es necesario) conocer los caracteres exactos en sus patrones. Pensar en todas las palabras que coinciden, por ejemplo, una falta de ortografía llevaría mucho tiempo. Por suerte, se puede ahorrar tiempo utilizando el carácter comodín: <code>.</code> 
El carácter comodín <code>.</code> coincidirá con cualquier personaje. El comodín es también llamado <code>dot</code> y <code>period</code> . Puede usar el carácter comodín como cualquier otro carácter en la expresión regular. Por ejemplo, si desea hacer coincidir <code>&quot;hug&quot;</code> , <code>&quot;huh&quot;</code> , <code>&quot;hut&quot;</code> y <code>&quot;hum&quot;</code> , puede usar la expresión regular <code>/hu./</code> para hacer coincidir las cuatro palabras. 
<blockquote>let humStr = "I'll hum a song";<br>let hugStr = "Bear hug";<br>let huRegex = /hu./;<br>humStr.match(huRegex); // Returns ["hum"]<br>hugStr.match(huRegex); // Returns ["hug"]</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Complete la expresión regular <code>unRegex</code> para que coincida con las cadenas <code>&quot;run&quot;</code> , <code>&quot;sun&quot;</code> , <code>&quot;fun&quot;</code> , <code>&quot;pun&quot;</code> , <code>&quot;nun&quot;</code> y <code>&quot;bun&quot;</code> . Su expresión regular debe utilizar el carácter comodín. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Deberías usar el método <code>.test()</code> .
    testString: 'assert(code.match(/\.test\(.*\)/), "You should use the <code>.test()</code> method.");'
  - text: Debe utilizar el carácter comodín en su expresión regular <code>unRegex</code>
    testString: 'assert(/\./.test(unRegex.source), "You should use the wildcard character in your regex <code>unRegex</code>");'
  - text: Su expresión regular <code>unRegex</code> debe coincidir con <code>&quot;run&quot;</code> en <code>&quot;Let us go on a run.&quot;</code>
    testString: 'assert(unRegex.test("Let us go on a run."), "Your regex <code>unRegex</code> should match <code>"run"</code> in <code>"Let us go on a run."</code>");'
  - text: Su expresión regular <code>unRegex</code> debe coincidir con <code>&quot;sun&quot;</code> en <code>&quot;The sun is out today.&quot;</code>
    testString: 'assert(unRegex.test("The sun is out today."), "Your regex <code>unRegex</code> should match <code>"sun"</code> in <code>"The sun is out today."</code>");'
  - text: Su expresión regular <code>unRegex</code> debe coincidir con <code>&quot;fun&quot;</code> en <code>&quot;Coding is a lot of fun.&quot;</code>
    testString: 'assert(unRegex.test("Coding is a lot of fun."), "Your regex <code>unRegex</code> should match <code>"fun"</code> in <code>"Coding is a lot of fun."</code>");'
  - text: Su expresión regular <code>unRegex</code> debe coincidir con <code>&quot;pun&quot;</code> en <code>&quot;Seven days without a pun makes one weak.&quot;</code>
    testString: 'assert(unRegex.test("Seven days without a pun makes one weak."), "Your regex <code>unRegex</code> should match <code>"pun"</code> in <code>"Seven days without a pun makes one weak."</code>");'
  - text: Tu expresión regular <code>unRegex</code> debe coincidir con <code>&quot;nun&quot;</code> en <code>&quot;One takes a vow to be a nun.&quot;</code>
    testString: 'assert(unRegex.test("One takes a vow to be a nun."), "Your regex <code>unRegex</code> should match <code>"nun"</code> in <code>"One takes a vow to be a nun."</code>");'
  - text: Tu regex <code>unRegex</code> debe coincidir con <code>&quot;bun&quot;</code> en <code>&quot;She got fired from the hot dog stand for putting her hair in a bun.&quot;</code>
    testString: 'assert(unRegex.test("She got fired from the hot dog stand for putting her hair in a bun."), "Your regex <code>unRegex</code> should match <code>"bun"</code> in <code>"She got fired from the hot dog stand for putting her hair in a bun."</code>");'
  - text: Su expresión regular <code>unRegex</code> no debe coincidir con <code>&quot;There is a bug in my code.&quot;</code>
    testString: 'assert(!unRegex.test("There is a bug in my code."), "Your regex <code>unRegex</code> should not match <code>"There is a bug in my code."</code>");'
  - text: Tu expresión regular <code>unRegex</code> no debe coincidir con <code>&quot;Catch me if you can.&quot;</code>
    testString: 'assert(!unRegex.test("Can me if you can."), "Your regex <code>unRegex</code> should not match <code>"Catch me if you can."</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
