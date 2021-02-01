---
id: 56533eb9ac21ba0edf2244cc
title: 访问嵌套对象
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRnRnfa'
forumTopicId: 16161
dashedName: accessing-nested-objects
---

# --description--

我们可以通过连续使用点号表示法和方括号表示法来访问对象的嵌套属性。

这是一个访问嵌套对象的示例：

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

# --instructions--

请把 `myStorage` 对象中 `glove box` 的属性值赋给变量 `gloveBoxContents`。请优先使用点号表示法来访问属性；对于点号表示法不能处理的情况，再考虑使用方括号表示法。

# --hints--

`gloveBoxContents` 的值应为 "maps"。

```js
assert(gloveBoxContents === 'maps');
```

应使用点号表示法和方括号表示法来访问 `myStorage`。

```js
assert(/=\s*myStorage\.car\.inside\[\s*("|')glove box\1\s*\]/g.test(code));
```

# --seed--

## --after-user-code--

```js
(function(x) { 
  if(typeof x != 'undefined') { 
    return "gloveBoxContents = " + x;
  }
  return "gloveBoxContents is undefined";
})(gloveBoxContents);
```

## --seed-contents--

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

# --solutions--

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
