---
id: 587d7fb0367417b2b2512bef
title: Serve an HTML File
challengeType: 2
forumTopicId: 301516
localeTitle: Подавать файл HTML
---

## Description
<section id='description'>
Мы можем ответить файлом, используя метод <code>res.sendFile(path)</code> . 
Вы можете поместить его в обработчик маршрута <code>app.get('/', ...)</code> . За кулисами этот метод установит соответствующие заголовки, чтобы инструктировать ваш браузер о том, как обрабатывать файл, который вы хотите отправить, в соответствии с его типом. Затем он прочитает и отправит файл. Этот метод требует абсолютного пути к файлу. Мы рекомендуем вам использовать глобальную переменную Node <code>__dirname</code> для вычисления пути. 
Например, <code>absolutePath = __dirname + relativePath/file.ext</code> . 
Файл для отправки - <code>/views/index.html</code> . Попробуйте «показать вживую» свое приложение, вы должны увидеть большой HTML-заголовок (и форму, которую мы будем использовать позже…), без применения стиля. 
Примечание: Вы можете отредактировать решение предыдущей задачи или создать новое. Если вы создаете новое решение, имейте в виду, что Express оценивает маршруты сверху вниз. Он выполняет обработчик для первого совпадения. Вы должны закомментировать предыдущее решение, иначе сервер продолжит отвечать строкой.
</section>

## Instructions
<section id='instructions'>
Send the <code>/views/index.html</code> file as a response to GET requests to the <code>/</code> path. If you view your live app, you should see a big HTML heading (and a form that we will use later…), with no style applied.

<strong>Note:</strong> You can edit the solution of the previous challenge or create a new one. If you create a new solution, keep in mind that Express evaluates routes from top to bottom, and executes the handler for the first match. You have to comment out the preceding solution, or the server will keep responding with a string.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your app should serve the file views/index.html
    testString: getUserInput => $.get(getUserInput('url')).then(data => { assert.match(data, /<h1>.*<\/h1>/, 'Your app does not serve the expected HTML'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
