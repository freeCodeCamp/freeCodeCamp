---
id: 587d7fb0367417b2b2512bef
title: Serve an HTML File
localeTitle: Подавать файл HTML
challengeType: 2
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

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваше приложение должно обслуживать файл views / index.html
    testString: 'getUserInput => $.get(getUserInput(''url'')).then(data => { assert.match(data, /<h1>.*<\/h1>/, ''Your app does not serve the expected HTML''); }, xhr => { throw new Error(xhr.responseText); })'

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
