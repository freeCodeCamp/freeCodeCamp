---
id: 587d7db5367417b2b2512b94
title: Match Anything with Wildcard Period
challengeType: 1
videoUrl: ''
localeTitle: Combinar qualquer coisa com o período curinga
---

## Description
<section id="description"> Às vezes você não conhece (ou não precisa) os caracteres exatos em seus padrões. Pensar em todas as palavras que combinam, digamos, um erro ortográfico levaria muito tempo. Felizmente, você pode economizar tempo usando o caractere curinga: <code>.</code> O caractere curinga <code>.</code> irá corresponder a qualquer caractere. O curinga também é chamado de <code>dot</code> e <code>period</code> . Você pode usar o caractere curinga como qualquer outro caractere na regex. Por exemplo, se você quisesse combinar <code>&quot;hug&quot;</code> , <code>&quot;huh&quot;</code> , <code>&quot;hut&quot;</code> e <code>&quot;hum&quot;</code> , você pode usar o regex <code>/hu./</code> para combinar todas as quatro palavras. <blockquote> humStr = &quot;Vou cantarolar uma canção&quot;; <br> deixe hugStr = &quot;Bear hug&quot;; <br> vamos huRegex = /hu./; <br> humStr.match (huRegex); // Retorna [&quot;hum&quot;] <br> hugStr.match (huRegex); // Retorna [&quot;abraço&quot;] </blockquote></section>

## Instructions
<section id="instructions"> Complete o regex <code>unRegex</code> para que ele corresponda às strings <code>&quot;run&quot;</code> , <code>&quot;sun&quot;</code> , <code>&quot;fun&quot;</code> , <code>&quot;pun&quot;</code> , <code>&quot;nun&quot;</code> e <code>&quot;bun&quot;</code> . Seu regex deve usar o caractere curinga. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Você deve usar o método <code>.test()</code> .
    testString: 'assert(code.match(/\.test\(.*\)/), "You should use the <code>.test()</code> method.");'
  - text: Você deve usar o caractere curinga em seu regex <code>unRegex</code>
    testString: 'assert(/\./.test(unRegex.source), "You should use the wildcard character in your regex <code>unRegex</code>");'
  - text: Seu regex <code>unRegex</code> deve combinar <code>&quot;run&quot;</code> em <code>&quot;Let us go on a run.&quot;</code>
    testString: 'assert(unRegex.test("Let us go on a run."), "Your regex <code>unRegex</code> should match <code>"run"</code> in <code>"Let us go on a run."</code>");'
  - text: Seu regex <code>unRegex</code> deve combinar <code>&quot;sun&quot;</code> em <code>&quot;The sun is out today.&quot;</code>
    testString: 'assert(unRegex.test("The sun is out today."), "Your regex <code>unRegex</code> should match <code>"sun"</code> in <code>"The sun is out today."</code>");'
  - text: Seu regex <code>unRegex</code> deve combinar <code>&quot;fun&quot;</code> em <code>&quot;Coding is a lot of fun.&quot;</code>
    testString: 'assert(unRegex.test("Coding is a lot of fun."), "Your regex <code>unRegex</code> should match <code>"fun"</code> in <code>"Coding is a lot of fun."</code>");'
  - text: Seu regex <code>unRegex</code> deve combinar <code>&quot;pun&quot;</code> em <code>&quot;Seven days without a pun makes one weak.&quot;</code>
    testString: 'assert(unRegex.test("Seven days without a pun makes one weak."), "Your regex <code>unRegex</code> should match <code>"pun"</code> in <code>"Seven days without a pun makes one weak."</code>");'
  - text: Seu regex <code>unRegex</code> deve corresponder a <code>&quot;nun&quot;</code> em <code>&quot;One takes a vow to be a nun.&quot;</code>
    testString: 'assert(unRegex.test("One takes a vow to be a nun."), "Your regex <code>unRegex</code> should match <code>"nun"</code> in <code>"One takes a vow to be a nun."</code>");'
  - text: Seu regex <code>unRegex</code> deve coincidir com <code>&quot;bun&quot;</code> em <code>&quot;She got fired from the hot dog stand for putting her hair in a bun.&quot;</code>
    testString: 'assert(unRegex.test("She got fired from the hot dog stand for putting her hair in a bun."), "Your regex <code>unRegex</code> should match <code>"bun"</code> in <code>"She got fired from the hot dog stand for putting her hair in a bun."</code>");'
  - text: Seu regex <code>unRegex</code> não deve corresponder <code>&quot;There is a bug in my code.&quot;</code>
    testString: 'assert(!unRegex.test("There is a bug in my code."), "Your regex <code>unRegex</code> should not match <code>"There is a bug in my code."</code>");'
  - text: Seu regex <code>unRegex</code> não deve coincidir com <code>&quot;Catch me if you can.&quot;</code>
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
