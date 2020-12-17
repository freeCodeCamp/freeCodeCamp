---
id: bad87fee1348bd9aedf08828
title: 创建一个有序列表
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cQ3B8TM'
forumTopicId: 16824
---

# --description--

HTML 有一个特定的元素用于创建有序列表`ordered lists（缩写 ol）`。

有序列表以`<ol>`开始，中间包含一个或多个`<li>`元素，最后以`</ol>`结尾。

例如:

```html
<ol>
  <li>加菲猫</li>
  <li>哆啦A梦</li>
</ol>
```

将会创建一个包含加菲猫和哆啦A梦的有序列表。

# --instructions--

创建一个有序列表，内容是猫咪最讨厌的三件东西，内容可以任意指定。

# --hints--

页面应该有一个无序列表，内容是猫咪最喜欢的三件东西。

```js
assert(/Top 3 things cats hate:/i.test($('ol').prev().text()));
```

页面应该有一个有序列表，内容是猫咪最讨厌的三件东西。

```js
assert(/Things cats love:/i.test($('ul').prev().text()));
```

页面应该只有一个`ul`元素。

```js
assert.equal($('ul').length, 1);
```

页面应该只有一个`ol`元素。

```js
assert.equal($('ol').length, 1);
```

`ul`无序列表应该包含3个`li`条目。

```js
assert.equal($('ul li').length, 3);
```

`ol`有序列表应该包含3个`li`元素。

```js
assert.equal($('ol li').length, 3);
```

确保`ul`无序列表有结束标记。

```js
assert(
  code.match(/<\/ul>/g) &&
    code.match(/<\/ul>/g).length === code.match(/<ul>/g).length
);
```

确保`ol`有序列表有结束标记。

```js
assert(
  code.match(/<\/ol>/g) &&
    code.match(/<\/ol>/g).length === code.match(/<ol>/g).length
);
```

确保每个`li`条目都有结束标记。

```js
assert(
  code.match(/<\/li>/g) &&
    code.match(/<li>/g) &&
    code.match(/<\/li>/g).length === code.match(/<li>/g).length
);
```

无序列表里的 `li` 元素不应该为空。

```js
$('ul li').each((i, val) => assert(val.textContent.replace(/\s/g, '')));
```

有序列表里的 `li` 元素不应该为空。

```js
$('ol li').each((i, val) => assert(!!val.textContent.replace(/\s/g, '')));
```

# --solutions--

