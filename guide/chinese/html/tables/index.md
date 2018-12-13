---
title: Tables
localeTitle: 表
---
### 定义HTML表

用表定义HTML表标签。

每个表行都是用

标签。在一行内可能有表头或表数据。

*   使用表定义表头

标签。默认情况下，表格标题为粗体且居中。*   表格数据/单元格用

标签。

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

结果：

项目  量

桃子  15

西瓜  3

苹果  10



#### 更多信息：

[关于HTML的MDN文章](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) [标签](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
