---
title: Body Bgcolor Attribute
localeTitle: Атрибут Body Bgcolor
---
## Атрибут Body Bgcolor

Атрибут `<body bgcolor>` присваивает цвет фона для HTML-документа.

**Синтаксис** :

`<body bgcolor="color">` Значение цвета может быть либо именем цвета (например, `purple` ), либо шестнадцатеричным значением (например, `#af0000` ).

Чтобы добавить фоновый цвет на веб-страницу, вы можете использовать `<body bgcolor="######">` . Он указывает цвет для отображения HTML-документа.

**Например:**

```html

<html> 
  <head> 
    <title>Body bgcolor Attribute example</title> 
  </head> 
  <body bgcolor="#afafaf"> 
    <h1>This webpage has colored background.</h1> 
  </body> 
 </html> 
```

Вы можете изменить цвет, заменив ###### шестнадцатеричным значением. Для простых цветов вы также можете использовать слово, например «красный» или «черный».

Все основные браузеры поддерживают атрибут `<body bgcolor>` .

_Заметка:_

*   HTML 5 не поддерживает атрибут `<body bgcolor>` . Используйте CSS для этой цели. Как? Используя следующий код: `<body style="background-color: color">` Конечно, вы также можете сделать это в отдельном документе вместо встроенного метода.
    
*   Не используйте значение RGB в атрибуте `<body bgcolor>` потому что `rgb()` предназначен только для CSS, то есть он не будет работать в HTML.
    

**Смотрите в действии:** https://repl.it/Mwht/2

**Другие источники:**

*   Названия цветов HTML: https://www.w3schools.com/colors/colors\_names.asp
*   Свойство background-color CSS: https://www.w3schools.com/cssref/pr\_background-color.asp