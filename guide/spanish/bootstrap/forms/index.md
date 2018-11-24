---
title: Forms
localeTitle: Formas
---
## \## Formularios

Bootstrap framework proporciona una función de formulario que un programador puede usar para crear formularios html hermosos fácilmente. El uso de la forma bootstrap le da a cada elemento de forma individual un estilo global unificado. La forma Bootstrap agrega el espacio correcto y mira a cada elemento.

Cada elemento de formulario de rutina de carga debe tener un _control de formulario de_ clase. Esta clase es cómo bootstrao sabe qué elementos diseñar. Todos los elementos textuales como **entrada** , área de **texto** y **selección** que tienen clase de _control de formulario_ tendrán un ancho del 100% por defecto. Hay dos tipos de formularios de Bootstrap, que son:

*   Formulario en línea: crea el formulario en una sola línea. Útil para formularios de inicio de sesión en una barra de navegación
*   Forma horizontal: crea un formulario con cada elemento en una fila diferente

## Ejemplo de una forma básica.

\`\` \`html

Dirección de correo electrónico 

Contraseña 

Entrada de archivo 

Ejemplo de texto de ayuda a nivel de bloque aquí.

 Me echa un vistazo 

Enviar
```
## Example of an inline form 
```

html

Nombre 

Email 

Enviar invitacion
```
## Example of horizontal form 
```

html

Email

Contraseña

 Recuérdame 

Registrarse
```
![Inline Form 2](https://github.com/TroyB12/Pictures/blob/master/Inline%20Form2.PNG) 
```

html

Monto (en dólares)

ps

.00

Transferir efectivo
```
Bootstrap forms allow the programmer to use classes to easily make HTML forms presentable and responsive. 
 Take the following simple form: 
 
 ![](https://siamcomm.com/wp-content/uploads/2017/10/Forms-·-Bootstrap.png) 
```

html

Dirección de correo electrónico  Nunca compartiremos su correo electrónico con nadie más.

Contraseña 

 Me echa un vistazo 

Enviar
```
Individual form fields and the associated label should be wrapped in a `<div>` with a class of `form-group`. One exception to this is when using checkbox field where `form-check` should be used instead of `form-group`. 
 
 The `<input>` tag should be given a class of `form-control`. 
 
 The `<button>` tag should be given the classes of `btn btn-primary`. 
 
 #### More Information: 
 <!-- Please add any articles you think might be helpful to read before writing the article --> 
 [The official BootStrap documentation is very helpful](http://getbootstrap.com/docs/4.0/components/forms/) 
 
 ![Inline Form 3](https://github.com/TroyB12/Pictures/blob/master/Inline%20Form3.PNG) 
 
 #### Horizontal Form 
 In combination with Bootstrap's predefined grid classes to align labels and groups of form controls in a horizontal layout by adding `.form-horizontal` to the form. Doing so changes `.form-group`s to behave as grid rows, so no need for `.row`. 
```

html

Email

Contraseña

 Recuérdame 

Registrarse

\`\` \`

![Forma horizontal](https://github.com/TroyB12/Pictures/blob/master/Horizontal%20Form.PNG)