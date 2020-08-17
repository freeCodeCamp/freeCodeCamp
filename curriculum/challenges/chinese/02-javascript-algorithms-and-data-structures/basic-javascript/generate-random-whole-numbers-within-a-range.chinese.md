---
id: cf1111c1c12feddfaeb2bdef
title: Generate Random Whole Numbers within a Range
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83yu6'
forumTopicId: 18187
localeTitle: 生成某个范围内的随机整数
---

## Description
<section id='description'>
我们之前生成的随机数是在0到某个数之间，现在我们要生成的随机数是在两个指定的数之间。
我们需要定义一个最小值和一个最大值。
下面是我们将要使用的方法，仔细看看并尝试理解这行代码到底在干嘛：
<code>Math.floor(Math.random() * (max - min + 1)) + min</code>
</section>

## Instructions
<section id='instructions'>
创建一个叫<code>randomRange</code>的函数，参数为 myMin 和 myMax，返回一个在<code>myMin</code>（包括 myMin）和<code>myMax</code>（包括 myMax）之间的随机数。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>randomRange</code>返回的随机数应该大于或等于<code>myMin</code>。
    testString: assert(calcMin === 5);
  - text: <code>randomRange</code>返回的随机数应该小于或等于<code>myMax</code>。
    testString: assert(calcMax === 15);
  - text: <code>randomRange</code>应该返回一个随机整数, 而不是小数。
    testString: assert(randomRange(0,1) % 1 === 0 );
  - text: <code>randomRange</code>应该使用<code>myMax</code>和<code>myMin</code>, 并且返回两者之间的随机数。
    testString: assert((function(){if(code.match(/myMax/g).length > 1 && code.match(/myMin/g).length > 2 && code.match(/Math.floor/g) && code.match(/Math.random/g)){return true;}else{return false;}})());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return 0; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);
```

</div>


### After Test
<div id='js-teardown'>

```js
var calcMin = 100;
var calcMax = -100;
for(var i = 0; i < 100; i++) {
  var result = randomRange(5,15);
  calcMin = Math.min(calcMin, result);
  calcMax = Math.max(calcMax, result);
}
(function(){
  if(typeof myRandom === 'number') {
    return "myRandom = " + myRandom;
  } else {
    return "myRandom undefined";
  }
})()
```

</div>

</section>

## Solution
<section id='solution'>


```js
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
```

</section>
