---
title: Python Truth Value Testing
localeTitle: Python真值测试
---
[Python Docs - 真值测试](https://docs.python.org/3/library/stdtypes.html#truth-value-testing)

可以测试任何对象的真值，用于`if`或`while`条件或布尔运算的操作数，如`and` ， `or` ，或`not` 。

以下值被视为false：

*   `None`
*   `False`
*   任何数值类型的零，例如， `0` ， `0.0` ， `0j` ， `Decimal(0)` `Fraction(0, 1)`
*   任何空序列，例如`''` ， `()` ， `[]` ， `set()` ， `range(0)` 。
*   任何空映射，例如`{}` 。
*   用户定义的类的实例，如果该类定义`__bool__()`或`__len__()`方法，则该方法返回`False`或`0` 。

所有其他值都被认为是真的 - 所以许多类型的对象总是正确的。

除非另有说明，具有布尔结果的操作和内置函数总是返回`0`或`False`表示false， `1`或`True`表示true。 （重要的例外：布尔运算`or` `and`始终返回其中一个操作数。）