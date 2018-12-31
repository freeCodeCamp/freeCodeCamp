---
title: Input Checked Attribute
localeTitle: 输入检查属性
---
## 输入检查属性

checked属性是布尔属性。

如果存在，它指定一个页面加载时应预先选择（选中）元素。

checked属性可以与。一起使用和 。

还可以在页面加载后通过JavaScript设置checked属性。

## 看一下下面的例子：

```html

<form action="/action_page.php"> 
  <input type="checkbox" name="vehicle" value="Bike"> I have a bike<br> 
  <input type="checkbox" name="vehicle" value="Car" checked> I have a car<br> 
  <input type="submit" value="Submit"> 
 </form> 
```

在上面的示例中，默认情况下加载网页时，由于checked属性，将自动选中第一个复选框。