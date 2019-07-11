---
title: Input Checked Attribute
localeTitle: Atributo comprobado de entrada
---
## Atributo comprobado de entrada

El atributo verificado es un atributo booleano.

Cuando está presente, especifica que un  El elemento debe estar preseleccionado (marcado) cuando se carga la página.

El atributo comprobado se puede utilizar con  y  .

El atributo verificado también se puede configurar después de la carga de la página, a través de JavaScript.

## Echa un vistazo al siguiente ejemplo:

```html

<form action="/action_page.php"> 
  <input type="checkbox" name="vehicle" value="Bike"> I have a bike<br> 
  <input type="checkbox" name="vehicle" value="Car" checked> I have a car<br> 
  <input type="submit" value="Submit"> 
 </form> 
```

En el ejemplo anterior, cuando la página web se carga de forma predeterminada, la primera casilla de verificación se seleccionará automáticamente debido al atributo marcado.