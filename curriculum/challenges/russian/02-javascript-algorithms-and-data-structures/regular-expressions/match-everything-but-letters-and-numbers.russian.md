---
id: 587d7db8367417b2b2512ba0
title: Match Everything But Letters and Numbers
challengeType: 1
videoUrl: ''
localeTitle: 'Совсем все, кроме букв и цифр'
---

## Description
<section id="description"> Вы узнали, что вы можете использовать ярлык для соответствия буквенно-цифровым <code>[A-Za-z0-9_]</code> с помощью <code>\w</code> . Естественным шаблоном, который вы, возможно, захотите найти, является противоположность буквенно-цифровых символов. Вы можете искать противоположное <code>\w</code> с <code>\W</code> Обратите внимание, что противоположный шаблон использует заглавную букву. Этот ярлык совпадает с <code>[^A-Za-z0-9_]</code> . <blockquote> пусть shortHand = / \ W /; <br> пусть числа = «42%»; <br> пусть предложение = «Кодирование!»; <br> numbers.match (стенографии); // Возвращает [&quot;%&quot;] <br> sentence.match (стенографии); // Возвращает [&quot;!&quot;] <br></blockquote></section>

## Instructions
<section id="instructions"> Используйте класс сокращенного символа <code>\W</code> чтобы подсчитать количество не буквенно-цифровых символов в разных кавычках и строках. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: В вашем регулярном выражении должен использоваться глобальный флаг.
    testString: 'assert(nonAlphabetRegex.global, "Your regex should use the global flag.");'
  - text: 'Ваше регулярное выражение должно найти 6 букв в алфавитном порядке в <code>&quot;The five boxing wizards jump quickly.&quot;</code> ,'
    testString: 'assert("The five boxing wizards jump quickly.".match(nonAlphabetRegex).length == 6, "Your regex should find 6 non-alphanumeric characters in <code>"The five boxing wizards jump quickly."</code>.");'
  - text: В вашем регулярном выражении должен использоваться сокращенный символ.
    testString: 'assert(/\\W/.test(nonAlphabetRegex.source), "Your regex should use the shorthand character to match characters which are non-alphanumeric.");'
  - text: Ваше регулярное выражение должно найти 8 букв в алфавитном порядке в <code>&quot;Pack my box with five dozen liquor jugs.&quot;</code>
    testString: 'assert("Pack my box with five dozen liquor jugs.".match(nonAlphabetRegex).length == 8, "Your regex should find 8 non-alphanumeric characters in <code>"Pack my box with five dozen liquor jugs."</code>");'
  - text: 'В вашем регулярном выражении должно быть найдено 6 символов, отличных от алфавитно-цифровых символов, в <code>&quot;How vexingly quick daft zebras jump!&quot;</code>'
    testString: 'assert("How vexingly quick daft zebras jump!".match(nonAlphabetRegex).length == 6, "Your regex should find 6 non-alphanumeric characters in <code>"How vexingly quick daft zebras jump!"</code>");'
  - text: 'В вашем регулярном выражении должно быть найдено 12 символов, отличных от буквенно-цифровых символов, в <code>&quot;123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.&quot;</code>'
    testString: 'assert("123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.".match(nonAlphabetRegex).length == 12, "Your regex should find 12 non-alphanumeric characters in <code>"123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ."</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
