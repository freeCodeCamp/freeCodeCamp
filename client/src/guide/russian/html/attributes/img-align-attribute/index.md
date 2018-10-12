---
title: Img Align Attribute
localeTitle: Img Выровнять атрибут
---
## Img Выровнять атрибут

Атрибут align для изображения указывает, где изображение должно быть выровнено в соответствии с окружающим элементом.

Значения атрибута:  
right - Выровнять изображение вправо left - выравнивание изображения влево  
top - Выравнивание изображения вверх  
bottom - выравнивание изображения до нижней  
middle - Выравнивание изображения до середины

Например:

```html

<!DOCTYPE html> 
 <html lang="en"> 
  <head> 
   <title>Img Align Attribute</title> 
 </head> 
 <body> 
  <p>This is an example. <img src="image.png" alt="Image" align="middle"> More text right here 
  <img src="image.png" alt="Image" width="100"/> 
  </body> 
 </html> 
```

Мы также можем выровнять по правому краю, если хотим:

```html

<p>This is another example<img src="image.png" alt="Image" align="right"></p> 
```

**Обратите внимание, что атрибут align не поддерживается в HTML5, и вместо этого вы должны использовать CSS. Тем не менее, он по-прежнему поддерживается всеми основными браузерами.**

#### Дополнительная информация:

[Статья MDN в теге img и его атрибутах](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)