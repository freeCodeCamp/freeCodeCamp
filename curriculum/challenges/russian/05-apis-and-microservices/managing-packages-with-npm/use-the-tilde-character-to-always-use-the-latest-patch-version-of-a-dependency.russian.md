---
id: 587d7fb5367417b2b2512c02
title: Use the Tilde-Character to Always Use the Latest Patch Version of a Dependency
localeTitle: Используйте символ тильды, чтобы всегда использовать последнюю версию патча зависимости
challengeType: 2
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

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: «Зависимости» должны включать «момент»
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, ''moment'', ''"dependencies" does not include "moment"''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: «Моментная» версия должна соответствовать «~ 2.10.2»
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.match(packJson.dependencies.moment, /^\~2\.10\.2/, ''Wrong version of "moment". It should be ~2.10.2''); }, xhr => { throw new Error(xhr.responseText); })'

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
