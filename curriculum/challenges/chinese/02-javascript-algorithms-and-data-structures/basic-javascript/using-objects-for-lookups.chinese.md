---
id: 56533eb9ac21ba0edf2244ca
title: Using Objects for Lookups
challengeType: 1

videoUrl: ''
localeTitle: Using Objects for Lookups
---

## Description
<section id='description'>
对象和字典一样，可以用来存储键/值对。如果你的数据跟对象一样，你可以用对象来查找你想要的值，而不是使用switch或if/else语句。当你知道你的输入数据在某个范围时，这种查找方式极为有效。
这是简单的反向字母表：
<blockquote>var alpha = {<br>&nbsp;&nbsp;1:"Z",<br>&nbsp;&nbsp;2:"Y",<br>&nbsp;&nbsp;3:"X",<br>&nbsp;&nbsp;4:"W",<br>&nbsp;&nbsp;...<br>&nbsp;&nbsp;24:"C",<br>&nbsp;&nbsp;25:"B",<br>&nbsp;&nbsp;26:"A"<br>};<br>alpha[2]; // "Y"<br>alpha[24]; // "C"<br><br>var value = 2;<br>alpha[value]; // "Y"</blockquote>
</section>

## Instructions
<section id='instructions'>
把 switch 语句转化为<code>lookup</code>对象。使用它来查找<code>val</code>属性的值，并赋值给<code>result</code>变量。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>phoneticLookup('alpha')</code>应该等于<code>'Adams'</code>"
    testString: assert(phoneticLookup("alpha") === 'Adams', '<code>phoneticLookup("alpha")</code>应该等于<code>"Adams"</code>');
  - text: "<code>phoneticLookup('bravo')</code>应该等于<code>'Boston'</code>"
    testString: assert(phoneticLookup("bravo") === 'Boston', '<code>phoneticLookup("bravo")</code>应该等于<code>"Boston"</code>');
  - text: "<code>phoneticLookup('charlie')</code>应该等于<code>'Chicago'</code>"
    testString: assert(phoneticLookup("charlie") === 'Chicago', '<code>phoneticLookup("charlie")</code>应该等于<code>"Chicago"</code>');
  - text: "<code>phoneticLookup('delta')</code>应该等于<code>'Denver'</code>"
    testString: assert(phoneticLookup("delta") === 'Denver', '<code>phoneticLookup("delta")</code>应该等于<code>"Denver"</code>');
  - text: "<code>phoneticLookup('echo')</code>应该等于<code>'Easy'</code>"
    testString: assert(phoneticLookup("echo") === 'Easy', '<code>phoneticLookup("echo")</code>应该等于<code>"Easy"</code>');
  - text: "<code>phoneticLookup('foxtrot')</code>应该等于<code>'Frank'</code>"
    testString: assert(phoneticLookup("foxtrot") === 'Frank', '<code>phoneticLookup("foxtrot")</code>应该等于<code>"Frank"</code>');
  - text: "<code>phoneticLookup('')</code>应该等于<code>undefined</code>"
    testString: assert(typeof phoneticLookup("") === 'undefined', '<code>phoneticLookup("")</code>应该等于<code>undefined</code>');
  - text: 请不要修改<code>return</code>语句
    testString: assert(code.match(/return\sresult;/), '请不要修改<code>return</code>语句');
  - text: 请不要使用<code>case</code>，<code>switch</code>，或<code>if</code>语句
    testString: assert(!/case|switch|if/g.test(code), '请不要使用<code>case</code>，<code>switch</code>,或<code>if</code>语句'); 

```

</section>

## Challenge Seed
<section id='challengeSeed'>















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
              