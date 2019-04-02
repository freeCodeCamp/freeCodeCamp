---
title: Responsive Web Design
localeTitle: Отзывчивый веб-дизайн
---
## Отзывчивый веб-дизайн

Отзывчивый веб-дизайн - это концепция проектирования веб-страниц, которые адаптируются к разным размерам экрана. Обычно это связано с использованием разных макетов, размеров шрифтов и размещения навигационных меню.

Чтобы создать отзывчивую веб-страницу, CSS обычно используется для стилизации ваших HTML-элементов. Некоторые общие методы в CSS, используемые для создания адаптивных веб-дизайнов:

1.  Запись [медиа-запросов](https://guide.freecodecamp.org/css/media-queries)
2.  Использование ранее существующих [фреймворков CSS](https://guide.freecodecamp.org/css/css-frameworks)
3.  Использование [модели Flexbox](https://guide.freecodecamp.org/css/layout/flexbox)
4.  Использование [CSS-сетки](https://guide.freecodecamp.org/css/layout/grid-layout)

### 1\. Медиа-запросы

Запросы в СМИ говорят веб-браузеру игнорировать или заменять свойства веб-страницы на основе определенных атрибутов, таких как ширина экрана или печать.
```
@media (query) { 
  /* The browser will use the CSS rules within the curly braces when the query is true */ 
 } 
```

Следующий пример устанавливает `padding-left` и `padding-right` внутри класса `more-padding` когда ширина экрана меньше или равна 768px.
```
@media screen and (max-width: 768px) { 
    .more-padding { 
        padding-left: 10px; 
        padding-right: 10px; 
    } 
 } 
```

### 2\. CSS-рамки

В рамках CSS-фреймворков, таких как [Bootstrap](https://www.getbootstrap.com/) , [Material Design Lite](https://getmdl.io/) и [Foundation,](https://foundation.zurb.com/) есть встроенные классы CSS, которые упрощают адаптивное программирование. Эти классы работают как стандартные классы HTML.

В этом примере `col-md-9` и `col-sm-6` устанавливают ширину `<div>` зависимости от того, является ли экран маленьким или средним.

```html

<div class="col-12 col-md-6"></div> 
```

Рамка Bootstrap делит строку на двенадцать столбцов. В приведенном выше примере `<div>` будет распространяться через девять или шесть из них. Система сетки, изображенная на рисунке ниже, является основополагающей для того, как Bootstrap упрощает гибкий дизайн.

![Grid Example](https://www.javatpoint.com/bootstrappages/images/bootstrapgrid.jpg "Пример базовой сетки")

### Дополнительная информация:

1.  [CSS Flexbox Полный учебник за 8 минут](https://medium.freecodecamp.org/css-flexbox-interactive-tutorial-in-8-minutes-including-cheat-sheet-6214e00de3d2)
2.  [Раздел Freecodecamp CSS](https://guide.freecodecamp.org/css) .
3.  [Учебник CSS Flexbox от CodingTutorials360](https://www.youtube.com/watch?v=zBjUEDzK-ow)