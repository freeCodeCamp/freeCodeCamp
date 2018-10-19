---
title: How to Create a Contact Form with CSS
localeTitle: Cómo crear un formulario de contacto con CSS
---
## Cómo crear un formulario de contacto con CSS

Primero creamos los elementos HTML: campos de entrada para Nombre, Apellido, Correo electrónico y Área de texto para el mensaje.

Más tarde aplicamos estilos CSS para hacer que el formulario sea visualmente atractivo.

### La parte HTML

La sección HTML tiene un div con `container` clase con el encabezado `h3` " **Formulario de contacto** "

El formulario con el nombre **contact\_form** contiene campos de entrada para:

*   Nombre de pila
*   Apellido
*   Email
*   Mensaje

Un div con `center` clase para alinear el centro de elementos. Un tipo de `input` `submit` para enviar el formulario. El atributo `required` en los campos de texto se comprueba para el valor en el envío.

```html

<div class="container"> 
    <h3>Contact Form</h3> 
    <form action="#" name="contact_form"> 
        <label for="first_name">First Name</label> 
        <input name="first_name" type="text" required placeholder="John"/> 
        <br> 
        <label for="last_name">Last Name</label> 
        <input name="last_name" type="text" required placeholder="Doe"/> 
        <br> 
        <label for="email">Email</label> 
        <input name="email" type="email" required placeholder="you@domain.com"/> 
        <br> 
        <label for="message">Message</label><br> 
        <textarea name="message" cols="30" rows="10" placeholder="Enter your message here ..." required> </textarea> 
        <div class="center"> 
            <input type="submit" value="Submit"> 
        </div> 
    </form> 
 </div> 
```

### La parte de CSS

```css
/* Importing the Roboto font from Google Fonts. */ 
 @import url("https://fonts.googleapis.com/css?family=Roboto:400"); 
 
 /* Set font of all elements to 'Roboto' */ 
 * { 
    font-family: 'Roboto', sans-serif; 
    font-weight: 400; 
 } 
 
 /* Remove outline of all elements on focus */ 
 *:focus { 
    outline: 0; 
 } 
 
 body { 
    background: #263238;  /* Set background color to #263238*/ 
 } 
 
 h3 { 
    text-align: center; 
 } 
 
 /* Add styles to 'container' class */ 
 .container { 
    padding: 12px 24px 24px 24px; 
    margin: 48px 12px; 
    background: #E3F2FD; 
    border-radius: 4px; 
 } 
 
 /* Add styles to 'label' selector */ 
 label { 
    font-size: 0.85em; 
    margin-left: 12px; 
 } 
 
 /* Add styles to 'input' and 'textarea' selectors */ 
 input[type=text],input[type=email], textarea { 
    width: 100%; 
    padding: 12px; 
    border: 1px solid #ccc; 
    border-radius: 4px; 
    box-sizing: border-box; 
    margin-top: 6px; 
    margin-bottom: 16px; 
    resize: vertical; 
 } 
 
 /* Add styles to show 'focus' of selector */ 
 input[type=text]:focus,input[type=email]:focus, textarea:focus { 
    border: 1px solid green; 
 } 
 
 /* Add styles to the submit button */ 
 input[type=submit] { 
    background: #64B5F6; 
    margin: 0 auto; 
    outline: 0; 
    color: white; 
    border: 0; 
    padding: 12px 24px; 
    border-radius: 4px; 
    transition: all ease-in-out 0.1s; 
    position: relative; 
    display: inline-block; 
    text-align: center; 
 } 
 
 /* Add styles for 'focus' property */ 
 input[type=submit]:focus { 
    background: #A5D6A7; 
    color: whitesmoke; 
 } 
 
 /* Style 'hover' property */ 
 input[type=submit]:hover { 
    background: #2196F3; 
 } 
 
 /* Align items to center of the 'div' with the class 'center' */ 
 .center { 
    text-align: center; 
 } 
```

### Salida

![FreeCodeCamp / guias - Formulario de contacto](http://res.cloudinary.com/crack-jack/image/upload/v1508434398/FCC_Github_Contact_form.png)

### Más información:

Visite [FreeCodeCamp - Formulario de contacto](https://codepen.io/rakhi2104/pen/QqYOoe/) en [Codepen.io](https://codepen.io)