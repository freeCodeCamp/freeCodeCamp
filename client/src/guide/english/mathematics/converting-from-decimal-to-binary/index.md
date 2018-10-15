---
title: Converting from Decimal to Binary
---
## Converting from Decimal to Binary

You can use remainders to convert decimal numbers to binary numbers.

### General method

1) Divide the original decimal number by 2 and record the quotient and the remainder.
2) Repeat the first step replacing the original decimal number with the last quotient you found until you get a quotient which is equal to 0.
3) Take the last remainder you recorded to be your MSB (most significant bit) and the first remainder you recorded to be your LSB (least significant bit). Write down the remainders in the reverse of the order from how you generated them.

### Examples

Converting the decimal number 30 to binary.

```
30 / 2 = 15 r 0
15 / 2 = 7 r 1
7 / 2 = 3 r 1
3 / 2 = 1 r 1
1 / 2 = 0 r 1

Writing out the remainders bottom to top gives you the bit pattern:

11110

Checking your answer by converting the binary number back to decimal:

(1*2^4)+(1*2^3)+(1*2^2)+(1*2^1)+(0*2^0) = 30

So your answer is correct.
```

Converting the decimal number 116 to binary.

```
116 / 2 = 58 r 0
58 / 2 = 29 r 0
29 / 2 = 14 r 1
14 / 2 = 7 r 0
7 / 2 = 3 r 1
3 / 2 = 1 r 1
1 / 2 = 0 r 1

Writing out the remainders bottom to top gives you the bit pattern:

1110100

Checking your answer by converting the binary number back to decimal:

(1*2^6)+(1*2^5)+(1*2^4)+(0*2^3)+(1*2^2)+(0*2^1)+(0*2^0) = 116

So your answer is correct.
```


