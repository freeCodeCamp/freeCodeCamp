---
title: Text
localeTitle: Текст
---
## Текст

CSS предоставляет несколько свойств, чтобы изменить внешний вид текста. Ниже описаны различные текстовые свойства.

#### Цвет текста

```html
<html>
  <body>
    <p>This is an example of CSS text property.</p>
  </body>
</html>
```
```css
p {
    color:red;
 }
```

В приведенном выше примере `color` текста элемента `<p>` изменяется на красный. Вы также можете указать цвет как значения RGB, значения HLS и шестнадцатеричные коды (для получения дополнительной информации о цветах щелкните [здесь](https://guide.freecodecamp.org/css/colors) ).

#### Выравнивание текста

Свойство `text-align` используется для установки горизонтального выравнивания текста. Он может принимать значения `left` , `right` , в `center` и `justify` .
```css
p {
    text-align: center;
 }
```
Здесь текст выровнен по центру (`center`) ([пример](https://www.w3schools.com/css/tryit.asp?filename=trycss_text-align)).Когда свойство `text-align` имеет значение `justify`, все строки растягиваются чтобы иметь одинаковую ширину и внешние отступы ([пример](https://www.w3schools.com/css/tryit.asp?filename=trycss_text-align_all)). 
 
 #### Стилизация текста
``` css
p {
    text-decoration: underline;
}
```
Свойства `text-decoration` используется для добавления или удаление стилизации текста. Значение `text-decoration: none;` часто используется, чтобы убрать подчеркивание у ссылок. Другие значения `text-decorations` включают в себя: `overline`,`line-through`,и `underline` ([пример](https://www.w3schools.com/css/tryit.asp?filename=trycss_text-decoration)). 
 
 #### Преобразование текста
``` css
p {
    text-transform: capitalize;
}
```
Свойство `text-transform` используется для преобразования всего текста в верхний или нижний регстр ([пример](https://www.w3schools.com/css/tryit.asp?filename=trycss_text-transform)). 
 
 #### Расстояние между буквами
 
 Свойство `letter-spacing` позволяет задавать расстояние между буквами.
``` css
p {
    letter-spacing: 5px;
}
```
#### Высота строки
 
 Свойство `line-height` позволяет задать значение высоты одной строки текста
``` css
p {
    line-height: 5px;
}
```
#### Расстояние между словами
 
 Свойство `word-spacing` позволяет указать расстояние между словами.
``` css
p {
    word-spacing: 5px;
}
```

#### Дополнительная информация:
[Текст CSS W3Schools](https://w3schools.com/css/css_text.asp)
