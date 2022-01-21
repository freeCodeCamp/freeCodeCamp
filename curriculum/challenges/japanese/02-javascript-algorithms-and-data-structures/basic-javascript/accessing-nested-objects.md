---
id: 56533eb9ac21ba0edf2244cc
title: ネストされたオブジェクトへのアクセス
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRnRnfa'
forumTopicId: 16161
dashedName: accessing-nested-objects
---

# --description--

オブジェクトの下位プロパティには、ドット記法またはブラケット記法によるチェーンでアクセスできます。

次はネストされたオブジェクトです。

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

`ourStorage.cabinet["top drawer"].folder2` は文字列 `secrets`、`ourStorage.desk.drawer` は文字列 `stapler` となります。

# --instructions--

`myStorage` オブジェクトにアクセスし、`glove box` プロパティの内容を `gloveBoxContents` 変数に代入してください。 可能な限りすべてのプロパティにドット記法を使用し、それが使用できない場合はブラケット記法を使用してください。

# --hints--

`gloveBoxContents` が文字列 `maps` と等しくなるようにします。

```js
assert(gloveBoxContents === 'maps');
```

ドット記法とブラケット記法を使用して `myStorage` にアクセスする必要があります。

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
