---
title: Tables
localeTitle: 表格
---
### 定义HTML表

HTML中的表格由<table>标签定义。

表格中的行由<tr>定义。每一行中可以为表头或者数据。


*  表头由<tr>标签定义。表头默认为加粗居中。

*   表格数据/单元格用<td>标签定义


更复杂的HTML表格还可能包含`<caption>` ， `<col>` ， `<colgroup>` ， `<thead>` ， `<tfoot>`和`<tbody>`元素。

### 简单的表格示例

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

### 表示具有更多语义信息的示例

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
结果
Item


Amount

Apple

10

Peach

15

Watermelon

3

#### 更多信息：

[关于HTML的MDN文章](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) [标签](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
