---
id: 587d7fb4367417b2b2512bff
title: Add a Version to Your package.json
localeTitle: Добавить версию в ваш package.json
challengeType: 2
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

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json должен иметь действительный ключ версии
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.version, ''"version" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

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
