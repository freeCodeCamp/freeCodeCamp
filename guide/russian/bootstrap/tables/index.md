---
title: Tables
localeTitle: таблицы
---
## \## Таблицы

#### Основная таблица

Чтобы получить базовый пример стилизации, добавьте базовый класс `.table` в любой элемент `<table>` .

**пример**
```
<table class="table"> 
  ... 
 </table> 
```

![Основная таблица](https://github.com/TroyB12/Pictures/blob/master/Basic%20Table.PNG)

* * *

#### Полосатая полоса

Для достижения эффекта полосатого ряда (зебра-полосатый) в таблицах используйте `.table-striped` в дополнение к `.table` для любого элемента `<table>` . Полосатые таблицы стилизованы с помощью селектора CSS `:nth-child` , который недоступен в Internet Explorer 8.
```
<table class="table table-striped"> 
  ... 
 </table> 
```

![Полосатый стол](https://github.com/TroyB12/Pictures/blob/master/Table%20Striped.PNG)

* * *

#### Таблица Bordered

Для достижения `.table-bordered` таблицы используйте `.table-bordered` в дополнение к `.table` для любого элемента `<table>` .
```
<table class="table table-bordered"> 
  ... 
 </table> 
```

![Граничная таблица](https://github.com/TroyB12/Pictures/blob/master/Table%20Bordered.PNG)

* * *

#### Table Hover

Чтобы добиться эффекта наведения на таблицы, используйте `.table-bordered` в дополнение к `.table` для любого элемента `<table>` .
```
<table class="table table-hover"> 
  ... 
 </table> 
```

![Стол для наведения](https://github.com/TroyB12/Pictures/blob/master/Table%20Hover.PNG)

* * *

#### Таблица Сжатая

Для того, чтобы использовать таблицу с уплотненным столом, можно использовать для `.table-condensed` в дополнение к `.table` на любом элементе `<table>` .
```
<table class="table table-condensed"> 
  ... 
 </table> 
```

![Сжатый стол](https://github.com/TroyB12/Pictures/blob/master/Table%20Condensed.PNG)

* * *

#### Таблица

Чтобы получить отзывчивую таблицу, `.table` любую таблицу `.table-responsive` элемент с `.table` таблицы.

...

![Отзывчивая таблица](https://github.com/TroyB12/Pictures/blob/master/Table%20Responsive.PNG)

* * *

Разработчики могут изменять стиль каждой отдельной строки и / или ячейки с помощью **контекстуальных классов** .

*   `.active` - Применяет цвет наведения к определенной строке или ячейке
    
*   `.success` - указывает на успешное или позитивное действие
    
*   `.info` - указывает нейтральное информационное изменение или действие
    
*   `.warning` - указывает предупреждение, которое может потребовать внимания.
    
*   `.danger` - указывает на опасное или потенциально негативное действие
    
    ... ... ... ... ...
    
    ... ... ... ... ...
    

![Таблица контекстного класса](https://github.com/TroyB12/Pictures/blob/master/Table%20Contextual%20Classes.PNG)

* * *