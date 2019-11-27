---
id: 587d7fb4367417b2b2512bff
title: Add a Version to Your package.json
challengeType: 2
forumTopicId: 301525
localeTitle: Добавить версию в ваш package.json
---

## Description
<section id='description'>
Версия вместе с именем одного из обязательных полей в package.json. Это поле описывает текущую версию вашего проекта. 
Пример 
<code>"version": "1.2",</code> 
инструкции 
Добавьте версию в package.json в вашем проекте Glitch.
</section>

## Instructions
<section id='instructions'>
Add a <code>version</code> to the package.json file of your project.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json should have a valid "version" key
    testString: getUserInput => $.get(getUserInput('url') + '/_api/package.json').then(data => { var packJson = JSON.parse(data); assert(packJson.version, '"version" is missing'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
