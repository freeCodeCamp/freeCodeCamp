---
id: a103376db3ba46b2d50db289
title: Spinal Tap Case
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Caja del grifo espinal
---

## Description
<section id="description"> Convertir una cadena a la caja espinal. El caso de la columna vertebral está compuesto por guiones en minúsculas. Recuerda usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> si te atascas. Trate de emparejar el programa. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>spinalCase(&quot;This Is Spinal Tap&quot;)</code> debe devolver <code>&quot;this-is-spinal-tap&quot;</code> .
    testString: 'assert.deepEqual(spinalCase("This Is Spinal Tap"), "this-is-spinal-tap", "<code>spinalCase("This Is Spinal Tap")</code> should return <code>"this-is-spinal-tap"</code>.");'
  - text: <code>spinalCase(&quot;thisIsSpinal Tap&quot;)</code> debe devolver <code>&quot;this-is-spinal-tap&quot;</code> .
    testString: 'assert.strictEqual(spinalCase("thisIsSpinalTap"), "this-is-spinal-tap", "<code>spinalCase("thisIsSpinal<wbr>Tap")</code> should return <code>"this-is-spinal-tap"</code>.");'
  - text: <code>spinalCase(&quot;The_Andy_ Griffith_Show&quot;)</code> debe devolver <code>&quot;the-andy-griffith-show&quot;</code> .
    testString: 'assert.strictEqual(spinalCase("The_Andy_Griffith_Show"), "the-andy-griffith-show", "<code>spinalCase("The_Andy_<wbr>Griffith_Show")</code> should return <code>"the-andy-griffith-show"</code>.");'
  - text: <code>spinalCase(&quot;Teletubbies say Eh-oh&quot;)</code> debería devolver <code>&quot;teletubbies-say-eh-oh&quot;</code> .
    testString: 'assert.strictEqual(spinalCase("Teletubbies say Eh-oh"), "teletubbies-say-eh-oh", "<code>spinalCase("Teletubbies say Eh-oh")</code> should return <code>"teletubbies-say-eh-oh"</code>.");'
  - text: <code>spinalCase(&quot;AllThe-small Things&quot;)</code> debería devolver <code>&quot;all-the-small-things&quot;</code> .
    testString: 'assert.strictEqual(spinalCase("AllThe-small Things"), "all-the-small-things", "<code>spinalCase("AllThe-small Things")</code> should return <code>"all-the-small-things"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str;
}

spinalCase('This Is Spinal Tap');

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
