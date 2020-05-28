---
id: 5a8b073d06fa14fcfde687aa
title: Exercise Tracker
challengeType: 4
isRequired: true
forumTopicId: 301505
localeTitle: Трекер упражнений
---

## Description
<section id='description'>
Создайте полноценное приложение JavaScript, функционально похожее на это: <a href='https://nonstop-pond.glitch.me/' target='_blank'>https://nonstop-pond.glitch.me/</a> . 
Работа над этим проектом потребует от вас написания кода на Glitch для нашего стартового проекта. После завершения этого проекта вы можете скопировать общедоступный URL-адрес сбоя (на главную страницу вашего приложения) на этот экран, чтобы протестировать его! При желании вы можете написать свой проект на другой платформе, но он должен быть открыт для нашего тестирования. 
Запустите этот проект на Glitch по <a href='https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-exercisetracker/' target='_blank'>этой ссылке</a> или клонируйте <a href='https://github.com/freeCodeCamp/boilerplate-project-exercisetracker/'>этот репозиторий</a> на GitHub! Если вы используете Glitch, не забудьте сохранить ссылку на ваш проект в безопасном месте!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: I can create a user by posting form data username to /api/exercise/new-user and returned will be an object with username and <code>_id</code>.
    testString: ''
  - text: I can get an array of all users by getting api/exercise/users with the same info as when creating a user.
    testString: ''
  - text: I can add an exercise to any user by posting form data userId(_id), description, duration, and optionally date to /api/exercise/add. If no date supplied it will use current date. App will return the user object with the exercise fields added.
    testString: ''
  - text: I can retrieve a full exercise log of any user by getting /api/exercise/log with a parameter of userId(_id). App will return the user object with added array log and count (total exercise count).
    testString: ''
  - text: I can retrieve part of the log of any user by also passing along optional parameters of from & to or limit. (Date format yyyy-mm-dd, limit = int)
    testString: ''

```

</section>
