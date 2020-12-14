---
id: 587d7fb6367417b2b2512c07
challengeType: 2
forumTopicId: 301535
title: 创建一个模型
---

## Description
<section id='description'>
<b>C</b>RUD 第一小节—CREATE

首先，我们需要一个 Schema（架构、模式或纲要，详情请参阅<a href='https://en.wikipedia.org/wiki/Database_schema'>维基百科</a>），每一个 Schema 都对应一个 MongoDB 的 <a href='https://docs.mongodb.com/manual/reference/glossary/#term-collection'>collection</a>，并且在相应的 collection 里定义 <a href='https://docs.mongodb.com/manual/reference/glossary/#term-document'>documents</a> 的“样子”。
Schema 用于组成 Model（模型），我们甚至可以通过嵌套 Schema 来创建复杂的模型。但是这里我们只学习 Schema 的基础用法。
我们可以根据模型创建实例，模型实例化后的对象称为 documents。

Repl.it 是一个真实的服务器。习惯上，我们会编写函数来处理外界与服务器中数据库的交互，这些函数会在特定事件发生（比如有人调用了我们的服务器 API）时执行。接下来的挑战题目即是以此为基础。<code>done()</code> 是一个回调函数，它的作用是在一个异步操作（比如对数据库进行插入、搜索、更新或删除）执行完成时，通知我们可以继续执行后续的其它代码。这与 Node.js 中的处理方式十分类似。在 Node.js 中，我们会在（异步操作）成功时调用 <code>done(null, data)</code>，在失败时调用 <code>done(err)</code>。

注意：与远程服务器进行交互时，我们需要考虑到发生错误的可能

```js
/* 示例 */

var someFunc = function(done) {
  //... do something (risky) ...
  if(error) return done(error);
  done(null, result);
};
```

</section>


## Instructions
<section id='instructions'> 
以此为原型创建一个 Person：
<blockquote>
- Person 的原型 -<br>
--------------------<br>
name : string [required]<br>
age :  number<br>
favoriteFoods : array of strings (*)
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应当成功地通过 Mongoose schema 创建实例
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/_api/mongoose-model'', {name: ''Mike'', age: 28, favoriteFoods: [''pizza'', ''cheese'']}).then(data => { assert.equal(data.name, ''Mike'', ''"model.name" is not what expected''); assert.equal(data.age, ''28'', ''"model.age" is not what expected''); assert.isArray(data.favoriteFoods, ''"model.favoriteFoods" is not an Array''); assert.include(data.favoriteFoods, ''pizza'', ''"model.favoriteFoods" does not include the expected items''); assert.include(data.favoriteFoods, ''cheese'', ''"model.favoriteFoods" does not include the expected items''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>
