---
id: 587d7db8367417b2b2512ba1
title: Match All Non-Numbers
challengeType: 1
videoUrl: ''
localeTitle: Совпадение всех не-чисел
---

## Description
<section id="description"> Последняя задача показала, как искать цифры с помощью ярлыка <code>\d</code> с нижним регистром <code>d</code> . Вы также можете искать нецифровые символы, используя аналогичный ярлык, который использует вместо этого верхний регистр <code>D</code> Ярлык поиска несимметричных символов - <code>\D</code> Это равно классу символов <code>[^0-9]</code> , который ищет один символ, который не является числом от нуля до девяти. </section>

## Instructions
<section id="instructions"> Используйте класс сокращенного символа для нецифровых цифр <code>\D</code> чтобы подсчитать, сколько цифр не указано в названиях фильмов. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Вашему регулярному выражению следует использовать символ ярлыка для соответствия несимметричным символам
    testString: 'assert(/\\D/.test(noNumRegex.source), "Your regex should use the shortcut character to match non-digit characters");'
  - text: В вашем регулярном выражении должен использоваться глобальный флаг.
    testString: 'assert(noNumRegex.global, "Your regex should use the global flag.");'
  - text: Ваше регулярное выражение не должно содержать никаких цифр в <code>&quot;9&quot;</code> .
    testString: 'assert("9".match(noNumRegex) == null, "Your regex should find no non-digits in <code>"9"</code>.");'
  - text: Ваше регулярное выражение должно найти 6 цифр в <code>&quot;Catch 22&quot;</code> .
    testString: 'assert("Catch 22".match(noNumRegex).length == 6, "Your regex should find 6 non-digits in <code>"Catch 22"</code>.");'
  - text: Ваше регулярное выражение должно найти 11 разрядов в <code>&quot;101 Dalmatians&quot;</code> .
    testString: 'assert("101 Dalmatians".match(noNumRegex).length == 11, "Your regex should find 11 non-digits in <code>"101 Dalmatians"</code>.");'
  - text: 'Ваше регулярное выражение должно найти 15 цифр в <code>&quot;One, Two, Three&quot;</code> .'
    testString: 'assert("One, Two, Three".match(noNumRegex).length == 15, "Your regex should find 15 non-digits in <code>"One, Two, Three"</code>.");'
  - text: Ваше регулярное выражение должно найти 12 разрядов в <code>&quot;21 Jump Street&quot;</code> .
    testString: 'assert("21 Jump Street".match(noNumRegex).length == 12, "Your regex should find 12 non-digits in <code>"21 Jump Street"</code>.");'
  - text: 'Ваше регулярное выражение должно найти 17 разрядов в <code>&quot;2001: A Space Odyssey&quot;</code> .'
    testString: 'assert("2001: A Space Odyssey".match(noNumRegex).length == 17, "Your regex should find 17 non-digits in <code>"2001: A Space Odyssey"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let numString = "Your sandwich will be $5.00";
let noNumRegex = /change/; // Change this line
let result = numString.match(noNumRegex).length;

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
