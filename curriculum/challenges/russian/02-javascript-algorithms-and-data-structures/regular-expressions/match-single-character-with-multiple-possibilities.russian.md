---
id: 587d7db5367417b2b2512b95
title: Match Single Character with Multiple Possibilities
challengeType: 1
videoUrl: ''
localeTitle: Совместный персонаж с несколькими возможностями
---

## Description
<section id="description"> Вы узнали, как сопоставить литералы ( <code>/literal/</code> ) и подстановочный знак ( <code>/./</code> ). Это крайности регулярных выражений, где вы найдете точные совпадения, а другие - все. Существуют варианты, которые являются балансом между двумя крайностями. Вы можете искать буквенный шаблон с некоторой гибкостью с <code>character classes</code> . Классы символов позволяют вам определять группу символов, которые вы хотите сопоставить, помещая их в квадратные ( <code>[</code> и <code>]</code> ) скобки. Например, вы хотите совместить <code>&quot;bag&quot;</code> , <code>&quot;big&quot;</code> и <code>&quot;bug&quot;</code> но не <code>&quot;bog&quot;</code> . Вы можете создать regex <code>/b[aiu]g/</code> для этого. <code>[aiu]</code> - это класс символов, который будет соответствовать только символам <code>&quot;a&quot;</code> , <code>&quot;i&quot;</code> или <code>&quot;u&quot;</code> . <blockquote> пусть bigStr = «большой»; <br> let bagStr = &quot;bag&quot;; <br> let bugStr = &quot;ошибка&quot;; <br> пусть bogStr = &quot;болото&quot;; <br> пусть bgRegex = / b [aiu] g /; <br> bigStr.match (bgRegex); // Возвращает [&quot;большой&quot;] <br> bagStr.match (bgRegex); // Возвращает [&quot;bag&quot;] <br> bugStr.match (bgRegex); // Возвращает [&quot;bug&quot;] <br> bogStr.match (bgRegex); // Возвращает значение null </blockquote></section>

## Instructions
<section id="instructions"> Используйте класс символов с гласными ( <code>a</code> , <code>e</code> , <code>i</code> , <code>o</code> , <code>u</code> ) в вашем регулярном выражении <code>vowelRegex</code> чтобы найти все гласные в строке <code>quoteSample</code> . <strong>Заметка</strong> <br> Обязательно сопоставляйте гласные и нижние строчные гласные. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Вы должны найти все 25 гласных.
    testString: 'assert(result.length == 25, "You should find all 25 vowels.");'
  - text: Ваш regex <code>vowelRegex</code> должен использовать класс символов.
    testString: 'assert(/\[.*\]/.test(vowelRegex.source), "Your regex <code>vowelRegex</code> should use a character class.");'
  - text: Ваш regex <code>vowelRegex</code> должен использовать глобальный флаг.
    testString: 'assert(vowelRegex.flags.match(/g/).length == 1, "Your regex <code>vowelRegex</code> should use the global flag.");'
  - text: 'В вашем регулярном выражении <code>vowelRegex</code> должен использоваться флаг, нечувствительный к регистру.'
    testString: 'assert(vowelRegex.flags.match(/i/).length == 1, "Your regex <code>vowelRegex</code> should use the case insensitive flag.");'
  - text: Ваше регулярное выражение не должно соответствовать согласным.
    testString: 'assert(!/[b-df-hj-np-tv-z]/gi.test(result.join()), "Your regex should not match any consonants.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
