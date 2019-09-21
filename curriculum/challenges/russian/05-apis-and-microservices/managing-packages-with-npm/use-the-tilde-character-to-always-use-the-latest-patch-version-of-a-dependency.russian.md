---
id: 587d7fb5367417b2b2512c02
title: Use the Tilde-Character to Always Use the Latest Patch Version of a Dependency
challengeType: 2
forumTopicId: 301532
localeTitle: Используйте символ тильды, чтобы всегда использовать последнюю версию патча зависимости
---

## Description
<section id='description'>
В последнем вызове мы сказали npm включать только определенную версию пакета. Это полезный способ заморозить ваши зависимости, если вам нужно убедиться, что различные части вашего проекта остаются совместимыми друг с другом. Но в большинстве случаев вы не хотите пропустить исправления ошибок, так как они часто включают в себя важные исправления безопасности и (мы надеемся) не нарушают работу. 
Чтобы позволить зависимости npm обновляться до последней версии PATCH, вы можете поставить префикс версии зависимости с символом тильды (~). В package.json наше текущее правило о том, как npm может обновить момент, - использовать только определенную версию (2.10.2), но мы хотим разрешить последнюю версию 2.10.x. 
Пример 
<code>"some-package-name": "~1.3.8" allows updates to any 1.3.x version.</code> 
Инструкции 
Используйте символ тильды (~), чтобы поставить префикс версии момента в ваших зависимостях и позволить npm обновить ее до любой новой версии PATCH. 
Обратите внимание, что сами номера версий менять не следует.
</section>

## Instructions
<section id='instructions'>
In the package.json file, your current rule for how npm may upgrade moment is to use a specific version (2.10.2). But now, you want to allow the latest 2.10.x version.
Use the tilde (<code>~</code>) character to prefix the version of moment in your dependencies, and allow npm to update it to any new PATCH release.
<strong>Note:</strong> The version numbers themselves should not be changed.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '"dependencies" should include "moment"'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/package.json').then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'moment', '"dependencies" does not include "moment"'); }, xhr => { throw new Error(xhr.responseText); })
  - text: '"moment" version should match "~2.10.2"'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/package.json').then(data => { var packJson = JSON.parse(data); assert.match(packJson.dependencies.moment, /^\~2\.10\.2/, 'Wrong version of "moment". It should be ~2.10.2'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
