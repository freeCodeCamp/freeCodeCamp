---
title: Required
localeTitle: Necesario
---
## Necesario

El atributo HTML requerido se usa en un elemento de entrada para hacer que el campo de entrada sea un formulario requerido para enviar el formulario. Si el usuario no completa el campo de entrada, el formulario no se enviará y mostrará un mensaje pidiéndole al usuario que complete el campo. El atributo `< Required>` es aplicable a `<input>` , `<select>` , `<textarea>` .

Por ejemplo:

```html

<!DOCTYPE html> 
 <html> 
  <head> 
    <title>HTML Required Attribute</title> 
  </head> 
  <body> 
    <form action="/"> 
      Text Field: <input type="text" name="textfield" required> 
      <input type="submit" value="Submit"> 
    </form> 
  </body> 
 </html> 
```

Seleccione Ejemplo:

```html

<form action="/action.php"> 
 <select required> 
  <option value="">None</option> 
  <option value="volvo">Volvo</option> 
  <option value="saab">Saab</option> 
  <option value="mercedes">Mercedes</option> 
  <option value="audi">Audi</option> 
 </select> 
 </form> 
```

Ejemplo de área de texto:

```html

<form action="/action.php"> 
  <textarea name="comment" required></textarea> 
  <input type="submit"> 
 </form> 
```

Simplemente agregue `required` a un elemento de entrada

#### Más información:

[Artículo de MDN sobre el elemento de entrada.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)