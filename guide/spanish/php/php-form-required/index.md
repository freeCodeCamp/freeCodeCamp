---
title: PHP 5 Forms - Required Fields
localeTitle: Formularios PHP 5 - Campos Requeridos
---
Este capítulo muestra cómo hacer que los campos de entrada sean necesarios y crear mensajes de error si es necesario.

### PHP - Campos obligatorios

Desde la tabla de reglas de validación en la página anterior, vemos que los campos "Nombre", "Correo electrónico" y "Género" son obligatorios. Estos campos no pueden estar vacíos y se deben completar en el formulario HTML.

| Campo | Reglas de validación | | --- | --- | | Nombre | Requerido. + Solo debe contener letras y espacios en blanco | | Correo electrónico | Requerido. + Debe contener una dirección de correo electrónico válida (con @ y.) | | Sitio web | Opcional. Si está presente, debe contener una URL válida | | Comentario | Opcional. Campo de entrada multilínea (área de texto) | | Género | Requerido. Debe seleccionar uno |

En el capítulo anterior, todos los campos de entrada eran opcionales.

En el siguiente código, hemos agregado algunas variables nuevas: $ nameErr, $ emailErr, $ genderErr y $ websiteErr. Estas variables de error contendrán mensajes de error para los campos requeridos. También hemos agregado una declaración if else para cada _variable_ $ _POST. Esto comprueba si la_ variable _$_ POST está vacía (con la función PHP vacía ()). Si está vacío, se almacena un mensaje de error en las diferentes variables de error y, si no está vacío, envía los datos de entrada del usuario a través de la función test\_input ():

```php
<?php 
 // define variables and set to empty values 
 $nameErr = $emailErr = $genderErr = $websiteErr = ""; 
 $name = $email = $gender = $comment = $website = ""; 
 
 if ($_SERVER["REQUEST_METHOD"] == "POST") { 
  if (empty($_POST["name"])) { 
    $nameErr = "Name is required"; 
  } else { 
    $name = test_input($_POST["name"]); 
  } 
 
  if (empty($_POST["email"])) { 
    $emailErr = "Email is required"; 
  } else { 
    $email = test_input($_POST["email"]); 
  } 
 
  if (empty($_POST["website"])) { 
    $website = ""; 
  } else { 
    $website = test_input($_POST["website"]); 
  } 
 
  if (empty($_POST["comment"])) { 
    $comment = ""; 
  } else { 
    $comment = test_input($_POST["comment"]); 
  } 
 
  if (empty($_POST["gender"])) { 
    $genderErr = "Gender is required"; 
  } else { 
    $gender = test_input($_POST["gender"]); 
  } 
 } 
 ?> 
```

### PHP - Muestra los mensajes de error

Luego, en el formulario HTML, agregamos un pequeño script después de cada campo requerido, que genera el mensaje de error correcto si es necesario (es decir, si el usuario intenta enviar el formulario sin completar los campos requeridos):

#### Ejemplo

```php
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"> 
 
 Name: <input type="text" name="name"> 
 <span class="error">* <?php echo $nameErr;?></span> 
 <br><br> 
 E-mail: 
 <input type="text" name="email"> 
 <span class="error">* <?php echo $emailErr;?></span> 
 <br><br> 
 Website: 
 <input type="text" name="website"> 
 <span class="error"><?php echo $websiteErr;?></span> 
 <br><br> 
 Comment: <textarea name="comment" rows="5" cols="40"></textarea> 
 <br><br> 
 Gender: 
 <input type="radio" name="gender" value="female">Female 
 <input type="radio" name="gender" value="male">Male 
 <span class="error">* <?php echo $genderErr;?></span> 
 <br><br> 
 <input type="submit" name="submit" value="Submit"> 
 
 </form> 
```

El siguiente paso es validar los datos de entrada, es decir, "¿El campo Nombre solo contiene letras y espacios en blanco?", Y "¿El campo Correo electrónico contiene una sintaxis de dirección de correo electrónico válida?", Y si se completó, " ¿El campo del sitio web contiene una URL válida? ".