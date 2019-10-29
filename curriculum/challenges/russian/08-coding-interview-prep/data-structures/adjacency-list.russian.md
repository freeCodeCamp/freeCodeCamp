---
id: 587d8256367417b2b2512c77
title: Adjacency List
challengeType: 1
forumTopicId: 301620
localeTitle: Список прилавков
---

## Description
<section id='description'>
Графы могут быть представлены по-разному. Здесь мы описываем один способ, который называется <dfn>списком смежности</dfn> . Список смежности по существу представляет собой маркированный список, в котором левой стороной является узел, а правая сторона - список всех других узлов, к которым он подключен. Ниже приведен список смежности. <blockquote> Node1: Node2, Node3 <br> Node2: Node1 <br> Node3: Node1 </blockquote> Выше - неориентированный граф, потому что <code>Node1</code> подключен к <code>Node2</code> и <code>Node3</code> , и эта информация соответствует соединениям <code>Node2</code> и <code>Node3</code> . Список смежности для ориентированного графа будет означать, что каждая строка списка показывает направление. Если выше было указано, то <code>Node2: Node1</code> будет означать, что направленный край указывает от <code>Node2</code> на <code>Node1</code> . Мы можем представить неориентированный граф выше как список смежности, помещая его в объект JavaScript. <blockquote> var undirectedG = { <br> Node1: [&quot;Node2&quot;, &quot;Node3&quot;], <br> Node2: [&quot;Node1&quot;], <br> Node3: [&quot;Node1&quot;] <br> }; </blockquote> Это также можно более просто представить в виде массива, где узлы имеют только цифры, а не строковые метки. <blockquote> var unirectedGArr = [ <br> [1, 2], # Node1 <br> [0], # Node2 <br> [0] # Node3 <br> ]; </blockquote>
</section>

## Instructions
<section id='instructions'>
Создайте социальную сеть как неориентированный граф с 4 узлами / людьми по имени <code>James</code> , <code>Jill</code> , <code>Jenny</code> и <code>Jeff</code> . Между Джеймсом и Джеффом, Джил и Дженни, Джеффом и Дженни.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>undirectedAdjList</code> should only contain four nodes.
    testString: assert(Object.keys(undirectedAdjList).length === 4);
  - text: There should be an edge between <code>Jeff</code> and <code>James</code>.
    testString: assert(undirectedAdjList.James.indexOf("Jeff") !== -1 && undirectedAdjList.Jeff.indexOf("James") !== -1);
  - text: There should be an edge between <code>Jill</code> and <code>Jenny</code>.
    testString: assert(undirectedAdjList.Jill.indexOf("Jenny") !== -1 && undirectedAdjList.Jill.indexOf("Jenny") !== -1);
  - text: There should be an edge between <code>Jeff</code> and <code>Jenny</code>.
    testString: assert(undirectedAdjList.Jeff.indexOf("Jenny") !== -1 && undirectedAdjList.Jenny.indexOf("Jeff") !== -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var undirectedAdjList = {};

```

</div>

</section>

## Solution
<section id='solution'>

```js
var undirectedAdjList = {
  James: ['Jeff'],
  Jill: ['Jenny'],
  Jenny: ['Jill', 'Jeff'],
  Jeff: ['James', 'Jenny']
};
```

</section>
