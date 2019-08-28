---
id: cf1111c1c11feddfaeb5bdef
title: Iterate with JavaScript For Loops
challengeType: 1
videoUrl: https://scrimba.com/c/c9yNVCe
forumTopicId: 18219
localeTitle: Итерация с JavaScript для циклов
---

## Description
<section id='description'>
Вы можете запустить один и тот же код несколько раз, используя цикл. Наиболее распространенный тип цикла JavaScript называется « <code>for loop</code> », потому что он запускает «для» определенное количество раз. Для циклов объявляются три необязательных выражения, разделенные точкой с запятой: <code>for ([initialization]; [condition]; [final-expression])</code> Оператор <code>initialization</code> выполняется один раз только до начала цикла. Он обычно используется для определения и настройки вашей переменной цикла. Оператор <code>condition</code> оценивается в начале каждой итерации цикла и будет продолжаться до тех пор, пока он оценит значение <code>true</code> . Когда <code>condition</code> является <code>false</code> в начале итерации, цикл прекратит выполнение. Это означает, что если <code>condition</code> начинается как <code>false</code> , ваш цикл никогда не будет выполняться. <code>final-expression</code> выполняется в конце каждой итерации цикла до проверки следующего <code>condition</code> и обычно используется для увеличения или уменьшения вашего счетчика циклов. В следующем примере мы инициализируем с <code>i = 0</code> и итерацией, пока наше условие <code>i &lt; 5</code> истинно. Мы будем увеличивать <code>i</code> на <code>1</code> в каждой итерации цикла с <code>i++</code> качестве нашего <code>final-expression</code> . <blockquote> var ourArray = []; <br> для (var i = 0; i &lt;5; i ++) { <br> ourArray.push (я); <br> } </blockquote> <code>ourArray</code> будет содержать <code>[0,1,2,3,4]</code> .
</section>

## Instructions
<section id='instructions'>
Используйте цикл <code>for</code> для работы, чтобы нажимать значения с 1 по 5 на <code>myArray</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should be using a <code>for</code> loop for this.
    testString: assert(code.match(/for\s*\(/g).length > 1);
  - text: <code>myArray</code> should equal <code>[1,2,3,4,5]</code>.
    testString: assert.deepEqual(myArray, [1,2,3,4,5]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

```

</div>

### After Tests
<div id='js-teardown'>

```js
if (typeof myArray !== "undefined"){(function(){return myArray;})();}

```

</div>

</section>

## Solution
<section id='solution'>

```js
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
var myArray = [];
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}
```

</section>
