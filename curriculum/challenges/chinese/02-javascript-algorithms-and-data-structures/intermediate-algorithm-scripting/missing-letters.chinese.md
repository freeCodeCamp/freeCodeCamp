---
id: af7588ade1100bde429baf20
title: Missing letters
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 遗失的信件
---

## Description
<section id="description">在传递的字母范围内找到丢失的字母并将其返回。如果范围内存在所有字母，则返回undefined。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fearNotLetter(&quot;abce&quot;)</code>应返回“d”。
    testString: assert.deepEqual(fearNotLetter('abce'), 'd');
  - text: <code>fearNotLetter(&quot;abcdefghjklmno&quot;)</code>应该返回“i”。
    testString: assert.deepEqual(fearNotLetter('abcdefghjklmno'), 'i');
  - text: <code>fearNotLetter(&quot;stvwx&quot;)</code>应该返回“u”。
    testString: assert.deepEqual(fearNotLetter('stvwx'), 'u');
  - text: <code>fearNotLetter(&quot;bcdf&quot;)</code>应返回“e”。
    testString: assert.deepEqual(fearNotLetter('bcdf'), 'e');
  - text: <code>fearNotLetter(&quot;abcdefghijklmnopqrstuvwxyz&quot;)</code>应返回undefined。
    testString: assert.isUndefined(fearNotLetter('abcdefghijklmnopqrstuvwxyz'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fearNotLetter(str) {
  return str;
}

fearNotLetter("abce");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
