---
id: 587d824e367417b2b2512c58
title: Run Functional Tests on API Endpoints using Chai-HTTP
challengeType: 2
forumTopicId: 301593
localeTitle: Запуск функциональных тестов на конечных точках API с использованием Chai-HTTP
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-mochachai/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/">GitHub</a> . Замените assert.fail (). Проверьте состояние и текст. Пройдите тест. Не отправляйте имя в запросе, а конечная точка отвечает «hello Guest».
</section>

## Instructions
<section id='instructions'>
Replace <code>assert.fail()</code>. Test the status and the text.response. Make the test pass.
Don't send a name in the query, the endpoint with responds with <code>'hello Guest'</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: All tests should pass
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should test for 'res.status' == 200
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(data => { assert.equal(data.assertions[0].method, 'equal'); assert.equal(data.assertions[0].args[0], 'res.status'); assert.equal(data.assertions[0].args[1], '200');}, xhr => { throw new Error(xhr.responseText); })
  - text: You should test for 'res.text' == 'hello Guest'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=0').then(data => { assert.equal(data.assertions[1].method, 'equal'); assert.equal(data.assertions[1].args[0], 'res.text'); assert.equal(data.assertions[1].args[1], '\'hello Guest\'');}, xhr => { throw new Error(xhr.responseText); })

```

</section>
