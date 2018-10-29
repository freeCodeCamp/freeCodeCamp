---
title: Session Hijacking
localeTitle: Захват сеанса
---
## Захват сеанса

Захват сеанса - это уязвимость, вызванная тем, что злоумышленник получает доступ к идентификатору сеанса пользователя и может использовать учетную запись другого пользователя, олицетворяя их. Это часто используется для доступа к учетной записи администратора.

### Защита от атак на захват сеансов в PHP

Для защиты от атак с захвата сеанса вам необходимо проверить текущую информацию о браузере и местоположении пользователя в отношении информации, хранящейся в сеансе. Ниже приведен пример реализации, который может помочь смягчить последствия атаки захвата сеанса. Он проверяет IP-адрес, Пользовательский агент и, если сеанс Истек, удаляет сеанс до его возобновления.

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

#### Дополнительная информация:

*   [Руководство по безопасности сессии php.net](https://secure.php.net/manual/en/session.security.php)