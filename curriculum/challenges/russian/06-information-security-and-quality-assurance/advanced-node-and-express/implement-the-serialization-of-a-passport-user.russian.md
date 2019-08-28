---
id: 5895f70cf9fc0f352b528e67
title: Implement the Serialization of a Passport User
challengeType: 2
forumTopicId: 301556
localeTitle: Внедрить сериализацию пользователя паспорта
---

## Description
<section id='description'>
Напомним, что этот проект строится на следующем стартовом проекте <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-advancednode/">Glitch</a> или клонируется из <a href="https://github.com/freeCodeCamp/boilerplate-advancednode/">GitHub</a> . Прямо сейчас мы не загружаем объект на самом деле, так как мы не создали нашу базу данных. Это можно сделать разными способами, но для нашего проекта мы будем подключаться к базе данных один раз, когда мы запустим сервер и сохраним постоянное соединение для полного жизненного цикла приложения. Чтобы сделать это, добавьте MongoDB в качестве зависимости и потребуйте его на своем сервере. ( <code>const mongo = require(&#39;mongodb&#39;).MongoClient;</code> ) Теперь мы хотим подключиться к нашей базе данных, а затем начать прослушивание запросов. Цель этого - не разрешать запросы до подключения нашей базы данных или ошибки базы данных. Для достижения этой цели вы захотите охватить сериализацию и прослушиватель приложений следующим образом: <pre> mongo.connect (process.env.DATABASE, (err, db) =&gt; {
    if (err) {
        console.log («Ошибка базы данных:« + ошибка »);
    } else {
        console.log («Успешное подключение к базе данных»);
<pre> <code> //serialization and app.listen</code> </pre>
<p> }}); </p></pre> Теперь вы можете раскомментировать блок в deserializeUser и удалить <code>done(null, null)</code> . Обязательно установите <em>DATABASE</em> в свой .ENV-файл в строку подключения вашей базы данных (например: <code>DATABASE=mongodb://admin:pass@mlab.com:12345/my-project</code> ). Вы можете создать бесплатную базу данных на <a href="https://mlab.com/welcome/">mLab</a> . Поздравляем - вы закончили настройку сериализации! Представьте свою страницу, когда вы думаете, что у вас все в порядке. Если вы работаете в ошибки, вы можете проверить проект завершен до этого момента <a href="https://gist.github.com/JosephLivengood/e192e809a1d27cb80dc2c6d3467b7477">здесь</a> . <p></p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Database connection is present
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.match(data, /mongo.connect/gi, 'You should have created a connection to your database'); assert.match(data, /mongo.connect[^]*app.listen[^]*}[^]*}/gi, 'You should have your app.listen nested at within your database connection at the bottom'); }, xhr => { throw new Error(xhr.statusText); })
  - text: Deserialization is now correctly using the DB and <code>done(null, null)</code> is erased
    testString: getUserInput => $.get(getUserInput('url')+ '/_api/server.js') .then(data => { assert.notMatch(data, /null,( |)null/gi, 'The callback in deserializeUser of (null, null) should be completely removed for the db block uncommented out'); }, xhr => { throw new Error(xhr.statusText); })

```

</section>
