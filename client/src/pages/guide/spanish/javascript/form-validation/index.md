---
title: Form Validation
localeTitle: Validación de formularios
---
## Validación de formularios

La validación de formularios normalmente solía ocurrir en el servidor, después de que el cliente ingresó todos los datos necesarios y luego presionó el botón Enviar. Si los datos ingresado por un cliente era incorrecto o simplemente faltaba, el servidor tendría que enviar todos los datos al cliente y solicitar que el formulario fuera reenviado con la información correcta. Este fue realmente un proceso largo que solía suponer una gran carga para el servidor.

JavaScript proporciona una forma de validar los datos del formulario en la computadora del cliente antes de enviarlo al servidor web. La validación de formularios generalmente realiza dos funciones:

### Validacion basica

En primer lugar, se debe verificar el formulario para asegurarse de que se completen todos los campos obligatorios. Requerirá solo un bucle a través de cada campo en el formulario y comprobar si hay datos.

### Validación del formato de datos

En segundo lugar, los datos que se ingresan deben verificarse para determinar la forma y el valor correctos. Su código debe incluir la lógica apropiada para probar la exactitud de los datos.

#### Ejemplo:

```html

<html> 
 
   <head> 
      <title>Form Validation</title> 
 
      <script type="text/javascript"> 
         <!-- 
            // Form validation code will come here. 
         //--> 
      </script> 
 
   </head> 
 
   <body> 
      <form action="/cgi-bin/test.cgi" name="myForm" onsubmit="return(validate());"> 
         <table cellspacing="2" cellpadding="2" border="1"> 
 
            <tr> 
               <td align="right">Name</td> 
               <td><input type="text" name="Name" /></td> 
            </tr> 
 
            <tr> 
               <td align="right">EMail</td> 
               <td><input type="text" name="EMail" /></td> 
            </tr> 
 
            <tr> 
               <td align="right">Zip Code</td> 
               <td><input type="text" name="Zip" /></td> 
            </tr> 
 
            <tr> 
               <td align="right">Country</td> 
               <td> 
                  <select name="Country"> 
                     <option value="-1" selected>[choose yours]</option> 
                     <option value="1">USA</option> 
                     <option value="2">UK</option> 
                     <option value="3">INDIA</option> 
                  </select> 
               </td> 
            </tr> 
 
            <tr> 
               <td align="right"></td> 
               <td><input type="submit" value="Submit" /></td> 
            </tr> 
 
         </table> 
      </form> 
 
   </body> 
 </html> 
```

#### Salida

Mirador [aquí](https://liveweave.com/LP9eOP)

### Validación básica de formularios

Primero veamos cómo hacer una validación de forma básica. En el formulario anterior, estamos llamando validate () para validar los datos cuando se está produciendo el evento onsubmit. los El siguiente código muestra la implementación de esta función `validate()` .

```html

<script type="text/javascript"> 
   // Form validation code will come here. 
   function validate() 
      { 
 
         if( document.myForm.Name.value == "" ) 
         { 
            alert( "Please provide your name!" ); 
            document.myForm.Name.focus() ; 
            return false; 
         } 
 
         if( document.myForm.EMail.value == "" ) 
         { 
            alert( "Please provide your Email!" ); 
            document.myForm.EMail.focus() ; 
            return false; 
         } 
 
         if( document.myForm.Zip.value == "" || 
         isNaN( document.myForm.Zip.value ) || 
         document.myForm.Zip.value.length != 5 ) 
         { 
            alert( "Please provide a zip in the format #####." ); 
            document.myForm.Zip.focus() ; 
            return false; 
         } 
 
         if( document.myForm.Country.value == "-1" ) 
         { 
            alert( "Please provide your country!" ); 
            return false; 
         } 
         return( true ); 
      } 
 </script> 
```

#### Salida

Mirador [aquí](https://liveweave.com/pCPTnP)

### Validación del formato de datos

Ahora veremos cómo podemos validar nuestros datos de formulario ingresados ​​antes de enviarlos al servidor web.

El siguiente ejemplo muestra cómo validar una dirección de correo electrónico ingresada. Una dirección de correo electrónico debe contener al menos un signo '@' y un punto (.). Además, el '@' debe no debe ser el primer carácter de la dirección de correo electrónico, y el último punto debe ser al menos un carácter después del signo '@'.

#### Ejemplo:

```html

<script type="text/javascript"> 
    function validateEmail() 
      { 
         var emailID = document.myForm.EMail.value; 
         atpos = emailID.indexOf("@"); 
         dotpos = emailID.lastIndexOf("."); 
 
         if (atpos < 1 || ( dotpos - atpos < 2 )) 
         { 
            alert("Please enter correct email ID") 
            document.myForm.EMail.focus() ; 
            return false; 
         } 
         return( true ); 
      } 
 </script> 
```

#### Salida

Mirador [aquí](https://liveweave.com/nznVs6)

### Restricciones de formulario HTML5

Algunas de las restricciones de HTML5 comúnmente utilizadas para `<input>` son el atributo de `type` (por ejemplo, `type="password"` ), `maxlength` , `required` y `disabled` . Una menos La restricción comúnmente utilizada es el `pattern` que toma la expresión regular de JavaScript.

### Bibliotecas de Validación

Ejemplos de bibliotecas de validación incluyen:

*   [Validar.js](http://rickharrison.github.com/validate.js/)
*   [Validación](http://bassistance.de/jquery-plugins/jquery-plugin-validation/)
*   [Valido8](http://unwrongest.com/projects/valid8/)

### Más información

*   [Formulario de validación de datos | MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation)
*   [Validación de restricciones | MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation)
*   [Tutorialspoint](https://www.tutorialspoint.com/javascript/javascript_form_validations.htm)