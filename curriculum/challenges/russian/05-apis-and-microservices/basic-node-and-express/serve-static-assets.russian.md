---
id: 587d7fb0367417b2b2512bf0
title: Serve Static Assets
challengeType: 2
forumTopicId: 301518
localeTitle: Служить статическим активам
---

## Description
<section id='description'>
HTML-сервер обычно имеет один или несколько каталогов, которые доступны пользователю. Вы можете разместить там статические ресурсы, необходимые для вашего приложения (таблицы стилей, скрипты, изображения). В Express вы можете реализовать эту функцию, используя промежуточное программное обеспечение <code>express.static(path)</code> , где параметр - это абсолютный путь к папке, содержащей ресурсы. Если вы не знаете, что такое промежуточное программное обеспечение, не беспокойтесь. Об этом мы поговорим позже. В основном промежуточные программы - это функции, которые перехватывают обработчики маршрутов, добавляя некоторую информацию. <code>app.use(path, middlewareFunction)</code> программное обеспечение должно быть смонтировано с использованием метода <code>app.use(path, middlewareFunction)</code> . Первый аргумент пути не является обязательным. Если вы не передадите его, промежуточное программное обеспечение будет выполнено для всех запросов. 
Установите <code>express.static()</code> промежуточный слой для всех запросов с <code>app.use()</code> . Абсолютный путь к папке ресурсов - <code>__dirname + /public</code> . 
Теперь ваше приложение должно обслуживать таблицу стилей CSS. Снаружи общедоступная папка будет выглядеть подключенной к корневому каталогу. Ваша первая страница должна выглядеть немного лучше!
</section>

## Instructions
<section id='instructions'>
Mount the <code>express.static()</code> middleware for all requests with <code>app.use()</code>. The absolute path to the assets folder is <code>__dirname + /public</code>.
Now your app should be able to serve a CSS stylesheet. From outside, the public folder will appear mounted to the root directory. Your front-page should look a little better now!
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your app should serve asset files from the <code>/public</code> directory
    testString: getUserInput => $.get(getUserInput('url') + '/style.css').then(data => { assert.match(data, /body\s*\{[^\}]*\}/, 'Your app does not serve static assets'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
