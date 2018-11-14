---
title: Control Flow
localeTitle: 控制流
---
## 控制流

### 条件语句

使用Vue.js，您可以决定是否在最终显示或不显示一段代码 页面，取决于某些条件。例如，想象一下表单输入 需要一个至少8个字符长的文本：如果用户输入短于8， 应该出现错误信息;但如果输入长于8，则 消息消失。

但让我们举一个更简单的例子。我们想要解决一个问题 消息到柜台：

```html

<div id="app"> 
  <p v-if="counter > 10"> 
    This message is only rendered when the counter is greater than 10 
  </p> 
 </div> 
```

```javascript
let app = new Vue({ 
  el: '#app', 
  data: { 
    counter: 0 
  } 
 }); 
```

如果你去控制台并开始递增计数器，当它穿过我们的 阈值为10，将显示消息！然后，如果你递减`counter` ， 当`counter`低于10时，Vue.js将隐藏消息。为此，我们 使用了指令`v-if` 。

你可能会想，如果有一个`else`为该`if` 。而且有 `v-else` 。请注意， `v-else`将始终

*   期待`v-if`之前
*   指的是页面中最接近的`v-if`

让我们改变一下我们的第一个例子来实现这一点。

```html

<div id="app"> 
  <p v-if="counter > 10"> 
    This message is only rendered when the counter is greater than 10 
  </p> 
  <p v-else> 
    And this is the "otherwise" option 
  </p> 
 </div> 
```

```javascript
let app = new Vue({ 
  el: '#app', 
  data: { 
    counter: 0 
  } 
 }); 
```

通过改变`counter`值来玩一点，并注意 消息显示。

Vue.js也有`v-else-if`指令。

### 循环

Vue.js还可以帮助生成相同代码的多个副本 结构，带有循环。经典示例是动态呈现的列表。

```html

<div id="app"> 
  <ul> 
    <li v-for="item in list"> 
      {{ item }} 
    </li> 
  </ul> 
 </div> 
```

```javascript
let app = new Vue({ 
  el: '#app', 
  data: { 
    list: [ 
      "shave", 
      "do the dishes", 
      "clean the sink", 
      "pay the bill" 
    ] 
  } 
 }); 
```

比插入很多`<li>`更容易。并注意每当`list` 变化，结果会相应改变。尝试一下：打开控制台和 `push`一些字符串`push`送到`list`中

```javascript
app.list.push("something else"); 
```

正如所料，现在呈现的页面有我们全新的项目！