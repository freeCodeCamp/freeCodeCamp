---
id: 56533eb9ac21ba0edf2244ed
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmZfa'
forumTopicId: 16656
title: 将变量附加到字符串
---

## Description
<section id='description'>
我们不仅可以创建出多行的字符串，还可以使用加等号(<code>+=</code>)运算符来将变量追加到字符串。
</section>

## Instructions
<section id='instructions'>
设置变量<code>someAdjective</code>的值，并使用<code>+=</code>运算符把它追加到变量<code>myStr</code>上。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>someAdjective</code>应该是一个至少包含三个字符的字符串。
    testString: assert(typeof someAdjective !== 'undefined' && someAdjective.length > 2);
  - text: 使用<code>+=</code>操作符把<code>someAdjective</code>追加到<code>myStr</code>的后面。
    testString: assert(code.match(/myStr\s*\+=\s*someAdjective\s*/).length > 0);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

// Only change code below this line

var someAdjective;
var myStr = "Learning to code is ";

```

</div>


### After Test
<div id='js-teardown'>

```js
(function(){
  var output = [];
  if(typeof someAdjective === 'string') {
    output.push('someAdjective = "' + someAdjective + '"');
  } else {
    output.push('someAdjective is not a string');
  }
  if(typeof myStr === 'string') {
    output.push('myStr = "' + myStr + '"');
  } else {
    output.push('myStr is not a string');
  }
  return output.join('\n');
})();
```

</div>

</section>

## Solution
<section id='solution'>


```js
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

var someAdjective = "neat";
var myStr = "Learning to code is ";
myStr += someAdjective;
```

</section>
