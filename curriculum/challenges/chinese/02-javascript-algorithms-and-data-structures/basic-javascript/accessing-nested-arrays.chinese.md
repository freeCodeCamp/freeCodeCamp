---
id: 56533eb9ac21ba0edf2244cd
title: Accessing Nested Arrays
challengeType: 1

videoUrl: ''
localeTitle: Accessing Nested Arrays
---

## Description
<section id='description'>
正如我们在前面的例子所见，对象可以嵌套对象和数组。与访问嵌套对象一样，用中括号操作符同样可以访问嵌套数组。
下面是如何访问嵌套数组的例子：
<blockquote>var ourPets = [<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;animalType: "cat",<br>&nbsp;&nbsp;&nbsp;&nbsp;names: [<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Meowzer",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Fluffy",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Kit-Cat"<br>&nbsp;&nbsp;&nbsp;&nbsp;]<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;animalType: "dog",<br>&nbsp;&nbsp;&nbsp;&nbsp;names: [<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Spot",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Bowser",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Frankie"<br>&nbsp;&nbsp;&nbsp;&nbsp;]<br>&nbsp;&nbsp;}<br>];<br>ourPets[0].names[1]; // "Fluffy"<br>ourPets[1].names[0]; // "Spot"</blockquote>
</section>

## Instructions
<section id='instructions'>
使用点操作符和中括号操作符来检索变量<code>myPlants</code>的第二棵树。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>secondTree</code>应该等于 'pine'"
    testString: assert(secondTree === "pine", '<code>secondTree</code>应该等于 "pine"');
  - text: 使用点操作符和中括号操作符来检索变量<code>myPlants</code>
    testString: assert(/=\s*myPlants\[1\].list\[1\]/.test(code), '使用点操作符和中括号操作符来检索变量<code>myPlants</code>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>














### After Test

<div id='js-teardown'>

```js
(function(x) { 
  if(typeof x != 'undefined') { 
    return "secondTree = " + x;
  }
  return "secondTree is undefined";
})(secondTree);
```

</div>

</section>

## Solution
<section id='solution'>

```js
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

// 请把你的代码写在这条注释以下

var secondTree = myPlants[1].list[1];
```

</section>
              