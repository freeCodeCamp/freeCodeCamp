---
id: 565bbe00e9cc8ac0725390f4
title: Counting Cards
challengeType: 1
videoUrl: ''
localeTitle: Считаем карты
---

## Description
<section id="description"> В игре Blackjack в казино игрок может получить преимущество над домом, отслеживая относительное количество высоких и низких карт, оставшихся в колоде. Это называется <a href="https://en.wikipedia.org/wiki/Card_counting" target="_blank">подсчет карт</a> . Наличие более высоких карт, оставшихся в колоде, способствует игроку. Каждой карте присваивается значение в соответствии с приведенной ниже таблицей. Когда счет положителен, игрок должен делать ставки на высокий уровень. Когда счетчик равен нулю или отрицателен, игрок должен делать ставки на низком уровне. <table class="table table-striped"><thead><tr><th> Изменить счет </th><th> Карты </th></tr></thead><tbody><tr><td> +1 </td><td> 2, 3, 4, 5, 6 </td></tr><tr><td> 0 </td><td> 7, 8, 9 </td></tr><tr><td> -1 </td><td> 10, &#39;J&#39;, &#39;Q&#39;, &#39;K&#39;, &#39;A&#39; </td></tr></tbody></table> Вы будете писать функцию подсчета карт. Он получит параметр <code>card</code> , который может быть числом или строкой, и увеличивать или уменьшать глобальную переменную <code>count</code> в соответствии с значением карты (см. Таблицу). Затем функция вернет строку с текущим счетчиком и строкой <code>Bet</code> если счетчик положителен, или <code>Hold</code> если счетчик равен нулю или отрицателен. Текущий счетчик и решение игрока ( <code>Bet</code> или <code>Hold</code> ) должны быть разделены одним пробелом. <strong>Пример вывода</strong> <br> <code>-3 Hold</code> <br> <code>5 Bet</code> <strong>подсказок</strong> <code>5 Bet</code> <br> НЕ сбрасывайте <code>count</code> до 0, когда значение равно 7, 8 или 9. <br> НЕ возвращать массив. <br> НЕ включайте в выход кавычки (одиночные или двойные). </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Последовательность карт 2, 3, 4, 5, 6 должна вернуть <code>5 Bet</code>'
    testString: 'assert((function(){ count = 0; cc(2);cc(3);cc(4);cc(5);var out = cc(6); if(out === "5 Bet") {return true;} return false; })(), "Cards Sequence 2, 3, 4, 5, 6 should return <code>5 Bet</code>");'
  - text: 'Последовательность карт 7, 8, 9 должна возвращаться <code>0 Hold</code>'
    testString: 'assert((function(){ count = 0; cc(7);cc(8);var out = cc(9); if(out === "0 Hold") {return true;} return false; })(), "Cards Sequence 7, 8, 9 should return <code>0 Hold</code>");'
  - text: 'Последовательность карточек 10, J, Q, K, A должна возвращать <code>-5 Hold</code>'
    testString: 'assert((function(){ count = 0; cc(10);cc("J");cc("Q");cc("K");var out = cc("A"); if(out === "-5 Hold") {return true;} return false; })(), "Cards Sequence 10, J, Q, K, A should return <code>-5 Hold</code>");'
  - text: 'Последовательность карт 3, 7, Q, 8, A должна возвращать <code>-1 Hold</code>'
    testString: 'assert((function(){ count = 0; cc(3);cc(7);cc("Q");cc(8);var out = cc("A"); if(out === "-1 Hold") {return true;} return false; })(), "Cards Sequence 3, 7, Q, 8, A should return <code>-1 Hold</code>");'
  - text: 'Последовательность карт 2, J, 9, 2, 7 должна вернуть <code>1 Bet</code>'
    testString: 'assert((function(){ count = 0; cc(2);cc("J");cc(9);cc(2);var out = cc(7); if(out === "1 Bet") {return true;} return false; })(), "Cards Sequence 2, J, 9, 2, 7 should return <code>1 Bet</code>");'
  - text: 'Последовательность карт 2, 2, 10 должна вернуть <code>1 Bet</code>'
    testString: 'assert((function(){ count = 0; cc(2);cc(2);var out = cc(10); if(out === "1 Bet") {return true;} return false; })(), "Cards Sequence 2, 2, 10 should return <code>1 Bet</code>");'
  - text: 'Последовательность карт 3, 2, A, 10, K должна возвращать <code>-1 Hold</code>'
    testString: 'assert((function(){ count = 0; cc(3);cc(2);cc("A");cc(10);var out = cc("K"); if(out === "-1 Hold") {return true;} return false; })(), "Cards Sequence 3, 2, A, 10, K should return <code>-1 Hold</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var count = 0;

function cc(card) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
