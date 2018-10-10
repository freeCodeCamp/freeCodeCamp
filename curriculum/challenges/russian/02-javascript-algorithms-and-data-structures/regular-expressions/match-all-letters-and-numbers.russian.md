---
id: 587d7db7367417b2b2512b9f
title: Match All Letters and Numbers
challengeType: 1
videoUrl: ''
localeTitle: Совпадение всех букв и цифр
---

## Description
<section id="description"> Используя классы символов, вы смогли найти все буквы алфавита с помощью <code>[az]</code> . Такой класс символов достаточно распространен, что есть ярлык для него, хотя он включает и несколько дополнительных символов. Самый близкий класс символов в JavaScript для соответствия алфавиту - <code>\w</code> . Этот ярлык равен <code>[A-Za-z0-9_]</code> . Этот класс символов соответствует буквам верхнего и нижнего регистра плюс номерам. Обратите внимание: этот класс символов также включает символ подчеркивания ( <code>_</code> ). <blockquote> пусть longHand = / [A-Za-z0-9 _] + /; <br> пусть shortHand = / \ w + /; <br> пусть числа = «42»; <br> пусть varNames = &quot;important_var&quot;; <br> longHand.test (номера); // Возвращает true <br> shortHand.test (номера); // Возвращает true <br> longHand.test (имя переменный); // Возвращает true <br> shortHand.test (имя переменный); // Возвращает true </blockquote> Эти классы ярлыков символов также известны как <code>shorthand character classes</code> . </section>

## Instructions
<section id="instructions"> Используйте класс символьных символов <code>\w</code> чтобы подсчитать количество буквенно-цифровых символов в разных кавычках и строках. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: В вашем регулярном выражении должен использоваться глобальный флаг.
    testString: 'assert(alphabetRegexV2.global, "Your regex should use the global flag.");'
  - text: Вашему регулярному выражению следует использовать сокращенный символ
    testString: 'assert(/\\w/.test(alphabetRegexV2.source), "Your regex should use the shorthand character <code>\w</code> to match all characters which are alphanumeric.");'
  - text: Ваше регулярное выражение должно найти 31 буквенно-цифровой символ в <code>&quot;The five boxing wizards jump quickly.&quot;</code>
    testString: 'assert("The five boxing wizards jump quickly.".match(alphabetRegexV2).length === 31, "Your regex should find 31 alphanumeric characters in <code>"The five boxing wizards jump quickly."</code>");'
  - text: Ваше регулярное выражение должно найти 32 буквенно-цифровых символа в <code>&quot;Pack my box with five dozen liquor jugs.&quot;</code>
    testString: 'assert("Pack my box with five dozen liquor jugs.".match(alphabetRegexV2).length === 32, "Your regex should find 32 alphanumeric characters in <code>"Pack my box with five dozen liquor jugs."</code>");'
  - text: Вашему регулярному выражению должно быть найдено 30 буквенно-цифровых символов в <code>&quot;How vexingly quick daft zebras jump!&quot;</code>
    testString: 'assert("How vexingly quick daft zebras jump!".match(alphabetRegexV2).length === 30, "Your regex should find 30 alphanumeric characters in <code>"How vexingly quick daft zebras jump!"</code>");'
  - text: Ваше регулярное выражение должно найти 36 буквенно-цифровых символов в <code>&quot;123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.&quot;</code>
    testString: 'assert("123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.".match(alphabetRegexV2).length === 36, "Your regex should find 36 alphanumeric characters in <code>"123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
