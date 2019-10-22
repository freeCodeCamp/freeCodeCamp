---
id: 587d7fb1367417b2b2512bf4
title: Chain Middleware to Create a Time Server
challengeType: 2
forumTopicId: 301510
localeTitle: Middleware для создания сервера времени
---

## Описание
<section id='description'>
<code>middlewareFunction</code> можно смонтировать по определенному маршруту, используя <code>app.METHOD(path, middlewareFunction)</code>. Middleware также может быть задействовано внутри определения маршрута. 
Посмотрите на следующий пример: 
<blockquote>app.get('/user', function(req, res, next) {<br>  req.user = getTheUserSync();  // Hypothetical synchronous operation<br>  next();<br>}, function(req, res) {<br>  res.send(req.user);<br>})</blockquote> 
Этот подход полезен для разделения операций сервера на более мелкие единицы. Это приводит к лучшей структуре приложения и возможности повторного использования кода в разных местах. Этот подход также можно использовать для проверки данных. В каждой точке стека middleware вы можете заблокировать выполнение текущей цепочки и передать управление функциям, специально разработанным для обработки ошибок. Или вы можете передать управление следующему подходящему маршруту для обработки особых случаев. Мы увидим, как в расширенном разделе express. 
</section>
  
## Задание
<section id='instructions'>
В маршруте <code>app.get('/now', ...)</code> привяжите middleware к конечному обработчику. В middleware добавьте текущее время к объекту запроса в поле <code>req.time</code>. Вы можете использовать <code>new Date().toString()</code> . В обработчике ответьте объектом JSON со структурой <code>{time: req.time}</code> . 
<strong>Подсказка:</strong> тест не пройдет, если вы не подключите middleware. Если вы смонтируете ee где-то еще, тест не пройдёт, даже если результат вывода верный.
</section>

## Тесты
<section id='tests'>

```yml
tests:
  - text: The /now endpoint should have mounted middleware
    testString: getUserInput => $.get(getUserInput('url') + '/_api/chain-middleware-time').then(data => { assert.equal(data.stackLength, 2, '"/now" route has no mounted middleware'); }, xhr => { throw new Error(xhr.responseText); })
  - text: The /now endpoint should return a time that is +/- 20 secs from now
    testString: getUserInput => $.get(getUserInput('url') + '/_api/chain-middleware-time').then(data => { var now = new Date(); assert.isAtMost(Math.abs(new Date(data.time) - now), 20000, 'the returned time is not between +- 20 secs from now'); }, xhr => { throw new Error(xhr.responseText); })

```

</section>
