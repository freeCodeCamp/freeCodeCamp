---
id: 56533eb9ac21ba0edf2244ca
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBk8sM'
forumTopicId: 18373
title: 使用对象进行查找
---

## Description
<section id='description'>
对象和字典一样，可以用来存储键/值对。如果你的数据跟对象一样，你可以用对象来查找你想要的值，而不是使用switch或if/else语句。当你知道你的输入数据在某个范围时，这种查找方式极为有效。
这是简单的反向字母表：

```js
var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y"
```

</section>

## Instructions
<section id='instructions'>
把 switch 语句转化为<code>lookup</code>对象。使用它来查找<code>val</code>属性的值，并赋值给<code>result</code>变量。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>phoneticLookup("alpha")</code>应该等于<code>"Adams"</code>。
    testString: assert(phoneticLookup("alpha") === 'Adams');
  - text: <code>phoneticLookup("bravo")</code>应该等于<code>"Boston"</code>。
    testString: assert(phoneticLookup("bravo") === 'Boston');
  - text: <code>phoneticLookup("charlie")</code>应该等于<code>"Chicago"</code>。
    testString: assert(phoneticLookup("charlie") === 'Chicago');
  - text: <code>phoneticLookup("delta")</code>应该等于<code>"Denver"</code>。
    testString: assert(phoneticLookup("delta") === 'Denver');
  - text: <code>phoneticLookup("echo")</code>应该等于<code>"Easy"</code>。
    testString: assert(phoneticLookup("echo") === 'Easy');
  - text: <code>phoneticLookup("foxtrot")</code>应该等于<code>"Frank"</code>。
    testString: assert(phoneticLookup("foxtrot") === 'Frank');
  - text: <code>phoneticLookup("")</code>应该等于<code>undefined</code>。
    testString: assert(typeof phoneticLookup("") === 'undefined');
  - text: 请不要修改<code>return</code>语句。
    testString: assert(code.match(/return\sresult;/));
  - text: 请不要使用<code>case</code>，<code>switch</code>，或<code>if</code>语句。
    testString: assert(!/case|switch|if/g.test(code.replace(/([/]{2}.*)|([/][*][^/*]*[*][/])/g,'')));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
```

</div>



</section>

## Solution
<section id='solution'>


```js
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };

  result = lookup[val];

  return result;
}
```

</section>
