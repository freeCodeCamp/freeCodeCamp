---
title: Switch
localeTitle: переключатель
---
## переключатель

В PHP оператор `Switch` очень похож на оператор Javascript `Switch` (см. [Руководство](/javascript/switch-statements) по [переключению Javascript](/javascript/switch-statements) для сравнения и сравнения). Это позволяет проводить быстрые тесты с множеством различных возможных условий, код также более читабельен.

### Синтаксис

```php
<?php 
    // Switch Statement Example 
    switch ($i) { 
        case "free": 
            echo "i is free"; 
            break; 
        case "code": 
            echo "i is code"; 
            break; 
        case "camp": 
            echo "i is camp"; 
            break; 
        default: 
            echo "i is freecodecamp"; 
    } 
```

### Перерыв

`break;` оператор выходит из коммутатора и продолжает запускать остальную часть кода приложения. Если вы не используете `break;` вы можете в конечном итоге запустить mulitple случаях и утверждениях, иногда это может быть желательно, и в этом случае вы не должны включать `break;` заявление.

#### Дополнительная информация:

*   [php.net docs Переключатель](https://secure.php.net/manual/en/control-structures.switch.php)