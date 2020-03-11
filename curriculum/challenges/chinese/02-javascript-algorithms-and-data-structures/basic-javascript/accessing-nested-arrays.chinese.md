---
id: 56533eb9ac21ba0edf2244cd
title: Accessing Nested Arrays
challengeType: 1
videoUrl: ''
localeTitle: 访问嵌套数组
---

## Description
<section id="description">正如我们在前面的示例中所看到的，对象可以包含嵌套对象和嵌套数组。与访问嵌套对象类似，可以链接数组括号表示法来访问嵌套数组。以下是如何访问嵌套数组的示例： <blockquote> var ourPets = [ <br> { <br> animalType：“猫”， <br>名称：[ <br> “Meowzer” <br> “蓬松”， <br> “洁猫” <br> ] <br> }， <br> { <br>动物类型：“狗”， <br>名称：[ <br> “点”， <br> “库巴” <br> “羊羊” <br> ] <br> } <br> ]。 <br> ourPets [0] .names [1]; //“蓬松” <br> ourPets [1] .names [0]; //“Spot” </blockquote></section>

## Instructions
<section id="instructions">使用对象点和数组括号表示法从变量<code>myPlants</code>检索第二个树。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>secondTree</code>应该等于“松树”
    testString: assert(secondTree === "pine");
  - text: 使用点和括号表示法访问<code>myPlants</code>
    testString: assert(/=\s*myPlants\[1\].list\[1\]/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line

var secondTree = ""; // Change this line

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
