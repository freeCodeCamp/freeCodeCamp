---
id: 587d78b0367417b2b2512b08
title: 创建一个媒体查询
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cqwKrtm'
forumTopicId: 301139
dashedName: create-a-media-query
---

# --description--

媒体查询是 CSS3 中引入的一项新技术，它可以根据不同的视口大小调整内容的布局。 视口是指浏览器中，用户可见的网页内容。 视口会随访问网站的设备不同而改变。

媒体查询由媒体类型组成，如果媒体类型与展示网页的设备类型匹配，则应用对应的样式。 你可以在媒体查询中使用各种选择器和样式。

下面是一个媒体查询的例子，当设备宽度小于或等于 `100px` 时返回内容：

```css
@media (max-width: 100px) { /* CSS Rules */ }
```

以下定义的媒体查询，是当设备高度大于或等于 `350px` 时返回内容：

```css
@media (min-height: 350px) { /* CSS Rules */ }
```

注意，只有当媒体类型与所使用的设备的类型匹配时，媒体查询中定义的 CSS 才生效。

# --instructions--

请添加一条媒体查询规则，当设备的高度小于等于 `800px` 时，`p` 标签的 `font-size` 为 `10px`。

# --hints--

你应使用 `@media` 声明媒体查询，其中应包含 `height` 小于等于 `800px` 的规则。

```js
const media = new __helpers.CSSHelp(document).getCSSRules('media');
assert(media.some(x => x.media?.mediaText?.includes('(max-height: 800px)')));
```

当设备 `height` 小于等于 `800px` 时，`p` 元素的 `font-size` 应为 `10px`。

```js
const rules = new __helpers.CSSHelp(document).getRuleListsWithinMedia('(max-height: 800px)');
assert(rules?.find(x => x.selectorText === 'p')?.style?.fontSize === "10px");
```

当设备 `height` 大于 `800px` 时，`p` 元素的 `font-size` 应为 `20px`。

```js
const ifPFirst = new __helpers.CSSHelp(document).getCSSRules()?.find(x => x?.selectorText === 'p' || x?.media);
assert(ifPFirst?.style?.fontSize === '20px');
```

# --seed--

## --seed-contents--

```html
<style>
  p {
    font-size: 20px;
  }

  /* Only change code below this line */

  /* Only change code above this line */
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

# --solutions--

```html
<style>
  p {
    font-size: 20px;
  }

  @media (max-height: 800px) {
    p {
      font-size: 10px;
    }
  }
</style>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```
