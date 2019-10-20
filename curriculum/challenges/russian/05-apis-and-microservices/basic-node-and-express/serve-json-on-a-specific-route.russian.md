---
id: 587d7fb1367417b2b2512bf1
title: Serve JSON on a Specific Route
challengeType: 2
forumTopicId: 301517
localeTitle: Служить JSON по определенному маршруту
---

## Description
<section id='description'>
Пока сервер HTML обслуживает (как вы уже догадались!) HTML, API обслуживает данные. <dfn>API REST</dfn> (REpresentational State Transfer) позволяет осуществлять простой обмен данными без необходимости для клиентов знать какие-либо подробности о сервере. Клиенту нужно только знать, где находится ресурс (URL) и какое действие он хочет с ним выполнить (глагол). Глагол GET используется, когда вы извлекаете некоторую информацию, ничего не изменяя. В наши дни предпочтительным форматом данных для перемещения информации по сети является JSON. Проще говоря, JSON - это удобный способ представления объекта JavaScript в виде строки, чтобы его можно было легко передавать. 
Давайте создадим простой API, создав маршрут, который отвечает JSON по пути <code>/json</code> . Вы можете сделать это, как обычно, с помощью <code>app.get()</code> . Внутри обработчика маршрута используйте метод <code>res.json()</code> , передавая объект в качестве аргумента. Этот метод закрывает цикл запрос-ответ, возвращая данные. За кулисами он преобразует действительный объект JavaScript в строку, затем устанавливает соответствующие заголовки, чтобы сообщить браузеру, что вы обслуживаете JSON, и отправляет данные обратно. Допустимый объект имеет обычную структуру <code>{key: data}</code> . Данные могут содержать число, строку, вложенный объект или массив. Данные также могут быть переменной или результатом вызова функции; в этом случае он будет оценен перед преобразованием в строку. 
Подайте объект <code>{"message": "Hello json"}</code> как ответ в формате JSON на запросы GET к маршруту <code>/json</code> . Затем укажите ваш браузер на ваш-app-url / json, вы должны увидеть сообщение на экране.
</section>

## Instructions
<section id='instructions'>
Serve the object <code>{"message": "Hello json"}</code> as a response, in JSON format, to GET requests to the <code>/json</code> route. Then point your browser to <code>your-app-url/json</code>, you should see the message on the screen.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'The endpoint <code>/json</code> should serve the json object <code>{"message": "Hello json"}</code>'
    testString: getUserInput => $.get(getUserInput('url') + '/json').then(data => { assert.equal(data.message, 'Hello json', 'The \'/json\' endpoint does not serve the right data'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
