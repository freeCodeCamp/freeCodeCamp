---
title: Add Flex Superpowers to the Tweet Embed
localeTitle: Добавить Flex Superpowers в Tweet Вставить
---
## Добавить Flex Superpowers в Tweet Вставить

Основываясь на [предыдущем вызове](https://github.com/freecodecamp/guides/tree/master/src/pages/responsive-web-design/css-flexbox/use-display-flex-to-position-two-boxes/index.md) , вам нужно будет добавить свойство в нужные селекторы. Здесь трюк определяет правильный селектор, а затем все, что вам нужно добавить на _дисплей: flex;_ имущество.

Заголовок гарантирует, что изображения, имя, дескриптор и последующие кнопки будут перемещаться горизонтально.

```CSS
header { 
    display: flex; 
 } 
```

Выравнивает имя и дескриптор, чтобы выглядеть как одно предложение.

```CSS
header .profile-name { 
    display:flex; 
    margin-left: 10px; 
  } 
```

Добавление свойства в следующую кнопку вместе с полем будет центрировать кнопку в нужном размере.

```CSS
header .follow-btn { 
    display:flex; 
    margin: 0 0 0 auto; 
  } 
```

Эта же идея используется для элементов нижнего колонтитула.