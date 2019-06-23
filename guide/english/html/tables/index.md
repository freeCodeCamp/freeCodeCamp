---
title: Tables
---
### Defining an HTML Table

An HTML table is defined with the `<table>` tag.

Each table row is defined with the `<tr>` tag. Inside a row there may be table headers or table data.

* A table header is defined with the `<th>` tag. By default, table headings are bold and centered.
* A table data/cell is defined with the `<td>` tag. The cells can contain all types of HTML elements such as text, images, lists, tables, etc.

A more complex HTML table may also include `<caption>`, `<col>`, `<colgroup>`, `<thead>`, `<tfoot>`, and `<tbody>` elements in it.

### Simple Table Example
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
<a href='https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table'> DEMO </a>

### Table Example With More Semantic Information	
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
          <tfoot>
	    <tr>
	      <td>Apple</td>
	      <td>10</td>
	    </tr>
	  </tfoot>      
	</table>
	</body>
   </html>
```
Result:
<table>
	  <thead>
	    <tr>
	      <th>Item</th>
	      <th>Amount</th>
	    </tr>
	  </thead>
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
          <tfoot>
	    <tr>
	      <td>Apple</td>
	      <td>10</td>
	    </tr>
	  </tfoot>
	</table>
        
        
### Using Row Span and Col Span Attribute
With **Row Span** allows a single table cell to span the height of more than one cell or row.

Example: 

```html
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td> 
    <td rowspan="2">50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td> 
  </tr>
</table>
```

With **Col Span** allows a single table cell to span the width of more than one cell or column.

Example: 

```html
<table>
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
    <td>50</td>
  </tr>
  <tr>
    <td colspan="3">Total: 2 Response</td>    
  </tr>
</table>
```

## Adding/Removing table border
The table border width can be increased/decreased using the table border attribute.

### Table Border Example
```html
<table border = "1">
  <tr>
    <th>Fruits</th>
    <th>Quantity</th> 
  </tr>
  <tr>
    <td>Apple</td>
    <td>2</td> 
  </tr>
</table>
```
Result:
<table border = "1">
  <tr>
    <th>Fruits</th>
    <th>Quantity</th> 
  </tr>
  <tr>
    <td>Apple</td>
    <td>2</td> 
  </tr>
</table>

```html
<table border = "0">
  <tr>
    <th>Fruits</th>
    <th>Quantity</th> 
  </tr>
  <tr>
    <td>Apple</td>
    <td>2</td> 
  </tr>
</table>
```
Result:
<table border = "0">
  <tr>
    <th>Fruits</th>
    <th>Quantity</th> 
  </tr>
  <tr>
    <td>Apple</td>
    <td>2</td> 
  </tr>
</table>

```html
<table border = "2">
  <tr>
    <th>Fruits</th>
    <th>Quantity</th> 
  </tr>
  <tr>
    <td>Apple</td>
    <td>2</td> 
  </tr>
</table>
```
Result:
<table border = "2">
  <tr>
    <th>Fruits</th>
    <th>Quantity</th> 
  </tr>
  <tr>
    <td>Apple</td>
    <td>2</td> 
  </tr>
</table>

The table can also be applied a border with the css as follows
```html
table, th, td {
    border: 1px solid black;
}
```

#### More Information:
- [MDN - table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
- [YouTube - HTML Tables Tutorial](https://www.youtube.com/watch?v=BczLWImAmBk)
- [W3C HTML Tables](https://www.w3schools.com/html/html_tables.asp)
- [MDN Article on the HTML &lt;table&gt; tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)  
- [Tables with Multi-level Headers](https://www.w3.org/WAI/tutorials/tables/multi-level/)
