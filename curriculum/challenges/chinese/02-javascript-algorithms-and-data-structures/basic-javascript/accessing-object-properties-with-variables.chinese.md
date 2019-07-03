---
id: 56533eb9ac21ba0edf2244c9
title: Accessing Object Properties with Variables
challengeType: 1

videoUrl: ''
localeTitle: Accessing Object Properties with Variables
---

## Description
<section id='description'>
中括号操作符的另一个使用方式是用变量来访问一个属性。当你需要遍历对象的属性列表或查表时，这种方式极为有用。
这有一个使用变量来访问属性的例子：
<blockquote>var dogs = {<br>&nbsp;&nbsp;Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"<br>};<br>var myDog = "Hunter";<br>var myBreed = dogs[myDog];<br>console.log(myBreed); // "Doberman"</blockquote>
还有更多：
<blockquote>var someObj = {<br>&nbsp;&nbsp;propName: "John"<br>};<br>function propPrefix(str) {<br>&nbsp;&nbsp;var s = "prop";<br>&nbsp;&nbsp;return s + str;<br>}<br>var someProp = propPrefix("Name"); // someProp 现在的值为 'propName'<br>console.log(someObj[someProp]); // 输出 "John"</blockquote>
提示：当我们通过变量名访问属性的时候，不需要给变量名包裹引号。因为实际上我们使用的是变量的值，而不是变量的名称。
</section>

## Instructions
<section id='instructions'>
使用变量<code>playerNumber</code>，通过中括号操作符找到<code>testObj</code>中<code>playerNumber</code>为<code>16</code>的值。然后把名字赋给变量<code>player</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>playerNumber</code>应该是一个数字
    testString: assert(typeof playerNumber === 'number', '<code>playerNumber</code>应该是一个数字');
  - text: 变量<code>player</code>应该是一个字符串
    testString: assert(typeof player === 'string', '变量<code>player</code>应该是一个字符串');
  - text: "<code>player</code>点值应该是 'Montana'"
    testString: assert(player === 'Montana', '<code>player</code>点值应该是 "Montana"');
  - text: 你应该使用中括号访问<code>testObj</code>
    testString: assert(/testObj\s*?\[.*?\]/.test(code),'你应该使用中括号访问<code>testObj</code>');
  - text: 你不应该直接将<code>Montana</code>赋给<code>player</code>
    testString: assert(!code.match(/player\s*=\s*"|\'\s*Montana\s*"|\'\s*;/gi),'你不应该直接将<code>Montana</code>赋给<code>player</code>');
  - text: 你应该在中括号中使用<code>playerNumber</code>变量
    testString: assert(/testObj\s*?\[\s*playerNumber\s*\]/.test(code),'你应该在中括号中使用<code>playerNumber</code>变量');

```

</section>

## Challenge Seed
<section id='challengeSeed'>














### After Test

<div id='js-teardown'>

```js
if(typeof player !== "undefined"){(function(v){return v;})(player);}
```

</div>

</section>

## Solution
<section id='solution'>

```js
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];
```

</section>
              