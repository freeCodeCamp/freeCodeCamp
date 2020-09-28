---
id: 587d7b89367417b2b2512b4a
title: Use Destructuring Assignment to Assign Variables from Nested Objects
challengeType: 1
forumTopicId: 301214
localeTitle: Назначение Destructuring для назначения переменных из вложенных объектов
---

## Description
<section id='description'>
Подобным же образом мы можем разрушить <em>вложенные</em> объекты в переменные. Рассмотрим следующий код: <blockquote> const a = { <br> start: {x: 5, y: 6}, <br> end: {x: 6, y: -9} <br> }; <br> const {start: {x: startX, y: startY}} = a; <br> console.log (startX, startY); // 5, 6 </blockquote> В приведенном выше примере <code>start</code> переменной присваивается значение <code>a.start</code> , которое также является объектом.
</section>

## Instructions
<section id='instructions'>
Используйте назначение destructuring, чтобы получить <code>max</code> <code>forecast.tomorrow</code> И назначьте его <code>maxOfTomorrow</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should remove the ES5 assignment syntax.
    testString: assert(!code.match(/lowToday = LOCAL_FORECAST\.today\.low/g) && !code.match(/highToday = LOCAL_FORECAST\.today.high/g))
  - text: You should use destructuring to create the <code>lowToday</code> variable.
    testString: assert(code.match(/(var|const|let)\s*{\s*today\s*:\s*{\s*(low\s*:\s*lowToday[^}]*|[^,]*,\s*low\s*:\s*lowToday\s*)}\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g));
  - text: You should use destructuring to create the <code>highToday</code> variable.
    testString: assert(code.match(/(var|const|let)\s*{\s*today\s*:\s*{\s*(high\s*:\s*highToday[^}]*|[^,]*,\s*high\s*:\s*highToday\s*)}\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// change code below this line
  
const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// change code above this line

console.log(lowToday); // should be 64
console.log(highToday); // should be 77

```

</div>

</section>

## Solution
<section id='solution'>

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// change code below this line
  
const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;

// change code above this line

console.log(highToday); // should be 77
console.log(highTomorrow); // should be 80
```

</section>
