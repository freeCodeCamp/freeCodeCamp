---
title: Declarative Rendering
localeTitle: 声明性渲染
---
## 安装目录

在我们开始之前，有几种方法可以使用Vue.js，即通过CDN和via 安装。对于第一次体验，使用CDN更容易。

对于开发，请使用：

```html

<!-- development version, includes helpful console warnings --> 
 <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> 
```

跳到制作时，这个：

```html

<!-- production version, optimized for size and speed --> 
 <script src="https://cdn.jsdelivr.net/npm/vue"></script> 
```

如前所述，您也可以安装`vue-cli` ，但事实并非如此 建议初学者。

## 声明性渲染

Vue.js是创建动态页面的绝佳工具，也是第一种进入的方式 触摸它就是所谓的声明渲染。

使用术语“声明”意图将这一概念理顺 声明性语言，例如SQL：你订购的东西，它并不暗示 任何实施。 Vue.js允许您声明您想要的数据 渲染，就像那样：

```html

<div id="app"> 
  {{ message }} 
 </div> 
```

```javascript
let app = new Vue({ 
  el: '#app', 
  data: { 
    message: 'Hello, world!' 
  } 
 }); 
```

使用这些snipets，你告诉Vue动态渲染存储的内容 内部`message`变量。乐趣：每当`message`改变时， Vue.js设法重新加载DOM的特定部分，你看到了 更改。

如果您想尝试此反应，请打开控制台并更改de值 `app.message` ，比如， `"Hello from console"` 。你注意到了变化吗？ 这页纸？

`{{ ... }}`是该行为的语法：输出值 变量或表达式。例如，这也是一种有效的用途 招致`hello` ：

```html

<div id="app"> 
  {{ 1 < 2 ? "hello" : "goodbye" }} 
 </div> 
```

我们想要的是使用我们的Vue应用程序设置属性的情况 变量。您可能认为相同的语法适用，但Vue有一些东西 具体的，我们称之为“约束”。

```html

<div id="app"> 
  <a v-bind:href="dynamicLink">This link</a> 
 </div> 
```

```javascript
let app = new Vue({ 
  el: '#app', 
  data: { 
    dynamicLink: 'medium.freecodecamp.org' 
  } 
 } 
```

语法`v-bind`是Vue.js所谓的“指令”。这是一种设置新方式的方法 属性为将由Vue处理的标记 - 还有更多 指令，它们都以`v-`开头。