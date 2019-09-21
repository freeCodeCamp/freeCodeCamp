---
id: 587d7fb4367417b2b2512bfe
title: Add a License to Your package.json
challengeType: 2
forumTopicId: 301523
localeTitle: Добавить лицензию к вашему package.json
---

## Description
<section id='description'>
Поле лицензии - это место, где вы сообщаете пользователям вашего проекта, что им разрешено делать с ним. 
Некоторые распространенные лицензии для проектов с открытым исходным кодом включают MIT и BSD. http://choosealicense.com - отличный ресурс, если вы хотите узнать больше о том, какая лицензия может соответствовать вашему проекту. 
Информация о лицензии не требуется. Законы об авторском праве в большинстве стран предоставят вам право собственности на то, что вы создаете по умолчанию. Однако всегда полезно четко указывать, что пользователи могут и не могут делать. 
Пример 
<code>"license": "MIT",</code> 
Инструкции 
Заполните поле лицензии в package.json вашего проекта Glitch, если вы считаете это подходящим.
</section>

## Instructions
<section id='instructions'>
Fill the <code>license</code> field in the package.json file of your project as you find suitable.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json should have a valid "license" key
    testString: getUserInput => $.get(getUserInput('url') + '/_api/package.json').then(data => { var packJson = JSON.parse(data); assert(packJson.license, '"license" is missing'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
