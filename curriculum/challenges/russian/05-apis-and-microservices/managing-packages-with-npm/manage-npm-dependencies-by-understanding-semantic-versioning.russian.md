---
id: 587d7fb5367417b2b2512c01
title: Manage npm Dependencies By Understanding Semantic Versioning
challengeType: 2
forumTopicId: 301529
localeTitle: Управляйте зависимостями npm, понимая семантическое управление версиями
---

## Description
<section id='description'>
Версии пакетов npm в разделе зависимостей вашего package.json следуют так называемому семантическому версионированию (SemVer), отраслевому стандарту управления версиями программного обеспечения, целью которого является упрощение управления зависимостями. Библиотеки, фреймворки или другие инструменты, опубликованные на npm, должны использовать SemVer, чтобы четко определить, каких изменений ожидают проекты, зависящие от пакета, в случае их обновления. 
SemVer не имеет смысла в проектах без общедоступных API - поэтому, если ваш проект не похож на приведенные выше примеры, используйте другой формат управления версиями. 
Так зачем тебе понимать SemVer? 
Знание SemVer может быть полезно при разработке программного обеспечения, которое использует внешние зависимости (что вы почти всегда делаете). Однажды, ваше понимание этих цифр избавит вас от случайного внесения критических изменений в ваш проект, не понимая, почему вещи, которые «сработали вчера», неожиданно не срабатывают. 
Вот как Semantic Versioning работает в соответствии с официальным сайтом: 
Учитывая номер версии MAJOR.MINOR.PATCH, увеличивайте версию: 
MAJOR при внесении несовместимых изменений API, версию 
MINOR при добавлении функциональности обратно-совместимым способом и 
PATCH версия, когда вы делаете обратно совместимые исправления ошибок. 
Это означает, что PATCH являются исправлениями ошибок, а MINOR добавляют новые функции, но ни одна из них не нарушает то, что работало раньше. Наконец, ОСНОВНЫЕ добавляют изменения, которые не будут работать с более ранними версиями. 
Пример 
Семантический номер версии: 1.3.8 
Инструкции 
В разделе зависимостей вашего package.json измените версию момента, чтобы она соответствовала ОСНОВНОЙ версии 2, МИНОР версии 10 и ПАТЧ версии 2
</section>

## Instructions
<section id='instructions'>
In the dependencies section of your package.json file, change the <code>version</code> of moment to match MAJOR version 2, MINOR version 10 and PATCH version 2
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '"dependencies" should include "moment"'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/package.json').then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'moment', '"dependencies" does not include "moment"'); }, xhr => { throw new Error(xhr.responseText); })
  - text: '"moment" version should be "2.10.2"'
    testString: getUserInput => $.get(getUserInput('url') + '/_api/package.json').then(data => { var packJson = JSON.parse(data); assert.equal(packJson.dependencies.moment,"2.10.2", 'Wrong version of "moment". It should be 2.10.2'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
