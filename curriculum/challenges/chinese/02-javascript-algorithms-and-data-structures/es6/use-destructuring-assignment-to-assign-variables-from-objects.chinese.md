---
id: 587d7b89367417b2b2512b49
title: Use Destructuring Assignment to Assign Variables from Objects
challengeType: 1
forumTopicId: 301215
localeTitle: 使用解构赋值从对象中分配变量
---

## Description
<section id='description'>
可以在解构的属性后添加冒号和新的变量名来给解构的值赋予一个新的变量名。

还是以上个例子的对象来举例：

```js
const user = { name: 'John Doe', age: 34 };
```

这是指定新的变量名的例子：

```js
const { name: userName, age: userAge } = user;
// userName = 'John Doe', userAge = 34
```

获取到了 <code>user.name</code> 的值并赋值给名为 <code>userName</code> 的变量。
</section>

## Instructions
<section id='instructions'>
使用解构赋值语句替换两个赋值语句。确保 <code>HIGH_TEMPERATURES</code> 的 <code>today</code> 和 <code>tomorrow</code> 属性赋值给 <code>highToday</code> 和 <code>highTomorrow</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该移除 ES5 赋值语句。
    testString: assert(!code.match(/highToday = HIGH_TEMPERATURES\.today/g) && !code.match(/highTomorrow = HIGH_TEMPERATURES\.tomorrow/g))
  - text: 应该使用解构赋值语句创建  <code>highToday</code> 变量。
    testString: assert(code.match(/(var|const|let)\s*{\s*(today:\s*highToday[^}]*|[^,]*,\s*today\s*:\s*highToday\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g));
  - text: 应该使用解构赋值语句创建  <code>highTomorrow</code> 变量。
    testString: assert(code.match(/(var|const|let)\s*{\s*(tomorrow:\s*highTomorrow[^}]*|[^,]*,\s*tomorrow\s*:\s*highTomorrow\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g));
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// change code below this line
  
const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// change code above this line

console.log(yesterday) // should be not defined
console.log(highToday); // should be 77
console.log(highTomorrow); // should be 80
```

</div>
</section>

## Solution
<section id='solution'>

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// change code below this line
  
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// change code above this line

console.log(highToday); // should be 77
console.log(highTomorrow); // should be 80
```

</section>
