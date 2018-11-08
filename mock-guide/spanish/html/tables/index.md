---
title: Tables
localeTitle: Mesas
---
### Definiendo una tabla HTML

Una tabla HTML se define con la etiqueta.

Cada fila de la tabla se define con la

etiqueta. Dentro de una fila puede haber encabezados de tabla o datos de tabla.

*   Un encabezado de tabla se define con el

etiqueta. Por defecto, los encabezados de las tablas están en negrita y centrados.*   Una tabla de datos / celda se define con la

etiqueta.

Una tabla HTML más compleja también puede incluir los elementos `<caption>` , `<col>` , `<colgroup>` , `<thead>` , `<tfoot>` y `<tbody>` en ella.

### Ejemplo de tabla simple

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

[MANIFESTACIÓN](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table)

### Ejemplo de tabla con más información semántica

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

Resultado:

ít.

Cantidad

manzana

10

melocotón

15

Sandía

3

#### Más información:

[Artículo de MDN sobre el HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) [etiqueta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)