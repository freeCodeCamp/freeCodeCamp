---
id: 587d8249367417b2b2512c42
title: Issue Tracker
challengeType: 4
isRequired: true
forumTopicId: 301569
localeTitle: Отслеживание проблем
---

## Description
<section id='description'>
Создайте полное приложение JavaScript для стека, которое функционально похоже на это: <a href="https://protective-garage.glitch.me/" target="_blank">https://protective-garage.glitch.me/</a> . Работа над этим проектом предполагает, что вы будете писать свой код на Glitch в нашем стартовом проекте. После завершения этого проекта вы можете скопировать свой общедоступный URL-адрес глюка (на домашнюю страницу вашего приложения) на этот экран, чтобы проверить его! При желании вы можете написать свой проект на другой платформе, но он должен быть общедоступным для нашего тестирования. Запустите этот проект на Glitch, используя <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-project-issuetracker/">эту ссылку</a> или клонируйте <a href="https://github.com/freeCodeCamp/boilerplate-project-issuetracker/">этот репозиторий</a> на GitHub! Если вы используете Glitch, не забудьте сохранить ссылку на ваш проект где-нибудь в безопасности!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Prevent cross site scripting (XSS) attacks.
    testString: ''
  - text: I can POST /api/issues/{projectname} with form data containing required issue_title, issue_text, created_by, and optional assigned_to and status_text.
    testString: ''
  - text: The object saved (and returned) will include all of those fields (blank for optional no input) and also include created_on(date/time), updated_on(date/time), open(boolean, true for open, false for closed), and _id.
    testString: ''
  - text: I can PUT /api/issues/{projectname} with a id and any fields in the object with a value to object said object. Returned will be 'successfully updated' or 'could not update '+id. This should always update updated_on. If no fields are sent return 'no updated field sent'.
    testString: ''
  - text: 'I can DELETE /api/issues/{projectname} with a id to completely delete an issue. If no _id is sent return ''id error'', success: ''deleted ''+id, failed: ''could not delete ''+id.'
    testString: ''
  - text: I can GET /api/issues/{projectname} for an array of all issues on that specific project with all the information for each issue as was returned when posted.
    testString: ''
  - text: I can filter my get request by also passing along any field and value in the query(ie. /api/issues/{project}?open=false). I can pass along as many fields/values as I want.
    testString: ''
  - text: All 11 functional tests are complete and passing.
    testString: ''

```

</section>
