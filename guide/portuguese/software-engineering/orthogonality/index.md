---
title: Orthogonality
localeTitle: Ortogonalidade
---
## Ortogonalidade

Na engenharia de software, um sistema é considerado ortogonal se a alteração de um de seus componentes alterar apenas o estado desse componente. Por exemplo, considere um programa com três variáveis: a, b e c. Alterar o valor de a, não deve alterar o valor de b ou c, desde que sejam independentes. Essa propriedade é particularmente crítica na depuração de um programa, pois depende da redução do número de partes móveis de um programa para identificar a causa raiz do problema.

Veja a seguinte citação da "Arte da programação UNIX" de Eric S. Raymond.

> A ortogonalidade é uma das propriedades mais importantes que podem ajudar a tornar compactos os designs complexos. Em um design puramente ortogonal, as operações não têm efeitos colaterais; cada ação (seja uma chamada de API, uma invocação de macro ou uma operação de linguagem) altera apenas uma coisa sem afetar outras pessoas. Existe uma e apenas uma maneira de mudar cada propriedade de qualquer sistema que você esteja controlando.

A ortogonalidade é um princípio de design de software para escrever componentes de forma que a alteração de um componente não afete outros componentes. É a combinação de dois outros princípios, a saber, forte coesão e baixo acoplamento.

Ortogonalidade é um termo emprestado da matemática. Por exemplo, duas linhas são ortogonais se forem perpendiculares. No design de software, dois componentes são ortogonais se uma alteração em um não afeta o outro.

Aplicar esse conceito a classes ou outras seções de código resulta em menos acoplamento. Para ser ortogonal, duas classes não podem depender da implementação umas das outras. Eles também não podem compartilhar dados globais. Alterar as partes internas de uma classe não afeta a outra classe. Os componentes devem ser independentes e ter uma única responsabilidade.

Considere um método que leia uma lista de números de um arquivo e os retorne na ordem de classificação. Agora os requisitos mudam e os números estão em um banco de dados. Modificar esse método para acessar o banco de dados faria com que o código do cliente fosse alterado. Se fossem dois métodos diferentes, uma nova fonte não afetaria o método de classificação. Apenas o código do cliente teria que saber a origem dos números.

### Coesão Forte

Dentro de um componente de software, o código deve estar fortemente conectado. Essa é uma indicação de que o código está corretamente dividido. Se um componente tiver duas ou mais partes relativamente desconectadas, isso pode indicar que essas partes devem estar em um componente diferente ou por conta própria.

### Acoplamento solto

Entre os componentes de software, deve haver poucas conexões. Se dois componentes estiverem fortemente acoplados, isso pode indicar que eles precisam ser um componente ou que precisam ser divididos de maneira diferente em mais componentes.

#### Mais Informações:

*   [Ortogonalidade (programação) | Wikipedia](https://en.wikipedia.org/wiki/Orthogonality_(programming))
*   [Princípios da Programação Orientada a Objetos Ortogonais | jasoncoffin.com](http://www.jasoncoffin.com/cohesion-and-coupling-principles-of-orthogonal-object-oriented-programming/)
*   [GRASP - princípios de design orientados a objetos | Wikipedia](https://en.wikipedia.org/wiki/GRASP_(object-oriented_design)

Estouro de pilha: o que é ortogonalidade ?. https://stackoverflow.com/questions/1527393/what-is-orthogonality