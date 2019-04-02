---
title: CSS Method
localeTitle: CSS方法
---
## CSS方法

jQuery `.css()`方法获取匹配元素集中第一个元素的计算样式属性的值，或为每个匹配元素设置一个或多个CSS属性。

### 入门

要返回指定CSS属性的值，请使用以下语法：

```js
    $(selector).css(propertyName); 
```

例如：

```js
    $('#element').css('background'); 
```

注意：这里我们可以使用任何css选择器，例如：element（HTML Tag selector），。element（Class Selector），＃element（ID selector）。

### 设置

要设置指定的CSS属性，请使用以下语法：

```js
    $(selector).css(propertyName,value); 
```

例如：

```js
    $('#element').css('background','red'); 
```

要设置多个CSS属性，您必须使用对象文字语法，如下所示：

```js
    $('#element').css({ 
        'background': 'gray', 
        'color': 'white' 
    }); 
```

如果要更改标有多个单词的属性，请参阅此示例：

更改元素的`background-color`

```js
    $('#element').css('background-color', 'gray'); 
```

#### 更多信息：

文档： [api.jquery](http://api.jquery.com/css/)