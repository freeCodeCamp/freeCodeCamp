---
title: Tabs and Pills
localeTitle: 标签和药丸
---
## 标签和药丸

标签和药丸是导航的形式。这意味着它们可以帮助最终用户以用户友好的方式浏览网站。

### 标签

要实现引导选项卡，首先需要一个分配了`.nav`类的元素。然后，您只需添加一个名为`.nav-tabs`的额外类。

```html

<ul class="nav nav-tabs"> 
  <li role="presentation" class="active"><a href="#">Home</a></li> 
  <li role="presentation"><a href="#">Profile</a></li> 
  <li role="presentation"><a href="#">Messages</a></li> 
 </ul> 
```

## ![Bootstrap标签](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs.PNG)

### 丸

Bootstrap Pills的实现方式与Bootstrap Tabs相同，除了代替`.nav-tabs` ，使用`.nav-pills` 。

```html

<ul class="nav nav-pills"> 
  <li role="presentation" class="active"><a href="#">Home</a></li> 
  <li role="presentation"><a href="#">Profile</a></li> 
  <li role="presentation"><a href="#">Messages</a></li> 
 </ul> 
```

## ![Bootstrap丸](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Pills.PNG)

### 药片堆积

通过使用`.nav stacked`与`.nav-pills`一起堆叠，Bootstrap Pills也可以垂直堆叠。

```html

<ul class="nav nav-pills nav-stacked"> 
  ... 
 </ul> 
```

## ![堆积的Bootstrap药片](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Pills%20Stacked.PNG)

### Bootstrap标签/药丸合理

通过使用`.nav-justified`类，Bootstrap Tabs和Pills在屏幕宽度超过768px时可以具有相同的父级宽度。在较小的屏幕上，导航链接是堆叠的。

```html

<ul class="nav nav-tabs nav-justified"> 
  ... 
 </ul> 
 <ul class="nav nav-pills nav-justified"> 
  ... 
 </ul> 
```

## ![Bootstrap标签/药丸合理](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs%20And%20Pills%20Justified.PNG)

### 禁用链接

对于任何导航组件（标签或药丸），为灰色链接添加`.disabled` ，不添加悬停效果

```html

<ul class="nav nav-pills"> 
  ... 
  <li role="presentation" class="disabled"><a href="#">Disabled link</a></li> 
  ... 
 </ul> 
```

## ![禁用链接](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs%20and%20Pills%20Disabled%20Link.PNG)

### 带下拉列表的标签

在导航标签中添加下拉菜单。

```html

<ul class="nav nav-tabs"> 
  ... 
  <li role="presentation" class="dropdown"> 
    <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"> 
      Dropdown <span class="caret"></span> 
    </a> 
    <ul class="dropdown-menu"> 
      ... 
    </ul> 
  </li> 
  ... 
 </ul> 
```

## ![带下拉列表的标签](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Tabs%20Dropdown.PNG)

#### 带下拉列表的标签

在导航丸中添加下拉菜单。

```html

<ul class="nav nav-pills"> 
  ... 
  <li role="presentation" class="dropdown"> 
    <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"> 
      Dropdown <span class="caret"></span> 
    </a> 
    <ul class="dropdown-menu"> 
      ... 
    </ul> 
  </li> 
  ... 
 </ul> 
```

![药丸与下拉菜单](https://github.com/TroyB12/Pictures/blob/master/Bootstrap%20Pills%20Dropdown.PNG)