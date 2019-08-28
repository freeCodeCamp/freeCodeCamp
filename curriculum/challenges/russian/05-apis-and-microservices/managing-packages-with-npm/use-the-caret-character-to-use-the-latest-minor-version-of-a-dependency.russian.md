---
id: 587d7fb5367417b2b2512c03
title: Use the Caret-Character to Use the Latest Minor Version of a Dependency
challengeType: 2
forumTopicId: 301531
localeTitle: Используйте символ каретки, чтобы использовать последнюю младшую версию зависимости
---

## Description
<section id='description'>
Подобно тому, как тильда (~), о которой мы узнали в последнем вызове, позволяет npm устанавливать последний PATCH для зависимости, символ вставки (^) также позволяет npm устанавливать будущие обновления. Разница в том, что каретка будет разрешать как незначительные обновления, так и патчи. 
На данный момент ваша текущая версия момента должна быть ~ 2.10.2, что позволяет npm установить последнюю версию 2.10.x. Если бы вместо этого мы использовали в качестве префикса версии символ вставки (^), вместо npm было бы разрешено обновить его до любой версии 2.xx. 
Пример 
<code>"some-package-name": "^1.3.8" allows updates to any 1.xx version.</code> 
Инструкции 
Используйте символ вставки (^), чтобы поставить префикс версии момента в ваших зависимостях и позволить npm обновить ее до любой новой версии MINOR. 
Обратите внимание, что сами номера версий менять не следует.
</section>

## Instructions
<section id='instructions'>
Use the caret (<code>^</code>) to prefix the version of moment in your dependencies and allow npm to update it to any new MINOR release.
<strong>Note:</strong> The version numbers themselves should not be changed.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '"dependencies" should include "moment"'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/package.json').then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'moment', '"dependencies" does not include "moment"'); }, xhr => { throw new Error(xhr.responseText); })
  - text: '"moment" version should match "^2.x.x"'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/package.json').then(data => { var packJson = JSON.parse(data); assert.match(packJson.dependencies.moment, /^\^2\./, 'Wrong version of "moment". It should be ^2.10.2'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
