---
title: Center an Image Using Text Align Center
localeTitle: Центрировать изображение с помощью центра выравнивания текста
---
## Центрировать изображение с помощью центра выравнивания текста

Элемент `<img>` - это встроенный элемент (отображаемое значение `inline-block` ). Его можно легко центрировать, добавив `text-align: center;` Свойство CSS для родительского элемента который содержит его.

Чтобы `text-align: center;` изображение с помощью `text-align: center;` вы должны поместить `<img>` внутри элемента уровня блока, такого как `div` . Поскольку свойство `text-align` применимо только к элементам уровня блока, вы размещаете `text-align: center;` на элементе уровня блока упаковки, чтобы достичь горизонтально-центрированного `<img>` .

### пример

```html

<!DOCTYPE html> 
 <html> 
  <head> 
    <title>Center an Image using text align center</title> 
    <style> 
      .img-container { 
        text-align: center; 
      } 
    </style> 
  </head> 
  <body> 
    <div class="img-container"> <!-- Block parent element --> 
      <img src="user.png" alt="John Doe"> 
    </div> 
  </body> 
 </html> 
```

**Примечание** . Родительский элемент должен быть блочным элементом. Если это не элемент блока, вы должны добавить `display: block;` CSS и свойство `text-align` .

```html

<!DOCTYPE html> 
 <html> 
  <head> 
    <title>Center an Image using text align center</title> 
    <style> 
      .img-container { 
        text-align: center; 
        display: block; 
      } 
    </style> 
  </head> 
  <body> 
    <span class="img-container"> <!-- Inline parent element --> 
      <img src="user.png" alt=""> 
    </span> 
  </body> 
 </html> 
```

**Демо-** [версия](https://codepen.io/aravindio/pen/PJMXbp) **:** [Codepen](https://codepen.io/aravindio/pen/PJMXbp)

## Документация

[**text-align** - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)

[**\\ ** - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)