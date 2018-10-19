---
title: Session Hijacking
localeTitle: Secuestro de sesión
---
## Secuestro de sesión

El secuestro de sesión es una vulnerabilidad causada por un atacante que obtiene acceso al identificador de sesión de un usuario y puede usar la cuenta de otro usuario haciéndose pasar por él. Esto se usa a menudo para obtener acceso a la cuenta de un usuario administrativo.

### Defensa contra ataques de secuestro de sesión en PHP

Para defenderse de los ataques de secuestro de sesión, debe verificar el navegador del usuario actual y la información de ubicación con la información almacenada sobre la sesión. A continuación se muestra una implementación de ejemplo que puede ayudar a mitigar los efectos de un ataque de secuestro de sesión. Comprueba la dirección IP, el agente de usuario y, si la sesión caducó, elimina una sesión antes de reanudarla.

```PHP
<?php 
 session_start(); 
 
 // Does IP Address match? 
 if ($_SERVER['REMOTE_ADDR'] != $_SESSION['ipaddress']) 
 { 
 session_unset(); 
 session_destroy(); 
 } 
 
 // Does user agent match? 
 if ($_SERVER['HTTP_USER_AGENT'] != $_SESSION['useragent']) 
 { 
  session_unset(); 
  session_destroy(); 
 } 
 
 // Is the last access over an hour ago? 
 if (time() > ($_SESSION['lastaccess'] + 3600)) 
 { 
  session_unset(); 
  session_destroy(); 
 } 
 else 
 { 
  $_SESSION['lastaccess'] = time(); 
 } 
```

#### Más información:

*   [manual de seguridad de sesión php.net](https://secure.php.net/manual/en/session.security.php)