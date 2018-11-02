---
title: Session Identifier Acquirement
localeTitle: Adquisición de identificador de sesión
---
## Adquisición de identificador de sesión

La adquisición de identificador de sesión es una vulnerabilidad causada por un atacante que puede adivinar el identificador de sesión de un usuario o explotar vulnerabilidades en la propia aplicación o el navegador del usuario para obtener un identificador de sesión. Este ataque es un requisito previo para realizar un ataque de secuestro de sesión.

### Ejemplo

Un atacante tiene algunas opciones para realizar un ataque de adquisición de identificador de sesión.

*   Adivinando el identificador: un identificador de sesión corto y fácil de adivinar podría permitir a un atacante forzar bruscamente el ID de una sesión y entrar.
*   Atacar el navegador: en caso de que almacene su identificador de sesión en las cookies del navegador, si su sitio web es vulnerable a los scripts de sitios cruzados, un atacante podría usar la vulnerabilidad para recopilar cookies de identificador de sesión y acceder a áreas de alto nivel de privilegios (por ejemplo, un panel de administración) .
*   Cambio de la ID a elección del atacante: en versiones anteriores de PHP, pudo establecer la ID de una sesión en la URL. Está deshabilitado de forma predeterminada ahora, si tiene `session.use_trans_sid` duda, asegúrese de que `session.use_trans_sid` sea ​​falso. Esto ya no es un problema común, sin embargo, todavía puede suceder, mejor prevenir que lamentar.

### Defensa contra ataques de identificador de sesión en PHP

Para defenderse de los ataques de Adquisición de identificador de sesión, debe verificar el intento de acceso a la sesión en relación con varios factores para confirmar si se trata de un acceso legítimo y para evitar que el usuario secuestre correctamente la sesión del usuario. A continuación se muestra una implementación de ejemplo que puede ayudar a mitigar los efectos de un ataque de adquisición de identificador de sesión. Comprueba la dirección IP, el agente de usuario y, si la sesión expiró, elimina una sesión antes de que se adquiera.

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

**Consejos:**

*   Almacene mucha información sobre la sesión actual (cadena de agente de usuario, dirección IP, última hora de acceso, etc.)
*   Compare cada solicitud con la información almacenada sobre la sesión (¿coincide? Si no elimina la sesión y requiere que el usuario inicie sesión nuevamente)
*   Las sesiones no deben durar para siempre, deben caducar en un momento determinado para mantener la seguridad de la sesión.
*   Limite la cantidad de sesiones a las que un usuario puede intentar acceder (¿un usuario intentó acceder a más de 1000 sesiones no válidas? Lo más probable es que estén adivinando: evite que la dirección IP intente más sesiones durante unas pocas horas).

#### Más información:

*   [manual de seguridad de sesión php.net](https://secure.php.net/manual/en/session.security.php)