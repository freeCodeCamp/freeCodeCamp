---
title: Li Tag
localeTitle: Li Tag
---
## Li Tag

Тег `<li>` определяет элемент списка в списке. Тег `<li>` может использоваться с неупорядоченными списками ( `<ul>` ), упорядоченными списками ( `<ol>` ) и меню ( `<menu>` ).

Чтобы определить элемент списка, оберните нужные элементы в `<li>` . Элементы `<li>` должны содержаться внутри родительского элемента, который является списком.

### пример

```html

<body> 
  <ul> 
    <li> 
      <p>I'm a list item</p> 
    </li> 
    <li> 
      <p>I'm a list item too</p> 
    </li> 
    <li> 
      <p>Me three/p> 
    </li> 
  </ul> 
 </body> 
```

В упорядоченном списке `<li>` отображается как элемент с маркером.

*   Первый пункт
*   Второй пункт
*   Третий пункт

В неупорядоченном списке `<li>` отображается как нумерованный элемент.

1.  Первый пункт
2.  Второй пункт
3.  Третий пункт

Этот цифровой счетчик может быть настроен с использованием свойства CSS _стиля в стиле списка_ .

Примеры:

```html

<!-- In a simple unordered list --> 
 <ul> 
  <li>First item</li> 
  <li>Second item</li> 
  <li>Third item</li> 
 </ul> 
 
 <!-- In a simple ordered list --> 
 <ol> 
  <li>First item</li> 
  <li>Second item</li> 
  <li>Third item</li> 
 </ol> 
 
 <!-- In a menu list --> 
 <menu> 
  <li>Menu item one</li> 
  <li>Menu item two</li> 
  <li>Menu item three</li> 
 </menu> 
```

### Атрибуты

Элемент `<li>` имеет следующие элементы:

#### Тип

Атрибут `type` определяет тип нумерации, который будет использоваться в списке. Для определения стиля нумерации используются следующие значения:

*   `1` : номера
*   `a` : строчные буквы
*   `A` : прописные буквы
*   `i` : строчные цифры
*   `I` : верхние цифры

#### пример

```html

<body> 
  <ol type="I"> 
    <li>list item</li> 
    <li>list item</li> 
    <li>list item</li> 
  </ol> 
 </body> 
```

Вышеуказанный HTMl будет выводить:

1.  Элемент списка
2.  Элемент списка
3.  Элемент списка

#### Стоимость

Атрибут `value` указывает числовой порядок текущего `<li>` . Этот атрибут принимает только числовое значение и может использоваться только с упорядоченным списком. Любые элементы списка, которые будут следовать, будут упорядочены численно на основе числового ввода атрибута `value` .

#### пример

```html

<body> 
  <ol> 
    <li value="4">list item</li> 
    <li>list item</li> 
    <li>list item</li> 
  </ol> 
 </body> 
```

Вышеупомянутый HTML выводит:

4.  Элемент списка
5.  Элемент списка
6.  Элемент списка

### Вложение другого списка в качестве элемента

Помимо создания отдельных элементов, вы также можете использовать теги `<li>` для создания вложенного списка, упорядоченного или неупорядоченного. Для этого вы вставляете `<ol>` или `<ul>` _в_ `<li>` .

Вот неупорядоченный список с вложенным упорядоченным списком.

*   Первый пункт
*   Второй пункт

1.  Первый подпункт
2.  Второй подпункт

*   Третий пункт

И вот упорядоченный список с вложенным неупорядоченным списком.

1.  Первый пункт
2.  Второй пункт

*   Первый подпункт
*   Второй подпункт

1.  Третий пункт

```html

<!-- An unordered list with a nested, ordered list. --> 
 <ul> 
  <li>First item</li> 
  <li>Second item  <!-- No closing </li> tag before the nested list --> 
    <ol> 
      <li>First sub-item</li> 
      <li>Second sub-item</li> 
    </ol> 
  </li>            <!-- The closing </li> tag comes after the nested list --> 
  <li>Third item</li> 
 </ul> 
 
 <!-- An ordered list with a nested, unordered list. --> 
 <ol> 
  <li>First item</li> 
  <li>Second item  <!-- No closing </li> tag before the nested list --> 
    <ul> 
      <li>First sub-item</li> 
      <li>Second sub-item</li> 
    </ul> 
  </li>            <!-- The closing </li> tag comes after the nested list --> 
  <li>Third item</li> 
 </ol> 
```

#### Дополнительная информация:

*   [Элемент HTML <li>: MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
*   [HTML <li> тег: w3schools](https://www.w3schools.com/cssref/pr_list-style-type.asp)
*   [CSS list-style Свойство: CSS-Tricks](https://css-tricks.com/almanac/properties/l/list-style/)