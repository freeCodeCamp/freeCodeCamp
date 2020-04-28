---
id: 587d7fb6367417b2b2512c07
title: Create a Model
challengeType: 2
forumTopicId: 301535
localeTitle: Создать модель
---

## Description
<section id='description'>
Прежде всего нам нужна схема. Каждая схема отображается в коллекцию MongoDB. Он определяет форму документов в этой коллекции. 
Схемы являются строительным блоком для Моделей. Они могут быть вложенными для создания сложных моделей, но в этом случае мы будем делать все просто. 
Модель позволяет создавать экземпляры ваших объектов, называемые документами. 
Создайте человека, имеющего этот прототип: 
<code>- Person Prototype -</code> 
<code>--------------------</code> 
<code>name : string [required]</code> 
<code>age : number</code> 
<code>favoriteFoods : array of strings (*)</code> 
Используйте базовые типы схем mongoose. Если вы хотите, вы также можете добавить еще 
полей, использовать простые валидаторы, такие как обязательные или уникальные, 
и установить значения по умолчанию. Смотрите <a href='http://mongoosejs.com/docs/guide.html'>документы</a> по <a href='http://mongoosejs.com/docs/guide.html'>mongoose</a>. 
[C] RUD Part I - CREATE 
Примечание: Glitch - это настоящий сервер, и на реальных серверах взаимодействия с db происходят в функциях-обработчиках. Эти функции выполняются, когда происходит какое-то событие (например, кто-то попадает в конечную точку вашего API). Мы будем следовать тому же подходу в этих упражнениях. Функция done() - это обратный вызов, который говорит нам, что мы можем продолжить после завершения асинхронной операции, такой как вставка, поиск, обновление или удаление. Он следует соглашению Node и должен вызываться как done (null, data) в случае успеха или done(err) в случае ошибки. 
Предупреждение. При взаимодействии с удаленными службами могут возникнуть ошибки! 
<code>/* Example */</code> 
<code>var someFunc = function(done) {</code> 
<code>//... do something (risky) ...</code> 
<code>if(error) return done(error);</code> 
<code>done(null, result);</code> 
<code>};</code>
</section>

## Instructions
<section id='instructions'>
Создайте человека, имеющего этот прототип:
<blockquote>
- Person Prototype -<br>
--------------------<br>
name : string [required]<br>
age :  number<br>
favoriteFoods : array of strings (*)
</blockquote>

Используйте основные типы схем mongoose. Если вы хотите, вы также можете добавить
больше полей, используйте простые валидаторы, такие как обязательные или уникальные,
и установить значения по умолчанию. Смотрите <a href='http://mongoosejs.com/docs/guide.html'>документацию mongoose</a>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Создание экземпляра из схемы мангуста должно завершиться успешно
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/mongoose-model'', {name: ''Mike'', age: 28, favoriteFoods: [''pizza'', ''cheese'']}).then(data => { assert.equal(data.name, ''Mike'', ''"model.name" is not what expected''); assert.equal(data.age, ''28'', ''"model.age" is not what expected''); assert.isArray(data.favoriteFoods, ''"model.favoriteFoods" is not an Array''); assert.include(data.favoriteFoods, ''pizza'', ''"model.favoriteFoods" does not include the expected items''); assert.include(data.favoriteFoods, ''cheese'', ''"model.favoriteFoods" does not include the expected items''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>
