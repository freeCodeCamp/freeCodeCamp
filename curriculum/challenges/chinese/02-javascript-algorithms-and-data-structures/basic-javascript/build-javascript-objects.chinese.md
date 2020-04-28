---
id: 56bbb991ad1ed5201cd392d0
title: Build JavaScript Objects
challengeType: 1
videoUrl: ''
localeTitle: 构建JavaScript对象
---

## Description
<section id="description">您之前可能听说过<code>object</code>这个术语。对象类似于<code>arrays</code> ，除了不使用索引访问和修改数据，您可以通过所谓的<code>properties</code>访问对象中的数据。对象对于以结构化方式存储数据很有用，并且可以表示真实世界对象，如猫。这是一个示例cat对象： <blockquote> var cat = { <br> “名字”：“胡须”， <br> “腿”：4， <br> “尾巴”：1， <br> “敌人”：[“水”，“狗”] <br> }; </blockquote>在此示例中，所有属性都存储为字符串，例如 - <code>&quot;name&quot;</code> ， <code>&quot;legs&quot;</code>和<code>&quot;tails&quot;</code> 。但是，您也可以使用数字作为属性。您甚至可以省略单字符串属性的引号，如下所示： <blockquote> var anotherObject = { <br>制作：“福特”， <br> 5：“五”， <br> “模特”：“焦点” <br> }; </blockquote>但是，如果您的对象具有任何非字符串属性，JavaScript将自动将它们作为字符串进行类型转换。 </section>

## Instructions
<section id="instructions">创建一个代表名为<code>myDog</code>的狗的对象，其中包含属性<code>&quot;name&quot;</code> （字符串）， <code>&quot;legs&quot;</code> ， <code>&quot;tails&quot;</code>和<code>&quot;friends&quot;</code> 。您可以将这些对象属性设置为您想要的任何值，因为<code>&quot;name&quot;</code>是一个字符串， <code>&quot;legs&quot;</code>和<code>&quot;tails&quot;</code>是数字， <code>&quot;friends&quot;</code>是一个数组。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myDog</code>应该包含属性<code>name</code> ，它应该是一个<code>string</code> 。
    testString: assert((function(z){if(z.hasOwnProperty("name") && z.name !== undefined && typeof z.name === "string"){return true;}else{return false;}})(myDog));
  - text: <code>myDog</code>应该包含属性<code>legs</code> ，它应该是一个<code>number</code> 。
    testString: assert((function(z){if(z.hasOwnProperty("legs") && z.legs !== undefined && typeof z.legs === "number"){return true;}else{return false;}})(myDog));
  - text: <code>myDog</code>应该包含属性<code>tails</code> ，它应该是一个<code>number</code> 。
    testString: assert((function(z){if(z.hasOwnProperty("tails") && z.tails !== undefined && typeof z.tails === "number"){return true;}else{return false;}})(myDog));
  - text: <code>myDog</code>应该包含属性<code>friends</code> ，它应该是一个<code>array</code> 。
    testString: assert((function(z){if(z.hasOwnProperty("friends") && z.friends !== undefined && Array.isArray(z.friends)){return true;}else{return false;}})(myDog));
  - text: <code>myDog</code>应该只包含所有给定的属性。
    testString: assert((function(z){return Object.keys(z).length === 4;})(myDog));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

// Only change code below this line.

var myDog = {




};

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
