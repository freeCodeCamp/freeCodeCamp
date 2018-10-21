---
title: HTML and CSS Cheat Sheet
localeTitle: HTML и CSS Cheat Sheet
---
Эта страница, которая (надеюсь) со временем будет расти, охватывает основные и простые решения HTML и CSS.

Если вы знаете другой способ, добавьте альтернативные решения.

## Создание горизонтального правила `<hr>` less

```css
    hr { 
      width: 75%; 
      margin-left: auto; 
      margin-right: auto; 
    } 
```

## Предоставление `<div>` фона без прокрутки

```css
    #divName { 
      padding-top: 50px; 
      height: 500px; 
      color: #fff; 
      background-image: url("your_url.jpg"); 
      background-repeat: no-repeat; 
      background-attachment: fixed; 
      background-size: 100%; 
    } 
```

Попробуйте разные значения, чтобы увидеть, как он влияет на div и более в html

```html

<div id="divName" class="container-fluid"> 
```

## Вертикальное выравнивание (для одной строки текста)

Это может быть полезно в навигационном меню CSS. Ключ должен сделать высоту меню и высоту строки текста одинаковой. `css .nav li{ line-height:50px; height:50px; }` Более аккуратные трюки [можно найти здесь](https://www.webdesignerdepot.com/2016/10/20-essential-css-tricks-every-designer-should-know/)

## Центрировать горизонтальный список

[http://csswizardry.com/2011/01/create-a-centred-horizontal-navigation/](http://csswizardry.com/2011/01/create-a-centred-horizontal-navigation/)

## Разделы и контуры HTML-документа

[https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections _и_ Контуры документа _HTML5_](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document)