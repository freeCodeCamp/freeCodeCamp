---
title: HTML Forms
localeTitle: Formularios HTML
---
## Formularios HTML

Básicamente, los formularios se utilizan para recopilar datos ingresados ​​por un usuario, que luego se envían al servidor para su posterior procesamiento. Se pueden utilizar para diferentes tipos de entradas de usuario, como nombre, correo electrónico, etc.

La forma contiene elementos de control que se envuelven alrededor de etiquetas `<form></form>` , como `input` , que pueden tener tipos como:

*   `text`
*   `email`
*   `password`
*   `checkbox`
*   `radio`
*   `submit`
*   `range`
*   `search`
*   `date`
*   `time`
*   `week`
*   `color`
*   `datalist`

Ejemplo de código:

```html

<form> 
    <label for="username">Username:</label> 
    <input type="text" name="username" id="username"> 
    <label for="password">Password:</label> 
    <input type="password" name="password" id="password"> 
    <input type="radio" name="gender" value="male">Male<br> 
    <input type="radio" name="gender" value="female">Female<br> 
    <input type="radio" name="gender" value="other">Other 
    <input list="Options"> 
    <datalist id="Options"> 
      <option value="Option1"> 
      <option value="Option2"> 
      <option value="Option3"> 
    </datalist> 
    <input type="submit" value="Submit"> 
    <input type="color"> 
    <input type="checkbox" name="correct" value="correct">Correct 
 </form> 
```

Otros elementos que forman pueden contener:

*   `textarea` : es un cuadro multilínea que se usa con mayor frecuencia para agregar texto, por ejemplo. comentario. El tamaño del área de texto se define por el número de filas y columnas.
*   `select` etiqueta `select` - junto con la etiqueta `<option></option>` crea un menú de selección desplegable.
*   `button` : el elemento botón se puede utilizar para definir un botón en el que se puede hacer clic.

MÁS INFORMACIÓN SOBRE FORMAS HTML.

Los formularios HTML son necesarios cuando desea recopilar algunos datos del visitante del sitio. Por ejemplo, durante el registro de un usuario, le gustaría recopilar información como nombre, dirección de correo electrónico, tarjeta de crédito, etc.

Un formulario tomará información del visitante del sitio y luego lo publicará en una aplicación de back-end como CGI, ASP Script o PHP, etc. La aplicación de back-end realizará el procesamiento requerido en los datos pasados ​​según la lógica empresarial definida en la aplicación.

Hay varios elementos de formulario disponibles como campos de texto, campos de área de texto, menús desplegables, botones de opción, casillas de verificación, etc.

La etiqueta HTML `<form>` se usa para crear un formulario HTML y tiene la siguiente sintaxis:

`html <form action = "Script URL" method = "GET|POST"> form elements like input, textarea etc. </form>`

Si el método de formulario no está definido, por defecto será "GET".

La etiqueta de formulario también puede tener un atributo llamado "destino" que especifica dónde se abrirá el enlace. Se puede abrir en la pestaña del navegador, un marco o en la ventana actual.

El atributo de acción define la acción a realizar cuando se envía el formulario. Normalmente, los datos del formulario se envían a una página web en la URL del script cuando el usuario hace clic en el botón de envío. Si se omite el atributo de acción, la acción se establece en la página actual.