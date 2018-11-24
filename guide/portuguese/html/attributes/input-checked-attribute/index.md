---
title: Input Checked Attribute
localeTitle: Atributo Verificado de Entrada
---
## Atributo Verificado de Entrada

O atributo checked é um atributo booleano.

Quando presente, especifica que um  elemento deve ser pré-selecionado (marcado) quando a página é carregada.

O atributo verificado pode ser usado com  e  .

O atributo verificado também pode ser definido após o carregamento da página, por meio do JavaScript.

## Dê uma olhada no seguinte exemplo:

```html

<form action="/action_page.php"> 
  <input type="checkbox" name="vehicle" value="Bike"> I have a bike<br> 
  <input type="checkbox" name="vehicle" value="Car" checked> I have a car<br> 
  <input type="submit" value="Submit"> 
 </form> 
```

No exemplo acima, quando a página da Web é carregada por padrão, a primeira caixa de seleção será automaticamente selecionada devido ao atributo marcado.