---
title: Sessions
localeTitle: Sesiones
---
## Sesiones

Las sesiones son una característica de PHP que le permite almacenar el lado del servidor de datos sobre un usuario. Cuando se configura una sesión, se establece una cookie de navegador que identifica al usuario a PHP para que PHP sepa a qué variables del lado del servidor tiene acceso.

### Comenzando una sesión

En cada página que desee acceder a la sesión, deberá iniciar (o cargar) la sesión. Para hacerlo, ejecute la función `session_start()` que carga el sistema de sesión de PHP.

```PHP
<?php 
 session_start(); 
```

Tenga en cuenta que cuando se utilizan sesiones basadas en cookies, se debe llamar a session\_start () antes de enviar algo al navegador. cualquier otra cosa dará lugar a un error.

### Acceso y configuración de datos en una sesión

La `$_SESSION['key']` es un tipo especial de matriz (que utiliza una cookie del navegador para determinar a qué sesión acceder).

En el siguiente ejemplo, usted ve que la elección del tema por parte del usuario está configurada como número uno.

```PHP
<?php 
 session_start(); 
 $_SESSION['themechoice'] = 1; 
```

Acceder a una variable de sesión es similar a establecer una. Simplemente incluya la variable donde se necesita acceder. Por ejemplo, repitiéndolo como se muestra en el ejemplo de código a continuación.

```PHP
<?php 
 session_start(); 
 echo $_SESSION['themechoice']; 
```

### Eliminar una sesión

Para eliminar una sesión del sistema, ejecute el siguiente código PHP. Desarmará las variables de sesión y las eliminará del sistema.

```PHP
<?php 
 session_unset(); 
 session_destroy(); 
```

### Las sesiones son temporales

Es importante no tratar una sesión como almacenamiento permanente. El desarrollador los aprueba de vez en cuando, siempre que la aplicación se traslada a un nuevo servidor host, la propia aplicación (por ejemplo, un botón de cierre de sesión) e incluso durante el mantenimiento del servidor. Para el almacenamiento a largo plazo de los datos, asegúrese de utilizar una base de datos.

### Seguridad

Por último, pero no menos importante, es importante usar las sesiones de php de forma segura. Lea nuestro artículo sobre [Adquisición de identificador de sesión](/php/security/session-identifier-acquirement) y [secuestro de sesión](/php/security/session-hijacking) para obtener más información.

#### Más información:

*   [manual de la sesión de php.net](https://secure.php.net/manual/en/book.session.php)