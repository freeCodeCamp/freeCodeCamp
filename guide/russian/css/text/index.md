---
title: Text
localeTitle: Текст
---
## Текст

CSS предоставляет несколько свойств, чтобы изменить внешний вид текста. Ниже описаны различные текстовые свойства.

#### Цвет текста
Это пример свойства текста CSS.
``` css 
 p { 
    color:red; 
 } 
```

В приведенном выше примере `color` текста элемента `<p>` изменяется на красный. Вы также можете указать цвет как значения RGB, значения HLS и шестнадцатеричные коды (для получения дополнительной информации о цветах щелкните [здесь](https://guide.freecodecamp.org/css/colors) ).

#### Выравнивание текста

Свойство `text-align` используется для установки горизонтального выравнивания текста. Он может принимать значения `left` , `right` , `center` и `justify` .
```
p { text-align: center; }
```

Здесь текст выровнен по центру `center` ([example](https://www.w3schools.com/css/tryit.asp?filename=trycss_text-align)).Когда значение `text-align` задано `justify`, каждая строка растягивается, каждая линия имеет равную длину и `margin` справа и слева равны. ([Пример](https://www.w3schools.com/css/tryit.asp?filename=trycss_text-align_all)). 


 #### Оформление текста

```
 p{ text-decoration: underline; }
```
Свойство `text-decoration` используется для добавления или удаления оформления у текста. Значениу `text-decoration: none;` часто используется для удаления подчеркивания с ссылок. Другие свойства `text-decorations` это `overline`,`line-through` и `underline` ([Пример](https://www.w3schools.com/css/tryit.asp?filename=trycss_text-decoration)). 
 
 #### Преобразование текста
 
```
 p{ text-transform: capitalize; }
```
Свойство `text-transform` используется для преобразования текста в `uppercase`,`lowercase` или в `capitilize`([Пример](https://www.w3schools.com/css/tryit.asp?filename=trycss_text-transform)). 
 
 #### Расстояние между буквами 
 
 Свойство `letter-spacing` используется для задания расстояния между буквами в тексте. 
```
 p{ letter-spacing: 5px; }
```
#### Высота линии
 
 Свойство `line-height` используется для задания расстояния между двумя линиями в тексте. 
```
 p{ line-height: 5px; }
```
#### Расстояния между словами
 
 Свойство `word-spacing` задает расстояние между словами в тексте.
```
 p{ word-spacing: 5px; }
 ```

#### Дополнительная информация:

[Текст CSS W3Schools](https://w3schools.com/css/css_text.asp)
