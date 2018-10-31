---
title: Tables
localeTitle: таблицы
---
### Определение таблицы HTML

Таблица HTML определяется с помощью тег.

Каждая строка таблицы определяется с помощью

тег. Внутри строки могут быть заголовки таблиц или данные таблицы.

*   Заголовок таблицы определяется с помощью

тег. По умолчанию заголовки таблицы выделены жирным шрифтом и центрированы.*   Табличные данные / ячейка определяются с помощью

тег.

Более сложная таблица HTML также может включать в себя элементы `<caption>` , `<col>` , `<colgroup>` , `<thead>` , `<tfoot>` и `<tbody>` .

### Пример простой таблицы

```html

<table style="width:100%"> 
  <tr> 
    <th>Firstname</th> 
    <th>Lastname</th> 
    <th>Age</th> 
  </tr> 
  <tr> 
    <td>Jill</td> 
    <td>Smith</td> 
    <td>50</td> 
  </tr> 
  <tr> 
    <td>Eve</td> 
    <td>Jackson</td> 
    <td>94</td> 
  </tr> 
 </table> 
```

[DEMO](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table)

### Пример таблицы с большей семантической информацией

```html

<!DOCTYPE html> 
    <html> 
    <body> 
       <table> 
      <thead> 
        <tr> 
          <th>Item</th> 
          <th>Amount</th> 
        </tr> 
      </thead> 
      <tfoot> 
        <tr> 
          <td>Apple</td> 
          <td>10</td> 
        </tr> 
      </tfoot> 
      <tbody> 
        <tr> 
          <td>Peach</td> 
          <td>15</td> 
        </tr> 
        <tr> 
          <td>Watermelon</td> 
          <td>3</td> 
        </tr> 
      </tbody> 
    </table> 
    </body> 
   </html> 
```

Результат:

Пункт

Количество

яблоко

10

персик

15

Арбуз

3

#### Дополнительная информация:

[Статья MDN по HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) [тег](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)