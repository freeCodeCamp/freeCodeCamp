---
id: 587d824a367417b2b2512c43
title: Personal Library
challengeType: 4
isRequired: true
forumTopicId: 301571
localeTitle: Персональная библиотека
---

## Description
<section id='description'>
Создайте полное приложение JavaScript для стека, которое функционально похоже на это: <a href="https://fuzzy-mink.glitch.me/" target="_blank">https://fuzzy-mink.glitch.me/</a> . Работа над этим проектом предполагает, что вы будете писать свой код на Glitch в нашем стартовом проекте. После завершения этого проекта вы можете скопировать свой общедоступный URL-адрес глюка (на домашнюю страницу вашего приложения) на этот экран, чтобы проверить его! При желании вы можете написать свой проект на другой платформе, но должны быть общедоступны для нашего тестирования. Запустите этот проект на Glitch, используя <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-library/">эту ссылку</a> или клонируйте <a href="https://github.com/freeCodeCamp/boilerplate-project-library/">этот репозиторий</a> на GitHub! Если вы используете Glitch, не забудьте сохранить ссылку на ваш проект где-нибудь в безопасности!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Nothing from my website will be cached in my client.
    testString: ''
  - text: The headers will say that the site is powered by 'PHP 4.2.0' even though it isn't (as a security measure).
    testString: ''
  - text: I can post a title to /api/books to add a book and returned will be the object with the title and a unique _id.
    testString: ''
  - text: I can get /api/books to retrieve an array of all books containing title, _id, and commentcount.
    testString: ''
  - text: I can get /api/books/{id} to retrieve a single object of a book containing _title, _id, & an array of comments (empty array if no comments present).
    testString: ''
  - text: I can post a comment to /api/books/{id} to add a comment to a book and returned will be the books object similar to get /api/books/{id} including the new comment.
    testString: ''
  - text: I can delete /api/books/{_id} to delete a book from the collection. Returned will be 'delete successful' if successful.
    testString: ''
  - text: If I try to request a book that doesn't exist I will be returned 'no book exists'.
    testString: ''
  - text: I can send a delete request to /api/books to delete all books in the database. Returned will be 'complete delete successful' if successful.
    testString: ''
  - text: All 6 functional tests required are complete and passing.
    testString: ''

```

</section>
