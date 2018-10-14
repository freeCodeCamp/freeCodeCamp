---
title: Img Src Attribute
localeTitle: Атрибут Img Src
---
## Атрибут Img Src

Атрибут `<img src>` относится к источнику изображения, которое вы хотите отобразить. Тег `img` не отображает изображение без атрибута `src` . Однако, если вы установите источник в местоположение изображения, вы можете отобразить любое изображение.

Существует изображение логотипа freeCodeCamp, расположенного по адресу `https://avatars0.githubusercontent.com/u/9892522?v=4&s=400`

Вы можете установить это как изображение, используя атрибут `src` .

```html

<html> 
  <head> 
    <title>Img Src Attribute Example</title> 
  </head> 
  <body> 
    <img src="https://avatars0.githubusercontent.com/u/9892522?v=4&s=400"> 
  </body> 
 </html> 
```

Вышеприведенный код выглядит следующим образом:

![FreeCodeCamp Аватар](https://avatars0.githubusercontent.com/u/9892522?v=4&s=400?raw=true)

Атрибут `src` поддерживается всеми браузерами.

Вы также можете иметь локально размещенный файл в качестве изображения.

Например, `<img src="images/freeCodeCamp.jpeg>` будет работать, если бы у вас была папка с `images` которой был внутренний `freeCodeCamp.jpeg` , если папка« images »находилась в том же месте, что и файл `index.html` ,

`../files/index.html`

`..files/images/freeCodeCamp.jpeg`

### Дополнительная информация:

*   [HTML.com](https://html.com/attributes/img-src/)
*   [W3 Школы](https://www.w3schools.com/tags/att_img_src.asp)