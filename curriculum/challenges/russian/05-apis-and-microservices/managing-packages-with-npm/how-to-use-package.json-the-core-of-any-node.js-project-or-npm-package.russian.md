---
id: 587d7fb3367417b2b2512bfb
title: How to Use package.json, the Core of Any Node.js Project or npm Package
challengeType: 2
forumTopicId: 301528
localeTitle: «Как использовать package.json, ядро любого проекта Node.js или пакет npm»
---

## Description
<section id='description'>
Файл package.json является центром любого проекта Node.js или пакета npm. Он хранит информацию о вашем проекте так же, как раздел &lt;head&gt; в HTML-документе описывает содержание веб-страницы. Пакет package.json состоит из одного JSON-объекта, в котором информация хранится в «ключе»: пары значений. В минимальном package.json есть только два обязательных поля - имя и версия - но рекомендуется предоставлять дополнительную информацию о вашем проекте, которая будет полезна для будущих пользователей или сопровождающих. 
Поле автора 
Если вы зайдете в проект Glitch, который вы настроили ранее, и посмотрите на левую сторону экрана, вы найдете дерево файлов, в котором вы можете увидеть обзор различных файлов в вашем проекте. Под внутренним разделом дерева файлов вы найдете package.json - файл, который мы будем улучшать в следующих двух задачах. 
Одним из наиболее распространенных элементов информации в этом файле является поле автора, в котором указывается, кто является создателем проекта. Это может быть либо строка, либо объект с контактными данными. Объект рекомендуется для больших проектов, но в нашем случае подойдет простая строка, как в следующем примере. 
<code>"author": "Jane Doe",</code> 
Instructions 
Добавьте свое имя в поле автора в файле package.json вашего проекта Glitch. 
Помни, что ты пишешь JSON. 
Все имена полей должны использовать двойные кавычки ("), например," author " 
Все поля должны быть разделены запятой (,)
</section>

## Instructions
<section id='instructions'>
Add your name as the <code>author</code> of the project in the package.json file.
<strong>Note:</strong> Remember that you’re writing JSON, so all field names must use double-quotes (") and be separated with a comma (,).
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: package.json should have a valid "author" key
    testString: getUserInput => $.get(getUserInput('url') + '/_api/package.json').then(data => { var packJson = JSON.parse(data); assert(packJson.author, '"author" is missing'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
