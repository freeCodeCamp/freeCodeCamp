---
id: 8d1323c8c441eddfaeb5bdef
title: Create a Set Class
challengeType: 1
videoUrl: ''
localeTitle: 创建一个Set类
---

## Description
<section id="description">在接下来的几个练习中，我们将创建一个函数来模拟一个名为“Set”的数据结构。 Set类似于数组，但不能包含重复值。 Set的典型用途是简单地检查项目是否存在。这可以用对象实现，例如： <blockquote> var set = new Object（）; <br> set.foo = true; <br> //看看我们的集合中是否存在foo： <br> console.log（set.foo）// true </blockquote>在接下来的几个练习中，我们将从头开始构建一个全功能的Set。对于本练习，只要该值中尚不存在该值，就创建一个将值添加到set集合的函数。例如： <blockquote> this.add = function（element）{ <br> //一些代码来为集合添加值<br> } </blockquote>如果成功添加该值，则该函数应返回<code>true</code>否则返回<code>false</code> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的<code>Set</code>类应该有一个<code>add</code>方法。
    testString: 'assert((function(){var test = new Set(); return (typeof test.add === "function")}()), "Your <code>Set</code> class should have an <code>add</code> method.");'
  - text: 您的<code>add</code>方法不应添加重复值。
    testString: 'assert((function(){var test = new Set(); test.add("a"); test.add("b"); test.add("a"); var vals = test.values(); return (vals[0] === "a" && vals[1] === "b" && vals.length === 2)}()), "Your <code>add</code> method should not add duplicate values.");'
  - text: 成功添加值后， <code>add</code>方法应返回<code>true</code> 。
    testString: 'assert((function(){var test = new Set(); var result = test.add("a"); return (result != undefined) && (result === true);}()), "Your <code>add</code> method should return <code>true</code> when a value has been successfully added.");'
  - text: <code>add</code>重复值时， <code>add</code>方法应返回<code>false</code> 。
    testString: 'assert((function(){var test = new Set(); test.add("a"); var result = test.add("a"); return (result != undefined) && (result === false);}()), "Your <code>add</code> method should return <code>false</code> when a duplicate value is added.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Set() {
    // the var collection will hold our set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    // change code below this line
    // change code above this line
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
