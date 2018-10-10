---
id: 5a2efd662fb457916e1fe604
title: Iterate with JavaScript Do...While Loops
challengeType: 1
videoUrl: ''
localeTitle: Итерация с помощью JavaScript Do ... While Loops
---

## Description
<section id="description"> Вы можете запустить один и тот же код несколько раз, используя цикл. Следующий тип цикла, который вы узнаете, называется циклом « <code>do...while</code> », потому что он сначала « <code>do</code> » один проход кода внутри цикла, независимо от того, что происходит, а затем он запускает « <code>while</code> », указанное условие истинно и останавливается, как только это условие перестает быть истинным. Давайте посмотрим на пример. <blockquote> var ourArray = []; <br> var i = 0; <br> делать { <br> ourArray.push (я); <br> я ++; <br> } while (i &lt;5); </blockquote> Это ведет себя так же, как вы ожидали бы с любым другим типом цикла, и результирующий массив будет выглядеть как <code>[0, 1, 2, 3, 4]</code> . Однако то, что делает <code>do...while</code> отличается от других циклов, - это то, как оно ведет себя, когда условие не выполняется при первой проверке. Давайте посмотрим на это в действии. Вот регулярный цикл while, который будет запускать код в цикле, пока <code>i &lt; 5</code> . <blockquote> var ourArray = []; <br> var i = 5; <br> тогда как (i &lt;5) { <br> ourArray.push (я); <br> я ++; <br> } </blockquote> Обратите внимание, что мы инициализируем значение <code>i</code> равным 5. Когда мы выполняем следующую строку, мы замечаем, что <code>i</code> не меньше 5. Таким образом, мы не выполняем код внутри цикла. В результате <code>ourArray</code> будет добавлен к нему, поэтому он будет выглядеть так <code>[]</code> когда весь код в приведенном выше примере завершится. Теперь взгляните на цикл <code>do...while</code> while. <blockquote> var ourArray = []; <br> var i = 5; <br> делать { <br> ourArray.push (я); <br> я ++; <br> } while (i &lt;5); </blockquote> В этом случае мы инициализируем значение <code>i</code> как 5, как и в цикле while. Когда мы переходим к следующей строке, нет никакой проверки значения <code>i</code> , поэтому мы переходим к коду внутри фигурных скобок и выполняем его. Мы добавим один элемент в массив и увеличим <code>i</code> до того, как мы перейдем к проверке состояния. Затем, когда мы перейдем к проверке, если <code>i &lt; 5</code> видим, что <code>i</code> теперь 6, что не позволяет выполнить условную проверку. Итак, мы выходим из цикла и выполняем его. В конце приведенного выше примера значение <code>ourArray</code> равно <code>[5]</code> . По существу, цикл <code>do...while</code> while гарантирует, что код внутри цикла будет запускаться хотя бы один раз. Давайте попробуем <code>do...while</code> loop to work, нажав значения в массив. </section>

## Instructions
<section id="instructions"> Измените <code>while</code> цикл в коде для <code>do...while</code> в <code>myArray</code> <code>i</code> <code>11</code> <code>do...while</code> петли так, чтобы петля будет толкать число 10 до <code>myArray</code> , и <code>i</code> буду равен <code>11</code> , когда ваш код завершения работы. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Вы должны использовать <code>do...while</code> loop для этого.
    testString: 'assert(code.match(/do/g), "You should be using a <code>do...while</code> loop for this.");'
  - text: '<code>myArray</code> должен равняться <code>[10]</code> .'
    testString: 'assert.deepEqual(myArray, [10], "<code>myArray</code> should equal <code>[10]</code>.");'
  - text: <code>i</code> должен равняться <code>11</code>
    testString: 'assert.deepEqual(i, 11, "<code>i</code> should equal <code>11</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myArray = [];
var i = 10;

// Only change code below this line.

while (i < 5) {
  myArray.push(i);
  i++;
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
