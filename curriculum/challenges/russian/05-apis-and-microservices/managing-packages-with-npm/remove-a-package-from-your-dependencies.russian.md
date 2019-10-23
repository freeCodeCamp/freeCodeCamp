---
id: 587d7fb5367417b2b2512c04
title: Remove a Package from Your Dependencies
challengeType: 2
forumTopicId: 301530
localeTitle: Удалить пакет из ваших зависимостей
---

## Description
<section id='description'>
Теперь вы протестировали несколько способов управления зависимостями вашего проекта с помощью раздела package.json для зависимостей. Вы включили внешние пакеты, добавив их в файл, и даже сообщили npm, какие типы версий вам нужны, используя специальные символы в качестве тильды (~) или каретки (^). 
Но что если ты хочешь удалить внешний пакет, который тебе больше не нужен? Возможно, вы уже догадались - просто удалите соответствующую пару «ключ»: значение для этого из ваших зависимостей. 
Этот же метод применяется и к удалению других полей в вашем package.json 
Инструкции 
Удалите момент пакета из ваших зависимостей. 
Убедитесь, что у вас есть правильное количество запятых после его удаления.
</section>

## Instructions
<section id='instructions'>
Remove the moment package from your dependencies.
<strong>Note:</strong> Make sure you have the right amount of commas after removing it.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '"dependencies" should not include "moment"'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/package.json').then(data => { var packJson = JSON.parse(data); assert.notProperty(packJson.dependencies, 'moment', '"dependencies" still includes "moment"'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
