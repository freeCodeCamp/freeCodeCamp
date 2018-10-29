---
title: PHP Cookies
localeTitle: Cookies de PHP
---
# Galletas de PHP

## ¿Qué es una cookie?

Una cookie se utiliza a menudo para identificar a un usuario. Es un archivo pequeño que el servidor inserta en la computadora del usuario. Cada vez que la misma computadora solicite una página con un navegador, también enviará la cookie.  
Las cookies fueron diseñadas para ser un mecanismo confiable para recordar información de estado o para registrar la actividad de navegación del usuario.  
También se pueden usar para recordar datos arbitrarios que el usuario ingresó previamente en campos de formulario como nombres, direcciones, contraseñas, etc.

## Creando Cookies con PHP

Con PHP, puede crear y recuperar valores de cookies. Se crea una cookie con la función setcookie ().

`setcookie(name, value, expire, path, domain, secure, httponly);`

Sólo el parámetro de _nombre_ es un parámetro requerido. Todos los demás parámetros son opcionales.

## PHP Crear / Recuperar una cookie

El siguiente ejemplo crea una cookie llamada "usuario" con el valor "John Doe".  
La cookie expirará después de 30 días (86400 \* 30).  
La "/" significa que la cookie está disponible en todo el sitio web (de lo contrario, puede seleccionar el directorio que prefiera).  
Luego recuperamos el valor de la cookie "usuario" (utilizando la variable global $ \_COOKIE).  
También usamos la función isset () para averiguar si la cookie está configurada:

**Ejemplo:**
```
<?php 
 $cookie_name = "user"; 
 $cookie_value = "John Doe"; 
 setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");  // 86400 = 1 day 
 ?> 
 <html> 
 <body> 
 
 <?php 
 if(!isset($_COOKIE[$cookie_name])) { 
    echo "Cookie named '" . $cookie_name . "' is not set!"; 
 } else { 
    echo "Cookie '" . $cookie_name . "' is set!<br>"; 
    echo "Value is: " . $_COOKIE[$cookie_name]; 
 } 
 ?> 
 </body> 
 </html> 
```

**Nota: la** función setcookie () debe aparecer **ANTES de** la etiqueta.

Salida:  
Cookie 'usuario' está configurado!  
El valor es: John Doe

## PHP modifica un valor de cookie

Para modificar una cookie, simplemente establezca el valor nuevamente usando la función setcookie ():

**Ejemplo:**
```
<?php 
 $cookie_name = "user"; 
 $cookie_value = "Jane Porter"; 
 setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); 
 ?> 
 <html> 
 <body> 
 
 <?php 
 if(!isset($_COOKIE[$cookie_name])) { 
    echo "Cookie named '" . $cookie_name . "' is not set!"; 
 } else { 
    echo "Cookie '" . $cookie_name . "' is set!<br>"; 
    echo "Value is: " . $_COOKIE[$cookie_name]; 
 } 
 ?> 
 
 </body> 
 </html> 
```

Salida:  
Cookie 'usuario' está configurado!  
El valor es: Alex Porter

## PHP Eliminar una cookie

Para eliminar una cookie, use la función setcookie () con una fecha de caducidad en el pasado:

**Ejemplo:**
```
<?php 
 // set the expiration date to one hour ago 
 setcookie("user", "", time() - 3600); 
 ?> 
 <html> 
 <body> 
 
 <?php 
 echo "Cookie 'user' is deleted."; 
 ?> 
 
 </body> 
 </html> 
```

Salida:  
Se elimina el "usuario" de la cookie.