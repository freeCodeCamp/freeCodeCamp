---
id: 587d824a367417b2b2512c45
title: Anonymous Message Board
challengeType: 4
isRequired: true
videoUrl: ''
localeTitle: Анонимная доска объявлений
---

## Description
<section id="description"> Создайте полное приложение JavaScript для стека, которое функционально похоже на это: <a href="https://horn-celery.glitch.me/" target="_blank">https://horn-celery.glitch.me/</a> . Работа над этим проектом предполагает, что вы будете писать свой код на Glitch в нашем стартовом проекте. После завершения этого проекта вы можете скопировать свой общедоступный URL-адрес глюка (на домашнюю страницу вашего приложения) на этот экран, чтобы проверить его! При желании вы можете написать свой проект на другой платформе, но он должен быть общедоступным для нашего тестирования. Запустите этот проект на Glitch, используя <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-messageboard/">эту ссылку</a> или клонируйте <a href="https://github.com/freeCodeCamp/boilerplate-project-messageboard/">этот репозиторий</a> на GitHub! Если вы используете Glitch, не забудьте сохранить ссылку на ваш проект где-нибудь в безопасности! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Только разрешите загрузку вашего сайта в iFrame на ваших собственных страницах.
    testString: ''
  - text: Не разрешайте предварительную выборку DNS.
    testString: ''
  - text: Только разрешите вашему сайту отправлять реферер для ваших собственных страниц.
    testString: ''
  - text: 'Я могу POST поток на конкретную доску объявлений, передавая текст данных формы и удаляя_сопровождение_ на /api/threads/{board}.(Рекомендуем res.redirect на странице платы / b / {board}) Сохранено будет как минимум _id, текст , createdon_ (дата и время), bumpedon_ (дата и время, начинаются так же, как created_on), сообщаются (boolean), deleteepassword_ и ответы (array).'
    testString: ''
  - text: 'Я могу отправить ответ на поток на конкретной плате, передав текст данных формы, deleteepassword_, & threadid_ в / api / replies / {board}, а также обновит дату bumped_on до даты комментариев. (Рекомендовать res.redirect to thread page / b / {board} / {thread_id}) В ответном массиве ответов на поток будет сохранен _id, текст, createdon_, deleteepassword_ и & report.'
    testString: ''
  - text: 'Я могу получить массив из последних 10 набросанных потоков на плате только с последними 3 ответами из / api / threads / {board}. Поля сообщения и удаления не будут отправлены клиенту.'
    testString: ''
  - text: 'Я могу получить весь поток со всеми его ответами из / api / replies / {board}? Thread_id = {thread_id}. Также скрывать те же поля, которые должен видеть клиент.'
    testString: ''
  - text: 'Я могу полностью удалить поток, если я отправлю запрос DELETE в / api / threads / {board} и прохожу по файлу threadid_ и deleteepassword_. (Текстовым ответом будет «неправильный пароль» или «успех»)'
    testString: ''
  - text: 'Я могу удалить сообщение (просто изменив текст на «[удалено]», вместо того, чтобы полностью удалять его, как поток), если я отправлю запрос DELETE в / api / replies / {board} и прохожу по файлу threadid_, replyid_ и & nbsp; (Текстовым ответом будет «неправильный пароль» или «успех»)'
    testString: ''
  - text: ''
    testString: ''
  - text: ''
    testString: ''
  - text: ''
    testString: ''

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
