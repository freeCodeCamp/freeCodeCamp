---
id: 587d7db4367417b2b2512b90
challengeType: 1
forumTopicId: 301345
title: 同时用多种模式匹配文字字符串
---

## Description
<section id='description'>
使用正则表达式<code>/coding/</code>，你可以在其他字符串中查找<code>"coding"</code>。
这对于搜寻单个字符串非常有用，但仅限于一种匹配模式。你可以使用<code>|</code>操作符来匹配多个规则。
此操作符匹配操作符前面或后面的字符。例如，如果你想匹配<code>"yes"</code>或<code>"no"</code>，你需要的正则表达式是<code>/yes|no/</code>。
你还可以匹配多个规则，这可以通过添加更多的匹配模式来实现。这些匹配模式将包含更多的<code>|</code>操作符来分隔它们，比如<code>/yes|no|maybe/</code>。
</section>

## Instructions
<section id='instructions'>
完成正则表达式<code>petRegex</code>以匹配<code>"dog"</code>、<code>"cat"</code>、<code>"bird"</code>或者<code>"fish"</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "对于字符串<code>'John has a pet dog.'</code>，你的正则表达式<code>petRegex</code>的<code>test</code>方法应该返回<code>true</code>。"
    testString: assert(petRegex.test('John has a pet dog.'));
  - text: "对于字符串<code>'Emma has a pet rock.'</code>，你的正则表达式<code>petRegex</code>的<code>test</code>方法应该返回<code>false</code>。"
    testString: assert(!petRegex.test('Emma has a pet rock.'));
  - text: "对于字符串<code>'Emma has a pet bird.'</code>，你的正则表达式<code>petRegex</code>的<code>test</code>方法应该返回<code>true</code>。"
    testString: assert(petRegex.test('Emma has a pet bird.'));
  - text: "对于字符串<code>'Liz has a pet cat.'</code>，你的正则表达式<code>petRegex</code>的<code>test</code>方法应该返回<code>true</code>。"
    testString: assert(petRegex.test('Liz has a pet cat.'));
  - text: "对于字符串<code>'Kara has a pet dolphin.'</code>，你的正则表达式<code>petRegex</code>的<code>test</code>方法应该返回<code>false</code>。"
    testString: assert(!petRegex.test('Kara has a pet dolphin.'));
  - text: "对于字符串<code>'Alice has a pet fish.'</code>，你的正则表达式<code>petRegex</code>的<code>test</code>方法应该返回<code>true</code>。"
    testString: assert(petRegex.test('Alice has a pet fish.'));
  - text: "对于字符串<code>'Jimmy has a pet computer.'</code>，你的正则表达式<code>petRegex</code>的<code>test</code>方法应该返回<code>false</code>。"
    testString: assert(!petRegex.test('Jimmy has a pet computer.'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
```

</section>
