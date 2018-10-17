---
title: Big O Notation
localeTitle: Notação Big O
---
## Notação Big O

_Como cientista da computação, se você estiver trabalhando em um software importante, provavelmente precisará ser capaz de estimar a velocidade com que algum algoritmo ou outro vai rodar._

A notação Big O é usada na ciência da computação para descrever o desempenho ou a complexidade de um algoritmo. Na verdade, a notação Big O é um símbolo especial que informa a velocidade do algoritmo. É claro que você usará algoritmos predefinidos com frequência - e, quando fizer isso, é vital entender o quão rápido ou lento eles são.

#### Qual notação de Big O parece?

![](https://user-images.githubusercontent.com/5860906/31781171-74c6b48a-b500-11e7-9626-f715b37b10f0.png) Isso informa o número de operações que um algoritmo fará. Chama-se notação Big O porque você coloca um “Big O” na frente do número de operações.  

#### Big O estabelece um pior tempo de execução

Digamos que você é um médico que está tratando Harry Abbit, você pode olhar para os registros eletrônicos que estão relacionados com a história médica de Harry Abbit (ele é a primeira pessoa em uma lista). Vamos considerar a situação em que sua vida depende de todos os dados médicos disponíveis. Suponha que você esteja usando uma pesquisa simples para procurar uma pessoa nos registros eletrônicos. Você sabe que a pesquisa simples leva O (n) tempo para ser executada, então você terá que procurar por cada entrada do Abbit. Claro, você notou que o Abbit é a primeira entrada, então você não tem que olhar para cada entrada - você a encontrou na primeira tentativa.

_Esse algoritmo levou O (n) tempo? Ou levou O (1) tempo porque você encontrou a pessoa na primeira tentativa?_

Nesse caso, esse é o melhor cenário. Mas a notação Big O é sobre o pior cenário possível. Isso é O (n) tempo (busca simples ainda leva). É uma garantia de que a busca simples nunca será mais lenta que a hora O (n).

#### Os tempos de execução do algoritmo crescem a taxas diferentes

Vamos supor que leva 1 milissegundo para verificar uma entrada. Com a pesquisa simples, o médico precisa verificar 10 entradas, então a pesquisa demora 10 ms para ser executada. Por outro lado, ele só precisa verificar 3 elementos com _algoritmo de busca binária_ (log10 é aproximadamente 3), de modo que a pesquisa leve 3 ms para ser executada.

Mas, realisticamente, a lista terá mais de cem elementos.

_Se isso acontecer, quanto tempo demora a pesquisa simples? Quanto tempo demora a pesquisa binária?_

O tempo de execução para pesquisa simples com 1 bilhão de itens será de 1 bilhão de ms, o que equivale a 11 dias. O problema é que os tempos de execução para pesquisa binária e pesquisa simples _não crescem na mesma taxa_ .

![](https://user-images.githubusercontent.com/5860906/31781165-723a053c-b500-11e7-937c-7b33db281efe.png)

Assim, à medida que a lista de números aumenta, a pesquisa binária torna-se muito mais rápida que a pesquisa simples. Ou seja, à medida que o número de itens aumenta, a pesquisa binária leva um pouco mais de tempo para ser executada. Mas a pesquisa simples leva _muito_ mais tempo para ser executada. Assim, à medida que a lista de números aumenta, a pesquisa binária torna-se muito mais rápida que a pesquisa simples.

_É por isso que não é suficiente saber quanto tempo um algoritmo leva para ser executado - você precisa saber como o tempo de execução aumenta à medida que o tamanho da lista aumenta. É aí que entra a notação Big O._

#### A notação Big O permite comparar o número de operações

Por exemplo, suponha que você tenha uma lista de tamanho n. A pesquisa simples precisa verificar cada elemento, portanto, serão necessárias n operações. O tempo de execução na notação Big O é O (n).

_Onde estão os segundos?_

Não há nenhum - Big O não diz a você a velocidade em segundos. _A notação Big O permite comparar o número de operações._ Diz-lhe quão rápido o algoritmo cresce.

![](https://user-images.githubusercontent.com/5860906/31781175-768c208e-b500-11e7-9718-e632d1391e2d.png) </ p

#### Tempos de execução mais comuns para algoritmos

Uma lista dos tempos de execução mais comuns para algoritmos em termos de notação Big O. Aqui estão cinco tempos de execução do Big O que você encontrará muito, classificados do mais rápido para o mais lento:

1.  O (log n), também conhecido como _tempo de log_ . Exemplo: pesquisa binária.
2.  O (n), também conhecido como _tempo linear_ . Exemplo: pesquisa simples.
3.  O (n \* log n) Exemplo: um algoritmo de classificação rápida, como quicksort (no capítulo 4).
4.  O (n2) Exemplo: um algoritmo de classificação lenta, como a classificação de seleção (surgindo no capítulo 2).
5.  Em!) Exemplo: um algoritmo muito lento, como o vendedor ambulante (chegando próximo!).

_Este artigo cobre apenas os conceitos básicos do Big O. Para uma explicação mais detalhada, dê uma olhada em seus respectivos guias FreeCodeCamp para algoritmos._

### Mais Informações

*   [Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-o-notation)
*   [Big O folha de fraude](http://bigocheatsheet.com/)