---
id: acda2fb1324d9b0fa741e6b5
title: Confirm the Ending
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Confirm the Ending
---

## Description
<section id='description'>
将摄氏度转换为华氏度的算法为：摄氏度 × <code>9/5 + 32</code>
输入参数 <code>celsius</code> 代表一个摄氏温度值。请你根据上述转换公式，将已定义好的 <code>fahrenheit</code> 变量赋值为对应的华氏温度的值。
你不需要顾虑 function 和 return 语句，它们会在之后的挑战中予以介绍。现在，你只需要使用你已学过的运算符。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>confirmEnding('Bastian', 'n')</code> 应该返回 true。"
    testString: assert(confirmEnding("Bastian", "n") === true, '<code>confirmEnding("Bastian", "n")</code> 应该返回 true。');
  - text: "<code>confirmEnding('Congratulation', 'on')</code> 应该返回 true。"
    testString: assert(confirmEnding("Congratulation", "on") === true, '<code>confirmEnding("Congratulation", "on")</code> 应该返回 true。');
  - text: "<code>confirmEnding('Connor', 'n')</code> 应该返回 false。"
    testString: assert(confirmEnding("Connor", "n") === false, '<code>confirmEnding("Connor", "n")</code> 应该返回 false。');
  - text: "<code>confirmEnding('Walking on water and developing software from a specification are easy if both are frozen'&#44; 'specification'&#41;</code> 应该返回 false。"
    testString: assert(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") === false, '<code>confirmEnding("Walking on water and developing software from a specification are easy if both are frozen"&#44; "specification"&#41;</code> 应该返回 false。');
  - text: "<code>confirmEnding('He has to give me a new name', 'name')</code> 应该返回 true。"
    testString: assert(confirmEnding("He has to give me a new name", "name") === true, '<code>confirmEnding("He has to give me a new name", "name")</code> 应该返回 true。');
  - text: "<code>confirmEnding('Open sesame', 'same')</code> 应该返回 true。"
    testString: assert(confirmEnding("Open sesame", "same") === true, '<code>confirmEnding("Open sesame", "same")</code> 应该返回 true。');
  - text: "<code>confirmEnding('Open sesame', 'pen')</code> 应该返回 false。"
    testString: assert(confirmEnding("Open sesame", "pen") === false, '<code>confirmEnding("Open sesame", "pen")</code> 应该返回 false。');
  - text: "<code>confirmEnding('Open sesame', 'game')</code> 应该返回 false。"
    testString: assert(confirmEnding("Open sesame", "game") === false, '<code>confirmEnding("Open sesame", "game")</code> 应该返回 false。');
  - text: "<code>confirmEnding('If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing', 'mountain')</code> 应该返回 false。"
    testString: assert(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") === false, '<code>confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")</code> 应该返回 false。');
  - text: "<code>confirmEnding('Abstraction', 'action')</code> 应该返回 true。"
    testString: assert(confirmEnding("Abstraction", "action") === true, '<code>confirmEnding("Abstraction", "action")</code> 应该返回 true。');
  - text: 请不要用内置的 <code>.endsWith()</code> 方法来解决本挑战。
    testString: assert(!(/\.endsWith\(.*?\)\s*?;?/.test(code)) && !(/\['endsWith'\]/.test(code)), '请不要用内置的 <code>.endsWith()</code> 方法来解决本挑战。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

```

</section>
              