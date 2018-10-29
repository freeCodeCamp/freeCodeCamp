---
title: CSS Flexbox Tips and Tricks
localeTitle: Советы и хитрости CSS Flexbox
---
# CSS Flexbox

[CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) позволяет нам легко форматировать наш HTML-код, как вы никогда не знали, что это возможно. С flexbox можно легко выровнять по вертикали и по горизонтали. Как звук этого? Да, я тоже.

Это также фантастично для общей компоновки вашего веб-сайта или приложения, его легко узнать, хорошо поддерживается (во всех современных браузерах) и отлично подходит для работы, не говоря уже о том, что не требуется много времени, чтобы справиться с ним вообще !

## Flexbox

Ниже приведен список свойств flexbox, которые можно использовать для размещения элементов в css:

### CSS, который может быть применен к контейнеру
```
display: flexbox | inline-flex; 
 flex-direction: row | row-reverse | column | column-reverse; 
 flex-wrap: nowrap | wrap | wrap-reverse; 
 flex-flow: <'flex-direction'> || <'flex-wrap'> 
 justify-content: flex-start | flex-end | center | space-between | space-around; 
 align-items: flex-start | flex-end | center | baseline | stretch; 
 align-content: flex-start | flex-end | center | space-between | space-around | stretch; 
```

### CSS, который может быть применен к элементам / элементам в контейнере
```
order: <integer>; 
 flex-grow: <number>; /* default 0 */ 
 flex-shrink: <number>; /* default 1 */ 
 flex-basis: <length> | auto; /* default auto */ 
 flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ] 
 align-self: auto | flex-start | flex-end | center | baseline | stretch; 
```

Итак, теперь у вас есть свой инструментарий, но вы спрашиваете: «Что мне делать с моими инструментами, как я могу их использовать?», Позвольте мне показать вам.

### Дисплей Flex

`display: flex;` это просто сказать вашему браузеру, эй, я бы хотел использовать flexbox с этим контейнером, пожалуйста. Это будет инициализировать это поле как контейнер гибких дисков и применить некоторые свойства flex по умолчанию.

Вот что выглядит контейнер без `display: flex;`

![CSS-площадка без гибких свойств](//discourse-user-assets.s3.amazonaws.com/original/2X/8/8f20f30d24cba9a7f56bf950a3f23d37d356ca51.png)

После добавления `display: flex;` мы получаем ниже, применяются свойства flex по умолчанию, заставляющие его показывать как таковые

![Отображение стиля игровой площадки CSS flex по умолчанию](//discourse-user-assets.s3.amazonaws.com/original/2X/6/66404664f9177ae748be00f769faf67d5956034d.png)

### Направление Flex

`flex-direction:` позволяет нам контролировать, как отображаются элементы в контейнере, вы хотите, чтобы они оставались вправо, справа налево, сверху вниз или снизу вверх? вы можете сделать все это легко, установив направление гибкости контейнера.

Flexbox применяет строку по умолчанию для направления. Вот как они выглядят так:

`flex-direction: row;`

![flex-direction: row; пример](//discourse-user-assets.s3.amazonaws.com/original/2X/9/951cc993820547efa28e70dca905f5531a4488d5.png)

`flex-direction: row-reverse;`

![гибкое направление: пример с обратным кругом](//discourse-user-assets.s3.amazonaws.com/original/2X/c/cf738aaf83f29eccdb461e91b775b10e41b92389.png)

`flex-direction: column;`

![flex-direction: пример столбца](//discourse-user-assets.s3.amazonaws.com/original/2X/7/7ef77565bc07ee86fd3033a531dd76b49709cf7e.png)

`flex-direction: column-reverse;`

![flex-direction: столбец-обратный пример](//discourse-user-assets.s3.amazonaws.com/original/2X/e/ec9a1ec064bf0027fa61016ca620df14d9bd47a9.png)

### Flex Wrap

Flexbox по умолчанию будет пытаться поместить все элементы в одну строку, но вы можете изменить это с помощью свойства flex-wrap, это позволяет вам установить, будут ли элементы перетекать или нет, есть три свойства для `flex-wrap:`

`flex-wrap: nowrap` это значение по умолчанию и будет выглядеть как угодно в одной строке слева направо.

`flex-wrap: wrap` это позволит элементам продолжать создавать несколько строк и слева направо.

`flex-wrap: wrap-reverse` позволяет элементам находиться на нескольких строках, но на этот раз отображается справа налево.

### Flex Flow

Flex-поток сочетает использование `flex-wrap` и `flex-direction` в одном свойстве, он используется, сначала устанавливая направление, а затем обертывание.

`flex-flow: column wrap;` является примером, как использовать это.

### Обосновать контент

`justify-content` - свойство aa для выравнивания элементов в контейнере вдоль основной оси (это изменяется в зависимости от того, как отображается содержимое). Для этого есть несколько вариантов, и это позволяет нам заполнять любое пустое пространство в строках, но определять, как мы хотим «оправдать» его.

Вот наши варианты, когда мы оправдываем наш контент `flex-start | flex-end | center | space-between | space-around;` ,

### Выровнять элементы

Выравнивание элементов позволяет выравнивать элементы вдоль поперечной оси. Это позволяет размещать контент по-разному, используя выравнивание содержимого и выравнивание элементов вместе.

`align-items: flex-start | flex-end | center | baseline | stretch;`

### Выровнять содержимое

Это для выравнивания элементов с несколькими строками, для выравнивания на поперечной оси и не будет влиять на контент, который является одной строкой.

`align-content: flex-start | flex-end | center | space-between | space-around | stretch;`

## Игры и приложения

[Flexbox Defense](http://www.flexboxdefense.com/) - это веб-игра, которая учит Flexbox интересным способом.

[Flexbox Froggy](http://flexboxfroggy.com/) также является веб-игрой, которая учит Flexbox интересным способом.

[Flexbox в 5](http://flexboxin5.com/) - это веб-приложение, которое позволяет вам видеть, как Flexbox работает с несколькими простыми элементами управления.

[Flexyboxes](http://the-echoplex.net/flexyboxes/) - это приложение, которое позволяет вам также просматривать образцы кода и изменять параметры, чтобы увидеть, как работает flexbox.

[Flexbox Patters](http://www.flexboxpatterns.com) - это веб-сайт, на котором показаны грузы примеров flexbox

## Документация

[Сеть разработчиков Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)

[Трюки CSS](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Видео

[Flexbox Essentials](https://www.youtube.com/watch?v=G7EIAgfkhmg)

[Практические примеры Flexbox](https://www.youtube.com/watch?v=H1lREysgdgc)

[Что такое Flexbox ?!](https://www.youtube.com/watch?v=Vj7NZ6FiQvo&list=PLu8EoSxDXHP7xj_y6NIAhy0wuCd4uVdid)