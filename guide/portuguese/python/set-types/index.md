---
title: Python Set Types
localeTitle: Tipos de conjunto de Python
---
Um objeto definido é uma coleção não ordenada de objetos distintos e hash. Usos comuns incluem testes de associação, remoção de duplicatas de uma sequência e computação de operações matemáticas como interseção, união, diferença e diferença simétrica.

[Python Docs - Definir tipos de conjunto Frozenset](https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset)

**TODO: Explique hash / hashable** Uma tabela de hash é um vetor contíguo de registros, cujos slots vêm em três sabores:

1.  Slots com pares de chave + valor. Chame esses cidadãos.
2.  Slots ainda não utilizados. Chame essas virgens.
3.  Slots que já foram cidadãos, mas cuja chave foi excluída e onde outro par chave + valor ainda não substituiu o slot. Chame estes turds (esse é o termo técnico <0.9 wink>).

Python redimensiona a tabela quando o número de virgens cai abaixo de um terço do o número total de slots. No caso usual, o Python dobra o tamanho da tabela (até um máximo atual de 1.073.741.824 slots). No entanto, se muitos exclusões deixam para trás muitos turds, é possível que o número de virgens ficar muito baixo, apesar de poucos cidadãos permanecerem; nesse caso, Python na verdade encolhe a tabela (até um mínimo atual de 4 slots).

Para evitar a surra quando uma mistura de adições e exclusões é feita quando o tabela está perto de um limiar de redimensionamento, o Python na verdade não verifica o número de virgens após uma exclusão (na verdade, ele pressupõe que em breve você estará substituindo o novamente com os cidadãos). Então, curiosamente, apagar uma chave _nunca_ encolhe a mesa. Uma longa seqüência de exclusões, seguida de um acréscimo, pode encolher isso, no entanto. Uma maneira de forçar possíveis encolhimentos sem adicionar uma chave é:
```
dict = dict.copy() 
```

dict.copy () sempre retorna um dicionário livre de cocaína, do menor poder-de-2 tamanho que deixa pelo menos um terço dos slots virgem.