---
title: Focus
localeTitle: 焦点
---
## 焦点

### 定义

`:focus`表示已接收焦点状态的元素，由键盘事件触发。触发操作来自按**TAB**键，可在视觉上围绕元素创建环。

### 句法

`:focus`

### 例
```
a:focus { 
  color: red; 
 } 
```

### 产量

[JSfiddle Link](https://jsfiddle.net/ejae7vb3/1/)

#### 更多信息：

[MDN - Mozilla开发者网络| ：焦点 - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)

：focus CSS伪类用于选择具有焦点的元素（例如表单输入）。

通常在用户单击或点击元素或使用键盘的“tab”键选择它时触发。

句法：

```css
:focus 
```

## 例

HTML：

```html

<form> 
  <input type="text" value="The background will turn yellow when you click on it."> 
 </form> 
```

CSS：

```css
input:focus { 
   background-color: yellow; 
 } 
```

#### 更多信息：

有关更多信息，请访问[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)

[W3.org | CSS文档](https://www.w3.org/TR/CSS2/selector.html#dynamic-pseudo-classes)