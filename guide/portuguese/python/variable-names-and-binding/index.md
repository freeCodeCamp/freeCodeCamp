---
title: Python Variables Names and Binding
localeTitle: Nomes e vinculação de variáveis ​​Python
---
Ter _objetos_ não é útil, a menos que haja uma maneira de usá-los. Para usar um _objeto_ , deve haver uma maneira de referenciá-los. Em Python, isso é feito **vinculando** objetos a **nomes** . Uma visão geral detalhada de pode ser encontrada [aqui](https://docs.python.org/3/reference/executionmodel.html)

Uma maneira de fazer isso é usando uma [_instrução de atribuição_](https://docs.python.org/3/reference/simple_stmts.html#assignment-statements) . Isso é comumente chamado de _atribuição de uma variável_ no contexto do Python. Se estiver falando sobre programação no contexto de outras linguagens, **vincular** um _objeto_ a um **nome** pode ser mais preciso.
```
>>> some_number = 1 
 >>> print(some_number) 
 1 
```

No exemplo acima, o destino da declaração de atribuição é um nome (identificador), `some_number` . O _objeto que_ está sendo atribuído é o número 1. A instrução **liga** o _objeto_ ao **nome** . A segunda instrução, usamos essa ligação, `print` o _objeto ao_ qual `some_number` se refere.

O identificador não é precedido por um _tipo_ . Isso é porque o Python é uma linguagem tipificada dinamicamente. O identificador é ligado a um _objeto_ que possui um _tipo_ , no entanto, o identificador em si pode ser rebatido para outro _objeto_ de um _tipo_ diferente:
```
>>> some_variable = 1 
 >>> print(some_variable) 
 1 
 >>> some_variable = "Hello campers!" 
 >>> print(some_variable) 
 Hello campers! 
```

Ao nomear variáveis, você deve seguir estas regras:

*   Um nome de variável deve começar com uma letra ou o caractere de sublinhado
*   Um nome de variável não pode começar com um número ou caracteres especiais (! @ #% ^ & \*, Etc.)
*   Um nome de variável só pode conter caracteres alfanuméricos e sublinhados (Az, 0-9 e \_)
*   Os nomes de variáveis ​​são sensíveis a maiúsculas e minúsculas (num, NUM e Num são três variáveis ​​diferentes)