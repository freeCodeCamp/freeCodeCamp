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

这是一个嵌套对象：

```js
const ourStorage = {
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

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
```

`ourStorage.cabinet["top drawer"].folder2` 将会是字符串 `secrets`，并且 `ourStorage.desk.drawer` 将会是字符串 `stapler`。

# --instructions--

访问 `myStorage` 对象并将 `glove box` 属性的内容赋值给 `gloveBoxContents` 变量。 在可能的情况下，对所有的属性使用点号，否则使用方括号。

# --hints--

`gloveBoxContents` 应该等于字符串 `maps`。

```js
assert(gloveBoxContents === 'maps');
```

你的代码应该使用点号和方括号来访问 `myStorage`。

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
const myStorage = {
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

const gloveBoxContents = undefined;
```

# --solutions--

```js
const myStorage = {
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
const gloveBoxContents = myStorage.car.inside["glove box"];
```
