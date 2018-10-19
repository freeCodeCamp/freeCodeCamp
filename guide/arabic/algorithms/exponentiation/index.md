---
title: Exponentiation
localeTitle: الأسي
---
## الأسي

بعد كتابة رقمين صحيحين و n ، اكتب دالة لحساب ^ n.

#### الشفرة

نموذج حسابي: تقسيم وقهر.

 `int power(int x, unsigned int y) { 
    if (y == 0) 
        return 1; 
    else if (y%2 == 0) 
        return power(x, y/2)*power(x, y/2); 
    else 
        return x*power(x, y/2)*power(x, y/2); 
 } 
` 

تعقيد الوقت: O (n) | تعقيد الفضاء: O (1)

#### الحل الأمثل: O (تسجيل الدخول)

 `int power(int x, unsigned int y) { 
    int temp; 
    if( y == 0) 
        return 1; 
    temp = power(x, y/2); 
    if (y%2 == 0) 
        return temp*temp; 
    else 
        return x*temp*temp; 
 } 
` 

## الأسيوي وحدات

أعطيت ثلاثة أرقام x، y و p، compute (x ^ y)٪ p

 `int power(int x, unsigned int y, int p) { 
    int res = 1; 
    x = x % p; 
    while (y > 0) { 
        if (y & 1) 
            res = (res*x) % p; 
 
        // y must be even now 
        y = y>>1; 
        x = (x*x) % p; 
    } 
    return res; 
 } 
` 

تعقيد الوقت: O (Log y).