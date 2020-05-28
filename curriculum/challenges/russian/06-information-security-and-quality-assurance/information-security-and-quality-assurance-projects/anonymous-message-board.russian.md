---
id: 587d824a367417b2b2512c45
title: Anonymous Message Board
challengeType: 4
isRequired: true
forumTopicId: 301568
localeTitle: Анонимная доска объявлений
---

## Description
<section id='description'>
Создайте полное приложение JavaScript для стека, которое функционально похоже на это: <a href="https://spiky-well-vein.glitch.me/" target="_blank">https://spiky-well-vein.glitch.me/</a> . Работа над этим проектом предполагает, что вы будете писать свой код на Glitch в нашем стартовом проекте. После завершения этого проекта вы можете скопировать свой общедоступный URL-адрес глюка (на домашнюю страницу вашего приложения) на этот экран, чтобы проверить его! При желании вы можете написать свой проект на другой платформе, но он должен быть общедоступным для нашего тестирования. Запустите этот проект на Glitch, используя <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-messageboard/">эту ссылку</a> или клонируйте <a href="https://github.com/freeCodeCamp/boilerplate-project-messageboard/">этот репозиторий</a> на GitHub! Если вы используете Glitch, не забудьте сохранить ссылку на ваш проект где-нибудь в безопасности!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Only allow your site to be loading in an iFrame on your own pages.
    testString: ''
  - text: Do not allow DNS prefetching.
    testString: ''
  - text: Only allow your site to send the referrer for your own pages.
    testString: ''
  - text: I can POST a thread to a specific message board by passing form data text and deletepassword_ to /api/threads/{board}.(Recommend res.redirect to board page /b/{board}) Saved will be at least _id, text, createdon_(date&time), bumpedon_(date&time, starts same as created_on), reported(boolean), deletepassword_, & replies(array).
    testString: ''
  - text: I can POST a reply to a thread on a specific board by passing form data text, deletepassword_, & threadid_ to /api/replies/{board} and it will also update the bumped_on date to the comments date.(Recommend res.redirect to thread page /b/{board}/{thread_id}) In the thread's replies array will be saved _id, text, createdon_, deletepassword_, & reported.
    testString: ''
  - text: I can GET an array of the most recent 10 bumped threads on the board with only the most recent 3 replies each from /api/threads/{board}. The reported and deletepasswords_ fields will not be sent to the client.
    testString: ''
  - text: I can GET an entire thread with all its replies from /api/replies/{board}?thread_id={thread_id}. Also hiding the same fields the client should be see.
    testString: ''
  - text: I can delete a thread completely if I send a DELETE request to /api/threads/{board} and pass along the threadid_ & deletepassword_. (Text response will be 'incorrect password' or 'success')
    testString: ''
  - text: I can delete a post(just changing the text to '[deleted]' instead of removing completely like a thread) if I send a DELETE request to /api/replies/{board} and pass along the threadid_, replyid_, & deletepassword_. (Text response will be 'incorrect password' or 'success')
    testString: ''
  - text: I can report a thread and change its reported value to true by sending a PUT request to /api/threads/{board} and pass along the threadid_. (Text response will be 'success')
    testString: ''
  - text: I can report a reply and change its reported value to true by sending a PUT request to /api/replies/{board} and pass along the threadid_ & replyid_. (Text response will be 'success')
    testString: ''
  - text: Complete functional tests that wholly test routes and pass.
    testString: ''

```

</section>
