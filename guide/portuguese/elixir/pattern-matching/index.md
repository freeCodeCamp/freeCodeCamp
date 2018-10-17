---
title: Pattern Matching
localeTitle: Correspondência de Padrões
---
## Correspondência de Padrões

A correspondência de padrões é uma técnica que o Elixir herda da forma Erlang. É uma técnica muito poderosa que nos permite extrair subestruturas mais simples de estruturas de dados complicadas, como listas, tuplas, mapas, etc.

Um jogo tem duas partes principais, uma esquerda e uma direita. O lado direito é uma estrutura de dados de qualquer tipo. O lado esquerdo tenta combinar a estrutura de dados no lado direito e vincular quaisquer variáveis ​​à esquerda à respectiva subestrutura à direita. Se uma correspondência não for encontrada, o operador gerará um erro.

A correspondência mais simples é uma variável solitária à esquerda e qualquer estrutura de dados à direita. Essa variável corresponderá a qualquer coisa. Por exemplo:  
`x = 12`  
`x = "Hello"`  
`IO.puts(x)`

Você pode colocar variáveis ​​dentro de uma estrutura para poder capturar uma subestrutura. Por exemplo:  
`[var_1, _unused_var, var_2] = [{"First variable"}, 25, "Second variable" ]`  
`IO.puts(var_1)`  
`IO.puts(var_2)`

Isto irá armazenar os valores, `{"First variable"}` no var _1 e `"Second variable"` no var_ 2. Há também uma variável especial (ou variáveis ​​prefixadas com '\_') que funciona exatamente como outras variáveis, mas diz elixir, "Certifique-se de que algo está aqui, mas não me importo com o que é". No exemplo anterior, \_unused\_var era uma dessas variáveis.

Podemos combinar padrões mais complicados usando essa técnica. Por exemplo, se você quiser desembrulhar e obter um número em uma tupla que esteja dentro de uma lista que esteja em uma lista, use o seguinte comando:  
`[_, [_, {a}]] = ["Random string", [:an_atom, {24}]]`  
`IO.puts(a)`

O programa acima gera o seguinte resultado -  
`24`

Isto irá ligar um para 24. Outros valores são ignorados como estamos usando '\_'.

Na correspondência de padrões, se usarmos uma variável à direita, seu valor será usado. Se você quiser usar o valor de uma variável à esquerda, você precisará usar o operador pin.

Por exemplo, se você tem uma variável "a" com o valor 25 e você quer combiná-la com outra variável "b" com valor 25, então você precisa digitar -  
`a = 25`  
`b = 25`  
`^a = b`

A última linha corresponde ao valor atual de um, em vez de atribuí-lo, ao valor de b. Se tivermos um conjunto não correspondente do lado esquerdo e direito, o operador de correspondência gera um erro. Por exemplo, se tentarmos combinar uma tupla com uma lista ou uma lista de tamanho 2 com uma lista de tamanho 3, um erro será exibido.