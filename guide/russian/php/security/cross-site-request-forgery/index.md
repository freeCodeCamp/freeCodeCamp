---
title: Cross Site Request Forgery
localeTitle: Подделка запросов на межсайтовый запрос
---
## Подделка запросов на межсайтовый запрос

Cross-Site Request Forgery - это уязвимость в приложении, вызванная тем, что программист не проверяет, куда был отправлен запрос, - эта атака отправляется пользователю с высоким уровнем привилегий для доступа к приложению более высокого уровня.

### Пример кросс-сайта

Онлайновый блог позволяет пользователям отправлять комментарии и включать изображение в комментарий, панель администратора блога позволяет автору блога удалять комментарий, загружая URL `/admin/deletecomment.php?id=123` . Злоумышленник может создать тег изображения, который загружает URL-адрес комментария удаления, например, `<img src="/admin/deletecomment.php?id=123" />` поэтому в следующий раз, когда администратор просмотрит комментарий, компьютер администратора загрузит URL-адрес и удалите номер комментария 123.

### Защита вашего сайта от атак на подделку запросов на PHP

Чтобы защититься от атаки подделки с запросами на кросс-сайт, вы должны проверить против регулярно измененного токена. URL `/admin/deletecomment.php?id=123` изменится на `/admin/deletecomment.php?id=123&csrf-token=random-per-user-unique-string-here` .

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

**Подсказки:**

*   Храните токен CSRF полностью случайным и изменяйте за сеанс (функции openssl могут помочь с этим)
*   Сеансы PHP полезны для хранения токена CSRF, доступного как для пользователя, так и для сервера, вы также можете сделать эту базу данных процессов управляемой, если вы так склонны.
*   Измените токен CSRF на сеанс каждые 24 часа. В случае приложения с высоким уровнем риска вы можете изменить его при каждом успешном запросе, однако это вызовет проблемы с пользователями, использующими несколько вкладок.

#### Безопасное создание токена

При установке токена CSRF важно, чтобы невозможно угадать ключ. Функции OpenSSL в PHP могут генерировать рандомизированный ключ для вас и хранить в качестве переменной сеанса.

```PHP
<?php 
 session_start(); 
 $_SESSION['csrf-token'] = bin2hex(openssl_random_pseudo_bytes(16)); 
```

#### Использование токена CSRF для выполнения законных запросов

Вы можете включить переменную сеанса, сохраненную ранее с вашим токеном CSRF в URL-адресе, убедиться, что законному администратору разрешено удалять комментарии. Без правильного токена запрос будет заблокирован.

```PHP
<?php 
 session_start(); 
 echo '<a href="/admin/?id=123&csrf-token='.$_SESSION['csrf-token'].'">Delete Comment</a>'; // Only the logged in user has access to the CSRF Token - the token isn't accessible to the attacker preventing their attack from being successful. 
```

#### Дополнительная информация:

*   [OWASP Wiki - Подделка запросов на межсайтовый запрос](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF))
*   [Руководство пользователя php.net bin2hex ()](https://secure.php.net/manual/en/function.bin2hex.php)
*   [Руководство пользователя php.net openssl\_random\_pseudo\_bytes ()](https://secure.php.net/manual/en/function.openssl-random-pseudo-bytes.php)