---
title: Cross Site Request Forgery
localeTitle: Cross Site Request Forgery
---
## Cross Site Request Forgery

La falsificación de solicitudes de sitios cruzados es una vulnerabilidad en la aplicación causada por el programador que no comprueba desde dónde se envió una solicitud: este ataque se envía a un usuario de alto nivel de privilegios para obtener un acceso de nivel superior a la aplicación.

### Ejemplo de Cross Site Request Forgery Attack

Un blog en línea permite a los usuarios enviar comentarios e incluir una imagen en el comentario, el panel de administración del blog permite al autor del blog eliminar un comentario al cargar la URL `/admin/deletecomment.php?id=123` . Un usuario malintencionado podría crear una etiqueta de imagen que carga la url para eliminar comentarios, por ejemplo, `<img src="/admin/deletecomment.php?id=123" />` así que la próxima vez que un administrador vea el comentario, la computadora del administrador cargará la url y eliminar el comentario número 123.

### Defendiendo su sitio web de ataques de falsificación de solicitud de sitios cruzados en PHP

Para defenderse contra un ataque de falsificación de solicitud de sitios cruzados, debe verificar contra un token cambiado regularmente. La url `/admin/deletecomment.php?id=123` cambiaría a `/admin/deletecomment.php?id=123&csrf-token=random-per-user-unique-string-here` .

```PHP
<?php 
 // Checking a request's CSRF Token (if true the comment is deleted, if false the comment remains.) 
 session_start(); 
 if ($_GET['csrf-token'] == $_SESSION['csrf-token']){ 
  return true; 
 } else { 
  return false; 
 } 
```

**Consejos:**

*   Mantenga un token CSRF completamente aleatorio y cambie por sesión (las funciones openssl pueden ayudar con esto)
*   Las sesiones de PHP son útiles para almacenar un token CSRF accesible tanto para el usuario como para el servidor, también puede hacer que este proceso de base de datos sea manejado si así lo desea.
*   Cambie el token CSRF en una sesión cada 24 horas. En una aplicación de alto riesgo, es posible que desee cambiarla en cada solicitud exitosa, sin embargo, esto causará problemas con los usuarios que usan varias pestañas.

#### Generando un Token de forma segura

Al configurar un token CSRF, es importante que sea imposible adivinar la clave. Las funciones OpenSSL en PHP pueden generar una clave aleatoria para usted y almacenar como una variable de sesión.

```PHP
<?php 
 session_start(); 
 $_SESSION['csrf-token'] = bin2hex(openssl_random_pseudo_bytes(16)); 
```

#### Uso de un token CSRF para completar solicitudes legítimas

Puede incluir la variable de sesión que guardó anteriormente con su token CSRF en la URL para asegurarse de que un administrador legítimo tenga permiso para eliminar comentarios. Sin el token correcto se bloqueará la solicitud.

```PHP
<?php 
 session_start(); 
 echo '<a href="/admin/?id=123&csrf-token='.$_SESSION['csrf-token'].'">Delete Comment</a>'; // Only the logged in user has access to the CSRF Token - the token isn't accessible to the attacker preventing their attack from being successful. 
```

#### Más información:

*   [Wiki de OWASP - Solicitud de falsificación de sitios cruzados](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF))
*   [php.net bin2hex () manual](https://secure.php.net/manual/en/function.bin2hex.php)
*   [php.net openssl\_random\_pseudo\_bytes () manual](https://secure.php.net/manual/en/function.openssl-random-pseudo-bytes.php)