---
title: Jump Search
localeTitle: Pesquisa de salto
---
## Pesquisa de salto

Uma pesquisa de salto localiza um item em uma matriz ordenada pulando k itens e, em seguida, verifica se o item desejado está entre o salto anterior e o salto atual.

# Caso Pior da Complexidade

O (√N)

# Trabalho

1.  Defina o valor de k, o número do salto: O tamanho ideal do salto é √N, onde o N é o comprimento do array
2.  Salta o array k-by-k pesquisando pela condição `Array[i] < valueWanted < Array[i+k]`
3.  Faça uma pesquisa linear entre `Array[i]` e `Array[i + k]`

![Pesquisa de Salto 1](https://i1.wp.com/theoryofprogramming.com/wp-content/uploads/2016/11/jump-search-1.jpg?resize=676%2C290)

# Código

Para ver exemplos de implementação de código deste método, acesse este link abaixo:

[Pesquisa de salto - OpenGenus / cosmos](https://github.com/OpenGenus/cosmos/tree/master/code/search/jump_search)

# Créditos

[A imagem da matriz da lógica](http://theoryofprogramming.com/2016/11/10/jump-search-algorithm/)