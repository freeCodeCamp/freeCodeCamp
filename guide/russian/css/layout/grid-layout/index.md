---
title: Grid Layout
localeTitle: Макет сетки
---
## Макет сетки

CSS Grid Layout, просто называемый Grid, представляет собой схему компоновки, которая является самой новой и самой мощной в CSS. Он [поддерживается всеми основными браузерами](https://caniuse.com/#feat=css-grid) и позволяет размещать элементы на странице и перемещать их.

Он может автоматически назначать элементы для _областей_ , их размер и изменять их размер, заботиться о создании столбцов и строк на основе шаблона, который вы определяете, и выполнять все вычисления с использованием вновь введенной единицы `fr` .

### Почему сетка?

*   Вы можете легко иметь 12-колонную сетку с одной строкой CSS. `grid-template-columns: repeat(12, 1fr)`
*   Сетка позволяет перемещать вещи в любом направлении. В отличие от Flex, где вы можете перемещать объекты горизонтально ( `flex-direction: row` ) или вертикально ( `flex-direction: column` ) - не одновременно одновременно, сетка позволяет перемещать любой _элемент сетки_ в любую предопределенную _область сетки_ на странице. Перемещаемые предметы не должны быть смежными.
*   С помощью CSS Grid вы можете **изменить порядок элементов HTML, используя только CSS** . Переместите что-то сверху вниз, переместите элементы, которые были в нижнем колонтитуле, на боковую панель и т. Д. Вместо того, чтобы перемещать `<div>` с `<footer>` на `<aside>` в HTML, вы можете просто изменить его размещение с `grid-area` в области CSS stylesheet.

### Сетка против Flex

*   Flex является одномерным - горизонтальным или вертикальным, а сетка двумерная, то есть вы можете перемещать элементы как в горизонтальной, так и в вертикальной плоскостях
*   В Grid мы применяем стили макета к родительскому контейнеру, а не к элементам. Flex, с другой стороны, нацеливается на элемент flex для установки таких свойств, как `flex-basis` , `flex-grow` и `flex-shrink`
*   Grid и Flex не являются взаимоисключающими. Вы можете использовать оба проекта в одном проекте.

### Проверка совместимости браузера с `@supports`

В идеале, когда вы строите сайт, вы создаете его с помощью Grid и используете Flex как резерв. Вы можете узнать, поддерживает ли ваш браузер сетку с `@support` CSS `@support` (например, запрос функции). Вот пример:

```css
.container { 
  display: grid; /* display grid by default */ 
 } 
 
 @supports not (display: grid) { /* if grid is not supported by the browser */ 
  .container { 
    display: flex; /* display flex instead of grid */ 
  } 
 } 
```

### Начиная

Чтобы сделать любой элемент сеткой, вам нужно назначить его свойство `display` `grid` , например:

```css
.conatiner { 
  display: grid; 
 } 
```

Вот и все. Вы просто сделали ваш `.container` сеткой. Каждый элемент внутри `.container` автоматически становится элементом сетки.

### Определение шаблонов

Строки и столбцы

```css
grid-template-columns: 1fr 1fr 1fr 1fr; 
 grid-template-rows: auto 300px; 
```

районы

```css
grid-template-areas: 
  "aaaa" 
  "bcde" 
  "bcde" 
  "ffff"; 
```

или

```css
grid-template-areas: 
  "header header header header" 
  "nav main main sidebar"; 
```

### Сетки

Вот пример кода для определения и назначения областей сетки

```css
.site { 
  display: grid; 
  grid-template-areas: /* applied to grid container */ 
    "head head" /* you're assigning cells to areas by giving the cells an area name */ 
    "nav  main" /* how many values kind of depends on how many cells you have in the grid */ 
    "nav  foot"; 
 } 
 
 .site > header { 
  grid-area: head; 
 } 
 
 .site > nav { 
  grid-area: nav; 
 } 
 
 .site > main { 
    grid-area: main; 
 } 
 
 .site > footer { 
    grid-area: foot; 
 } 
```

### Блок `fr`

Grid представляет новый блок `fr` , который обозначает _фракцию_ . Хорошая вещь об использовании блока `fr` заключается в том, что он заботится о вычислениях для вас. Использование `fr` позволяет избежать проблем с запасом и заполнением. С `%` и `em` и т. Д. Он становится математическим уравнением при расчете `grid-gap` . Если вы используете блок `fr` , он автоматически рассчитает размеры столбцов и желобов и соответствующим образом изменит размер столбцов, а также не будет недостатков кровотечения в конце.

### Примеры

#### Изменение порядка элементов на основе размера экрана

Предположим, вы хотите переместить нижний колонтитул снизу на маленькие экраны и вправо на больших экранах, и между ними есть куча других элементов HTML.

Простым решением является изменение `grid-template-areas` на основе размера экрана. Вы также можете **изменить количество столбцов и строк на основе размера экрана** . Это намного более простая и простая альтернатива сетке Bootstrap ( `col-xs-8 col-sm-6 col-md-4 col-lg-3` ).

```css
.site { 
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-areas: 
    "title title" 
    "main header" 
    "main sidebar" 
 } 
 
 @media screen and (min-width: 34em) { /* If the screen is big enough, use a different template for grid areas */ 
  .site { 
    grid-template-columns: 2fr 1fr 1fr; 
    grid-template-areas: 
      "title title title" 
      "main header header" 
      "main sidebar footer" 
  } 
 } 
```

См. Таблицу [CSS](https://codepen.io/aamnah/pen/RLVVoE/) Pen [Grid на примере - 2 (области сетки + сетчатый пробел)](https://codepen.io/aamnah/pen/RLVVoE/) Aamnah Akram ( [@aamnah](https://codepen.io/aamnah) ) на [CodePen](https://codepen.io) .

#### Дополнительная информация:

*   [CSS Grid Palyground от Mozilla](https://mozilladevelopers.github.io/playground/) Отличная отправная точка, если вы новичок в CSS-сетках. Он имеет визуальные эффекты, которые помогут вам легко понять терминологию
*   [YouTube: Мортен Рэнд-Хендриксен: CSS-сетка меняет все (о](https://www.youtube.com/watch?v=txZq7Laz7_4) макетах в [Интернете).](https://www.youtube.com/watch?v=txZq7Laz7_4) Эта презентация проведет вас менее чем за час, почему CSS-сетки классные и почему / как вы должны их использовать
*   [Видео: Изучите серию видеорекламы сетки Рэйчел Эндрю](https://gridbyexample.com/video/) Рэйчел Эндрю считается экспертом по этому вопросу. Названия видео могут выглядеть чужими и подавляющими, но содержание короткое и точное
*   [Книга: готовьтесь к компоновке сетки CSS от Rachel Andrew](https://abookapart.com/products/get-ready-for-css-grid-layout)