---
title: Converting Directly from Binary to Hexadecimal
---
## Converting Directly from Binary to Hexadecimal

You can split your binary numbers to convert them to hexadecimal numbers.

### General method

1. Cut your string of binary numbers into groups of four, starting from the right.
2. Add extra zeros to the front of the first number if it is not four digits.
3. Convert one 4-digit group at a time.

You can use this convertion table:

Colons can be used to align columns.

| Binary | Hexadecimal|
| ------ | ----------:|
| 0000   |          0 |
| 0001   |          1 |
| 0010   |          2 |
| 0011   |          3 |
| 0100   |          4 |
| 0101   |          5 |
| 0110   |          6 |
| 0111   |          7 |
| 1000   |          8 |
| 1001   |          9 |
| 1010   |          A |
| 1011   |          B |
| 1100   |          C |
| 1101   |          D |
| 1110   |          E |
| 1111   |          F |

### Example
Converting the binary number 01101000000001 to hexadecimal.

```
1. 01101000000001 => 01|1010|0000|0001
2. 01|1010|0000|0001 => 0001|1010|0000|0001
3. 0001|1010|0000|0001 => 1A01

```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
More information with illustrations can be found <a href="https://www.wikihow.com/Convert-Binary-to-Hexadecimal#Converting_Long_Binary_Strings_sub">here</a>