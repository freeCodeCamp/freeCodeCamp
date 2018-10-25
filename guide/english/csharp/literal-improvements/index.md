---
title: Literal Improvements
---

# Literal Improvements

C# 7.0 allows _ to occur as a ***digit separator*** inside number literals:

```
var d = 123_456;
var x = 0xAB_CD_EF;
```

You can put them wherever you want between digits, to improve readability. They have no effect on the value.

Also, C# 7.0 introduces ***binary literals***, so that you can specify bit patterns directly instead of having to know hexadecimal notation by heart.

```
var b = 0b1010_1011_1100_1101_1110_1111;
```