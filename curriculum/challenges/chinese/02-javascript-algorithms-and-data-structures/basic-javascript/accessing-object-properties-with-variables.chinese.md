---
id: 56533eb9ac21ba0edf2244c9
title: Accessing Object Properties with Variables
challengeType: 1
videoUrl: ''
localeTitle: 使用变量访问对象属性
---

## Description
<section id="description">对象的括号表示法的另一个用途是访问存储为变量值的属性。这对于迭代对象的属性或访问查找表非常有用。以下是使用变量访问属性的示例： <blockquote> var dogs = { <br> Fido：“Mutt”，Hunter：“Doberman”，Snoopie：“Beagle” <br> }; <br> var myDog =“猎人”; <br> var myBreed = dogs [myDog]; <br>的console.log（myBreed）; //“杜宾犬” </blockquote>另一种可以使用此概念的方法是在程序执行期间动态收集属性的名称，如下所示： <blockquote> var someObj = { <br> propName：“约翰” <br> }; <br> function propPrefix（str）{ <br> var s =“prop”; <br> return s + str; <br> } <br> var someProp = propPrefix（“Name”）; // someProp现在保存值&#39;propName&#39; <br>的console.log（someObj中[someProp]）; // “约翰” </blockquote>请注意，在使用变量名来访问属性时，我们<em>不会</em>使用引号，因为我们使用的是变量的<em>值</em> ，而不是<em>名称</em> 。 </section>

## Instructions
<section id="instructions">使用<code>playerNumber</code>变量使用括号表示法在<code>testObj</code>查找玩家<code>16</code> 。然后将该名称分配给<code>player</code>变量。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>playerNumber</code>应该是一个数字
    testString: assert(typeof playerNumber === 'number');
  - text: 变量<code>player</code>应该是一个字符串
    testString: assert(typeof player === 'string');
  - text: <code>player</code>的价值应该是“蒙大拿”
    testString: assert(player === 'Montana');
  - text: 您应该使用括号表示法来访问<code>testObj</code>
    testString: assert(/testObj\s*?\[.*?\]/.test(code));
  - text: 您不应该直接将值<code>Montana</code>分配给变量<code>player</code> 。
    testString: assert(!code.match(/player\s*=\s*"|\'\s*Montana\s*"|\'\s*;/gi));
  - text: 您应该在括号表示法中使用变量<code>playerNumber</code>
    testString: assert(/testObj\s*?\[\s*playerNumber\s*\]/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber;       // Change this Line
var player = testObj;   // Change this Line

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
