---
title: PHP Syntax
localeTitle: Синтаксис PHP
---
# Основной синтаксис PHP

### Начните

Все файлы PHP сохраняются расширением `.php` . PHP-скрипты можно добавлять в любом месте документа. Сценарий PHP начинается с `<?php` и заканчивается на `?>` .

`<?php //PHP code goes here ?>`

### Распечатать

Чтобы напечатать любое утверждение в PHP, мы используем команду `echo` .

#### Пример кода
```
<!DOCTYPE html> 
 <html> 
 <body> 
 
 <h1>My first PHP page</h1> 
 
 <?php 
 echo "Hello World!"; 
 ?> 
 
 </body> 
 </html> 
```

##### ПРИМЕЧАНИЕ. Операторы PHP заканчиваются точкой с запятой `;`

### Объявление переменных

Мы объявляем переменные в PHP, добавив доллар `$` знак перед ними.
```
<?php 
 $x = 5; 
 echo $x; 
 ?> 
```

### Комментарии в PHP

Чтобы написать однострочный комментарий в PHP, мы помещаем hashtag `#` или помещая `//` перед комментарием.
```
<?php 
 # This is a single line comment 
 // This is also a single line comment 
 ?> 
```

Чтобы написать комментарий с двойной строкой, мы начинаем комментарий с `/*` и заканчиваем на `*/` .
```
<?php 
 /* This is a 
 Double line comment. */ 
 ?> 
```

Мы также можем прокомментировать некоторые части кода.

#### Образец кода
```
<!DOCTYPE html> 
 <html> 
 <body> 
 
 <?php 
 // You can also use comments to leave out parts of a code line 
 $x = 5 /* + 15 */ + 5; 
 echo $x; 
 ?> 
 
 </body> 
 </html> 
```

Об этом можно узнать в [руководстве](http://php.net/manual/en/) по [PHP](http://php.net/manual/en/)