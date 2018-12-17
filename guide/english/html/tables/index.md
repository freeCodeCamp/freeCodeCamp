---
title: Tables
---
### Defining an HTML Table

An HTML table is defined with the `<table>` tag.

Each table row is defined with the `<tr>` tag. Inside a row there may be table headers or table data.

* A table header is defined with the `<th>` tag. By default, table headings are bold and centered.
* A table data/cell is defined with the `<td>` tag.

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

### Table Example with more semantic information
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

#### More Information:
* [MDN - table](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
* [YouTube - HTML Tables Tutorial](https://www.youtube.com/watch?v=BczLWImAmBk)
