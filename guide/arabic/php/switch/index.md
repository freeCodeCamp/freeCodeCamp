---
title: Switch
localeTitle: مفتاح كهربائي
---
## مفتاح كهربائي

في PHP، و `Switch` البيان هو تشبه الى حد بعيد جافا سكريبت `Switch` البيان (انظر [دليل التبديل جافا سكريبت](/javascript/switch-statements) لمقارنة وعلى النقيض). إنه يسمح باختبار سريع للحالة مع الكثير من الظروف الممكنة المختلفة ، كما أن الشفرة أكثر قابلية للقراءة.

### بناء الجملة

 `<?php 
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
` 

### استراحة

`break;` يخرج بيان التبديل ويذهب لتشغيل بقية رمز التطبيق. إذا كنت لا تستخدم `break;` قد ينتهي بك الأمر إلى تشغيل حالات وبيانات متعددة ، وأحيانًا قد يكون هذا مرغوبًا في هذه الحالة ، ويجب عدم تضمين `break;` بيان.

#### معلومات اكثر:

*   [php.net docs Switch](https://secure.php.net/manual/en/control-structures.switch.php)