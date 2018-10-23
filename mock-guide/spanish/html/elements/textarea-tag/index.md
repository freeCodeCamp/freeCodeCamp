---
title: Textarea Tag
localeTitle: Etiqueta Textarea
---
## Etiqueta Textarea

La etiqueta HTML textarea le permite ingresar un cuadro que contendrá texto para comentarios o interacción del usuario. En la mayoría de los casos, es común ver el área de texto utilizada como parte de un formulario.

Los programadores usan la etiqueta textarea para crear un campo multilínea para la entrada del usuario (útil, especialmente en caso de que el usuario pueda poner en el formulario un texto más largo). Los programadores pueden especificar diferentes atributos para las etiquetas textarea.

Código de muestra:

```html

    <form> 
      <textarea name="comment" rows="8" cols="80" maxlength="500" placeholder="Enter your comment here..." required></textarea> 
    </form> 
```

Atributos más comunes: `row` y `cols` atributos determinan la altura y la anchura del área de texto `placeholder` atributo de `placeholder` especifica el texto que es visible para el usuario, ayuda al usuario a comprender qué datos deben escribirse `maxlength` atributo `maxlength` determina la longitud máxima del texto que se puede escribir en el área de texto, el usuario no puede enviar más caracteres atributo `required` significa que este campo debe completarse antes del envío del formulario

Para obtener más información sobre la etiqueta textarea y sus atributos, visite MDN o w3schools .