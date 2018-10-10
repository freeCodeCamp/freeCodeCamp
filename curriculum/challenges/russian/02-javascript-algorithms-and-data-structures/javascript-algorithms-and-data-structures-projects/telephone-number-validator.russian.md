---
id: aff0395860f5d3034dc0bfc9
title: Telephone Number Validator
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Проверка номера телефона
---

## Description
<section id="description"> Возвращает <code>true</code> если переданная строка выглядит как действительный номер телефона в США. Пользователь может заполнить поле формы любым способом, если он имеет формат действительного номера в США. Ниже приведены примеры допустимых форматов для номеров в США (см. Ниже приведенные ниже тесты для других вариантов): <blockquote> 555-555-5555 <br> (555)555-5555 <br> (555) 555-5555 <br> 555 555 5555 <br> 5555555555 <br> 1 555 555 5555 </blockquote> Для этой задачи вам будет представлена ​​строка, такая как <code>800-692-7753</code> или <code>8oo-six427676;laskdjf</code> . Ваша задача - подтвердить или отклонить телефонный номер США на основе любой комбинации форматов, указанных выше. Код области требуется. Если код страны указан, вы должны подтвердить, что код страны равен <code>1</code> . Возвращает <code>true</code> если строка является действительным номером телефона США; в противном случае верните <code>false</code> . Не забудьте использовать <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>telephoneCheck(&quot;555-555-5555&quot;)</code> должен возвращать логическое значение.
    testString: 'assert(typeof telephoneCheck("555-555-5555") === "boolean", "<code>telephoneCheck("555-555-5555")</code> should return a boolean.");'
  - text: <code>telephoneCheck(&quot;1 555-555-5555&quot;)</code> должен возвращать true.
    testString: 'assert(telephoneCheck("1 555-555-5555") === true, "<code>telephoneCheck("1 555-555-5555")</code> should return true.");'
  - text: <code>telephoneCheck(&quot;1 (555) 555-5555&quot;)</code> должен возвращать true.
    testString: 'assert(telephoneCheck("1 (555) 555-5555") === true, "<code>telephoneCheck("1 (555) 555-5555")</code> should return true.");'
  - text: <code>telephoneCheck(&quot;5555555555&quot;)</code> должен возвращать true.
    testString: 'assert(telephoneCheck("5555555555") === true, "<code>telephoneCheck("5555555555")</code> should return true.");'
  - text: <code>telephoneCheck(&quot;555-555-5555&quot;)</code> должен возвращать true.
    testString: 'assert(telephoneCheck("555-555-5555") === true, "<code>telephoneCheck("555-555-5555")</code> should return true.");'
  - text: <code>telephoneCheck(&quot;(555)555-5555&quot;)</code> должен возвращать true.
    testString: 'assert(telephoneCheck("(555)555-5555") === true, "<code>telephoneCheck("(555)555-5555")</code> should return true.");'
  - text: <code>telephoneCheck(&quot;1(555)555-5555&quot;)</code> должен возвращать true.
    testString: 'assert(telephoneCheck("1(555)555-5555") === true, "<code>telephoneCheck("1(555)555-5555")</code> should return true.");'
  - text: <code>telephoneCheck(&quot;555-5555&quot;)</code> должен вернуть значение false.
    testString: 'assert(telephoneCheck("555-5555") === false, "<code>telephoneCheck("555-5555")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;5555555&quot;)</code> должен возвращать false.
    testString: 'assert(telephoneCheck("5555555") === false, "<code>telephoneCheck("5555555")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;1 555)555-5555&quot;)</code> должен возвращать false.
    testString: 'assert(telephoneCheck("1 555)555-5555") === false, "<code>telephoneCheck("1 555)555-5555")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;1 555 555 5555&quot;)</code> должен возвращать true.
    testString: 'assert(telephoneCheck("1 555 555 5555") === true, "<code>telephoneCheck("1 555 555 5555")</code> should return true.");'
  - text: <code>telephoneCheck(&quot;1 456 789 4444&quot;)</code> должен возвращать true.
    testString: 'assert(telephoneCheck("1 456 789 4444") === true, "<code>telephoneCheck("1 456 789 4444")</code> should return true.");'
  - text: '<code>telephoneCheck(&quot;123**&amp;!!asdf#&quot;)</code> должен возвращать false.'
    testString: 'assert(telephoneCheck("123**&!!asdf#") === false, "<code>telephoneCheck("123**&!!asdf#")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;55555555&quot;)</code> должен возвращать false.
    testString: 'assert(telephoneCheck("55555555") === false, "<code>telephoneCheck("55555555")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;(6054756961)&quot;)</code> должен возвращать false
    testString: 'assert(telephoneCheck("(6054756961)") === false, "<code>telephoneCheck("(6054756961)")</code> should return false");'
  - text: <code>telephoneCheck(&quot;2 (757) 622-7382&quot;)</code> должен возвращать false.
    testString: 'assert(telephoneCheck("2 (757) 622-7382") === false, "<code>telephoneCheck("2 (757) 622-7382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;0 (757) 622-7382&quot;)</code> должен возвращать false.
    testString: 'assert(telephoneCheck("0 (757) 622-7382") === false, "<code>telephoneCheck("0 (757) 622-7382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;-1 (757) 622-7382&quot;)</code> должен возвращать false
    testString: 'assert(telephoneCheck("-1 (757) 622-7382") === false, "<code>telephoneCheck("-1 (757) 622-7382")</code> should return false");'
  - text: <code>telephoneCheck(&quot;2 757 622-7382&quot;)</code> должен возвращать false.
    testString: 'assert(telephoneCheck("2 757 622-7382") === false, "<code>telephoneCheck("2 757 622-7382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;10 (757) 622-7382&quot;)</code> должен возвращать false.
    testString: 'assert(telephoneCheck("10 (757) 622-7382") === false, "<code>telephoneCheck("10 (757) 622-7382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;27576227382&quot;)</code> должен возвращать false.
    testString: 'assert(telephoneCheck("27576227382") === false, "<code>telephoneCheck("27576227382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;(275)76227382&quot;)</code> должен возвращать false.
    testString: 'assert(telephoneCheck("(275)76227382") === false, "<code>telephoneCheck("(275)76227382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;2(757)6227382&quot;)</code> должен вернуть значение false.
    testString: 'assert(telephoneCheck("2(757)6227382") === false, "<code>telephoneCheck("2(757)6227382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;2(757)622-7382&quot;)</code> должен возвращать false.
    testString: 'assert(telephoneCheck("2(757)622-7382") === false, "<code>telephoneCheck("2(757)622-7382")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;555)-555-5555&quot;)</code> должен возвращать значение false.
    testString: 'assert(telephoneCheck("555)-555-5555") === false, "<code>telephoneCheck("555)-555-5555")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;(555-555-5555&quot;)</code> должен возвращать false.
    testString: 'assert(telephoneCheck("(555-555-5555") === false, "<code>telephoneCheck("(555-555-5555")</code> should return false.");'
  - text: <code>telephoneCheck(&quot;(555)5(55?)-5555&quot;)</code> должен возвращать false.
    testString: 'assert(telephoneCheck("(555)5(55?)-5555") === false, "<code>telephoneCheck("(555)5(55?)-5555")</code> should return false.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function telephoneCheck(str) {
  // Good luck!
  return true;
}

telephoneCheck("555-555-5555");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
