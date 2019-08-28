---
id: 587d7fb1367417b2b2512bf3
title: Implement a Root-Level Request Logger Middleware
challengeType: 2
forumTopicId: 301514
localeTitle: Реализовать промежуточное программное обеспечение регистратора запросов корневого уровня
---

## Description
<section id='description'>
Прежде чем мы представили функцию промежуточного программного обеспечения <code>express.static()</code> . Теперь пришло время посмотреть, что такое промежуточное программное обеспечение, более подробно. Функции промежуточного программного обеспечения - это функции, которые принимают 3 аргумента: объект запроса, объект ответа и следующую функцию в цикле запрос-ответ приложения. Эти функции выполняют некоторый код, который может иметь побочные эффекты для приложения, и обычно добавляют информацию к объектам запроса или ответа. Они также могут завершить цикл отправки ответа, когда выполняется какое-либо условие. Если они не отправляют ответ, по завершении они начинают выполнение следующей функции в стеке. Это вызвано вызовом третьего аргумента <code>next()</code> . Больше информации в <a href='http://expressjs.com/en/guide/using-middleware.html' target='_blank'>экспресс-документации</a> . 
Посмотрите на следующий пример: 
<blockquote>function(req, res, next) {<br>  console.log("I'm a middleware...");<br>  next();<br>}</blockquote> 
Давайте предположим, что мы смонтировали эту функцию на маршруте. Когда запрос соответствует маршруту, он отображает строку «Я - промежуточное ПО…». Затем он выполняет следующую функцию в стеке. 
В этом упражнении мы собираемся создать промежуточное программное обеспечение корневого уровня. Как мы видели в задаче 4, чтобы смонтировать функцию промежуточного программного обеспечения на корневом уровне, мы можем использовать метод <code>app.use(&lt;mware-function&gt;)</code> . В этом случае функция будет выполнена для всех запросов, но вы также можете установить более конкретные условия. Например, если вы хотите, чтобы функция выполнялась только для запросов POST, вы можете использовать <code>app.post(&lt;mware-function&gt;)</code> . Аналогичные методы существуют для всех http-глаголов (GET, DELETE, PUT,…). 
Построй простой регистратор. Для каждого запроса он должен войти в консоль с строкой следующего формата: <code>method path - ip</code> . Пример будет выглядеть так: <code>GET /json - ::ffff:127.0.0.1</code> . Обратите внимание , что существует пространство между <code>method</code> и <code>path</code> и тир разделением <code>path</code> и <code>ip</code> окружен пространством с обоего сторон. Вы можете получить метод запроса (http-глагол), относительный путь маршрута и IP-адрес вызывающего абонента из объекта запроса, используя <code>req.method</code> , <code>req.path</code> и <code>req.ip</code> Не забудьте вызвать <code>next()</code> когда вы закончите, иначе ваш сервер застрянет навсегда. Обязательно откройте «Журналы» и посмотрите, что произойдет, когда поступит какой-то запрос… 
Подсказка: Express оценивает функции в порядке их появления в коде. Это верно и для промежуточного программного обеспечения. Если вы хотите, чтобы он работал для всех маршрутов, он должен быть установлен перед ними.
</section>

## Instructions
<section id='instructions'>
Build a simple logger. For every request, it should log to the console a string taking the following format: <code>method path - ip</code>. An example would look like this: <code>GET /json - ::ffff:127.0.0.1</code>. Note that there is a space between <code>method</code> and <code>path</code> and that the dash separating <code>path</code> and <code>ip</code> is surrounded by a space on both sides. You can get the request method (http verb), the relative route path, and the caller’s ip from the request object using <code>req.method</code>, <code>req.path</code> and <code>req.ip</code>. Remember to call <code>next()</code> when you are done, or your server will be stuck forever. Be sure to have the ‘Logs’ opened, and see what happens when some request arrives.
<strong>Note:</strong> Express evaluates functions in the order they appear in the code. This is true for middleware too. If you want it to work for all the routes, it should be mounted before them.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Root level logger middleware should be active
    testString: getUserInput => $.get(getUserInput('url') + '/_api/root-middleware-logger').then(data => { assert.isTrue(data.passed, 'root-level logger is not working as expected'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
