---
id: 587d7fb0367417b2b2512bf0
title: Serve Static Assets
localeTitle: Служить статическим активам
challengeType: 2
---

## Description
<section id='description'> 
HTML-сервер обычно имеет один или несколько каталогов, которые доступны пользователю. Вы можете разместить там статические ресурсы, необходимые для вашего приложения (таблицы стилей, скрипты, изображения). В Express вы можете реализовать эту функцию, используя промежуточное программное обеспечение <code>express.static(path)</code> , где параметр - это абсолютный путь к папке, содержащей ресурсы. Если вы не знаете, что такое промежуточное программное обеспечение, не беспокойтесь. Об этом мы поговорим позже. В основном промежуточные программы - это функции, которые перехватывают обработчики маршрутов, добавляя некоторую информацию. <code>app.use(path, middlewareFunction)</code> программное обеспечение должно быть смонтировано с использованием метода <code>app.use(path, middlewareFunction)</code> . Первый аргумент пути не является обязательным. Если вы не передадите его, промежуточное программное обеспечение будет выполнено для всех запросов. 
Установите <code>express.static()</code> промежуточный слой для всех запросов с <code>app.use()</code> . Абсолютный путь к папке ресурсов - <code>__dirname + /public</code> . 
Теперь ваше приложение должно обслуживать таблицу стилей CSS. Снаружи общедоступная папка будет выглядеть подключенной к корневому каталогу. Ваша первая страница должна выглядеть немного лучше! 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваше приложение должно обслуживать файлы ресурсов из каталога <code>/public</code>
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/style.css'').then(data => { assert.match(data, /body\s*\{[^\}]*\}/, ''Your app does not serve static assets''); }, xhr => { throw new Error(xhr.responseText); })'

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
