---
id: adf08ec01beb4f99fc7a68f2
title: Falsy Bouncer
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: فلسى الحارس
---

## Description
<section id="description"> قم بإزالة كافة قيم الفالسة من صفيف. تكون قيم Falsy في JavaScript <code>false</code> و <code>null</code> و <code>0</code> و <code>&quot;&quot;</code> و <code>undefined</code> و <code>NaN</code> . تلميح: حاول تحويل كل قيمة إلى قيمة منطقية. تذكر استخدام <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> إذا واجهتك مشكلة. اكتب الكود الخاص بك. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>bouncer([7, &quot;ate&quot;, &quot;&quot;, false, 9])</code> يجب أن يعود <code>[7, &quot;ate&quot;, 9]</code> .'
    testString: 'assert.deepEqual(bouncer([7, "ate", "", false, 9]), [7, "ate", 9], "<code>bouncer([7, "ate", "", false, 9])</code> should return <code>[7, "ate", 9]</code>.");'
  - text: 'يجب أن تعود <code>bouncer([&quot;a&quot;, &quot;b&quot;, &quot;c&quot;])</code> <code>[&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]</code> .'
    testString: 'assert.deepEqual(bouncer(["a", "b", "c"]), ["a", "b", "c"], "<code>bouncer(["a", "b", "c"])</code> should return <code>["a", "b", "c"]</code>.");'
  - text: '<code>bouncer([false, null, 0, NaN, undefined, &quot;&quot;])</code> يجب أن يرجع <code>[]</code> .'
    testString: 'assert.deepEqual(bouncer([false, null, 0, NaN, undefined, ""]), [], "<code>bouncer([false, null, 0, NaN, undefined, ""])</code> should return <code>[]</code>.");'
  - text: '<code>bouncer([1, null, NaN, 2, undefined])</code> يجب أن يرجع <code>[1, 2]</code> .'
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
