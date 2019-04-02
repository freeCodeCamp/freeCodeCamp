---
title: Hover
localeTitle: зависать
---
## зависать

`selector:hover` псевдо-класс `selector:hover` запускается, когда вы взаимодействуете с элементом (селектором) с указательным устройством, как правило, указателем мыши. Стили элемента, зависающего над, будут переопределены по стилю, определенному в `selector:hover` pseudo-class. Для правильного стиля ссылок / элементов правила должны быть определены в следующем порядке: : link -: visited -: hover -: active

**Синтаксис:**

```css
 selector:hover { 
    css declarations; 
 } 
```

## Другие примеры

Ниже приведены некоторые более сложные примеры того, что вы можете сделать с псевдо-классом `:hover` . Имейте в виду, что `.second` div **должен** появиться после `.first` div во всех этих примерах.

1.  Когда вы наведите указатель мыши на элемент, измените соседний брат.

```html

<style> 
  .first:hover + .second { 
    background-color: blue; 
  } 
 </style> 
 
 <div class="first">First</div> 
 <div class="second">Second</div> 
```

В приведенном выше коде будет изменен цвет фона `.second` до синего, когда вы наведите указатель мыши на `.first` .

2.  Когда вы наведите указатель мыши на элемент, измените общий брат.

```html

<style> 
  .first:hover ~ .second { 
    background-color: blue; 
  } 
 </style> 
 
 <div class="first">First</div> 
 <div class="middle">Middle</div> 
 <div class="second">Second</div> 
```

Этот пример дает немного большую гибкость, поскольку два элемента больше не должны быть непосредственно смежными.

3.  Когда вы наводите на элемент изменение прямого потомка.

```html

<style> 
  .first:hover > .second { 
    background-color: blue; 
  } 
 </style> 
 
 <div class="first"> 
  First 
  <div class="second">Second</div> 
 </div> 
```

В приведенном выше коде будет изменен цвет фона `.second` до синего, когда вы наведите указатель мыши на `.first` .

4.  Когда вы наведете над элементом изменение общего потомка.

```html

<style> 
  .first:hover .second { 
    background-color: blue; 
  } 
 </style> 
 
 <div class="first"> 
  First 
  <div class="container"> 
    Container 
    <div class="second">Second</div> 
  </div> 
 </div> 
```

Как и в примере 2, это также дает большую гибкость, поскольку два элемента больше не должны быть непосредственно смежными. Вы заметите, что область, `.first` от зависания, больше в примерах 3 и 4. Это происходит из-за того, что вы все еще `.first` если курсор находится над одним из его дочерних элементов.

#### Дополнительная информация:

[Веб-документы MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Ahover) [w3schools](https://www.w3schools.com/cssref/sel_hover.asp)