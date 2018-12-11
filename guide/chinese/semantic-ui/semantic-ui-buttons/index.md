---
title: Semantic UI Buttons
localeTitle: 语义UI按钮
---
## 语义UI按钮

按钮表示可能的用户操作。语义UI提供了一种易于使用的语法，不仅简化了按钮的样式，还简化了自然语言语义。

#### 如何使用

语义UI类简单地添加到按钮元素，下面给出了各种示例以指示如何使用它。

#### 类型

*   标准按钮

标准语义UI按钮
```
<button class="ui button">Standard Button</button> 
```

*   重点按钮

一个具有不同强调程度的按钮
```
<button class="ui primary button"> 
```

其他重点课程是`secondary` ， `positive`和`negative`

*   动画按钮

带动画的按钮，显示隐藏的内容
```
<div class="ui animated fade button" tabindex="0"> 
  <div class="visible content">Sign-up for a Pro account</div> 
  <div class="hidden content">$12.99 a month</div> 
 </div> 
```

上面的属性`tabindex="0"`使按钮键盘可对焦，因为未使用`<button>`标签。

*   标记的按钮

标签旁边的按钮
```
<div class="ui labeled button" tabindex="0"> 
  <div class="ui button"><i class="heart icon"></i> Like</div> 
  <a class="ui basic label">2,048</a> 
 </div> 
```

元素`<i>`用于指定图标，这里是心形图标`<i class="heart icon"></i>`以及基本标签`<a class="ui basic label">2,048</a>`

*   图标按钮

语义UI按钮可以只是一个图标
```
<button class="ui icon button"> 
  <i class="camera icon"></i> 
 </button> 
```

以上只是一个相机图标

#### 组

语义UI按钮可以存在于组中
```
<div class="ui buttons"> 
  <button class="ui button">One</button> 
  <button class="ui button">Two</button> 
  <button class="ui button">Three</button> 
 </div> 
```

#### 内容

语义UI按钮可以包含条件
```
<div class="ui buttons"> 
  <button class="ui positive button">Yes</button> 
  <div class="or" data-text="or"></div> 
  <button class="ui negative button">No</button> 
 </div> 
```

#### 状态

语义UI按钮可以存在于不同的状态， `active` ， `disabled` ， `loading` 。只需`of` \`element的`class`属性`of`添加一个州名。
```
<button class="ui loading button">Loading</button> 
```

#### 变化

语义UI按钮存在各种尺寸， `mini` ， `tiny` ， `small` ， `medium` ， `large` ， `big` ， `huge` ， `massive` 。
```
<button class="ui massive button">Massive Button</button> 
```

有关语义UI按钮的更多信息，请访问“更多信息”部分中提供的链接以了解更多信息。

#### 更多信息：

*   [语义UI按钮文档](https://semantic-ui.com/elements/button.html)