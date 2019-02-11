---
id: 587d7fb4367417b2b2512bfe
title: Add a License to Your package.json
localeTitle: Добавить лицензию к вашему package.json
challengeType: 2
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

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json должен иметь действительный лицензионный ключ
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.license, ''"license" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

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
