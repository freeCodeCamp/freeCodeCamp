---
title: Tables
localeTitle: 表格
---
### 定义HTML表格

用`<table>`定义HTML表格。

表格由行`<tr>`组成，行由单元格组成。单元格可以分为标题单元格`<th>`和数据单元格`<td>`。默认情况下，标题单元格为粗体且居中。

更复杂的HTML表格还可能包含`<caption>` ， `<col>` ， `<colgroup>` ， `<thead>` ， `<tfoot>`和`<tbody>`元素。

#### 给表格添加边框

表格的默认格式是没有边框的。

添加边框需要用到CSS的`border`属性：

```css
table, th, td {
    border: 1px solid black;
}
```

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
Item Amount

Apple 10

| 项目 | 数量 |
|----|----|
| 苹果 | 10 |
| 桃子 | 15 |
| 西瓜 | 3 |

#### 更多信息：

[关于HTML的MDN文章](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) [标签](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
