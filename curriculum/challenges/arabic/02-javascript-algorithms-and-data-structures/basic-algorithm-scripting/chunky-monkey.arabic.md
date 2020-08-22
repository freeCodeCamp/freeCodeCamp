---
id: a9bd25c716030ec90084d8a1
title: Chunky Monkey
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: قرد مكتنز
---

## Description
<section id="description"> اكتب دالة تقسم صفيف (أول وسيطة) إلى مجموعات طول <code>size</code> (وسيطة ثانية) وتقوم بإرجاعها كمصفوفة ثنائية الأبعاد. تذكر استخدام <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> إذا واجهتك مشكلة. اكتب الكود الخاص بك. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>chunkArrayInGroups([&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;], 2)</code> يجب أن ترجع <code>[[&quot;a&quot;, &quot;b&quot;], [&quot;c&quot;, &quot;d&quot;]]</code> .'
    testString: 'assert.deepEqual(chunkArrayInGroups(["a", "b", "c", "d"], 2), [["a", "b"], ["c", "d"]], "<code>chunkArrayInGroups(["a", "b", "c", "d"], 2)</code> should return <code>[["a", "b"], ["c", "d"]]</code>.");'
  - text: '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)</code> يجب أن تعود <code>[[0, 1, 2], [3, 4, 5]]</code> .'
    testString: 'assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]], "<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)</code> should return <code>[[0, 1, 2], [3, 4, 5]]</code>.");'
  - text: '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)</code> يجب أن ترجع <code>[[0, 1], [2, 3], [4, 5]]</code> .'
    testString: 'assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2), [[0, 1], [2, 3], [4, 5]], "<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)</code> should return <code>[[0, 1], [2, 3], [4, 5]]</code>.");'
  - text: '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)</code> return <code>[[0, 1, 2, 3], [4, 5]]</code> .'
    testString: 'assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]], "<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)</code> should return <code>[[0, 1, 2, 3], [4, 5]]</code>.");'
  - text: '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)</code> يجب أن تعود <code>[[0, 1, 2], [3, 4, 5], [6]]</code> .'
    testString: 'assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3), [[0, 1, 2], [3, 4, 5], [6]], "<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)</code> should return <code>[[0, 1, 2], [3, 4, 5], [6]]</code>.");'
  - text: '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)</code> يجب أن تعود <code>[[0, 1, 2, 3], [4, 5, 6, 7], [8]]</code> .'
    testString: 'assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), [[0, 1, 2, 3], [4, 5, 6, 7], [8]], "<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)</code> should return <code>[[0, 1, 2, 3], [4, 5, 6, 7], [8]]</code>.");'
  - text: '<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)</code> يجب أن تعود <code>[[0, 1], [2, 3], [4, 5], [6, 7], [8]]</code> .'
    testString: 'assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2), [[0, 1], [2, 3], [4, 5], [6, 7], [8]], "<code>chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)</code> should return <code>[[0, 1], [2, 3], [4, 5], [6, 7], [8]]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function chunkArrayInGroups(arr, size) {
  // Break it up.
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
