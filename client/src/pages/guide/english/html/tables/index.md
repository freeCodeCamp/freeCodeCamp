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
Result:
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


#### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table' target='_blank' rel='nofollow'>MDN Article on the HTML <table> tag</a>
