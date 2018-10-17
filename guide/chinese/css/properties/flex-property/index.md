---
title: Flex Property
localeTitle: Flex属性
---
## Flex属性

`flex`属性是指定灵活项目大小的简写。可以在此简写属性中指定`flex-grow` ， `flex-shrink`和`flex-basis` 。

**如果元素不是`flex-item`则此属性无效** 。 Flex项是一个元素，它是容器父项的直接子项，其显示属性为`flex`或`inline-flex` 。

## 句法

下面列出的语法可能存在差异。 `flex-grow`和`flex-shrink`将整数作为值。 `flex-basis`采用常规大小单位，如px，em，rem ......等。

```css
flex: <flex-grow> <flex-shrink> <flex-basis>; 
 flex: <flex-basis>; 
 flex: <flex-grow>; 
 flex: <flex-grow> <flex-basis>; 
 flex: <flex-grow> <flex-shrink>; 
```

`flex-basis`指定沿主轴的元素大小。在容器内，主轴由`flex-direction`定义。当`flex-direction`为`row`主轴是水平的。当`flex-direction`为`column`时垂直。

`flex-basis: 20px`如果`flex-direction`为`row`则`flex-basis: 20px`会将元素的初始宽度设置为`20px` 。如果`fle-direction`是`column`则相同的`flex-basis`将适用于高度。

`flex: 20px`会自动表示`flex-basis: 20px` ，因为速记属性只有`flex-basis`作为可以取单位值的属性。

`flex: 2`指定`flex-grow: 2` ，元素将比`flex-grow: 1`其他元素长两倍/更高`flex-grow: 1` 。

`flex: 1 2`指定`flex-grow: 1`和`flex-shrink: 2` 。随着`flex-grow: 1`元素与其他元素成比例地占据空白空间`flex-grow: 1`但是与其他具有`flex-shrink: 1`元素相比，缩小了两倍`flex-shrink: 1`当按压空间时， `flex-shrink: 1` 。

### 更多信息

*   [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)上的`flex`属性引用