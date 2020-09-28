---
id: 587d7db9367417b2b2512ba4
title: Match Non-Whitespace Characters
challengeType: 1
forumTopicId: 18210
localeTitle: Совпадение символов без пробелов
---

## Description
<section id='description'>
Вы узнали о поиске пробельных с помощью <code>\s</code> , со строчной <code>s</code> . Вы также можете искать все, кроме пробелов. Поиск непробельных с помощью <code>\S</code> , который является прописной <code>s</code> . Этот шаблон не будет соответствовать пробелам, возврату каретки, вкладке, фиду формы и новым строковым символам. Вы можете думать, что это похоже на класс символов <code>[^ \r\t\f\n\v]</code> . <blockquote> let whiteSpace = &quot;Пробел. Пробел везде!&quot; <br> пусть nonSpaceRegex = / \ S / g; <br> whiteSpace.match (nonSpaceRegex) .length; // Возвращает 32 </blockquote>
</section>

## Instructions
<section id='instructions'>
Измените регулярное выражение <code>countNonWhiteSpace</code> чтобы искать несколько небелых символов в строке.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should use the global flag.
    testString: assert(countNonWhiteSpace.global);
  - text: Your regex should use the shorthand character <code>\S/code> to match all non-whitespace characters.
    testString: assert(/\\S/.test(countNonWhiteSpace.source));
  - text: Your regex should find 35 non-spaces in <code>"Men are from Mars and women are from Venus."</code>
    testString: assert("Men are from Mars and women are from Venus.".match(countNonWhiteSpace).length == 35);
  - text: 'Your regex should find 23 non-spaces in <code>"Space: the final frontier."</code>'
    testString: 'assert("Space: the final frontier.".match(countNonWhiteSpace).length == 23);'
  - text: Your regex should find 21 non-spaces in <code>"MindYourPersonalSpace"</code>
    testString: assert("MindYourPersonalSpace".match(countNonWhiteSpace).length == 21);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);

```

</div>

</section>

## Solution
<section id='solution'>

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
```

</section>
