---
title: Literal Improvements
localeTitle: Melhorias Literal
---# Melhorias Literal

O C # 7.0 permite que \_ ocorra como um **_separador de dígitos_** dentro de literais numéricos:
```
var d = 123_456; 
 var x = 0xAB_CD_EF; 
```

Você pode colocá-los onde quiser entre dígitos, para melhorar a legibilidade. Eles não têm efeito sobre o valor.

Além disso, o C # 7.0 introduz **_literais binários_** , para que você possa especificar padrões de bits diretamente, em vez de precisar saber a notação hexadecimal de cor.
```
var b = 0b1010_1011_1100_1101_1110_1111; 

```