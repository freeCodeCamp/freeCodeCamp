---
id: 587d824a367417b2b2512c44
title: Stock Price Checker
challengeType: 4
isRequired: true
forumTopicId: 301572
localeTitle: Проверка цен на акции
---

## Description
<section id='description'>
Создайте полное приложение JavaScript для стека, которое функционально похоже на это: <a href="https://sphenoid-crater.glitch.me/" target="_blank">https://sphenoid-crater.glitch.me/</a> . Работа над этим проектом предполагает, что вы будете писать свой код на Glitch в нашем стартовом проекте. После завершения этого проекта вы можете скопировать свой общедоступный URL-адрес глюка (на домашнюю страницу вашего приложения) на этот экран, чтобы проверить его! При желании вы можете написать свой проект на другой платформе, но должны быть общедоступны для нашего тестирования. Запустите этот проект на Glitch, используя <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-stockchecker/">эту ссылку</a> или клонируйте <a href="https://github.com/freeCodeCamp/boilerplate-project-stockchecker/">этот репозиторий</a> на GitHub! Если вы используете Glitch, не забудьте сохранить ссылку на ваш проект где-нибудь в безопасности!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Set the content security policies to only allow loading of scripts and css from your server.
    testString: ''
  - text: I can GET /api/stock-prices with form data containing a Nasdaq stock ticker and receive back an object stockData.
    testString: ''
  - text: In stockData, I can see the stock(string, the ticker), price(decimal in string format), and likes(int).
    testString: ''
  - text: I can also pass along field like as true(boolean) to have my like added to the stock(s). Only 1 like per ip should be accepted.
    testString: ''
  - text: If I pass along 2 stocks, the return object will be an array with both stock's info. Instead of likes, it will display rel_likes(the difference between the likes on both stocks) on both.
    testString: ''
  - text: 'A good way to receive current price is the following external API(replacing ''GOOG'' with your stock): https://finance.google.com/finance/info?q=NASDAQ%3aGOOG'
    testString: ''
  - text: All 5 functional tests are complete and passing.
    testString: ''

```

</section>
