---
title: bitwise operator example
---
# Bitwise operators
## Truth table
![truth table](https://4.bp.blogspot.com/-0KPDI41veH0/V-OtObm_UWI/AAAAAAAAAso/CkTS0zUMGKIjlE3gUD0fMhmp-B0zcfBmACLcB/s1600/Bitwise-truthtable-Javaform.jpg "truth table")

The bitwise operators are similar to the logical operators, except that they work on a smaller scale -- binary representations of data.


### Example bitwise operators :
```java
    int a = 60;	      /* 60 = 0011 1100 represents 60 in binary*/
    int b = 13;	      /* 13 = 0000 1101 */
    int c = 0;
    
    c = a & b;        /* 12 = 0000 1100 */
    c = a | b;        /* 61 = 0011 1101 */
    c = a ^ b;        /* 49 = 0011 0001 */
    c = ~a;           /*-61 = 1100 0011  :Invert all bits */
    
    // shift operators : zeros are shifted in to replace the discarded bits
    c = a << 2;       /* 240 = 1111 0000 : Shift left 2 bits*/
    c = a >> 2;       /* 15 = 1111 */
    c = a >>> 2;      /* 15 = 0000 1111 : Zero fill right shift*/
      
```
