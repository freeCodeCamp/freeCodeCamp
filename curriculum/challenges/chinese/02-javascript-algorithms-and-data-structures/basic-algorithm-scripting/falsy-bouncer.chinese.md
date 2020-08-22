---
id: adf08ec01beb4f99fc7a68f2
title: Falsy Bouncer
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Falsy Bouncer
---

## Description
<section id="description">从数组中删除所有有价值的值。 JavaScript中的Falsy值为<code>false</code> ， <code>null</code> ， <code>0</code> ， <code>&quot;&quot;</code> ， <code>undefined</code>和<code>NaN</code> 。提示：尝试将每个值转换为布尔值。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>bouncer([7, &quot;ate&quot;, &quot;&quot;, false, 9])</code>应该返回<code>[7, &quot;ate&quot;, 9]</code> 。'
    testString: assert.deepEqual(bouncer([7, "ate", "", false, 9]), [7, "ate", 9]);
  - text: '<code>bouncer([&quot;a&quot;, &quot;b&quot;, &quot;c&quot;])</code>应返回<code>[&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]</code> 。'
    testString: assert.deepEqual(bouncer(["a", "b", "c"]), ["a", "b", "c"]);
  - text: '<code>bouncer([false, null, 0, NaN, undefined, &quot;&quot;])</code>应返回<code>[]</code> 。'
    testString: assert.deepEqual(bouncer([false, null, 0, NaN, undefined, ""]), []);
  - text: '<code>bouncer([1, null, NaN, 2, undefined])</code>应该返回<code>[1, 2]</code> 。'
    testString: assert.deepEqual(bouncer([null, NaN, 1, 2, undefined]), [1, 2]);

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

/section>
