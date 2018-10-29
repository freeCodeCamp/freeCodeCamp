---
title: PHP Sessions
localeTitle: Sesiones de PHP
---
# Sesiones de PHP

Una sesión es una forma de almacenar información (en variables) que se utilizará en varias páginas.  
A diferencia de una cookie, la información no se almacena en la computadora del usuario.

## ¿Qué es una sesión de PHP?

Cuando trabaja con una aplicación, la abre, hace algunos cambios y luego la cierra. Esto es muy parecido a una sesión.  
La computadora sabe quién eres. Sabe cuándo empiezas la aplicación y cuándo terminas.  
Pero en Internet hay un problema: el servidor web no sabe quién es usted o qué hace, porque la dirección HTTP _no se mantiene_ .

Las variables de sesión resuelven este problema almacenando la información del usuario que se utilizará en varias páginas (por ejemplo, nombre de usuario, color favorito, etc.).  
Por defecto, las variables de sesión duran hasta que el usuario cierra el navegador.

**Las variables de sesión contienen información sobre un solo usuario y están disponibles para todas las páginas en una aplicación.**

**Nota:** Si necesita un almacenamiento permanente, es posible que desee almacenar los datos en una base de datos.

## Iniciar una sesión de PHP

Una sesión se inicia con el inicio _de sesión_ () \_ función.  
Las variables de sesión se configuran con la variable global de PHP: $ \_SESSION.

**Ejemplo:**
```
<?php 
 // Start the session 
 session_start(); 
 ?> 
 <!DOCTYPE html> 
 <html> 
 <body> 
 
 <?php 
 // Set session variables 
 $_SESSION["favcolor"] = "blue"; 
 $_SESSION["favanimal"] = "dog"; 
 echo "Session variables are set."; 
 ?> 
 
 </body> 
 </html> 
```

**Nota: la** función session\_start () debe ser la **primera cosa** en su documento. **Antes de** cualquier etiqueta HTML.

Salida:  
Se establecen las variables de sesión.

## Obtener valores de variable de sesión de PHP

Tenga en cuenta que las variables de sesión no se pasan individualmente a cada página nueva, en su lugar se recuperan de la sesión que abrimos al comienzo de cada página (session\_start ()).

También tenga en cuenta que todos los valores de las variables de sesión se almacenan en la variable global $ \_SESSION:

**Ejemplo:**
```
<?php 
 session_start(); 
 ?> 
 <!DOCTYPE html> 
 <html> 
 <body> 
 
 <?php 
 // Echo session variables that were set on previous page 
 echo "Favorite color is " . $_SESSION["favcolor"] . ".<br>"; 
 echo "Favorite animal is " . $_SESSION["favanimal"] . "."; 
 ?> 
 
 </body> 
 </html> 
```

Salida:  
El color favorito es el azul.  
El animal favorito es el perro.

Otra forma de mostrar todos los valores de variable de sesión para una sesión de usuario es ejecutar el siguiente código:
```
<?php 
 print_r($_SESSION); 
 ?> 
```

### ¿Como funciona?

La mayoría de las sesiones establecen una clave de usuario en la computadora del usuario que se ve así: 765487cf34ert8dede5a562e4f3a7e12.  
Luego, cuando se abre una sesión en otra página, escanea la computadora en busca de una clave de usuario.  
Si hay una coincidencia, accede a esa sesión, si no, comienza una nueva sesión.

## Modificar una variable de sesión

Para cambiar una variable de sesión, simplemente sobrescríbala:

**Ejemplo:**
```
<?php 
 session_start(); 
 ?> 
 <!DOCTYPE html> 
 <html> 
 <body> 
 
 <?php 
 // to change a session variable, just overwrite it 
 $_SESSION["favcolor"] = "pink"; 
 print_r($_SESSION); 
 ?> 
 
 </body> 
 </html> 
```

## Destruye una sesión de PHP

Para eliminar todas las variables de sesión globales y destruir la sesión, use la _sesión_ unset () \_ y la _sesión_ destroy () \_:

**Ejemplo:**
```
<?php 
 session_start(); 
 ?> 
 <!DOCTYPE html> 
 <html> 
 <body> 
 
 <?php 
 // remove all session variables 
 session_unset(); 
 
 // destroy the session 
 session_destroy(); 
 ?> 
 
 </body> 
 </html> 

```