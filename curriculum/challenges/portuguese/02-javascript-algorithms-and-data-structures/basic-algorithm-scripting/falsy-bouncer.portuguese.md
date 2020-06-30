---
id: adf08ec01beb4f99fc7a68f2
title: Falsy Bouncer
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Bouncer Falsy
---

## Description
<section id="description"> Remova todos os valores falsos de uma matriz. Os valores falsos em JavaScript são <code>false</code> , <code>null</code> , <code>0</code> , <code>&quot;&quot;</code> , <code>undefined</code> e <code>NaN</code> . Dica: tente converter cada valor em um booleano. Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>bouncer([7, &quot;ate&quot;, &quot;&quot;, false, 9])</code> deve retornar <code>[7, &quot;ate&quot;, 9]</code> .'
    testString: 'assert.deepEqual(bouncer([7, "ate", "", false, 9]), [7, "ate", 9], "<code>bouncer([7, "ate", "", false, 9])</code> should return <code>[7, "ate", 9]</code>.");'
  - text: '<code>bouncer([&quot;a&quot;, &quot;b&quot;, &quot;c&quot;])</code> deve retornar <code>[&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]</code> .'
    testString: 'assert.deepEqual(bouncer(["a", "b", "c"]), ["a", "b", "c"], "<code>bouncer(["a", "b", "c"])</code> should return <code>["a", "b", "c"]</code>.");'
  - text: '<code>bouncer([false, null, 0, NaN, undefined, &quot;&quot;])</code> deve retornar <code>[]</code> .'
    testString: 'assert.deepEqual(bouncer([false, null, 0, NaN, undefined, ""]), [], "<code>bouncer([false, null, 0, NaN, undefined, ""])</code> should return <code>[]</code>.");'
  - text: '<code>bouncer([1, null, NaN, 2, undefined])</code> deve retornar <code>[1, 2]</code> .'
    testString: 'assert.deepEqual(bouncer([1, null, NaN, 2, undefined]), [1, 2], "<code>bouncer([1, null, NaN, 2, undefined])</code> should return <code>[1, 2]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr;
}

bouncer([7, "ate", "", false, 9]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
