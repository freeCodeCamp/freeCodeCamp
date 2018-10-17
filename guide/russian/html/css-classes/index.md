---
title: CSS Classes
localeTitle: Классы CSS
---
## Классы CSS

Классы - это эффективный способ группировки элементов HTML, чтобы они могли использовать одни и те же стили. Классы CSS (каскадные таблицы стилей) могут использоваться для упорядочивания и оформления элементов веб-страницы.

При написании HTML вы можете добавлять классы к элементу. Просто добавьте атрибут `class="myclass"` к элементу. Несколько элементов могут иметь один и тот же класс, а один элемент может иметь несколько классов. Вы можете назначить несколько классов элементу, добавив все необходимые имена классов, разделенные пробелом, к атрибуту `class` в HTML.

```html

<h1 class="super-man other-class third-class">"Here I come to save the day!"</h1> 
 <p>is a popular catchphrase that <span class="super-man">Super Man</span> often said.</p> 
```

Затем вы можете стилизовать эти элементы с помощью CSS. Классы ссылаются на период (.) Перед ними в CSS, но вы не должны помещать периоды в свой HTML.

```css
.super-man { 
  color: red; 
  background-color: blue; 
 } 
```

Этот код дает синий фон и красный цвет текста всем элементам, которые имеют класс `super-man` . [Просмотрите этот пример в CodePen](https://codepen.io/Tlandis/pen/RLvomV) .

Вы также можете объявить более одного класса для своего элемента, например:

```html

<div class="ironMan alfred"> 
 We're going to save you. 
 </div> 
```

Затем в вашем файле css:

```css
.ironMan{ 
 color:red; 
 } 
 
 .alfred{ 
 background-color: black; 
 } 
```

**Примечание:** имена классов традиционно являются строчными, каждое слово в имени многословного класса разделяется дефисом (например, «супер-человек»).

Вы также можете комбинировать классы в одной строке:

```css
.superMan .spiderMan { 
 color: red; 
 background-color: blue; 
 } 
```

Вы можете увидеть результат приведенного выше кода [здесь](https://codepen.io/Tlandis/pen/RLvomV) . Узнайте , как объединить классы CSS , используя селекторы [здесь](https://www.w3schools.com/css/css_combinators.asp) .

#### Дополнительная информация:

*   [CSS Class Selector, w3 школы](https://www.w3schools.com/cssref/sel_class.asp)
*   [Классы HTML, w3 Школы](https://www.w3schools.com/html/html_classes.asp)
*   [CSS-уловок](https://css-tricks.com/how-css-selectors-work/)
*   [Как код в HTML5 и CSS3](http://howtocodeinhtml.com/chapter7.html)
*   [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)