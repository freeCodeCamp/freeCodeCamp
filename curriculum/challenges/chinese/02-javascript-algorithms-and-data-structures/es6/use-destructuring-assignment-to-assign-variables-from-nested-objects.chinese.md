---
id: 587d7b89367417b2b2512b4a
title: Use Destructuring Assignment to Assign Variables from Nested Objects
challengeType: 1
forumTopicId: 301214
localeTitle: 使用解构赋值从嵌套对象中分配变量
---

## Description
<section id='description'>
同样，我们可以将 <em>嵌套的对象</em>解构到变量中。

请看以下代码：

```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

这是解构对象的属性并赋值给相同名字的变量：

```js
const { johnDoe: { age, email }} = user;
```

这是将对象的属性值指定给一个不同的名字：

```js
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

</section>

## Instructions
<section id='instructions'>
将两个赋值语句替换成等价的解构赋值。<code>lowToday</code> 和 <code>highToday</code> 应该为 <code>LOCAL_FORECAST</code> 中 <code>today.low</code> 和 <code>today.high</code> 的值。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不能使用 ES5 的赋值语句。
    testString: assert(!code.match(/lowToday = LOCAL_FORECAST\.today\.low/g) && !code.match(/highToday = LOCAL_FORECAST\.today.high/g))
  - text: 应该使用解构创建 <code>lowToday</code> 变量。
    testString: assert(code.match(/(var|const|let)\s*{\s*today\s*:\s*{\s*(low\s*:\s*lowToday[^}]*|[^,]*,\s*low\s*:\s*lowToday\s*)}\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g));
  - text: 应该使用解构创建 <code>highToday</code> 变量。
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
