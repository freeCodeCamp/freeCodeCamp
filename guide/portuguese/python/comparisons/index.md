---
title: Python Comparisons
localeTitle: Comparações Python
---
[Documentos do Python - Comparações](https://docs.python.org/3/library/stdtypes.html#comparisons)

Existem oito operações de comparação no Python. Todos eles têm a mesma prioridade (que é maior que a das operações booleanas). Comparações podem ser encadeadas arbitrariamente; por exemplo, `x < y <= z` é equivalente a `x < y and y <= z` , exceto que `y` é avaliado apenas uma vez (mas em ambos os casos `z` não é avaliado quando `x < y` é falso).

Esta tabela resume as operações de comparação:

Operação | Significado  
\--------- | -----------------------  
`<` | estritamente menos do que  
`<=` | menos que ou igual a `>` | estritamente maior que `>=` | Melhor que ou igual a `==` | igual a `!=` | não é igual a `is` | identidade do objeto  
`is not` | identidade do objeto negado

Objetos de diferentes tipos, exceto diferentes tipos numéricos, nunca se comparam iguais. Além disso, alguns tipos (por exemplo, objetos de função) suportam apenas uma noção degenerada de comparação em que quaisquer dois objetos desse tipo são desiguais. Os operadores `<` , `<=` , `>` e `>=` `TypeError` uma exceção `TypeError` ao comparar um número complexo com outro tipo numérico integrado, quando os objetos forem de tipos diferentes que não puderem ser comparados ou em outros casos em que não houver definição encomenda.

As instâncias não idênticas de uma classe normalmente comparam como não iguais, a menos que a classe defina o `__eq__()` .

Instâncias de uma classe não podem ser ordenadas com relação a outras instâncias da mesma classe, ou outros tipos de objetos, a menos que a classe defina métodos suficientes `__lt__()` , `__le__()` , `__gt__()` e `__ge__()` (em geral , `__lt__()` e `__eq__()` são suficientes, se você quiser os significados convencionais dos operadores de comparação).

O comportamento dos operadores `is` e `is not` pode ser personalizado; também eles podem ser aplicados a quaisquer dois objetos e nunca levantar uma exceção.

Também podemos encadear `<` e `>` operadores juntos. Por exemplo, `3 < 4 < 5` retornará `True` , mas `3 < 4 > 5` não. Também podemos encadear o operador de igualdade. Por exemplo, `3 == 3 < 5` retornará `True` mas `3 == 5 < 5` não retornará.

### Comparações de Igualdade - "é" vs "=="

No Python, existem dois operadores de comparação que nos permitem verificar se dois objetos são iguais. O operador `is` e o operador `==` . No entanto, existe uma diferença fundamental entre eles!

A principal diferença entre 'é' e '==' pode ser resumida como:

*   `is` usado para comparar **identidade**
*   `==` é usado para comparar a **igualdade**

## Exemplo

Primeiro, crie uma lista em Python.

```python
myListA = [1,2,3] 
```

Em seguida, crie uma cópia dessa lista.

```python
myListB = myListA 
```

Se usarmos o operador '==' ou o operador 'is', ambos resultarão em uma saída **True** .

```python
>>> myListA == myListB # both lists contains similar elements 
 True 
 >>> myListB is myListA # myListB contains the same elements 
 True 
```

Isso ocorre porque myListA e myListB estão apontando para a mesma variável de lista, que defini no início do meu programa Python. Ambas as listas são exatamente as mesmas, tanto em identidade quanto em conteúdo.

No entanto, e se eu criar agora uma nova lista?

```python
myListC = [1,2,3] 
```

Realizar o operador `==` ainda mostra que ambas as listas são as mesmas, em termos de conteúdo.

```python
>>> myListA == myListC 
 True 
```

No entanto, executar o operador `is` agora produzirá uma saída `False` . Isso ocorre porque myListA e myListC são duas variáveis ​​diferentes, apesar de conter os mesmos dados. Mesmo parecendo iguais, eles são **diferentes** .

```python
>>> myListA is myListC 
 False # both lists have different reference 
```

Resumindo:

*   Uma expressão `is` saída `True` se ambas as variáveis ​​estiverem apontando para a mesma referência
*   Uma expressão `==` gera `True` se ambas as variáveis ​​contiverem os mesmos dados