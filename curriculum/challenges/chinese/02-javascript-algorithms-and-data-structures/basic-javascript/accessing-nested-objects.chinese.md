---
id: 56533eb9ac21ba0edf2244cc
title: Accessing Nested Objects
challengeType: 1
videoUrl: ''
localeTitle: 访问嵌套对象
---

## Description
<section id="description">可以通过将点或括号表示法链接在一起来访问对象的子属性。这是一个嵌套对象： <blockquote> var ourStorage = { <br> “桌子”：{ <br> “抽屉”：“订书机” <br> }， <br> “内阁”：{ <br> “顶级抽屉”：{ <br> “folder1”：“一个文件”， <br> “folder2”：“秘密” <br> }， <br> “底部抽屉”：“苏打水” <br> } <br> }; <br> ourStorage.cabinet [“top drawer”]。folder2; //“秘密” <br> ourStorage.desk.drawer; //“订书机” </blockquote></section>

## Instructions
<section id="instructions">访问<code>myStorage</code>对象并将<code>glove box</code>属性的内容分配给<code>gloveBoxContents</code>变量。对于名称中包含空格的属性，请使用括号表示法。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>gloveBoxContents</code>应该等于“地图”
    testString: assert(gloveBoxContents === "maps");
  - text: 使用点和括号表示法访问<code>myStorage</code>
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
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
