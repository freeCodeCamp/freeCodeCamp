---
id: ab306dbdcc907c7ddfc30830
title: Steamroller
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 压路机
---

## Description
<section id="description">展平嵌套数组。您必须考虑不同的嵌套级别。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>steamrollArray([[[&quot;a&quot;]], [[&quot;b&quot;]]])</code>应返回<code>[&quot;a&quot;, &quot;b&quot;]</code> 。'
    testString: assert.deepEqual(steamrollArray([[["a"]], [["b"]]]), ["a", "b"]);
  - text: '<code>steamrollArray([1, [2], [3, [[4]]]])</code>应该返回<code>[1, 2, 3, 4]</code> 。'
    testString: assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4]);
  - text: '<code>steamrollArray([1, [], [3, [[4]]]])</code>应该返回<code>[1, 3, 4]</code> 。'
    testString: assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4]);
  - text: '<code>steamrollArray([1, {}, [3, [[4]]]])</code>应返回<code>[1, {}, 3, 4]</code> 。'
    testString: assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4]);

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

/section>
