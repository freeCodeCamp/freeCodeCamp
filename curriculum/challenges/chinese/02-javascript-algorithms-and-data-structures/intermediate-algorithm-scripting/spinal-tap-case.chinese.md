---
id: a103376db3ba46b2d50db289
title: Spinal Tap Case
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 脊椎龙头套
---

## Description
<section id="description">将字符串转换为脊柱案例。脊柱情况是全小写单词连接的破折号。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>spinalCase(&quot;This Is Spinal Tap&quot;)</code>应该返回<code>&quot;this-is-spinal-tap&quot;</code> 。
    testString: assert.deepEqual(spinalCase("This Is Spinal Tap"), "this-is-spinal-tap");
  - text: <code>spinalCase(&quot;thisIsSpinal Tap&quot;)</code>应该返回<code>&quot;this-is-spinal-tap&quot;</code> 。
    testString: assert.strictEqual(spinalCase('thisIsSpinalTap'), "this-is-spinal-tap");
  - text: <code>spinalCase(&quot;The_Andy_ Griffith_Show&quot;)</code>应该返回<code>&quot;the-andy-griffith-show&quot;</code> 。
    testString: assert.strictEqual(spinalCase("The_Andy_Griffith_Show"), "the-andy-griffith-show");
  - text: <code>spinalCase(&quot;Teletubbies say Eh-oh&quot;)</code>应该返回<code>&quot;teletubbies-say-eh-oh&quot;</code> 。
    testString: assert.strictEqual(spinalCase("Teletubbies say Eh-oh"), "teletubbies-say-eh-oh");
  - text: <code>spinalCase(&quot;AllThe-small Things&quot;)</code>应该归还<code>&quot;all-the-small-things&quot;</code> 。
    testString: assert.strictEqual(spinalCase("AllThe-small Things"), "all-the-small-things");

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

/section>
