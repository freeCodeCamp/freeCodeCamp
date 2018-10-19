---
title: CSS3 Nth Child Selector
localeTitle: CSS3 第`nth-child`选择器
---
## CSS3 第`nth-child`选择器

第`nth-child`选择器是一个css伪类，它采用一种模式来匹配一个或多个元素相对于它们在兄弟姐妹中的位置。

## 句法

```CSS a：nth-​​child（pattern）{ / \* Css到这里\* / }
```
### 模式

第`nth-child`所接受的模式可以是关键字或An+B的方程
  
 #### 关键字
 
 ##### Odd 
 
 `Odd`会返回所属于特定类型的HTML元素当中的奇数元素。
 在下面的示例中，所奇数的`a`元素将会被指定，而选择器中的CSS会被插入被指定的元素中。
```

CSS a：nth-​​childe（odd）{ / \* CSS在这里\* / }
```
##### Even 
 
 `Even`会返回所属于特定类型的HTML元素当中的偶数元素。
 在下面的示例中，所位于偶数的`a`元素将会被指定，而选择器中的CSS会被插入被指定的元素中。
```

CSS a：nth-​​childe（偶数）{ / \* CSS在这里\* / }
```
#### An+B 

`An+B`会返回所有属于特定类型的HTML元素中，符合An+B(n与每个正整数)的元素
  在下面的示例中，每隔三个`a`元素的元素将会被指定，而选择器中的CSS会被插入被指定的元素中。
 
```

CSS a：nth-​​childe（3n）{ / \* CSS在这里\* / } \`\`\`

### 更多信息：

[MDN文档](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Anth-child) [CSS技巧 - 第n个子选择器](https://css-tricks.com/almanac/selectors/n/nth-child/) [CSS技巧 - 第n个儿童测试员](https://css-tricks.com/examples/nth-child-tester/) [W3Scools - 第n个儿童选择器](https://www.w3schools.com/cssref/sel_nth-child.asp)
