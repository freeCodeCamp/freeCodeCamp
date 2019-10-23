---
id: 587d824f367417b2b2512c5b
title: Run Functional Tests on an API Response using Chai-HTTP IV - PUT method
challengeType: 2
forumTopicId: 301591
localeTitle: Запуск функциональных тестов при ответе API с использованием метода Chai-HTTP IV - PUT
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . Это упражнение аналогично предыдущему. Посмотрите на это для деталей. Отправить {фамилия: &#39;da Verrazzano&#39;}. Замените assert.fail () и выполните тестовый проход. Проверить 1) статус, 2) тип, 3) body.name, 4) body.surname Следуйте приведенному выше порядку утверждения, мы полагаемся на него.
</section>

## Instructions
<section id='instructions'>
Send 

```json
{
  "surname": "da Verrazzano"
}
```

Replace <code>assert.fail()</code> and make the test pass.
Check for 1) <code>status</code>, 2) <code>type</code>, 3) <code>body.name</code>, 4) <code>body.surname</code>.
Follow the assertion order above, We rely on it.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should test for 'res.status' to be 200
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(data => { assert.equal(data.assertions[0].method, 'equal'); assert.equal(data.assertions[0].args[0], 'res.status'); assert.equal(data.assertions[0].args[1], '200');}, xhr => { throw new Error(xhr.responseText); })
  - text: You should test for 'res.type' to be 'application/json'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(data => { assert.equal(data.assertions[1].method, 'equal'); assert.equal(data.assertions[1].args[0], 'res.type'); assert.equal(data.assertions[1].args[1], '\'application/json\'');}, xhr => { throw new Error(xhr.responseText); })
  - text: You should test for 'res.body.name' to be 'Giovanni'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(data => { assert.equal(data.assertions[2].method, 'equal'); assert.equal(data.assertions[2].args[0], 'res.body.name'); assert.equal(data.assertions[2].args[1], '\'Giovanni\'');}, xhr => { throw new Error(xhr.responseText); })
  - text: You should test for 'res.body.surname' to be 'da Verrazzano'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=3').then(data => { assert.equal(data.assertions[3].method, 'equal'); assert.equal(data.assertions[3].args[0], 'res.body.surname'); assert.equal(data.assertions[3].args[1], '\'da Verrazzano\'');}, xhr => { throw new Error(xhr.responseText); })

```

</section>
