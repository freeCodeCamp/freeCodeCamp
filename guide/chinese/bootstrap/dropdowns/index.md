---
title: Dropdowns
localeTitle: 下拉菜单
---
## 下拉菜单

Bootstrap提供Dropdown作为显示链接列表的插件。 下拉列表是一个切换按钮，显示链接列表。

Bootstrap的下拉菜单设计为通用的，适用于各种情况。例如，可以创建包含搜索字段或登录表单的下拉列表。

## 例

```html

<div class="dropdown"> 
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
    Dropdown example 
  </button> 
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> 
    <a class="dropdown-item" href="#">Action</a> 
    <a class="dropdown-item" href="#">Another action</a> 
    <a class="dropdown-item" href="#">Something else here</a> 
  </div> 
 </div> 
```

## 示例说明

_.dropdown_类表示下拉菜单。

要打开下拉菜单，请使用按钮或带有_.dropdown-toggle_类和_data-toggle =“dropdown_属性的链接。

_.caret_类创建一个插入箭头图标（▼），表示该按钮是一个下拉列表。

将_.dropdown-menu_类添加到无序列表元素以实际构建下拉菜单。

#### 更多信息：

https://getbootstrap.com/docs/4.0/components/dropdowns/