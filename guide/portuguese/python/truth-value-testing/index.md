---
title: Python Truth Value Testing
localeTitle: Teste de valor de verdade em Python
---
[Documentos do Python - Teste de valor de verdade](https://docs.python.org/3/library/stdtypes.html#truth-value-testing)

Qualquer objeto pode ser testado quanto ao valor de verdade, para uso em uma condição `if` ou `while` ou como operando de uma operação booleana como `and` , `or` , ou `not` .

Os seguintes valores são considerados falsos:

*   `None`
*   `False`
*   zero de qualquer tipo numérico, por exemplo, `0` , `0.0` , `0j` , `Decimal(0)` , `Fraction(0, 1)` .
*   qualquer sequência vazia, por exemplo, `''` , `()` , `[]` , `set()` , `range(0)` .
*   qualquer mapeamento vazio, por exemplo, `{}` .
*   instâncias de classes definidas pelo usuário, se a classe definir um `__bool__()` ou `__len__()` , quando esse método retornar `False` ou `0` .

Todos os outros valores são considerados verdadeiros - então, objetos de muitos tipos são sempre verdadeiros.

Operações e funções internas que possuem um resultado booleano sempre retornam `0` ou `False` para false e `1` ou `True` para true, a menos que seja indicado o contrário. (Importante exceção: as operações booleanas `or` `and` sempre retornam um de seus operandos.)