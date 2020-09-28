---
id: 587d7b86367417b2b2512b3d
title: Prevent Infinite Loops with a Valid Terminal Condition
challengeType: 1
forumTopicId: 301192
localeTitle: Предотвращение бесконечных циклов с допустимым условием терминала
---

## Description
<section id='description'>
Последней темой является бесконечный бесконечный цикл. Циклы - отличные инструменты, когда вам нужно, чтобы ваша программа выполняла блок кода определенное количество раз или до тех пор, пока не будет выполнено условие, но им нужно условие терминала, которое завершает цикл. Бесконечные циклы, скорее всего, замерзнут или сбой браузера, и вызовут хаос общей программы, чего никто не хочет. Был пример бесконечного цикла во введении к этому разделу - у него не было терминального условия вырваться из в <code>while</code> петлях внутри <code>loopy()</code> . Не вызывайте эту функцию! <blockquote> функция loopy () { <br> while (true) { <br> console.log («Привет, мир!»); <br> } <br> } </blockquote> Задача программиста заключается в том, чтобы в конечном итоге было достигнуто условие терминала, которое сообщает программе о выходе из кода цикла. Одна ошибка - это увеличение или уменьшение переменной счетчика в неправильном направлении от состояния терминала. Другой случайный сброс счетной или индексной переменной в коде цикла, вместо того, чтобы увеличивать или уменьшать ее.
</section>

## Instructions
<section id='instructions'>
Функция <code>myFunc()</code> содержит бесконечный цикл, потому что условие терминала <code>i != 4</code> никогда не будет оценивать значение <code>false</code> (и прерывать цикл). <code>i</code> будет увеличиваться на 2 каждый проход и прыгать прямо над 4, так как <code>i</code> нечетно для запуска. Исправьте оператор сравнения в терминальном условии, чтобы цикл выполнялся только для <code>i</code> меньшего или равного 4.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should change the comparison operator in the terminal condition (the middle part) of the <code>for</code> loop.
    testString: assert(code.match(/i\s*?<=\s*?4;/g).length == 1);
  - text: Your code should fix the comparison operator in the terminal condition of the loop.
    testString: assert(!code.match(/i\s*?!=\s*?4;/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("Still going!");
  }
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function myFunc() {
 for (let i = 1; i <= 4; i += 2) {
   console.log("Still going!");
 }
}
```

</section>
