---
title: Truth Tables
localeTitle: Tabelas Verdade
---
## Tabelas Verdade

Uma tabela de verdade é uma ferramenta matemática usada na álgebra booleana. Consiste em uma coluna cada para as variáveis ​​de função. Uma coluna final contém o valor funcional avaliado para os valores correspondentes das variáveis. Para uma função booleana de n variáveis, sua expansão da tabela de verdade terá 2 ^ n linhas. Isto é porque cada variável tem dois estados possíveis - verdadeiro e falso.

### E

Vamos explorar a tabela de verdade para o operador AND:

| x | y | x AND y | | --- | --- | --- | | F | F | F | | F | T | F | | T | F | F | | T | T | T |

AND é operador binário. Ele opera em duas variáveis, digamos `x` , `y` .

Assim, temos 2 ^ 2 = 4 colunas na nossa tabela de verdade!

A última coluna é o valor funcional - x AND y. A lógica para a operação AND é que, se os valores de x e y forem ambos True apenas, a saída terá o valor True else, seria False.

Da mesma forma tabelas de verdade para outros operadores lógicos -

### NÃO

| x | NÃO X | | --- | --- | | F | T | | T | F |

### OU

| x | y | x ou y | | --- | --- | --- | | F | F | F | | F | T | T | | T | F | T | | T | T | T |

### XOR

| x | y | x XOR y | | --- | --- | --- | | F | F | F | | F | T | T | | T | F | T | | T | T | F |

Operador OR:

| x | y | x ou y | | --- | --- | --- | | F | F | F | | F | T | T | | T | F | T | | T | T | T |

NÃO operador:

| x | NÃO x | | --- | --- | | F | T | | T | F |

Operador de Implicação:

| x | y | x IMPLICAR y | | --- | --- | --- | | F | F | T | | F | T | T | | T | F | F | | T | T | T |

O operador de implicação muitas vezes pode ser confuso para alguns. É útil relacionar exemplos do mundo real para auxiliar a compreensão desse operador. Por exemplo, considere: Se estiver chovendo, eu uso um guarda-chuva. Aqui, assumindo que está chovendo, então eu uso um guarda-chuva (declaração segura) Mas se está chovendo e eu não uso um guarda-chuva, então a declaração não é válida. Apesar disso, se não está chovendo, e eu ainda uso um guarda-chuva, então a afirmação também é válida (não importa realmente se o guarda-chuva é usado ou não, já que não está chovendo. Embora pareça bastante estranho).

No entanto, o operador de implicação pode ser intrigante para proposições envolvidas que são falsas no mundo real. Considerar: Se o sol for feito de água, então 1 + 1 = 3. De acordo com a tabela de verdade da implicação, essa fórmula proposicional é verdadeira.

P implica que Q também pode ser pensado como uma abreviação para NOT (P) OR Q.

Operador de implicação dupla:

| x | y | x <-> y | | --- | --- | --- | | F | F | T | | F | T | F | | T | F | F | | T | T | T |

Tabelas de verdade são uma ferramenta poderosa. Eles podem ser usados ​​para expressar e avaliar funções e operações booleanas simples, circuitos combinacionais complexos e circuitos lógicos sequenciais!

Aqui está a tabela de verdade para o operador OR

| x | y | x ou y | | --- | --- | --- | | F | F | F | | F | T | T | | T | F | T | | T | T | F |

Assim como acima, o operador OR opera com duas variáveis, observe que a única vez que o operador OR é avaliado como True é quando `x` & `y` nega um ao outro.

Vamos fazer mais um, vamos fazer a tabela para a Negação, esta opera em um valor ao invés de dois

| x | NÃO x | | --- | --- | | T | F | | F | T |

Esta regra é mais simples e simplesmente nega o valor original de `x`

#### Mais Informações:

*   [Hiperfísica - Universidade Estadual da Geórgia](http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/truth.html)
*   [Wikipedia](https://en.wikipedia.org/wiki/Truth_table)