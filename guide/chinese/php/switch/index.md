---
title: Switch
localeTitle: 开关
---
## 开关

在PHP中， `Switch`语句与Javascript `Switch`语句非常相似（请参阅[Javascript Switch指南](/javascript/switch-statements)进行比较和对比）。它允许在很多不同的条件下进行快速案例测试，代码也更具可读性。

### 句法

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

### 打破

`break;`语句退出交换机并继续运行应用程序代码的其余部分。如果你不使用`break;`声明你最终可能会运行多个案例和陈述，有时可能需要这种情况，在这种情况下你不应该包括`break;`声明。

#### 更多信息：

*   [php.net docs Switch](https://secure.php.net/manual/en/control-structures.switch.php)