---
title: CSS3 Backgrounds
localeTitle: Фоны CSS3
---
## Фоны CSS3

Условное свойство CSS `background` shorthand используется для определения мультипликативных свойств, таких как:

`background-color` , `background-image` , `background-repeat` , `background-attachment` и `background-position`

### Фоновый цвет

Свойство `background-color` указывает цвет фона элемента.

```css
   background-color : #F00; 
```

### Изображение на заднем плане

Свойство `background-image` указывает изображение, которое будет использоваться в качестве фона элемента. По умолчанию изображение повторяется, чтобы покрыть всю поверхность элемента.

```css
   background-image: url("GitHub-Mark.png"); 
```

### Фоновое изображение - повторение

По умолчанию свойство `background-image` повторяется на оси X и Y. Если вы хотите установить ось, например, ось X, используйте тип свойства `background-repeat` :

```css
   background-image: url("GitHub-Mark.png"); 
   background-repeat: repeat-x; 
```

Но иногда вы не хотите, чтобы ваш фон был на поверхности, вы должны указать его, набрав:

```css
   background-image: url("GitHub-Mark.png"); 
   background-repeat: no-repeat; 
```

### Фоновое изображение - позиция

Вы можете указать положение фона, набрав:

```css
   background-image: url("GitHub-Mark.png"); 
   background-repeat: no-repeat; 
   background-position : left bottom; 
```

Он установит фон в левом нижнем углу элемента.

### Фоновое изображение - фиксированная позиция

Если вы хотите иметь фоновое изображение, которое не будет прокручиваться вместе с остальной частью страницы, вы можете использовать свойство `background-attachement` :

```css
   background-image: url("GitHub-Mark.png"); 
   background-repeat: no-repeat; 
   background-position: left bottom; 
   background-attachment: fixed; 
```

### Сокращенное имущество

Вы можете передать все свойства в одном супер-свойство `background` :

```css
   background: #F00 url("GitHub-Mark.png") no-repeat fixed left bottom; 
```

Когда вы используете стенографическую собственность, вы должны соблюдать этот порядок:

1.  Фоновый цвет
2.  Изображение на заднем плане
3.  Повторение фона
4.  Фоновая привязка
5.  Фоновая позиция

Не имеет значения, отсутствует ли одно свойство, если вы соблюдаете заказ:

```css
   background: url("GitHub-Mark.png") no-repeat left bottom; 
```

Это будет работать, даже если цвет и приложение отсутствуют.

#### Дополнительная информация:

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background)