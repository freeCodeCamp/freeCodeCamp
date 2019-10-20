---
id: 587d7fb4367417b2b2512bfd
title: Add Keywords to Your package.json
challengeType: 2
forumTopicId: 301526
localeTitle: Добавьте ключевые слова в ваш package.json
---

## Description
<section id='description'>
Поле ключевых слов - это то, где вы можете описать свой проект, используя связанные ключевые слова. 
Пример 
<code>"keywords": [ "descriptive", "related", "words" ],</code> 
Как видите, это поле структурировано как массив строк в двойных кавычках. 
Инструкции 
Добавьте массив подходящих строк в поле ключевых слов в package.json вашего проекта Glitch. 
Одно из ключевых слов должно быть freecodecamp.
</section>

## Instructions
<section id='instructions'>
Add an array of suitable strings to the <code>keywords</code> field in the package.json file of your project.
One of the keywords should be "freecodecamp".
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json should have a valid "keywords" key
    testString: getUserInput => $.get(getUserInput('url') + '/_api/package.json').then(data => { var packJson = JSON.parse(data); assert(packJson.keywords, '"keywords" is missing'); }, xhr => { throw new Error(xhr.responseText); })
  - text: '"keywords" field should be an Array'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/package.json').then(data => { var packJson = JSON.parse(data); assert.isArray(packJson.keywords, '"keywords" is not an array'); }, xhr => { throw new Error(xhr.responseText); })
  - text: '"keywords" should include "freecodecamp"'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/package.json').then(data => { var packJson = JSON.parse(data);     assert.include(packJson.keywords, 'freecodecamp', '"keywords" does not include "freecodecamp"'); },  xhr => { throw new Error(xhr.responseText); })

```

</section>
