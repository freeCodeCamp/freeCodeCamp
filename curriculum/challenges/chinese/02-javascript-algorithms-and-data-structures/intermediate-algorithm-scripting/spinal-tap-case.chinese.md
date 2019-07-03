---
id: a103376db3ba46b2d50db289
title: Spinal Tap Case
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Spinal Tap Case
---

## Description
<section id='description'>
给出一个含有两个数字的数组，我们需要写一个函数，让它返回这两个数字间所有数字（包含这两个数字）的总和。
注意，较小数不一定总是出现在数组的第一个元素。
如果你遇到了问题，请点击<a href='https://forum.freecodecamp.one/t/topic/157' target='_blank'>帮助</a>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>spinalCase('This Is Spinal Tap')</code>应该返回<code>'this-is-spinal-tap'</code>。"
    testString: assert.deepEqual(spinalCase("This Is Spinal Tap"), "this-is-spinal-tap", '<code>spinalCase("This Is Spinal Tap")</code>应该返回<code>"this-is-spinal-tap"</code>。');
  - text: "<code>spinalCase('thisIsSpinal<wbr>Tap')</code>应该返回<code>'this-is-spinal-tap'</code>。"
    testString: assert.strictEqual(spinalCase('thisIsSpinalTap'), "this-is-spinal-tap", '<code>spinalCase("thisIsSpinal<wbr>Tap")</code>应该返回<code>"this-is-spinal-tap"</code>。');
  - text: "<code>spinalCase('The_Andy_<wbr>Griffith_Show')</code>应该返回<code>'the-andy-griffith-show'</code>。"
    testString: assert.strictEqual(spinalCase("The_Andy_Griffith_Show"), "the-andy-griffith-show", '<code>spinalCase("The_Andy_<wbr>Griffith_Show")</code>应该返回<code>"the-andy-griffith-show"</code>。');
  - text: "<code>spinalCase('Teletubbies say Eh-oh')</code>应该返回<code>'teletubbies-say-eh-oh'</code>。"
    testString: assert.strictEqual(spinalCase("Teletubbies say Eh-oh"), "teletubbies-say-eh-oh", '<code>spinalCase("Teletubbies say Eh-oh")</code>应该返回<code>"teletubbies-say-eh-oh"</code>。');
  - text: "<code>spinalCase('AllThe-small Things')</code>应该返回<code>'all-the-small-things'</code>。"
    testString: assert.strictEqual(spinalCase("AllThe-small Things"), "all-the-small-things", '<code>spinalCase("AllThe-small Things")</code>应该返回<code>"all-the-small-things"</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  return str.toLowerCase().replace(/\ |\_/g, '-');
}
```

</section>
              