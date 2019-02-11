---
id: 587d7fb5367417b2b2512c04
title: Remove a Package from Your Dependencies
localeTitle: Удалить пакет из ваших зависимостей
challengeType: 2
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

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: «Зависимости» не должны включать «момент»
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.notProperty(packJson.dependencies, ''moment'', ''"dependencies" still includes "moment"''); }, xhr => { throw new Error(xhr.responseText); })'

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
