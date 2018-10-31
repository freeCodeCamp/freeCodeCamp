---
id: adf08ec01beb4f99fc7a68f2
title: Falsy Bouncer
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Фальшивый вышибала
---

## Description
<section id="description"> Удалите все значения фальши из массива. Значения фальши в JavaScript - <code>false</code> , <code>null</code> , <code>0</code> , <code>&quot;&quot;</code> , <code>undefined</code> и <code>NaN</code> . Подсказка: попробуйте преобразовать каждое значение в логическое. Не забудьте использовать <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Напишите свой собственный код. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>bouncer([7, &quot;ate&quot;, &quot;&quot;, false, 9])</code> должен возвращать <code>[7, &quot;ate&quot;, 9]</code> .'
    testString: 'assert.deepEqual(bouncer([7, "ate", "", false, 9]), [7, "ate", 9], "<code>bouncer([7, "ate", "", false, 9])</code> should return <code>[7, "ate", 9]</code>.");'
  - text: '<code>bouncer([&quot;a&quot;, &quot;b&quot;, &quot;c&quot;])</code> должен возвращать <code>[&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]</code> .'
    testString: 'assert.deepEqual(bouncer(["a", "b", "c"]), ["a", "b", "c"], "<code>bouncer(["a", "b", "c"])</code> should return <code>["a", "b", "c"]</code>.");'
  - text: '<code>bouncer([false, null, 0, NaN, undefined, &quot;&quot;])</code> должен возвращать <code>[]</code> .'
    testString: 'assert.deepEqual(bouncer([false, null, 0, NaN, undefined, ""]), [], "<code>bouncer([false, null, 0, NaN, undefined, ""])</code> should return <code>[]</code>.");'
  - text: '<code>bouncer([1, null, NaN, 2, undefined])</code> должен возвращать <code>[1, 2]</code> .'
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
