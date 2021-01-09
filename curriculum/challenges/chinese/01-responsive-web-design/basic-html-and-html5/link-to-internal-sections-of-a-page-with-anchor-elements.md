---
id: bad88fee1348bd9aedf08816
title: 用 a 实现网页内部跳转
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cyrDRUL'
forumTopicId: 301098
---

# --description--

`a` 元素还可以用来实现页面内不同区域的跳转，只需要把 `a` 元素的 `href` 值设置为井号 `#` 加欲跳转区域所对应的 `id` 属性值即可。`id` 是描述网页元素的一个属性，它的值在整个页面中唯一。

下面是用来创建内部 `a` 的例子：

```html
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>
```

当用户点击了 `Contacts` 链接，页面就会跳转到网页的 **Contacts** 区域。

# --instructions--

请修改 `href` 属性值为 `#footer` 来将外部链接更改为内部链接，同时修改文本 `cat photos` 为 `Jump to Bottom`。

移除 `target="\_blank"` 属性，这个属性的存在会让链接在新标签页中打开。

然后添加一个 `<footer>` 元素，并将它的 `id` 属性值设置为 `footer`。

# --hints--

页面中应只存在一个 `a` 元素。

```js
assert($('a').length == 1);
```

页面中应只存在一个 `footer` 元素。

```js
assert($('footer').length == 1);
```

`a` 的 `href` 属性值应为 `#footer`。

```js
assert($('a').eq(0).attr('href') == '#footer');
```

`a` 不应有 `target` 属性。

```js
assert(
  typeof $('a').eq(0).attr('target') == typeof undefined ||
    $('a').eq(0).attr('target') == true
);
```

`a` 的内容文本应为 `Jump to Bottom`。

```js
assert(
  $('a')
    .eq(0)
    .text()
    .match(/Jump to Bottom/gi)
);
```

`footer` 元素的 `id` 属性值应为 `footer`。

```js
assert($('footer').eq(0).attr('id') == 'footer');
```

# --solutions--

