---
id: 587d7b84367417b2b2512b35
title: Catch Misspelled Variable and Function Names
challengeType: 1
forumTopicId: 301186
localeTitle: Поймать имена с ошибкой и имена функций
---

## Description
<section id='description'>
Методы <code>console.log()</code> и <code>typeof</code> являются двумя основными способами проверки промежуточных значений и типов вывода программы. Теперь пришло время войти в общие формы, которые берут ошибки. Одна проблема на синтаксическом уровне, с которой быстрые моделисты могут сочувствовать, - это скромная орфографическая ошибка. Транспонированные, отсутствует или неправильно заглавной буквы, символы в имени переменной или функции будут иметь браузер ищет объект, который не существует - и жалуюсь в виде справочной ошибки. Имена переменных и функций JavaScript чувствительны к регистру.
</section>

## Instructions
<section id='instructions'>
Исправьте две ошибки орфографии в коде, так что расчет <code>netWorkingCapital</code> работает.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Check the spelling of the two variables used in the netWorkingCapital calculation, the console output should show that "Net working capital is: 2".'
    testString: assert(netWorkingCapital === 2);
  - text: There should be no instances of mis-spelled variables in the code.
    testString: assert(!code.match(/recievables/g));
  - text: The <code>receivables</code> variable should be declared and used properly in the code.
    testString: assert(code.match(/receivables/g).length == 2);
  - text: There should be no instances of mis-spelled variables in the code.
    testString: assert(!code.match(/payable;/g));
  - text: The <code>payables</code> variable should be declared and used properly in the code.
    testString: assert(code.match(/payables/g).length == 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`);

```

</div>

</section>

## Solution
<section id='solution'>

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
```

</section>
