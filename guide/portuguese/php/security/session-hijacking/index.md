---
title: Session Hijacking
localeTitle: Sequestro de Sessão
---
## Sequestro de Sessão

O sequestro de sessão é uma vulnerabilidade causada por um invasor que obtém acesso ao identificador de sessão de um usuário e pode usar a conta de outro usuário para representá-lo. Isso geralmente é usado para obter acesso a uma conta de usuário administrativo.

### Defesa contra ataques de sequestro de sessão em PHP

Para se defender contra ataques de invasão de sessão, você precisa verificar as informações de localização e navegador do usuário atual em relação às informações armazenadas sobre a sessão. Abaixo está um exemplo de implementação que pode ajudar a mitigar os efeitos de um ataque de seqüestro de sessão. Ele verifica o endereço IP, o agente do usuário e se a sessão expirou, removendo uma sessão antes que ela seja retomada.

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

#### Mais Informações:

*   [manual de segurança da sessão do php.net](https://secure.php.net/manual/en/session.security.php)