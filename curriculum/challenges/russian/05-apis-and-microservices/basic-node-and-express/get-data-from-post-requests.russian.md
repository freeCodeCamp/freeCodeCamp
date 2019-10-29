---
id: 587d7fb2367417b2b2512bf8
title: Get Data from POST Requests
challengeType: 2
forumTopicId: 301511
localeTitle: Получить данные из запросов POST
---

## Description
<section id='description'>
Установите обработчик POST по пути <code>/name</code> . Это тот же путь, что и раньше. Мы подготовили форму на главной странице html. Он отправит те же данные упражнения 10 (Строка запроса). Если body-parser настроен правильно, вы должны найти параметры в объекте <code>req.body</code> . Посмотрите на обычный пример библиотеки: 
<blockquote>route: POST '/library'<br>urlencoded_body: userId=546&bookId=6754 <br>req.body: {userId: '546', bookId: '6754'}</blockquote> 
Ответьте тем же объектом JSON, что и раньше: <code>{name: 'firstname lastname'}</code> . Проверьте, работает ли ваша конечная точка, используя HTML-форму, предоставленную на главной странице приложения. 
Подсказка: есть несколько других методов http, отличных от GET и POST. По соглашению между глаголом http и операцией, которую вы собираетесь выполнить на сервере, есть соответствие. Обычное отображение: 
POST (иногда PUT) - создание нового ресурса с использованием информации, отправленной с запросом, 
GET - чтение существующего ресурса без его изменения, 
PUT или PATCH (иногда POST) - обновление ресурса с использованием данных отправлено, 
DELETE =&gt; Удалить ресурс. 
Есть также несколько других методов, которые используются для согласования соединения с сервером. За исключением GET, все другие методы, перечисленные выше, могут иметь полезную нагрузку (то есть данные в теле запроса). Промежуточное программное обеспечение body-parser также работает с этими методами.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Test 1 : Your API endpoint should respond with the correct name'
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/name'', {first: ''Mick'', last: ''Jagger''}).then(data => { assert.equal(data.name, ''Mick Jagger'', ''Test 1: "POST /name" route does not behave as expected'') }, xhr => { throw new Error(xhr.responseText); })'
  - text: 'Test 2 : Your API endpoint should respond with the correct name'
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/name'', {first: ''Keith'', last: ''Richards''}).then(data => { assert.equal(data.name, ''Keith Richards'', ''Test 2: "POST /name" route does not behave as expected'') }, xhr => { throw new Error(xhr.responseText); })'

```

</section>
