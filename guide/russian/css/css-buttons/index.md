---
title: CSS Buttons
localeTitle: Кнопки CSS
---
## Кнопки CSS

*   Вы можете создать любую кнопку clickable (элемент HTML `<button>` )

`<button>Click Me</button>`

*   Кнопка по умолчанию выглядит следующим образом:

![Default Button Style](https://image.ibb.co/kCweAm/button.png "Стиль кнопки по умолчанию")

## Стилизация кнопки

Вы можете изменить несколько свойств кнопки, чтобы изменить ее внешний вид.

Чтобы добавить тени к кнопке, используйте свойство `box-shadow` .

Чтобы добавить прозрачность к кнопке для отключенного эффекта, используйте `opacity` свойства.

Чтобы удалить поля и создать группу кнопок, добавьте свойство `float:left/right` .

Чтобы создать группу кнопок, но с границами, используйте свойство `float` и добавьте `border property` .

Для создания вертикальной группы кнопок используйте display: `block property` .

### Цвет кнопки

Чтобы изменить цвет фона кнопки, используйте свойство background-color:

`button {background-color: #6ba0f4;}`

![Button Background-Color](https://image.ibb.co/f5Xpt6/button_bg_blue.png "Цвет фона кнопки")

Чтобы добавить цветную рамку к кнопке, используйте свойство border:
```
button { 
  background-color: #FFF; 
  color: #FFF; 
  border: 2px solid #6ba0f4; 
 } 
```

![Button Border](https://image.ibb.co/kUqymR/button_border_blue.png "Пограничная кнопка")

### Размер текста кнопки

Чтобы изменить размер шрифта текста на кнопке, используйте свойство font-size:

`button {font-size: 20px;}`

![Button Text Size](https://image.ibb.co/gM9r6R/button_fontsize.png "Размер текста кнопки")


### Внутренние отступы от текста

Чтобы изменить отступ текста от границ кнопки, используйте свойство padding:


`button {padding: 15px 30px;}`

![Button Padding](https://image.ibb.co/fKer6R/button_padding.png "Пусковая площадка")

### Ширина кнопки

Чтобы изменить ширину кнопки, независимо от текстового содержимого, используйте свойство width:

`button {width: 250px;}`

![Button Width](https://image.ibb.co/cDgSfm/button_width.png "Ширина кнопки")

### Закругленные кнопки

Чтобы создать закругленные кнопки, используйте свойство border-radius:

`button {border-radius: 50%;}`

![Rounded Buttons](https://image.ibb.co/cfH00m/button_bradius.png "Закругленные кнопки")

### Напольные кнопки

Чтобы изменить стиль кнопки при перемещении мыши над ней, используйте селектор: hover:
```
button:hover { 
  background-color: #0E2C5B; 
  color: #FFF; 
 } 
```

![Hoverable Buttons](https://image.ibb.co/hxQnfm/button_hover.png "Напольные кнопки")

Чтобы определить скорость эффекта наведения, используйте `transition-duration` свойства.

### Отключенные кнопки

Чтобы отключить кнопку, используйте свойство cursor:
```
button { 
  cursor: not-allowed; 
 } 
```

#### Дополнительная информация:

*   https://www.w3schools.com/css/css3\_buttons.asp
*   https://www.w3schools.com/howto/howto _css_ animate\_buttons.asp
