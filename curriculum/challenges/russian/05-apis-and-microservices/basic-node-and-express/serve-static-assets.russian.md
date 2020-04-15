---
id: 587d7fb0367417b2b2512bf0
title: Serve Static Assets
challengeType: 2
forumTopicId: 301518
localeTitle: Служить статическим активам
---

## Описание
<section id='description'>
HTML-сервер обычно имеет один или несколько каталогов, которые доступны пользователю. Вы можете разместить там статические ресурсы, необходимые для вашего приложения (таблицы стилей, скрипты, изображения). В Express вы можете реализовать эту функцию, используя middkeware <code>express.static(path)</code>, где параметр - это абсолютный путь к папке, содержащей ресурсы. Если вы не знаете, что такое middleware, не беспокойтесь. Об этом мы поговорим позже. В основном middleware - это функции, которые перехватывают обработчики маршрутов, добавляя некоторую информацию. <code>app.use(path, middlewareFunction)</code> middleware должно быть задействовано с использованием метода <code>app.use(path, middlewareFunction)</code> . Первый аргумент пути не является обязательным. Если вы не передадите его, middleware будет выполнено для всех запросов. 

</section>

## Задание
<section id='instructions'>
Установите <code>express.static()</code> middleware для всех запросов с <code>app.use()</code> . Абсолютный путь к папке ресурсов - <code>__dirname + /public</code> . 
Теперь ваше приложение должно предоставлять таблицу стилей CSS. Снаружи общедоступная папка будет выглядеть подключенной к корневому каталогу. Ваша первая страница должна выглядеть немного лучше!
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your app should serve asset files from the <code>/public</code> directory
    testString: getUserInput => $.get(getUserInput('url') + '/style.css').then(data => { assert.match(data, /body\s*\{[^\}]*\}/, 'Your app does not serve static assets'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
