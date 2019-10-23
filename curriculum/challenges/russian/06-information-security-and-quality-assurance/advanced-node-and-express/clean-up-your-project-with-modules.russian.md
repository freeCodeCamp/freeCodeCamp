---
id: 589690e6f9fc0f352b528e6e
title: Clean Up Your Project with Modules
challengeType: 2
forumTopicId: 301549
localeTitle: Очистка проекта с помощью модулей
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Сейчас все, что у вас есть, находится в файле server.js. Это может привести к сложному управлению кодом, который не очень расширяем. Создайте 2 новых файла: Routes.js и Auth.js. Оба должны начинаться со следующего кода: <pre> module.exports = function (app, db) {
<p> } </p></pre> Теперь в верхней части файла вашего сервера требуются такие файлы: <code>const routes = require(&#39;./routes.js&#39;);</code> Сразу после того, как вы установили успешное соединение с базой данных, создайте экземпляр каждого из них, например: <code>routes(app, db)</code> Наконец, возьмите все маршруты на своем сервере и вставьте их в свои новые файлы и удалите их из файла вашего сервера. Также возьмите makeAuthenticated, так как мы создали эту функцию промежуточного программного обеспечения для маршрутизации. Теперь вам нужно будет правильно добавить зависимости, которые используются, например, <code>const passport = require(&#39;passport&#39;);</code> , в верхней части над линией экспорта в файле routes.js. Продолжайте добавлять их до тех пор, пока не возникнет больше ошибок, и ваш серверный файл больше не имеет никакой маршрутизации! Теперь сделайте то же самое в файле auth.js со всеми вещами, связанными с аутентификацией, такими как сериализация и настройка локальной стратегии, и сотрите их из файла вашего сервера. Обязательно добавьте зависимости и вызовите <code>auth(app,db)</code> на сервере в том же месте. Обязательно иметь <code>auth(app, db)</code> перед <code>routes(app, db)</code> так как наш маршрут регистрации зависит от начального паспорта! Поздравляем вас, вы в конце этого раздела Advanced Node и Express и получите красивый код для этого! Представьте свою страницу, когда вы думаете, что у вас все в порядке. Если вы столкнулись с ошибками, вы можете посмотреть пример завершенного проекта <a href="https://glitch.com/#!/project/delicious-herring">здесь</a> . <p></p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Modules present
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /require\s*\(('|")\.\/routes(\.js)?\1\)/gi, 'You should have required your new files'); assert.match(data, /mongo.connect[^]*routes/gi, 'Your new modules should be called after your connection to the database'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>
