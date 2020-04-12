---
id: 587d824f367417b2b2512c5a
title: Run Functional Tests on an API Response using Chai-HTTP III - PUT method
challengeType: 2
forumTopicId: 301590
localeTitle: Запуск функциональных тестов при ответе API с использованием метода Chai-HTTP III - PUT
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . В следующем примере мы увидим, как отправлять данные в полезную нагрузку (тело) запроса. Мы собираемся протестировать запрос PUT. Конечная точка «/ путешественников» принимает объект JSON, который принимает структуру: {фамилия: [фамилия путешественника прошлого]}. Маршрут отвечает: {name: [имя], фамилия: [фамилия], даты : [годы рождения-смерти]} см. код сервера для получения более подробной информации. Отправить {фамилия: «Коломбо»}. Замените assert.fail () и выполните тестовый проход. Проверить 1) статус, 2) тип, 3) body.name, 4) body.surname Следуйте приведенному выше порядку утверждения, мы полагаемся на него.
</section>

## Instructions
<section id='instructions'>
Отправьте <br>

```json
{
  "surname": "Colombo"
}
```

Замените <code>assert.fail()</code> и пройдите тест.
Проверьте на 1) <code>status</code>, 2) <code>type</code>, 3) <code>body.name</code>, 4) <code>body.surname</code>.
Следуйте порядку утверждения выше, мы полагаемся на это.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Все тесты должны быть пройдены
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: Вы должны пройти тест 'res.status' с результатом 200
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(data => { assert.equal(data.assertions[0].method, 'equal'); assert.equal(data.assertions[0].args[0], 'res.status'); assert.equal(data.assertions[0].args[1], '200');}, xhr => { throw new Error(xhr.responseText); })
  - text: Вы должны пройти тест 'res.type' с результатом 'application/json'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(data => { assert.equal(data.assertions[1].method, 'equal'); assert.equal(data.assertions[1].args[0], 'res.type'); assert.equal(data.assertions[1].args[1], '\'application/json\'');}, xhr => { throw new Error(xhr.responseText); })
  - text: Вы должны пройти тест 'res.body.name'с результатом 'Cristoforo'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(data => { assert.equal(data.assertions[2].method, 'equal'); assert.equal(data.assertions[2].args[0], 'res.body.name'); assert.equal(data.assertions[2].args[1], '\'Cristoforo\'');}, xhr => { throw new Error(xhr.responseText); })
  - text: Вы должны пройти тест 'res.body.surname' с результатом 'Colombo'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=2').then(data => { assert.equal(data.assertions[3].method, 'equal'); assert.equal(data.assertions[3].args[0], 'res.body.surname'); assert.equal(data.assertions[3].args[1], '\'Colombo\'');}, xhr => { throw new Error(xhr.responseText); })

```

</section>
