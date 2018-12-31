---
title: Grid System
localeTitle: Система сеток
---
## Сиситема сеток


В кратце: система сеток Bootstrap помогает создавать гибкие макеты. Она состоит из системы строк и столбцов, которая помогает вам структурировать ваш контент.


Строки представляют собой горизонтальные группы столбцов с максимум 12 столбцами на строку. Внутри каждой строки содержимое помещается внутри столбцов и может занимать от 1 до 12 столбцов.

Bootstrap имеет пять различных типов ячеек сетки, а именно Extra small, Small, Medium, Large и Extra large, для каждой из этих уровней сетки существует точка останова.

Bootstrap использует пиксели для определения контрольных точек уровня сетки, различные ширины видового экрана, которые действуют как точки останова для ячеек сетки:

#### Как это устроено

###### Контейнер

Контейнер - это самый внешний элемент, который будет _содержать_ вашу сетку, использовать `container` для `container` с фиксированной шириной в середине экрана (дополнительный край на больших экранах) или `container-fluid` для полной ширины.
```
<div class="container"></div> 
```

###### Ряд

Используйте `row` для группировки столбцов, это будет держать все в строгом порядке и помогать вам структурировать вашу сетку.
```
<div class="row"></div> 
```

###### Колонки


Классы столбцов указывают количество столбцов, которые вы хотели бы использовать, из возможных 12 в строке. Например, `col-sm-6` будет означать, что ваш столбец будет использовать половину ширины `row` на маленьком экране, а `col-lg-4` будет использовать треть на большом экране.


Вот как вы бы определили префикс класса, чтобы использовать ширину одного столбца для различных размеров экрана:

*   **Extra Small** `col-1`
*   **Маленький** `col-sm-1`
*   **Средний** `col-md-1`
*   **Большой** `col-lg-1`
*   **Extra Large** `col-xl-1`
```
<div class="col-sm-1"></div> 
```

#### Пример

Полноразмерная сетка с четырьмя столбцами, каждая из которых занимает полную строку на xs-экранах, половину строки на экранах sm и md и четверть ширины строки на больших и очень больших экранах.
```
<div class="container-fluid"> 
  <div class="row"> 
    <div class="col-12 col-sm-6 col-lg-4">First Column</div> 
    <div class="col-12 col-sm-6 col-lg-4">Second Column</div> 
    <div class="col-12 col-sm-6 col-lg-4">Third Column</div> 
    <div class="col-12 col-sm-6 col-lg-4">Forth Column</div> 
  </div> 
 </div> 
```

_Обратите внимание, что `col-md` и `col-xl` не определены, когда размер не определен, он будет по умолчанию до следующего меньшего размера, который был указан._

Bootstrap предоставляет готовую 12-ти колонную сетку для использования в макетах. Рассмотрим следующий код.

```html

   <div class="container"> 
    <div class="row"> 
        <div class="col-md-6">Content</div> 
        <div class="col-md-6">Content</div> 
    <div> 
   </div> 
```

где:
```
- col = column 
 - md = screen size 
 - 6 = column width 
```

Как сетка с 12 столбцами, все ширины столбцов сетки, заданные пользователем, должны содержать до 12 столбцов.

Значения размера экрана могут быть назначены следующим образом:

*   xs - <768px Телефоны
    
*   см - <992px Таблетки
    
*   md - <1200px Ноутбуки
    
*   lg -> 1200px Настольные компьютеры
    

    Bootstrap использует понятие "mobile first" и является отзывчивым(адаптивным).

    
    Понятие "mobile first" означает, что макет сетки будет автоматически реагировать на меньшие экраны. Затем HTML определяет макет сетки для больших экранов.
    

Следующий код и изображение показывают, что возможно, при использовании разных ширин столбцов.

```html

    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-6">Content</div> 
            <div class="example col-md-6">Content</div> 
        <div> 
    </div> 
 
    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-4">Content</div> 
            <div class="example col-md-4">Content</div> 
            <div class="example col-md-4">Content</div> 
        <div> 
    </div> 
 
    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-3">Content</div> 
            <div class="example col-md-3">Content</div> 
            <div class="example col-md-3">Content</div> 
            <div class="example col-md-3">Content</div> 
        <div> 
    </div> 
 
    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
            <div class="example col-md-2">Content</div> 
        <div> 
    </div> 
 
    <div class="container"> 
        <div class="row"> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
            <div class="example col-md-1">Content</div> 
        </div> 
    </div> 
```

![12-цв-сетка](https://github.com/bflatt72/bflatt72.github.io/blob/master/img/bootstrapgrid1.png)

#### Дополнительная информация:

[Bootstrap Docs - Сетевая система](https://getbootstrap.com/docs/4.0/layout/grid/)

_Это руководство основано на Bootstrap v4 (он будет работать с v3, за исключением того, что дополнительные маленькие экраны определяются как `xs` и нет размера `xl` )_

*   Экстра большой: **ширина окна просмотра> = 1200 пикселей**
*   Large: **ширина окна просмотра> = 992px**
*   Средний: **ширина окна просмотра> = 768 пикселей**
*   Малый: **ширина окна просмотра> = 576 пикселей**
*   Экстра маленький: **ширина окна просмотра ниже 576 пикселей**

#### Дополнительная информация:

https://getbootstrap.com/docs/4.0/layout/grid/
