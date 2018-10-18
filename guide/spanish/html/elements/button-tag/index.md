---
title: Button Tag
localeTitle: Etiqueta de botón
---
## Etiqueta de botón

Una etiqueta `<button>` especifica un botón en el que se puede hacer clic en el documento HTML. Entre las etiquetas `<button>` , puede poner contenido, como texto o imágenes. Esto es diferente del botón creado usando la etiqueta `<input>` , que solo toma el texto como contenido.

**Sintaxis:**

`<button type="submit">Click Here!</button>`

**Atributos:**

Los siguientes son los atributos asociados soportados por HTML 4:

| **Atributos** | **Valor** | **Lo que hace** | | --- | --- | --- | | discapacitado | discapacitado | Desactiva el botón | | nombre | nombre | Especifica un nombre para el botón. El nombre es para hacer referencia al botón en forma HTML, JS, etc. | tipo | botón o restablecer o enviar | Establece el tipo de botón. Un botón con `button` tipo es un simple botón puede hacer clic, con el `submit` tipo se somete form-data, y con el `reset` tipo se restablece form-data. | | valor | texto | Establece un valor inicial para el botón. Este valor se envía junto con los datos de formulario. |

HTML 5 soporta los siguientes atributos adicionales:

| **Atributos** | **Valor** | **Lo que hace** | | --- | --- | --- | | enfoque automático | enfoque automático | Si el botón se enfoca automáticamente cuando se carga la página. Por ejemplo, ver Google. A medida que la página se carga completamente, el cuadro de texto se enfoca automáticamente. | | forma | form\_id | Especifica una o más formas a las que pertenece el botón. | | formaccion URL | Especifica a dónde enviar los datos del formulario una vez que se presiona el botón de tipo de `submit` . | | formmethod | obtener o publicar | Especifica cómo enviar los datos del formulario. Sólo para el botón de tipo de `submit` . | | formtarget | `_blank` o `_self` o `_parent` o `_top` o framename | Especifica la ubicación donde se mostrará el resultado después de enviar los datos del formulario. |

**Ejemplo:**

```html

<html> 
  <head> 
    <title>Button Tag example</title> 
  </head> 
  <body> 
    <form> 
      First name:<br> 
      <input type="text" name="firstname" value="Free"> 
      <br> 
      Last name:<br> 
      <input type="text" name="lastname" value="CodeCamp"> 
      <br><br> 
      <input type="submit" value="Submit" formtarget="_self"> 
    </form> 
  </body> 
 </html> 
```

Todos los principales navegadores admiten la etiqueta `<button>` . `<button>` etiqueta `<button>` también admite atributos de eventos en HTML. **Nota: los** diferentes navegadores pueden enviar valores diferentes si utiliza el elemento `<button>` . Se recomienda especificar el valor del botón o usar la etiqueta `<input>` para crear el botón en un formulario HTML.

**Otros recursos:**

*   Otros atributos:

| **Atributos** | **Enlace** | | --- | --- | | formenctype | https://www.w3schools.com/TAgs/att _button_ formenctype.asp | | formnovalidate | https://www.w3schools.com/TAgs/att _button_ formnovalidate.asp |

*   Etiqueta `<input>` : https://www.w3schools.com/TAgs/tag\_input.asp
*   Atributos del evento: https://www.w3schools.com/TAgs/ref\_eventattributes.asp
*   `formtarget` atributo `formtarget` : https://www.w3schools.com/TAgs/att _button_ formtarget.asp
*   Formulario HTML: