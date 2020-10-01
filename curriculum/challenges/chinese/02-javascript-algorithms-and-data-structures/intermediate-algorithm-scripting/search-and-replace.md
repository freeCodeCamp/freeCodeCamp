---
id: a0b5010f579e69b815e7c5d6
challengeType: 5
forumTopicId: 16045
title: 搜索和替换
---

## Description
<section id='description'>
在这道题目中，我们需要写一个字符串的搜索与替换函数，它的返回值为完成替换后的新字符串。
这个函数接收的第一个参数为待替换的句子。
第二个参数为句中需要被替换的单词。
第三个参数为替换后的单词。
<strong>注意：</strong><br> 你需要保留被替换单词首字母的大小写格式。即如果传入的第二个参数为 "Book"，第三个参数为 "dog"，那么替换后的结果应为 "Dog"
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
    testString: assert.deepEqual(myReplace("Let us go to the store", "store", "mall"), "Let us go to the mall");
  - text: "<code>myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')</code>应该返回 'He is Sitting on the couch'。"
    testString: assert.deepEqual(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is Sitting on the couch");
  - text: "<code>myReplace('This has a spellngi error', 'spellngi', 'spelling')</code>应该返回 'This has a spelling error'。"
    testString: assert.deepEqual(myReplace("This has a spellngi error", "spellngi", "spelling"), "This has a spelling error");
  - text: "<code>myReplace('His name is Tom', 'Tom', 'john')</code>应该返回 'His name is John'。"
    testString: assert.deepEqual(myReplace("His name is Tom", "Tom", "john"), "His name is John");
  - text: "<code>myReplace('Let us get back to more Coding', 'Coding', 'algorithms')</code>应该返回 'Let us get back to more Algorithms'。"
    testString: assert.deepEqual(myReplace("Let us get back to more Coding", "Coding", "algorithms"), "Let us get back to more Algorithms");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

</div>



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
