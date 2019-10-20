---
id: 587d8256367417b2b2512c79
title: Incidence Matrix
challengeType: 1
forumTopicId: 301644
localeTitle: Матрица инцидентов
---

## Description
<section id='description'>
Еще один способ представить график - положить его в <dfn>матрицу инцидентности.</dfn> Матрица <dfn>инцидентности</dfn> представляет собой двумерный (2D) массив. Вообще говоря, матрица инцидентов связывает два разных класса объектов между двумя его измерениями. Такая матрица подобна матрице смежности. Тем не менее, строки и столбцы означают что-то еще здесь. В графах мы имеем ребра и узлы. Это будут наши «два разных класса объектов». Эта матрица будет содержать строки, в которых узлы и столбцы будут ребрами. Это означает, что мы можем иметь нечетное количество строк и столбцов. Каждый столбец будет представлять собой уникальный ребро. Кроме того, каждое ребро соединяет два узла. Чтобы показать, что существует ребро между двумя узлами, вы поместите 1 в две строки определенного столбца. Ниже приведен граф из 3 узлов с одним ребром между узлом 1 и узлом 3. <blockquote> 1 <br> --- <br> 1 | 1 <br> 2 | 0 <br> 3 | 1 </blockquote> Ниже приведен пример <code>incidence matrix</code> с 4 ребрами и 4 узлами. Помните, что столбцы - это ребра, а строки - сами узлы. <blockquote> 1 2 3 4 <br> -------- <br> 1 | 0 1 1 1 <br> 2 | 1 1 0 0 <br> 3 | 1 0 0 1 <br> 4 | 0 0 1 0 </blockquote> Ниже приведена реализация JavaScript того же самого. <blockquote> var incMat = [ <br> [0, 1, 1, 1], <br> [1, 1, 0, 0], <br> [1, 0, 0, 1], <br> [0, 0, 1, 0] <br> ]; </blockquote> Чтобы создать ориентированный граф, используйте <code>-1</code> для края, оставляющего определенный узел, и <code>1</code> для края, входящего в узел. <blockquote> var incMatDirected = [ <br> [0, -1, 1, -1], <br> [-1, 1, 0, 0], <br> [1, 0, 0, 1], <br> [0, 0, -1, 0] <br> ]; </blockquote> Графики также могут иметь <dfn>веса</dfn> по краям. До сих пор у нас есть <dfn>невзвешенные</dfn> края, где только наличие и отсутствие ребра двоично ( <code>0</code> или <code>1</code> ). Вы можете иметь разные веса в зависимости от вашего приложения. Другой вес представлен как числа больше 1.
</section>

## Instructions
<section id='instructions'>
Создайте матрицу инцидентности неориентированного графа с пятью узлами и четырьмя ребрами. Эта матрица должна быть в многомерном массиве. Эти пять узлов имеют отношения, следующие за отношениями. Первое ребро находится между первым и вторым узлами. Второе ребро находится между вторым и третьим узлами. Третий край находится между третьим и пятым узлами. И четыре края расположены между четвертым и вторым узлами. Все весовые коэффициенты ребер имеют один и порядок ребер.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>incMatUndirected</code> should only contain five nodes.
    testString: assert((incMatUndirected.length === 5) && incMatUndirected.map(function(x) { return x.length === 4 }).reduce(function(a, b) { return a && b }) );
  - text: There should be a first edge between the first and second node.
    testString: assert((incMatUndirected[0][0] === 1) && (incMatUndirected[1][0] === 1));
  - text: There should be a second edge between the second and third node.
    testString: assert((incMatUndirected[1][1] === 1) && (incMatUndirected[2][1] === 1));
  - text: There should be a third edge between the third and fifth node.
    testString: assert((incMatUndirected[2][2] === 1) && (incMatUndirected[4][2] === 1));
  - text: There should be a fourth edge between the second and fourth node.
    testString: assert((incMatUndirected[1][3] === 1) && (incMatUndirected[3][3] === 1));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var incMatUndirected = [

];

```

</div>

</section>

## Solution
<section id='solution'>

```js
var incMatUndirected = [[1, 0, 0, 0],[1, 1, 0, 1],[0, 1, 1, 0],[0, 0, 0, 1],[0, 0, 1, 0]];
```

</section>
