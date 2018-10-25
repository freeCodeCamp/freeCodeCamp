---
title: PHP 5 Form Handling
localeTitle: Manejo de formularios PHP 5
---
Los superglobales de PHP $ _GET y $_ POST se utilizan para recopilar datos de formulario.

### PHP - Un formulario HTML simple

El siguiente ejemplo muestra un formulario HTML simple con dos campos de entrada y un botón de envío:

#### Ejemplo

```php
<html> 
 <body> 
 
 <form action="welcome.php" method="post"> 
 Name: <input type="text" name="name"><br> 
 E-mail: <input type="text" name="email"><br> 
 <input type="submit"> 
 </form> 
 
 </body> 
 </html> 
```

Cuando el usuario completa el formulario de arriba y hace clic en el botón de enviar, los datos del formulario se envían para su procesamiento a un archivo PHP llamado "welcome.php". Los datos del formulario se envían con el método HTTP POST.

Para mostrar los datos enviados, simplemente puede repetir todas las variables. El "welcome.php" se ve así:

```php
<html> 
 <body> 
 
 Welcome <?php echo $_POST["name"]; ?><br> 
 Your email address is: <?php echo $_POST["email"]; ?> 
 
 </body> 
 </html> 
```

La salida podría ser algo como esto:
```
Welcome John 
 Your email address is john.doe@example.com 
```

El mismo resultado también podría lograrse utilizando el método HTTP GET:

#### Ejemplo

```php
<html> 
 <body> 
 
 <form action="welcome_get.php" method="get"> 
 Name: <input type="text" name="name"><br> 
 E-mail: <input type="text" name="email"><br> 
 <input type="submit"> 
 </form> 
 
 </body> 
 </html> 
```

y "welcome\_get.php" se ve así:

```php
<html> 
 <body> 
 
 Welcome <?php echo $_GET["name"]; ?><br> 
 Your email address is: <?php echo $_GET["email"]; ?> 
 
 </body> 
 </html> 
```

El código de arriba es bastante simple. Sin embargo, falta lo más importante. Debe validar los datos del formulario para proteger su script de código malicioso.

> **¡Piense SEGURIDAD al procesar formularios PHP!**
> 
> Esta página no contiene ninguna validación de formulario, solo muestra cómo puede enviar y recuperar datos del formulario.
> 
> Sin embargo, las siguientes páginas mostrarán cómo procesar formularios PHP teniendo en cuenta la seguridad. La validación adecuada de los datos del formulario es importante para proteger su formulario de piratas informáticos y spammers.

### GET vs POST

Tanto GET como POST crean una matriz (por ejemplo, matriz (clave => valor, clave2 => valor2, clave3 => valor3, ...)). Esta matriz contiene pares de clave / valor, donde las claves son los nombres de los controles de formulario y los valores son los datos de entrada del usuario.

Tanto GET como POST se tratan como $ _GET y $_ POST. Estos son superglobales, lo que significa que siempre están accesibles, independientemente del alcance, y puedes acceder a ellos desde cualquier función, clase o archivo sin tener que hacer nada especial.

$ \_GET es una matriz de variables pasadas al script actual a través de los parámetros de la URL.

$ \_POST es una matriz de variables pasadas al script actual a través del método HTTP POST.

### ¿Cuándo usar GET?

La información enviada desde un formulario con el método GET es visible para todos (todos los nombres y valores de las variables se muestran en la URL). GET también tiene límites en la cantidad de información a enviar. La limitación es de unos 2000 caracteres. Sin embargo, debido a que las variables se muestran en la URL, es posible marcar la página. Esto puede ser útil en algunos casos.

GET puede utilizarse para enviar datos no confidenciales.

**Nota: ¡** NUNCA se debe usar para enviar contraseñas u otra información confidencial!

### ¿Cuándo usar POST?

La información enviada desde un formulario con el método POST es **invisible para otros** (todos los nombres / valores están incrustados en el cuerpo de la solicitud HTTP) y **no** tiene **límites** en la cantidad de información que se debe enviar.

Además, POST admite funcionalidades avanzadas, como la compatibilidad con entradas binarias de varias partes al cargar archivos en el servidor.

Sin embargo, debido a que las variables no se muestran en la URL, no es posible marcar la página.

> **Los desarrolladores prefieren POST para enviar datos de formulario.**