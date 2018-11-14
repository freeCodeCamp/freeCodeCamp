---
title: Create Reusable CSS with Mixins
localeTitle: 使用Mixins创建可重用的CSS
---
## 使用Mixins创建可重用的CSS

`Mixin`是开发人员使用`SASS`而不是纯`CSS`的强大功能之一，因为它允许您在样式表中使用`Function` ！

要创建mixin，您应该遵循以下方案：

```scss
@mixin custom-mixin-name($param1, $param2, ....) { 
    // CSS Properties Here... 
 } 
```

要在元素中使用它，您应该使用`@include`后跟您的`Mixin`名称，如下所示：

```scss
element { 
    @include custom-mixin-name(value1, value2, ....); 
 } 
```

* * *

### \[示例\]在`SASS`写入`Text Shadow`

**目标：**将自定义`Text Shadow`应用于`h4`元素

#### HTML

```html

<h4>This text needs a Shadow!</h4> 
```

#### SASS _（用SCSS语法编写）_

```scss
@mixin custom-text-shadow($offsetX, $offsetY, $blurRadius, $color) { 
    -webkit-text-shadow: $offsetX, $offsetY, $blurRadius, $color; 
    -moz-text-shadow: $offsetX, $offsetY, $blurRadius, $color; 
    -ms-text-shadow: $offsetX, $offsetY, $blurRadius, $color; 
    text-shadow: $offsetX, $offsetY, $blurRadius, $color; 
 } 
 h2 { 
    @include custom-text-shadow(1px, 3px, 5px, #999999) 
 } 

```