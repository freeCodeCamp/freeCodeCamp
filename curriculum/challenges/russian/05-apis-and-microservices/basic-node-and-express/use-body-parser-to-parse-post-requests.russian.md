---
id: 587d7fb2367417b2b2512bf7
title: Use body-parser to Parse POST Requests
challengeType: 2
forumTopicId: 301520
localeTitle: Используйте body-parser для разбора POST-запросов
---

## Description
<section id='description'>
Помимо GET есть еще один распространенный http глагол, это POST. POST - это метод по умолчанию, используемый для отправки данных клиента с помощью HTML-форм. В соглашении REST POST используется для отправки данных для создания новых элементов в базе данных (новый пользователь или новый пост в блоге). У нас нет базы данных в этом проекте, но мы все равно узнаем, как обрабатывать запросы POST. 
В таких запросах данные не отображаются в URL, они скрыты в теле запроса. Это часть запроса HTML, также называемая полезной нагрузкой. Поскольку HTML основан на тексте, даже если вы не видите данные, это не значит, что они являются секретными. Необработанное содержимое запроса HTTP POST показано ниже: 
<blockquote>POST /path/subpath HTTP/1.0<br>From: john@example.com<br>User-Agent: someBrowser/1.0<br>Content-Type: application/x-www-form-urlencoded<br>Content-Length: 20<br>name=John+Doe&age=25</blockquote> 
Как видите, тело закодировано как строка запроса. Это формат по умолчанию, используемый формами HTML. С Ajax мы также можем использовать JSON для обработки данных, имеющих более сложную структуру. Существует также другой тип кодирования: multipart / form-data. Этот используется для загрузки бинарных файлов. 
В этом упражнении мы будем использовать урлен-кодированное тело. 
Для анализа данных, поступающих из запросов POST, вам необходимо установить пакет: body-parser. Этот пакет позволяет использовать серию промежуточного программного обеспечения, которое может декодировать данные в разных форматах. Смотрите документы <a href="https://github.com/expressjs/body-parser" target="_blank" >здесь</a> . 
Установите модуль body-parser в ваш файл package.json. Тогда потребуйте это наверху файла. Сохраните его в переменной с именем bodyParser. 
<code>bodyParser.urlencoded({extended: false})</code> программное обеспечение для обработки URL-кодированных данных возвращается <code>bodyParser.urlencoded({extended: false})</code> . <code>extended=false</code> - это параметр конфигурации, который указывает синтаксическому анализатору использовать классическую кодировку. При его использовании значения могут быть только строками или массивами. Расширенная версия обеспечивает большую гибкость данных, но она превосходит JSON. Передайте <code>app.use()</code> функцию, возвращенную предыдущим вызовом метода. Как обычно, промежуточное программное обеспечение должно быть установлено перед всеми маршрутами, которые в нем нуждаются.
</section>

## Instructions
<section id='instructions'>
Install the <code>body-parser</code> module in your <code>package.json</code>. Then, <code>require</code> it at the top of the file. Store it in a variable named <code>bodyParser</code>. The middleware to handle urlencoded data is returned by <code>bodyParser.urlencoded({extended: false})</code>. Pass to <code>app.use()</code> the function returned by the previous method call. As usual, the middleware must be mounted before all the routes which need it.
<strong>Note:</strong> <code>extended=false</code> is a configuration option that tells the parser to use the classic encoding. When using it, values can be only strings or arrays. The extended version allows more data flexibility, but it is outmatched by JSON.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The 'body-parser' middleware should be mounted
    testString: getUserInput => $.get(getUserInput('url') + '/_api/add-body-parser').then(data => { assert.isAbove(data.mountedAt, 0, '"body-parser" is not mounted correctly') }, xhr => { throw new Error(xhr.responseText); })

```

</section>
