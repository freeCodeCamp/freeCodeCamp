---
id: 587d7fb1367417b2b2512bf1
title: Serve JSON on a Specific Route
localeTitle: Служить JSON по определенному маршруту
challengeType: 2
---

## Description
<section id='description'> 
Пока сервер HTML обслуживает (как вы уже догадались!) HTML, API обслуживает данные. <dfn>API REST</dfn> (REpresentational State Transfer) позволяет осуществлять простой обмен данными без необходимости для клиентов знать какие-либо подробности о сервере. Клиенту нужно только знать, где находится ресурс (URL) и какое действие он хочет с ним выполнить (глагол). Глагол GET используется, когда вы извлекаете некоторую информацию, ничего не изменяя. В наши дни предпочтительным форматом данных для перемещения информации по сети является JSON. Проще говоря, JSON - это удобный способ представления объекта JavaScript в виде строки, чтобы его можно было легко передавать. 
Давайте создадим простой API, создав маршрут, который отвечает JSON по пути <code>/json</code> . Вы можете сделать это, как обычно, с помощью <code>app.get()</code> . Внутри обработчика маршрута используйте метод <code>res.json()</code> , передавая объект в качестве аргумента. Этот метод закрывает цикл запрос-ответ, возвращая данные. За кулисами он преобразует действительный объект JavaScript в строку, затем устанавливает соответствующие заголовки, чтобы сообщить браузеру, что вы обслуживаете JSON, и отправляет данные обратно. Допустимый объект имеет обычную структуру <code>{key: data}</code> . Данные могут содержать число, строку, вложенный объект или массив. Данные также могут быть переменной или результатом вызова функции; в этом случае он будет оценен перед преобразованием в строку. 
Подайте объект <code>{"message": "Hello json"}</code> как ответ в формате JSON на запросы GET к маршруту <code>/json</code> . Затем укажите ваш браузер на ваш-app-url / json, вы должны увидеть сообщение на экране. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Конечная точка <code>/json</code> должна обслуживать объект json <code>{"message": "Hello json"}</code> '
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/json'').then(data => { assert.equal(data.message, ''Hello json'', ''The \''/json\'' endpoint does not serve the right data''); }, xhr => { throw new Error(xhr.responseText); })'

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
