---
id: 587d7fad367417b2b2512be1
title: 使用 onclick 属性处理点击事件
challengeType: 6
forumTopicId: 301503
---

# --description--

你希望代码仅在页面完成加载后执行。为此，你可将名为`DOMContentLoaded`的 JavaScript 事件附加到文档中。以下是实现的代码：

```js
document.addEventListener('DOMContentLoaded', function() {

});
```

你可以在`DOMContentLoaded`函数内部添加事件处理方法。你可以添加`onclick`事件处理器，当用户点击 id 为`getMessage`的元素时会触发事件。添加以下代码：

```js
document.getElementById('getMessage').onclick = function(){};
```

# --instructions--

在`DOMContentLoaded`函数内为 id 为`getMessage`的元素添加一个 click 事件处理器。

# --hints--

你的代码应该用`document.getElementById`方法来选择`getMessage`元素。

```js
assert(code.match(/document\s*\.getElementById\(\s*?('|")getMessage\1\s*?\)/g));
```

你的代码应该添加`onclick`事件处理器。

```js
assert(typeof document.getElementById('getMessage').onclick === 'function');
```

# --solutions--

