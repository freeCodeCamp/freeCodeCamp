---
title: C++ Lists
localeTitle: Listas de C ++
---
# O que é uma lista STL?

Listas em C ++ são uma ferramenta poderosa semelhante ao seu primo mais conhecido, o C ++ Vectors. Enquanto os vetores são um contêiner seqüencial Onde os elementos são indexados em uma cadeia contínua, as listas também são um contêiner seqüencial, mas são organizadas de maneira diferente. Elementos de lista apontam para o próximo elemento, então todos os elementos são ordenados em seqüência, mas não usam indexação. Como? Você pode perguntar. Eles fazem isso não indexando, mas usando uma ferramenta especial chamada iteradores. Iteradores são como ponteiros especiais cujo trabalho é manter a ordem dos elementos da lista como a ligação entre dois vagões de trem. Aqui está um bom visual de como as listas são organizadas em comparação com vetores e matrizes. ![img](https://cdn-media-1.freecodecamp.org/imgr/SiU8uTe.png)

## Como declarar uma lista

Se você quiser declarar uma lista de números, escreva:

'' 'std :: list Números;'''