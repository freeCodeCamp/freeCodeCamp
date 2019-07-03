---
id: a0b5010f579e69b815e7c5d6
title: Search and Replace
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Search and Replace
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
  - text: "<code>myReplace('Let us go to the store', 'store', 'mall')</code>应该返回 'Let us go to the mall'。"
    testString: assert.deepEqual(myReplace("Let us go to the store", "store", "mall"), "Let us go to the mall", '<code>myReplace("Let us go to the store", "store", "mall")</code>应该返回 "Let us go to the mall"。');
  - text: "<code>myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')</code>应该返回 'He is Sitting on the couch'。"
    testString: assert.deepEqual(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is Sitting on the couch", '<code>myReplace("He is Sleeping on the couch", "Sleeping", "sitting")</code>应该返回 "He is Sitting on the couch"。');
  - text: "<code>myReplace('This has a spellngi error', 'spellngi', 'spelling')</code>应该返回 'This has a spelling error'。"
    testString: assert.deepEqual(myReplace("This has a spellngi error", "spellngi", "spelling"), "This has a spelling error", '<code>myReplace("This has a spellngi error", "spellngi", "spelling")</code>应该返回 "This has a spelling error"。');
  - text: "<code>myReplace('His name is Tom', 'Tom', 'john')</code>应该返回 'His name is John'。"
    testString: assert.deepEqual(myReplace("His name is Tom", "Tom", "john"), "His name is John", '<code>myReplace("His name is Tom", "Tom", "john")</code>应该返回 "His name is John"。');
  - text: "<code>myReplace('Let us get back to more Coding', 'Coding', 'algorithms')</code>应该返回 'Let us get back to more Algorithms'。"
    testString: assert.deepEqual(myReplace("Let us get back to more Coding", "Coding", "algorithms"), "Let us get back to more Algorithms", '<code>myReplace("Let us get back to more Coding", "Coding", "algorithms")</code>应该返回 "Let us get back to more Algorithms"。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

## Solution
<section id='solution'>

```js
function myReplace(str, before, after) {
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.substring(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}
```

</section>
              