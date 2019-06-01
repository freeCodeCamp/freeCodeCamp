---
title: Give Sibling Elements a Unique Key Attribute
localeTitle: 为兄弟元素提供唯一的键属性
---
## 为兄弟元素提供唯一的键属性

## 暗示

它与之前的[挑战](https://learn.freecodecamp.org/front-end-libraries/react/use-array-map-to-dynamically-render-elements)几乎相同。只需要添加`key`属性。

## 解

只需将`key`属性添加到`<li>`标记即可使其唯一

```jsx
const renderFrameworks = frontEndFrameworks.map((item) => 
  <li key={item+1}>{item}</li> 
 ); 

```