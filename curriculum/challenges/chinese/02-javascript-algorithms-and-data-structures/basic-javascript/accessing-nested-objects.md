---
id: 56533eb9ac21ba0edf2244cc
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRnRnfa'
forumTopicId: 16161
title: 访问嵌套对象
---

## Description
<section id='description'>
通过串联起来的点操作符或中括号操作符来访问对象的嵌套属性。
下面是一个嵌套的对象：

```js
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;  // "secrets"
ourStorage.desk.drawer; // "stapler"
```

</section>

## Instructions
<section id='instructions'>
读取<code>myStorage</code>对象，将<code>glove box</code>属性的内容赋值给变量<code>gloveBoxContents</code>。在适用的地方使用点操作符来访问属性，否则使用中括号操作符。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>gloveBoxContents</code>应该等于"maps"。
    testString: assert(gloveBoxContents === "maps");
  - text: 应使用点操作符和中括号操作符来访问<code>myStorage</code>。
    testString: assert(/=\s*myStorage\.car\.inside\[\s*("|')glove box\1\s*\]/g.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = undefined; // Change this line

```

</div>


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
