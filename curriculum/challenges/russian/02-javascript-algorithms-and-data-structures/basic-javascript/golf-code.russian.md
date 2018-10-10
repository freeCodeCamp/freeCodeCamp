---
id: 5664820f61c48e80c9fa476c
title: Golf Code
challengeType: 1
videoUrl: ''
localeTitle: Гольф-код
---

## Description
<section id="description"> В игре в <a href="https://en.wikipedia.org/wiki/Golf" target="_blank">гольф</a> каждое отверстие имеет <code>par</code> означая среднее число <code>strokes</code> игрок в гольф , как ожидается , чтобы сделать для того , чтобы утопить мяч в отверстие , чтобы закончить игру. В зависимости от того , насколько выше или ниже <code>par</code> ваши <code>strokes</code> , там есть другое прозвище. Ваша функция будет передана параметрам <code>par</code> и <code>strokes</code> . Верните правильную строку в соответствии с этой таблицей, которая отображает штрихи в порядке приоритета; верхняя (самая высокая) до нижней (самая низкая): <table class="table table-striped"><thead><tr><th> Штрихи </th><th> Вернуть </th></tr></thead><tbody><tr><td> 1 </td><td> &quot;Отверстие в одном!&quot; </td></tr><tr><td> &lt;= par - 2 </td><td> «Орел» </td></tr><tr><td> пар - 1 </td><td> &quot;Птичка&quot; </td></tr><tr><td> паритет </td><td> «Пар» </td></tr><tr><td> par + 1 </td><td> «Пугало» </td></tr><tr><td> par + 2 </td><td> &quot;Двойной Богей&quot; </td></tr><tr><td> &gt; = par + 3 </td><td> &quot;Иди домой!&quot; </td></tr></tbody></table> <code>par</code> и <code>strokes</code> всегда будут числовыми и положительными. Мы добавили массив всех имен для вашего удобства. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>golfScore(4, 1)</code> должен вернуть «Hole-in-one!».'
    testString: 'assert(golfScore(4, 1) === "Hole-in-one!", "<code>golfScore(4, 1)</code> should return "Hole-in-one!"");'
  - text: '<code>golfScore(4, 2)</code> должен вернуть «Eagle»'
    testString: 'assert(golfScore(4, 2) === "Eagle", "<code>golfScore(4, 2)</code> should return "Eagle"");'
  - text: '<code>golfScore(5, 2)</code> должен вернуть «Eagle»'
    testString: 'assert(golfScore(5, 2) === "Eagle", "<code>golfScore(5, 2)</code> should return "Eagle"");'
  - text: '<code>golfScore(4, 3)</code> должен вернуть «Birdie»'
    testString: 'assert(golfScore(4, 3) === "Birdie", "<code>golfScore(4, 3)</code> should return "Birdie"");'
  - text: '<code>golfScore(4, 4)</code> должен вернуть «Par»'
    testString: 'assert(golfScore(4, 4) === "Par", "<code>golfScore(4, 4)</code> should return "Par"");'
  - text: '<code>golfScore(1, 1)</code> должен вернуть «Hole-in-one!».'
    testString: 'assert(golfScore(1, 1) === "Hole-in-one!", "<code>golfScore(1, 1)</code> should return "Hole-in-one!"");'
  - text: '<code>golfScore(5, 5)</code> должен вернуть «Par»'
    testString: 'assert(golfScore(5, 5) === "Par", "<code>golfScore(5, 5)</code> should return "Par"");'
  - text: '<code>golfScore(4, 5)</code> должен вернуть «Bogey»'
    testString: 'assert(golfScore(4, 5) === "Bogey", "<code>golfScore(4, 5)</code> should return "Bogey"");'
  - text: '<code>golfScore(4, 6)</code> должен вернуть «Double Bogey»'
    testString: 'assert(golfScore(4, 6) === "Double Bogey", "<code>golfScore(4, 6)</code> should return "Double Bogey"");'
  - text: '<code>golfScore(4, 7)</code> должен вернуться «Go Home!».'
    testString: 'assert(golfScore(4, 7) === "Go Home!", "<code>golfScore(4, 7)</code> should return "Go Home!"");'
  - text: '<code>golfScore(5, 9)</code> должен вернуться «Go Home!».'
    testString: 'assert(golfScore(5, 9) === "Go Home!", "<code>golfScore(5, 9)</code> should return "Go Home!"");'

```

</section>

## Challenge Seed
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

## Solution
<section id='solution'>

```js
// solution required
```
</section>
