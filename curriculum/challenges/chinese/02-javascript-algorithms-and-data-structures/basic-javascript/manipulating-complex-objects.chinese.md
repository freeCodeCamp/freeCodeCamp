---
id: 56533eb9ac21ba0edf2244cb
title: Manipulating Complex Objects
challengeType: 1
videoUrl: ''
localeTitle: 操纵复杂对象
---

## Description
<section id="description">有时您可能希望将数据存储在灵活的<dfn>数据结构中</dfn> 。 JavaScript对象是处理灵活数据的一种方法。它们允许<dfn>字符串</dfn> ， <dfn>数字</dfn> ， <dfn>布尔值</dfn> ， <dfn>数组</dfn> ， <dfn>函数</dfn>和<dfn>对象的</dfn>任意组合。这是一个复杂数据结构的示例： <blockquote> var ourMusic = [ <br> { <br> “艺术家”：“Daft Punk”， <br> “标题”：“家庭作业”， <br> “release_year”：1997年， <br> “格式”：[ <br> “光盘”， <br> “盒式” <br> “LP” <br> ] <br> “黄金”：是的<br> } <br> ]。 </blockquote>这是一个包含一个对象的数组。该对象具有关于专辑的各种<dfn>元数据</dfn> 。它还有一个嵌套的<code>&quot;formats&quot;</code>数组。如果要添加更多专辑记录，可以通过向顶级数组添加记录来完成此操作。对象将数据保存在属性中，该属性具有键值格式。在上面的示例中， <code>&quot;artist&quot;: &quot;Daft Punk&quot;</code>是具有<code>&quot;artist&quot;</code>键和<code>&quot;Daft Punk&quot;</code>值的属性。 <a href="http://www.json.org/" target="_blank">JavaScript Object Notation</a>或<code>JSON</code>是用于存储数据的相关数据交换格式。 <blockquote> { <br> “艺术家”：“Daft Punk”， <br> “标题”：“家庭作业”， <br> “release_year”：1997年， <br> “格式”：[ <br> “光盘”， <br> “盒式” <br> “LP” <br> ] <br> “黄金”：是的<br> } </blockquote> <strong>注意</strong> <br>除非它是数组中的最后一个对象，否则您需要在数组中的每个对象后面放置一个逗号。 </section>

## Instructions
<section id="instructions">将新相册添加到<code>myMusic</code>阵列。添加<code>artist</code>和<code>title</code>字符串， <code>release_year</code>数字和<code>formats</code>字符串数组。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
  // Add record here
];

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
