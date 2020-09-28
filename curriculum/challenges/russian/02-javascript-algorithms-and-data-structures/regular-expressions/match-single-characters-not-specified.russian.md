---
id: 587d7db6367417b2b2512b98
title: Match Single Characters Not Specified
challengeType: 1
forumTopicId: 301358
localeTitle: Совпадение отдельных символов не указано
---

## Description
<section id='description'>
Пока вы создали набор символов, которые вы хотите сопоставить, но вы также можете создать набор символов, которые вы не хотите сопоставлять. Эти типы наборов символов называются <code>negated character sets</code> . Чтобы создать <code>negated character set</code> , вы поместите символ <code>caret</code> ( <code>^</code> ) после открывающей скобки и перед символами, которые вы не хотите сопоставлять. Например, <code>/[^aeiou]/gi</code> соответствует всем символам, которые не являются гласным. Обратите внимание, что символы вроде <code>.</code> , <code>!</code> , <code>[</code> , <code>@</code> , <code>/</code> и пробел совпадают - набор символов отрицательного гласного исключает только символы гласных.
</section>

## Instructions
<section id='instructions'>
Создайте одно регулярное выражение, соответствующее всем символам, которые не являются числом или гласным. Не забудьте включить соответствующие флаги в регулярное выражение.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex <code>myRegex</code> should match 9 items.
    testString: assert(result.length == 9);
  - text: Your regex <code>myRegex</code> should use the global flag.
    testString: assert(myRegex.flags.match(/g/).length == 1);
  - text: Your regex <code>myRegex</code> should use the case insensitive flag.
    testString: assert(myRegex.flags.match(/i/).length == 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "3 blind mice.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line

```

</div>

</section>

## Solution
<section id='solution'>

```js
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```

</section>
