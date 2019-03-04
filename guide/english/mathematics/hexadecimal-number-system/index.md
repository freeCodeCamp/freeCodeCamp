---
title: Hexadecimal Number System
---
## Hexadecimal Number System:
Hexadecimal number system is a numbering system that uses base 16. Hexa = 6 and decimal = 10, combination of 'hexa' and 'decimal' gives use the base 16 number system. The numbers in hexadecimal are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 = A, 11 = B, 12 = C, 13 = D, 14 = E and 15 = F.
The hexadecimal number system is very useful in the field of computing like Cryptography.

## Adding Hexadecimal Numbers:

Adding hex numbers are just like adding decimal with a twist.

Lets look at the example below:
```
 0x14
+0x10
______
 0x24
 ```

`4 + 0 = 4` and `1 + 1 = 2`. Simple, right? 
 
 How about when there is a carry over?
 ```
   0x1A
 + 0x1B
 _______
   0x
```

`A(10) + B(11) = 21`. `21 % 16 = 5`.

```
     1
   0x1A
 + 0x1B
 _______
   0x 5
```
Now, `1 + 1 + 1 = 3`. Thus,
   
```
     1
   0x1A
 + 0x1B
 _______
   0x35
```

When there is a carry over in hex (meaning two numbers adding together is greater than 15), mod the number by 16 and carry a one over. 
This is analogous to the decimal system.
  
#### More Information:
- <a href='https://en.m.wikipedia.org/wiki/Hexadecimal'>Wikipedia</a>
- [Hex Calc](https://www.calculator.net/hex-calculator.html)


 
