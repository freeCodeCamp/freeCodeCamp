---
id: bad87fee1348bd9aeda08726
title: 删除 jQuery 函数
challengeType: 6
forumTopicId: 17561
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
---

# --description--

这些动画开始看起来很酷，但是有时可能会让用户分心。

请删除`document ready function`内的三个 jQuery 函数，但保留`document ready function`本身。

# --hints--

删除`document ready function`中的三个 jQuery 函数。

```js
assert(code.match(/\{\s*\}\);/g));
```

保持`script`标签不变。

```js
assert(code.match(/<script>/g));
```

保持`$(document).ready(function() {`在`script`标签的开头不变。

```js
assert(code.match(/\$\(document\)\.ready\(function\(\)\s?\{/g));
```

保持 'document ready function' 用`})`闭合。

```js
assert(code.match(/.*\s*\}\);/g));
```

保持`script`标签闭合。

```js
assert(
  code.match(/<\/script>/g) &&
    code.match(/<script/g) &&
    code.match(/<\/script>/g).length === code.match(/<script/g).length
);
```

# --solutions--

