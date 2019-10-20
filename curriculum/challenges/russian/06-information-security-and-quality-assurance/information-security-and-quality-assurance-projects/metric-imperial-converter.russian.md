---
id: 587d8249367417b2b2512c41
title: Metric-Imperial Converter
challengeType: 4
isRequired: true
forumTopicId: 301570
localeTitle: Метрично-имперский конвертер
---

## Description
<section id='description'>
Создайте полное приложение JavaScript для стека, которое функционально похоже на это: <a href="https://incongruous-beard.glitch.me/" target="_blank">https://incongruous-beard.glitch.me/</a> . Работа над этим проектом предполагает, что вы будете писать свой код на Glitch в нашем стартовом проекте. После завершения этого проекта вы можете скопировать свой общедоступный URL-адрес глюка (на домашнюю страницу вашего приложения) на этот экран, чтобы проверить его! При желании вы можете написать свой проект на другой платформе, но он должен быть общедоступным для нашего тестирования. Запустите этот проект на Glitch, используя <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-metricimpconverter/">эту ссылку</a> или клонируйте <a href="https://github.com/freeCodeCamp/boilerplate-project-metricimpconverter/">этот репозиторий</a> на GitHub! Если вы используете Glitch, не забудьте сохранить ссылку на ваш проект где-нибудь в безопасности!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: I will prevent the client from trying to guess(sniff) the MIME type.
    testString: ''
  - text: I will prevent cross-site scripting (XSS) attacks.
    testString: ''
  - text: 'I can GET /api/convert with a single parameter containing an accepted number and unit and have it converted. (Hint: Split the input by looking for the index of the first character which will mark the start of the unit)'
    testString: ''
  - text: I can convert 'gal' to 'L' and vice versa. (1 gal to 3.78541 L)
    testString: ''
  - text: I can convert 'lbs' to 'kg' and vice versa. (1 lbs to 0.453592 kg)
    testString: ''
  - text: I can convert 'mi' to 'km' and vice versa. (1 mi to 1.60934 km)
    testString: ''
  - text: If my unit of measurement is invalid, returned will be 'invalid unit'.
    testString: ''
  - text: If my number is invalid, returned with will 'invalid number'.
    testString: ''
  - text: If both are invalid, return will be 'invalid number and unit'.
    testString: ''
  - text: I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.
    testString: ''
  - text: My return will consist of the initNum, initUnit, returnNum, returnUnit, and string spelling out units in format '{initNum} {initial_Units} converts to {returnNum} {return_Units}' with the result rounded to 5 decimals in the string.
    testString: ''
  - text: All 16 unit tests are complete and passing.
    testString: ''
  - text: All 5 functional tests are complete and passing.
    testString: ''

```

</section>
