---
id: ab306dbdcc907c7ddfc30830
title: Steamroller
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: أجاز
---

## Description
<section id="description"> تسطيح مجموعة متداخلة. يجب عليك حساب مستويات مختلفة من التعشيش. تذكر استخدام <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> إذا واجهتك مشكلة. حاول إقران البرنامج. اكتب الكود الخاص بك. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>steamrollArray([[[&quot;a&quot;]], [[&quot;b&quot;]]])</code> <code>[&quot;a&quot;, &quot;b&quot;]</code> .'
    testString: 'assert.deepEqual(steamrollArray([[["a"]], [["b"]]]), ["a", "b"], "<code>steamrollArray([[["a"]], [["b"]]])</code> should return <code>["a", "b"]</code>.");'
  - text: '<code>steamrollArray([1, [2], [3, [[4]]]])</code> يجب أن تعود <code>[1, 2, 3, 4]</code> .'
    testString: 'assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4], "<code>steamrollArray([1, [2], [3, [[4]]]])</code> should return <code>[1, 2, 3, 4]</code>.");'
  - text: '<code>steamrollArray([1, [], [3, [[4]]]])</code> يجب أن تعود <code>[1, 3, 4]</code> .'
    testString: 'assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4], "<code>steamrollArray([1, [], [3, [[4]]]])</code> should return <code>[1, 3, 4]</code>.");'
  - text: '<code>steamrollArray([1, {}, [3, [[4]]]])</code> <code>[1, {}, 3, 4]</code> .'
    testString: 'assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4], "<code>steamrollArray([1, {}, [3, [[4]]]])</code> should return <code>[1, {}, 3, 4]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
