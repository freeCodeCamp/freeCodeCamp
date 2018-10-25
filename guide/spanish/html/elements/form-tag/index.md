---
title: Form Tag
localeTitle: Etiqueta de formulario
---
## Etiqueta de formulario

La etiqueta `<form>` se usa para crear formularios en HTML que son para la entrada del usuario. Una vez que un usuario ingresa datos y los envía, los datos se envían al servidor para ser procesados.

Aquí hay un ejemplo básico de cómo usar la etiqueta `<form>` :

```html

<form action="/example.php" method="get"> 
 Name: <input type="text"><br> 
 Email Address: <input type="text"><br> 
 <input type="submit" value="Submit"> 
 </form> 
```

### Atributo de acción

Cada elemento `<form>` necesita un atributo de acción. El valor del atributo de acción es la URL en el servidor que recibirá los datos en el formulario cuando se envíe.

Aquí hay un ejemplo usando el atributo de acción:

```html

<form action="http://www.google.com/form.php" method="get"> 
 <p>Controls will appear inside here.</p> 
 </form> 
```

Como puede ver, el formulario está enviando sus datos a la URL [http://www.google.com/from.php](http://www.google.com/from.php) .

### Método

Los formularios se pueden enviar utilizando el método GET o POST.

*   El método GET es ideal para formularios más cortos, ya que adjunta datos al final de la URL especificada dentro del atributo de acción.
    
*   El método POST es ideal para formularios que son más largos, o cuando agrega o elimina información de una base de datos. Con el método POST, los valores del formulario se envían en encabezados HTTP.
    

### Elementos

El elemento `<form>` tendrá al menos uno de los siguientes elementos anidados dentro de él:

*   [`<input>`](https://guide.freecodecamp.org/html/elements/input "Entrada")
*   [`<button>`](https://guide.freecodecamp.org/html/elements/button-tag "Botón")
*   [`<label>`](https://guide.freecodecamp.org/html/elements/label-tag "Etiqueta")
*   [`<select>`](https://guide.freecodecamp.org/html/elements/select-tag "Seleccionar")
*   [`<textarea>`](https://guide.freecodecamp.org/html/elements/textarea-tag "Textarea")
*   [`<fieldset>`](https://guide.freecodecamp.org/html/elements/fieldsets-and-legends "Fieldset")

### Recursos

*   [Recursos para el formulario W3 Schools](https://www.w3schools.com/tags/tag_form.asp "Escuelas w3")
*   [Recurso de Mozilla Form](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "Mozilla Form")