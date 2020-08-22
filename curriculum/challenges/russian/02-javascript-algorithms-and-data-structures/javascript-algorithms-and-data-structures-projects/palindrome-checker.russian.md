---
id: aaa48de84e1ecc7c742e1124
title: Palindrome Checker
isRequired: true
challengeType: 5
forumTopicId: 16004
localeTitle: Palindrome Checker
---

## Description
<section id='description'>
Возвращает <code>true</code> если данная строка является палиндром. В противном случае верните <code>false</code> . <dfn>Палиндром</dfn> - это слово или предложение, которое написано одинаково как вперед, так и назад, игнорируя знаки препинания, случай и интервал. <strong>Заметка</strong> <br> Вам нужно будет удалить <strong>все небуквенные символы</strong> (знаки препинания, пробелы и символы) и превратить все в один и тот же случай (нижний или верхний регистр), чтобы проверить палиндромы. Мы будем передавать строки с различными форматами, такими как <code>&quot;racecar&quot;</code> , <code>&quot;RaceCar&quot;</code> и <code>&quot;race CAR&quot;</code> среди других. Мы также передадим строки со специальными символами, такими как <code>&quot;2A3*3a2&quot;</code> , <code>&quot;2A3 3a2&quot;</code> и <code>&quot;2_A3*3#A2&quot;</code> . Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>palindrome("eye")</code> should return a boolean.
    testString: assert(typeof palindrome("eye") === "boolean");
  - text: <code>palindrome("eye")</code> should return true.
    testString: assert(palindrome("eye") === true);
  - text: <code>palindrome("_eye")</code> should return true.
    testString: assert(palindrome("_eye") === true);
  - text: <code>palindrome("race car")</code> should return true.
    testString: assert(palindrome("race car") === true);
  - text: <code>palindrome("not a palindrome")</code> should return false.
    testString: assert(palindrome("not a palindrome") === false);
  - text: <code>palindrome("A man, a plan, a canal. Panama")</code> should return true.
    testString: assert(palindrome("A man, a plan, a canal. Panama") === true);
  - text: <code>palindrome("never odd or even")</code> should return true.
    testString: assert(palindrome("never odd or even") === true);
  - text: <code>palindrome("nope")</code> should return false.
    testString: assert(palindrome("nope") === false);
  - text: <code>palindrome("almostomla")</code> should return false.
    testString: assert(palindrome("almostomla") === false);
  - text: <code>palindrome("My age is 0, 0 si ega ym.")</code> should return true.
    testString: assert(palindrome("My age is 0, 0 si ega ym.") === true);
  - text: <code>palindrome("1 eye for of 1 eye.")</code> should return false.
    testString: assert(palindrome("1 eye for of 1 eye.") === false);
  - text: '<code>palindrome("0_0 (: /-\ :) 0-0")</code> should return true.'
    testString: 'assert(palindrome("0_0 (: /-\ :) 0-0") === true);'
  - text: <code>palindrome("five|\_/|four")</code> should return false.
    testString: assert(palindrome("five|\_/|four") === false);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function palindrome(str) {
  // Good luck!
  return true;
}



palindrome("eye");

```

</div>

</section>

## Solution
<section id='solution'>

```js
function palindrome(str) {
  var string = str.toLowerCase().split(/[^A-Za-z0-9]/gi).join('');
  var aux = string.split('');
  if (aux.join('') === aux.reverse().join('')){
    return true;
  }

  return false;
}
```

</section>
