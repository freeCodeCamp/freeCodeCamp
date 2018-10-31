---
id: a39963a4c10bc8b4d4f06d7e
title: Seek and Destroy
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Найти и уничтожить
---

## Description
<section id="description"> Вам будет предоставлен исходный массив (первый аргумент в функции эсминца), за которым следуют один или несколько аргументов. Удалите все элементы из исходного массива, которые имеют такое же значение, что и эти аргументы. <strong>Заметка</strong> <br> Вы должны использовать объект <code>arguments</code> . Не забудьте использовать <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Напишите свой собственный код. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>destroyer([1, 2, 3, 1, 2, 3], 2, 3)</code> должен вернуться <code>[1, 1]</code> .'
    testString: 'assert.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1], "<code>destroyer([1, 2, 3, 1, 2, 3], 2, 3)</code> should return <code>[1, 1]</code>.");'
  - text: '<code>destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)</code> должен вернуться <code>[1, 5, 1]</code> .'
    testString: 'assert.deepEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1], "<code>destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)</code> should return <code>[1, 5, 1]</code>.");'
  - text: '<code>destroyer([3, 5, 1, 2, 2], 2, 3, 5)</code> должен вернуться <code>[1]</code> .'
    testString: 'assert.deepEqual(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1], "<code>destroyer([3, 5, 1, 2, 2], 2, 3, 5)</code> should return <code>[1]</code>.");'
  - text: '<code>destroyer([2, 3, 2, 3], 2, 3)</code> должен вернуться <code>[]</code> .'
    testString: 'assert.deepEqual(destroyer([2, 3, 2, 3], 2, 3), [], "<code>destroyer([2, 3, 2, 3], 2, 3)</code> should return <code>[]</code>.");'
  - text: '<code>destroyer([&quot;tree&quot;, &quot;hamburger&quot;, 53], &quot;tree&quot;, 53)</code> должен вернуться <code>[&quot;hamburger&quot;]</code> .'
    testString: 'assert.deepEqual(destroyer(["tree", "hamburger", 53], "tree", 53), ["hamburger"], "<code>destroyer(["tree", "hamburger", 53], "tree", 53)</code> should return <code>["hamburger"]</code>.");'
  - text: '<code>destroyer([&quot;possum&quot;, &quot;trollo&quot;, 12, &quot;safari&quot;, &quot;hotdog&quot;, 92, 65, &quot;grandma&quot;, &quot;bugati&quot;, &quot;trojan&quot;, &quot;yacht&quot;], &quot;yacht&quot;, &quot;possum&quot;, &quot;trollo&quot;, &quot;safari&quot;, &quot;hotdog&quot;, &quot;grandma&quot;, &quot;bugati&quot;, &quot;trojan&quot;)</code> должны вернуться <code>[12,92,65]</code> .'
    testString: 'assert.deepEqual(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"), [12,92,65], "<code>destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")</code> should return <code>[12,92,65]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function destroyer(arr) {
  // Remove all the values
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
