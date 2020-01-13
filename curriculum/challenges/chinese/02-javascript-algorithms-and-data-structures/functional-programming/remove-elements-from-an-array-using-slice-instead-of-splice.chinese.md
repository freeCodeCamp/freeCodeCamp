---
id: 9d7123c8c441eeafaeb5bdef
title: Remove Elements from an Array Using slice Instead of splice
challengeType: 1
forumTopicId: 301236
localeTitle: 使用 slice 而不是 splice 从数组中移除元素
---

## Description
<section id='description'>
使用数组时经常遇到要删除一些元素并保留数组剩余部分的情况。为此，JavaScript 提供了<code>splice</code>方法，它接收两个参数：从哪里开始删除项目的索引，和要删除的项目数。如果没有提供第二个参数，默认情况下是移除到结尾的元素。但<code>splice</code>方法会改变调用它的原始数组。举个例子：

```js
var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1); // Returns "London" and deletes it from the cities array
// cities is now ["Chicago", "Delhi", "Islamabad", "Berlin"]
```

正如我们在上一次挑战中看到的那样，<code>slice</code>方法不会改变原始数组，而是返回一个可以保存到变量中的新数组。回想一下，<code>slice</code>方法接收两个参数，从开始索引开始选取到结束（不包括该元素），并在新数组中返回这些元素。使用<code>slice</code>方法替代<code>splice</code>有助于避免数组变化产生的副作用。
</section>

## Instructions
<section id='instructions'>
用<code>slice</code>代替<code>splice</code>重写<code>nonMutatingSplice</code>函数。将<code>cities</code>数组长度限制为3，并返回一个仅包含前 3 项的新数组。
不要改变提供给函数的原始数组。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该使用<code>slice</code>方法。
    testString: assert(code.match(/\.slice/g));
  - text: 不能使用<code>splice</code>方法。
    testString: assert(!code.match(/\.splice/g));
  - text: 不能改变<code>inputCities</code>数组。
    testString: assert(JSON.stringify(inputCities) === JSON.stringify(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]));
  - text: "<code>nonMutatingSplice(['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'])</code>应返回<code>['Chicago', 'Delhi', 'Islamabad']</code>。"
    testString: assert(JSON.stringify(nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])) === JSON.stringify(["Chicago", "Delhi", "Islamabad"]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nonMutatingSplice(cities) {
  // Add your code below this line
  return cities.splice(3);

  // Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
```

</div>



</section>

## Solution
<section id='solution'>

```js
function nonMutatingSplice(cities) {
  // Add your code below this line
  return cities.slice(0,3);
  // Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
```

</section>
