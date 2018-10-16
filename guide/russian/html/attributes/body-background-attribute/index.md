---
title: Body Background Attribute
localeTitle: Атрибут фонового рисунка
---
## Атрибут фонового рисунка

Если вы хотите добавить фоновое изображение вместо цвета, одним из решений является атрибут `<body background>` . Он указывает фоновое изображение для HTML-документа.

Синтаксис:

`<body background="URL">`

Атрибут:

`background - URL for background image`

Пример:

```html

<html> 
  <body background="https://assets.digitalocean.com/blog/static/hacktoberfest-is-back/hero.png"> 
  </body> 
 </html> 
```

## атрибут body-background обесценивается

атрибут body-background устарел в HTML5. Правильный способ стилирования `<body>` - с помощью CSS.

Существует несколько свойств CSS, используемых для установки фона элемента. Они могут использоваться на для установки фона всей страницы.

## Проверьте это:

*   [CSS background proprety](https://github.com/freeCodeCamp/guides/blob/master/src/pages/css/background/index.md)