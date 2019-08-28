---
title: General FizzBuzz
id: 5a23c84252665b21eecc7e78
challengeType: 5
forumTopicId: 302273
localeTitle: Общие вопросы FizzBuzz
---

## Description
<section id='description'>
Напишите обобщенную версию <a href="http://rosettacode.org/wiki/FizzBuzz">FizzBuzz,</a> которая работает для любого списка факторов вместе со своими словами. Это в основном реализация «fizzbuzz», где правила игры предоставляются пользователю. Создайте функцию для ее реализации. Функция должна принимать два параметра. Первым будет массив с правилами FizzBuzz. Например: <code>[ [3,&quot;Fizz&quot;] , [5,&quot;Buzz&quot;] ]</code> . Это указывает на то, что <code>Fizz</code> следует печатать, если число кратно 3 и <code>Buzz</code> если оно кратно 5. Если оно кратно, то строки должны быть объединены в порядке, указанном в массиве. В этом случае <code>FizzBuzz</code> если число кратно 3 и 5. Второй параметр - это номер, для которого функция должна возвращать строку, как указано выше.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>genFizzBuzz</code> should be a function.
    testString: assert(typeof genFizzBuzz=='function');
  - text: <code>genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)</code> should return a string.
    testString: assert(typeof genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)=='string');
  - text: <code>genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6)</code> should return <code>"Fizz"</code>.
    testString: assert.equal(genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 6), "Fizz");
  - text: <code>genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 10)</code> should return <code>"Buzz"</code>.
    testString: assert.equal(genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 10), "Buzz");
  - text: <code>genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 12)</code> should return <code>"Buzz"</code>.
    testString: assert.equal(genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 12), "Buzz");
  - text: <code>genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 13)</code> should return <code>"13"</code>.
    testString: assert.equal(genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 13), '13');
  - text: <code>genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 15)</code> should return <code>"BuzzFizz"</code>.
    testString: assert.equal(genFizzBuzz([[3, "Buzz"],[5, "Fizz"]], 15), "BuzzFizz");
  - text: <code>genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 15)</code> should return <code>"FizzBuzz"</code>.
    testString: assert.equal(genFizzBuzz([[3, "Fizz"],[5, "Buzz"]], 15), "FizzBuzz");
  - text: <code>genFizzBuzz([[3, "Fizz"],[5, "Buzz"],[7, "Baxx"]], 105)</code> should return <code>"FizzBuzzBaxx"</code>.
    testString: assert.equal(genFizzBuzz([[3, "Fizz"],[5, "Buzz"],[7, "Baxx"]], 105), "FizzBuzzBaxx");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function genFizzBuzz(rules, num) {
  // Good luck!
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function genFizzBuzz(rules, num) {
  let res='';
  rules.forEach(function (e) {
    if(num % e[0] == 0)
      res+=e[1];
  })

  if(res==''){
    res=num.toString();
  }

  return res;
}
```

</section>
