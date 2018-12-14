---
title: CSS3 Nth Child Selector
localeTitle: CSS3 Nth Child Selector
---
## CSS3 Nth Child Selector

第`nth-child`选择器是一个css伪类，它采用一种模式来匹配一个或多个元素相对于它们在兄弟姐妹中的位置。

## 句法

\`\`\`CSS a：nth-​​child（pattern）{ / \* Css到这里\* / }
```
### Pattern 
 
 The patterns accepted by `nth-child` can come in the form of keywords or an equation of the form An+B. 
 
 #### Keywords 
 
 ##### Odd 
 
 Odd returns all odd elements of a given type. 
```

CSS a：nth-​​child（odd）{ / \* CSS在这里\* / }
```
##### Even 
 
 Even returns all even elements of a given type. 
```

CSS a：nth-​​child（偶数）{ / \* CSS在这里\* / }
```
#### An+B 
 
 Returns all elements matching the equation An+B for every positive integer value of n (in addition to 0). 
 
 For example, the following will match every 3rd anchor element: 
```

CSS a：nth-​​child（3n）{ / \* CSS在这里\* / } \`\`\`

### 更多信息：

[MDN文档](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Anth-child) [CSS技巧 - 第n个子选择器](https://css-tricks.com/almanac/selectors/n/nth-child/) [CSS技巧 - 第n个儿童测试员](https://css-tricks.com/examples/nth-child-tester/) [W3Scools - 第n个儿童选择器](https://www.w3schools.com/cssref/sel_nth-child.asp)
