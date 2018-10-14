---
title: Tables
localeTitle: Tabelas
---
### Definindo uma tabela HTML

Uma tabela HTML é definida com o tag.

Cada linha da tabela é definida com o

tag. Dentro de uma linha, pode haver cabeçalhos de tabela ou dados da tabela.

*   Um cabeçalho de tabela é definido com o

tag. Por padrão, os títulos das tabelas estão em negrito e centralizados.*   Uma tabela de dados / célula é definida com o

tag.

Uma tabela HTML mais complexa também pode incluir elementos `<caption>` , `<col>` , `<colgroup>` , `<thead>` , `<tfoot>` e `<tbody>` .

### Exemplo de tabela simples

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

### Exemplo de tabela com mais informações semânticas

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

Item

Montante

maçã

10

pêssego

15

Melancia

3

#### Mais Informações:

[Artigo do MDN no HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) [tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)