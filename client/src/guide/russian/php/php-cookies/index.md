---
title: PHP Cookies
localeTitle: PHP-файлы cookie
---
# PHP-куки

## Что такое Cookie?

Файл cookie часто используется для идентификации пользователя. Это небольшой файл, который сервер встраивает в компьютер пользователя. Каждый раз, когда тот же компьютер запрашивает страницу с браузером, он отправляет cookie тоже.  
Куки-файлы были разработаны, чтобы быть надежным механизмом для сохранения информации о состоянии или записи активности пользователя.  
Они также могут использоваться для запоминания произвольной информации, которую пользователь ранее вводил в поля формы, такие как имена, адреса, пароли и т. Д.

## Создание файлов cookie с PHP

С помощью PHP вы можете создавать и извлекать значения файлов cookie. Файл cookie создается с помощью функции setcookie ().

`setcookie(name, value, expire, path, domain, secure, httponly);`

Обязательным параметром является только параметр _name_ . Все остальные параметры являются необязательными.

## PHP Создание / извлечение файлов cookie

В следующем примере создается файл cookie с именем «user» со значением «John Doe».  
Срок действия файла cookie истекает через 30 дней (86400 \* 30).  
«/» Означает, что файл cookie доступен на весь сайт (иначе вы можете выбрать нужный каталог).  
Затем мы извлекаем значение cookie «user» (используя глобальную переменную $ \_COOKIE).  
Мы также используем функцию isset (), чтобы выяснить, установлен ли файл cookie:

**Пример:**
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

**Примечание.** Функция setcookie () должна отображаться **перед** тег.

Вывод:  
Cookie 'user' установлен!  
Значение: John Doe

## PHP Изменить значение cookie

Чтобы изменить файл cookie, просто установите значение снова с помощью функции setcookie ():

**Пример:**
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

Вывод:  
Cookie 'user' установлен!  
Значение: Алекс Портер

## PHP Удалить файл cookie

Чтобы удалить файл cookie, используйте функцию setcookie () с датой истечения в прошлом:

**Пример:**
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

Вывод:  
Пользователь cookie пользователя cookie удален.