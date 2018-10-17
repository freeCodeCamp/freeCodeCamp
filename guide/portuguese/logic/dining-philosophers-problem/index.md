---
title: Dining Philosophers Problem
localeTitle: Jantar Filosofos Problema
---
## Jantar Filosofos Problema

Na ciência da computação, o problema dos filósofos de jantar é um problema exemplar frequentemente usado no projeto de algoritmo simultâneo para ilustrar problemas de sincronização e técnicas para resolvê-los. Foi originalmente formulado em 1965 por Edsger Dijkstra como um exercício de exame para estudantes, apresentado em termos de computadores competindo pelo acesso a periféricos de drives de fita. Logo depois, Tony Hoare deu ao problema sua formulação atual.

Em palavras simples, o problema dos filósofos de jantar é uma ilustração de como o acesso sincronizado a um recurso compartilhado pode resultar na criação de uma situação de conflito.

#### Sincronização e Deadlock

**A sincronização** é usada para controlar o acesso simultâneo a um recurso compartilhado. Isso é necessário em qualquer situação em que vários atores independentes possam estar competindo pelo uso de um recurso. Como há apenas um recurso disponível, usamos a sincronização para evitar confusão e caos.

Um **Deadlock** é um estado do sistema em que nenhum progresso é possível. Essa situação pode ocorrer quando a sincronização é imposta e muitos processos acabam aguardando um recurso compartilhado que está sendo mantido por algum outro processo. Nesse caso, os processos continuam aguardando e não executam mais.

#### Declaração do problema

Cinco filósofos silenciosos sentam-se em uma mesa redonda com tigelas de espaguete. Garfos são colocados entre cada par de filósofos adjacentes.

Cada filósofo deve alternadamente pensar e comer. No entanto, um filósofo só pode comer espaguete quando tem garfos esquerdo e direito. Cada garfo pode ser mantido por apenas um filósofo e, portanto, um filósofo só pode usar o garfo se não estiver sendo usado por outro filósofo. Depois que um filósofo individual termina de comer, eles precisam colocar os dois garfos de modo que os garfos fiquem à disposição dos outros. Um filósofo pode pegar o garfo à direita ou o da esquerda à medida que se tornam disponíveis, mas não pode começar a comer antes de pegar os dois garfos. ( **Sincronização** )

Comer não é limitado pelas quantidades remanescentes de espaguete ou espaço estomacal; um suprimento infinito e uma demanda infinita são assumidos.

O problema é como projetar uma disciplina de comportamento (um algoritmo concorrente) tal que nenhum filósofo passará fome; isto é, cada um pode continuar alternando entre comer e pensar, assumindo que nenhum filósofo pode saber quando outros podem querer comer ou pensar. ( **Evitar deadlock** )

Inicialmente, pode parecer que o impasse não é facilmente possível. Para ver que uma solução adequada para esse problema não é óbvia, considere uma proposta na qual cada filósofo é instruído a se comportar da seguinte maneira:

1.  pense até que o garfo esquerdo esteja disponível; quando for, pegue-a;
2.  pense até que o garfo direito esteja disponível; quando for, pegue-a;
3.  quando os dois garfos são mantidos, coma por um período fixo de tempo;
4.  depois, coloque o garfo direito para baixo;
5.  depois, abaixe o garfo esquerdo;
6.  repita desde o começo.

Essa tentativa de solução falha porque permite que o sistema atinja um estado de deadlock, no qual nenhum progresso é possível. Este é um estado no qual cada filósofo pegou o garfo para a esquerda e está esperando a bifurcação à direita se tornar disponível, ou vice-versa. Com as instruções dadas, esse estado pode ser alcançado e, quando atingido, os filósofos aguardarão eternamente um pelo outro para liberar uma bifurcação. ( **Deadlock e Starvation** )

Existem muitas soluções possíveis para evitar o Deadlock. Se olharmos de perto, um problema no algoritmo acima é que todos os filósofos têm chances iguais (têm a mesma prioridade) de adquirir um fork. Isso impede que qualquer pessoa adquira dois garfos e todo o sistema é interrompido.

Soluções incluem: -

1.  Prioridade - Alguns filósofos recebem prioridade mais alta, de modo que a chance de adquirir os dois garfos é aumentada.
2.  Preempção (Polidez) - Os filósofos renunciam ao garfo adquirido sem comer, caso o outro garfo não esteja disponível.
3.  Arbitragem - Um mediador aloca garfos garantindo que dois garfos sejam dados a uma pessoa, ibnstaed de um para muitos.

#### Mais Informações:

https://www.wikiwand.com/en/Dining _philosophers_ problem