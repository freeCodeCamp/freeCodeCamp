---
id: a103376db3ba46b2d50db289
challengeType: 5
forumTopicId: 16078
title: 短线连接格式
---

## Description
<section id='description'>
在这道题目中，我们需要写一个函数，把一个字符串转换为“短线连接格式”。短线连接格式的意思是，所有字母都是小写，且用<code>-</code>连接。比如，对于<code>Hello World</code>，应该转换为<code>hello-world</code>；对于<code>I love_Javascript-VeryMuch</code>，应该转换为<code>i-love-javascript-very-much</code>。
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
    testString: assert.deepEqual(spinalCase("This Is Spinal Tap"), "this-is-spinal-tap");
  - text: "<code>spinalCase('thisIsSpinal<wbr>Tap')</code>应该返回<code>'this-is-spinal-tap'</code>。"
    testString: assert.strictEqual(spinalCase('thisIsSpinalTap'), "this-is-spinal-tap");
  - text: "<code>spinalCase('The_Andy_<wbr>Griffith_Show')</code>应该返回<code>'the-andy-griffith-show'</code>。"
    testString: assert.strictEqual(spinalCase("The_Andy_Griffith_Show"), "the-andy-griffith-show");
  - text: "<code>spinalCase('Teletubbies say Eh-oh')</code>应该返回<code>'teletubbies-say-eh-oh'</code>。"
    testString: assert.strictEqual(spinalCase("Teletubbies say Eh-oh"), "teletubbies-say-eh-oh");
  - text: "<code>spinalCase('AllThe-small Things')</code>应该返回<code>'all-the-small-things'</code>。"
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
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  return str.toLowerCase().replace(/\ |\_/g, '-');
}
```

</section>