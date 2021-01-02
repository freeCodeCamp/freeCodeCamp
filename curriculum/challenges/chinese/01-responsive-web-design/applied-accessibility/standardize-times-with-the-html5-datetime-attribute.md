---
id: 587d778c367417b2b2512aa9
title: 使用 HTML5 的 datatime 属性标准化时间
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMgtz'
forumTopicId: 301025
---

# --description--

继续日期主题。HTML5 还引入了 `time` 标签与 `datetime` 属性来标准化时间。`time` 是一个行内标签，用于在页面中呈现日期或时间，而 `datetime` 属性用户设置日期的格式，辅助设备会获取这个值。通过标准化时间格式，即使时间在文本中是以非正式或口语化的形式编写，辅助设备依然可以获取准确的时间和日期。

举个例子：

`<p>Master Camper Cat officiated the cage match between Goro and Scorpion <time datetime="2013-02-13">last Wednesday</time>, which ended in a draw.</p>`

# --instructions--

Camper Cat 的比武大会的时间确定了！请使用 `time` 标签包裹文本 "Thursday, September 15&lt;sup>th&lt;/sup>"，并将 `datetime` 的属性值设置为 "2016-09-15"。

# --hints--

应存在一个内容文本为 `Thank you to everyone for responding to Master Camper Cat's survey.` 的 `p` 元素和一个 `time` 元素。

```js
assert(timeElement.length);
```

`time` 元素的内容文本应为 `Thursday, September 15<sup>th</sup>`。

```js
assert(
  timeElement.length &&
    $(timeElement).html().trim() === 'Thursday, September 15<sup>th</sup>'
);
```

`time` 元素应包含非空的 `datetime` 属性。

```js
assert(datetimeAttr && datetimeAttr.length);
```

`datetime` 的属性值应为 `2016-09-15`。

```js
assert(datetimeAttr === '2016-09-15');
```

# --solutions--

