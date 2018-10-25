---
title: Use the flex-direction Property to Make a Row
localeTitle: Используйте свойство flex-direction для создания строки
---
## Используйте свойство flex-direction для создания строки

Как только у вас есть гибкий контейнер, добавив _display: flex;_ в родительский контейнер, вы можете указать, хотите ли вы, чтобы дети были сложены в ряд, добавив следующее:

```css
#box-container { 
    display: flex; /* This makes the flex container */ 
    height: 500px; 
    flex-direction: row-reverse; /* This makes the direction be a row with reversed elements */ 
  } 
```

Вы заметите, как цвета переключают позиции по умолчанию в контейнерах гибких дисков - это строки, которые вы могли заметить из [примера твита](https://github.com/freecodecamp/guides/tree/master/src/pages/responsive-web-design/css-flexbox/add-flex-superpowers-to-the-tweet-embed/index.md) .