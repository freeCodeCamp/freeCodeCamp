---
id: 5d712346c441eddfaeb5bdef
title: Match All Numbers
challengeType: 1
forumTopicId: 18181
localeTitle: Совпадение всех номеров
---

## Description
<section id='description'>
Вы узнали ярлыки для общих строковых шаблонов, таких как alphanumerics. Другой общий шаблон - это просто цифры или цифры. Ярлык для поиска цифровых символов - <code>\d</code> , с нижним регистром <code>d</code> . Это равно классу символов <code>[0-9]</code> , который ищет один символ любого числа от нуля до девяти.
</section>

## Instructions
<section id='instructions'>
Используйте класс сокращенного символа <code>\d</code> чтобы подсчитать, сколько цифр указано в названиях фильмов. Письменные номера («шесть» вместо 6) не учитываются.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should use the shortcut character to match digit characters
    testString: assert(/\\d/.test(numRegex.source));
  - text: Your regex should use the global flag.
    testString: assert(numRegex.global);
  - text: Your regex should find 1 digit in <code>"9"</code>.
    testString: assert("9".match(numRegex).length == 1);
  - text: Your regex should find 2 digits in <code>"Catch 22"</code>.
    testString: assert("Catch 22".match(numRegex).length == 2);
  - text: Your regex should find 3 digits in <code>"101 Dalmatians"</code>.
    testString: assert("101 Dalmatians".match(numRegex).length == 3);
  - text: Your regex should find no digits in <code>"One, Two, Three"</code>.
    testString: assert("One, Two, Three".match(numRegex) == null);
  - text: Your regex should find 2 digits in <code>"21 Jump Street"</code>.
    testString: assert("21 Jump Street".match(numRegex).length == 2);
  - text: 'Your regex should find 4 digits in <code>"2001: A Space Odyssey"</code>.'
    testString: 'assert("2001: A Space Odyssey".match(numRegex).length == 4);'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // Change this line
let result = movieName.match(numRegex).length;

```

</div>

</section>

## Solution
<section id='solution'>

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
```

</section>
