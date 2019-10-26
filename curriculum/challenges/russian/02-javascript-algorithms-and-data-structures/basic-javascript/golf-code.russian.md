---
id: 5664820f61c48e80c9fa476c
title: Golf Code
challengeType: 1
videoUrl: https://scrimba.com/c/c9ykNUR
forumTopicId: 18195
localeTitle: Гольф-код
---

## Описание
<section id='description'>
В игре в <a href="https://en.wikipedia.org/wiki/Golf" target="_blank">гольф</a> каждая лунка имеет <code>par</code> (пар), т.е. среднее число <code>strokes</code> (ударов), за которое игрок должен пройти лунку. Существуют различные термины, обозначающие, насколько больше или меньше пара было сделано ударов. Вашей функции будут переданы параметры <code>par</code> и <code>strokes</code>. Нужно сделать так, чтобы она выводила правильный термин в соответствии с таблицей ниже, которая отображает удары в порядке приоритета, от верхних (самых лучших) до нижних (самых худших): <table class="table table-striped"><thead><tr><th> Удары </th><th> Обозначение </th></tr></thead><tbody><tr><td> 1 </td><td> &quot;Хол-ин-ван&quot; </td></tr><tr><td> &lt;= par - 2 </td><td> «Орел» </td></tr><tr><td> пар - 1 </td><td> &quot;Птичка&quot; </td></tr><tr><td> паритет </td><td> «Пар» </td></tr><tr><td> par + 1 </td><td> «Пугало» </td></tr><tr><td> par + 2 </td><td> &quot;Двойное Пугало&quot; </td></tr><tr><td> &gt; = par + 3 </td><td> &quot;Иди домой!&quot; </td></tr></tbody></table> <code>par</code> и <code>strokes</code> всегда будут положительными числами. Мы добавили массив всех терминов для вашего удобства.
</section>

## Инструкции
<section id='instructions'>

</section>

## Тесты
<section id='tests'>

```yml
tests:
  - text: <code>golfScore(4, 1)</code> should return "Hole-in-one!"
    testString: assert(golfScore(4, 1) === "Hole-in-one!");
  - text: <code>golfScore(4, 2)</code> should return "Eagle"
    testString: assert(golfScore(4, 2) === "Eagle");
  - text: <code>golfScore(5, 2)</code> should return "Eagle"
    testString: assert(golfScore(5, 2) === "Eagle");
  - text: <code>golfScore(4, 3)</code> should return "Birdie"
    testString: assert(golfScore(4, 3) === "Birdie");
  - text: <code>golfScore(4, 4)</code> should return "Par"
    testString: assert(golfScore(4, 4) === "Par");
  - text: <code>golfScore(1, 1)</code> should return "Hole-in-one!"
    testString: assert(golfScore(1, 1) === "Hole-in-one!");
  - text: <code>golfScore(5, 5)</code> should return "Par"
    testString: assert(golfScore(5, 5) === "Par");
  - text: <code>golfScore(4, 5)</code> should return "Bogey"
    testString: assert(golfScore(4, 5) === "Bogey");
  - text: <code>golfScore(4, 6)</code> should return "Double Bogey"
    testString: assert(golfScore(4, 6) === "Double Bogey");
  - text: <code>golfScore(4, 7)</code> should return "Go Home!"
    testString: assert(golfScore(4, 7) === "Go Home!");
  - text: <code>golfScore(5, 9)</code> should return "Go Home!"
    testString: assert(golfScore(5, 9) === "Go Home!");

```

</section>

## Начальные условия задания
<section id='challengeSeed'>

<div id='js-seed'>

```js
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);

```

</div>

</section>

## Решение
<section id='solution'>

```js
function golfScore(par, strokes) {
  if (strokes === 1) {
    return "Hole-in-one!";
  }

  if (strokes <= par - 2) {
    return "Eagle";
  }

  if (strokes === par - 1) {
    return "Birdie";
  }

  if (strokes === par) {
    return "Par";
  }

  if (strokes === par + 1) {
    return "Bogey";
  }

  if(strokes === par + 2) {
    return "Double Bogey";
  }

  return "Go Home!";
}
```

</section>
