---
title: Z Index
localeTitle: Индекс Z
---
## Индекс Z

Z Index ( `z-index` ) - это свойство CSS, которое определяет порядок перекрывающихся элементов HTML. Элементы с более высоким индексом будут помещены поверх элементов с более низким индексом.

**Примечание** : индекс Z работает только с расположенными элементами ( `position:absolute` , `position:relative` или `position:fixed` ).

#### Возможные значения

```css
/* Default value if not specified */ 
 z-index: auto; 
 
 /* Integer values */ 
 z-index: 1; 
 z-index: 100; 
 z-index: 9999; 
 z-index: -1; 
 
 /* Global values */ 
 z-index: inherit; 
 z-index: initial; 
 z-index: unset; 
```

#### Пример использования

В этом примере вы можете видеть три окна, отображаемые друг на друга в разных порядках, используя `z-index` .

_HTML_

```html

<div class="container"> 
  <div class="box" id="blue"></div> 
  <div class="box" id="red"></div> 
  <div class="box" id="green"></div> 
 </div> 
```

_CSS_

```css
#blue { 
  background-color: blue; 
 } 
 
 #red { 
  background-color: red; 
 } 
 
 #green { 
  background-color: green; 
 } 
```

Поскольку `z-index` не определен, он будет иметь значение по умолчанию для `auto` . Это результат:

![Изображение трех ящиков](https://image.prntscr.com/image/Yc9oGkdKTnm_YIHzaKQmbQ.png)

Попробуйте изменить порядок на зеленый, синий, красный в CSS с помощью `z-index` .

```css
#blue { 
  background-color: blue; 
  z-index: 2; 
 } 
 
 #red { 
  background-color: red; 
  z-index: 1; 
 } 
 
 #green { 
  background-color: green; 
  z-index: 3; 
 } 
```

Ваш результат будет:

![Изображение трех ящиков](https://image.prntscr.com/image/Am9XxPO4Q2mq-PcokJ47Wg.png)

Используйте Z-индекс, если вам нужно поместить элемент фона под контейнером. Вы можете легко разместить фон под каждым элементом, указав на него отрицательный индекс Z, как показано ниже:

```css
#background { 
  z-index: -1; 
 } 
```

#### Дополнительная информация:

[https://css-tricks.com/almanac/properties/z/z-index/](https://css-tricks.com/almanac/properties/z/z-index/)

[https://developer.mozilla.org/en-US/docs/Web/CSS/CSS _Позиционирование / понимание_ z\_index](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index)

[https://philipwalton.com/articles/what-no-one-told-you-about-z-index/](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/)