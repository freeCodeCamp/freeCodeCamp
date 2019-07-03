---
id: 56533eb9ac21ba0edf2244cc
title: Accessing Nested Objects
challengeType: 1

videoUrl: ''
localeTitle: Accessing Nested Objects
---

## Description
<section id='description'>
通过串联起来的点操作符或中括号操作符来访问对象的嵌套属性。
下面是一个嵌套的对象：
<blockquote>var ourStorage = {<br>&nbsp;&nbsp;"desk": {<br>&nbsp;&nbsp;&nbsp;&nbsp;"drawer": "stapler"<br>&nbsp;&nbsp;},<br>&nbsp;&nbsp;"cabinet": {<br>&nbsp;&nbsp;&nbsp;&nbsp;"top drawer": { <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"folder1": "a file",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"folder2": "secrets"<br>&nbsp;&nbsp;&nbsp;&nbsp;},<br>&nbsp;&nbsp;&nbsp;&nbsp;"bottom drawer": "soda"<br>&nbsp;&nbsp;}<br>};<br>ourStorage.cabinet["top drawer"].folder2;  // "secrets"<br>ourStorage.desk.drawer; // "stapler"</blockquote>
</section>

## Instructions
<section id='instructions'>
检索对象<code>myStorage</code>中嵌套属性<code>glove box</code>的值。因为属性的名字带有空格，请使用中括号操作符来访问属性的值。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>gloveBoxContents</code>应该等于'maps'"
    testString: assert(gloveBoxContents === "maps", '<code>gloveBoxContents</code>应该等于"maps"');
  - text: 应使用点操作符和中括号操作符来访问<code>myStorage</code>
    testString: assert(/=\s*myStorage\.car\.inside\[\s*("|')glove box\1\s*\]/g.test(code), '应使用点操作符和中括号操作符来访问<code>myStorage</code>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>














### After Test

<div id='js-teardown'>

```js
(function(x) { 
  if(typeof x != 'undefined') { 
    return "gloveBoxContents = " + x;
  }
  return "gloveBoxContents is undefined";
})(gloveBoxContents);
```

</div>

</section>

## Solution
<section id='solution'>

```js
var myStorage = {  
  "car":{  
    "inside":{  
      "glove box":"maps",
      "passenger seat":"crumbs"
    },
    "outside":{  
      "trunk":"jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
```

</section>
              