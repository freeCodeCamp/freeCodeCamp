---
id: 587d7db4367417b2b2512b90
title: Match a Literal String with Different Possibilities
challengeType: 1
forumTopicId: 301345
localeTitle: Сопоставьте литеральную строку с различными возможностями
---

## Description
<section id='description'>
Используя регулярные выражения, такие как <code>/coding/</code> , вы можете искать шаблон <code>&quot;coding&quot;</code> в другой строке. Это мощно для поиска одиночных строк, но ограничивается только одним шаблоном. Вы можете искать несколько шаблонов с помощью <code>alternation</code> или оператора <code>OR</code> : <code>|</code> , Этот оператор соответствует шаблонам до или после него. Например, если вы хотите совместить <code>&quot;yes&quot;</code> или <code>&quot;no&quot;</code> , вам нужно иметь регулярное выражение <code>/yes|no/</code> . Вы также можете искать не более двух шаблонов. Вы можете сделать это, добавив больше шаблонов с большим количеством операторов <code>OR</code> разделяющих их, например <code>/yes|no|maybe/</code> .
</section>

## Instructions
<section id='instructions'>
Complete the regex <code>petRegex</code> to match the pets <code>"dog"</code>, <code>"cat"</code>, <code>"bird"</code>, or <code>"fish"</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex <code>petRegex</code> should return <code>true</code> for the string <code>"John has a pet dog."</code>
    testString: assert(petRegex.test('John has a pet dog.'));
  - text: Your regex <code>petRegex</code> should return <code>false</code> for the string <code>"Emma has a pet rock."</code>
    testString: assert(!petRegex.test('Emma has a pet rock.'));
  - text: Your regex <code>petRegex</code> should return <code>true</code> for the string <code>"Emma has a pet bird."</code>
    testString: assert(petRegex.test('Emma has a pet bird.'));
  - text: Your regex <code>petRegex</code> should return <code>true</code> for the string <code>"Liz has a pet cat."</code>
    testString: assert(petRegex.test('Liz has a pet cat.'));
  - text: Your regex <code>petRegex</code> should return <code>false</code> for the string <code>"Kara has a pet dolphin."</code>
    testString: assert(!petRegex.test('Kara has a pet dolphin.'));
  - text: Your regex <code>petRegex</code> should return <code>true</code> for the string <code>"Alice has a pet fish."</code>
    testString: assert(petRegex.test('Alice has a pet fish.'));
  - text: Your regex <code>petRegex</code> should return <code>false</code> for the string <code>"Jimmy has a pet computer."</code>
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
