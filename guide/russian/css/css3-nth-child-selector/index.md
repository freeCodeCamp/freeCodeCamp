---
title: CSS3 Nth Child Selector
localeTitle: CSS3 N-й детский селектор
---
## CSS3 Nth Child селектор

Селектор `nth-child` - это превдокласс, находит один или более элементов, основываясь на их позиции среди группы соседних элементов.

## Синтаксис

\`\` \`CSS a: nth-child (pattern) { / \* Css идет здесь \* / }
```
### Pattern 
 
 The patterns accepted by `nth-child` can come in the form of keywords or an equation of the form An+B. 
 
 #### Keywords 
 
 ##### Odd 
 
 Odd returns all odd elements of a given type. 
```

CSS a: nth-childe (нечетный) { / \* CSS идет здесь \* / }
```
##### Even 
 
 Even returns all even elements of a given type. 
```

CSS a: nth-childe (even) { / \* CSS идет здесь \* / }
```
#### An+B 
 
 Returns all elements matching the equation An+B for every positive integer value of n (in addition to 0). 
 
 For example, the following will match every 3rd anchor element: 
```

CSS a: nth-childe (3n) { / \* CSS идет здесь \* / } \`\` \`

### Дополнительная информация:

[Документация MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Anth-child) [CSS-трюки - n-й дочерний селектор](https://css-tricks.com/almanac/selectors/n/nth-child/) [CSS Tricks - n-й детский тестер](https://css-tricks.com/examples/nth-child-tester/) [W3Scools - n-й дочерний селектор](https://www.w3schools.com/cssref/sel_nth-child.asp)
