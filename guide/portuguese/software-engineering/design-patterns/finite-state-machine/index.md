---
title: Finite State Machine
localeTitle: Máquina de estados finitos
---
A máquina de estados finitos (FSM) é um padrão de design de software em que um dado modelo transita para outros estados comportamentais por meio de entrada externa.

## Máquina de estados finitos

Um FSM é definido por seus **estados** , seu **estado inicial** e as **transições** .

O poder do FSM vem da capacidade de definir claramente diferentes _comportamentos_ em diferentes condições. Normalmente, o FSM é usado com scripts comportamentais em loop que avaliam constantemente a situação atual em um loop ou com eventos.

Para ajudar a formar uma imagem de como isso pode ser aplicado, uma máquina de café será usada como exemplo de uma máquina de estados finitos. Também vamos cobrir um diagrama de estados para visualizar o FSM e fornecer exemplos de codificação.

### Diagrama de estado

![Diagrama de máquina de estado finito de máquina de café](https://raw.githubusercontent.com/arunma/blogimages/master/AkkaFSM/CoffeeMachineFSM.png) Este diagrama mostra três estados possíveis para a máquina de café:

*   Aberto
*   ReadyToComprar
*   Desligado

As linhas entre esses estados mostram quais transições são possíveis entre estados e em qual direção. Essas transições têm condições para quando o FSM precisar mudar entre estados.

*   StartUpMachine Do estado PoweredOff para o estado Aberto, a máquina precisa inicializar. Isso é feito manualmente neste caso.
    
*   depósito> = custo do café O FSM avalia a quantidade de dinheiro depositado em um loop ou quando o valor é alterado (recomendado neste caso) Se você depositar dinheiro suficiente na máquina de café, o FSM passará de 'Aberto' para 'ReadyToBuy'.
    
*   ShutdownMachine A máquina irá automaticamente de Open para PoweredOff através do método ShutDownMachine se a condição 'não mais cafés restantes' for atendida.
    
*   DispenseCafé No estado ReadyToBuy, o usuário pode comprar um café, após o qual ele será fabricado e distribuído. A condição é quando o evento BuyCoffee (! Link to observer pattern!) É acionado. (não mostrado no diagrama)
    
*   CancelarCafé Se o usuário optar por cancelar, a máquina passará de ReadyToBuy para Open.
    
*   ShutDownMachine A máquina irá para o estado PoweredOff
    

### Estados

Em cada estado há um comportamento definido que só será executado quando o objeto estiver nesse estado. Por exemplo, durante a PoweredOff, a máquina de café não irá preparar café antes de ser ligada, durante o estado Aberto, ela aguardará até que haja dinheiro suficiente inserido, até que o comando de desligar seja dado, ou até ficar sem café. Durante esse estado aberto, ele pode executar rotinas como limpeza, que não acontecerão em outros estados.

### Estado inicial

Cada FSM tem um estado inicial, isto significa que estado começa quando é criado e tem que ser definido quando construído ou instanciado. Claro que é possível alterar diretamente o estado se as condições forem atendidas.

### Transições

Cada estado avalia constantemente se deve fazer a transição para outro estado ou fará a transição para outro estado com base em um evento acionado.

## DFA e NFA

Existem dois tipos de autômato finito, determinístico (DFA) e não determinista (NFA). Ambos aceitam idiomas regulares e operam mais ou menos da mesma forma descrita acima, porém com algumas diferenças.

Um DFA aceita ou rejeita uma sequência de símbolos e apenas produz um único cálculo ou autômato para cada sequência de entrada. _Determinístico_ refere-se à unicidade do cálculo. Uma máquina de estados finitos é chamada de DFA, se obedecer às seguintes regras:

1.  Cada uma das suas transições é determinada _exclusivamente_ por seu estado de origem e símbolo de entrada
2.  A leitura de um símbolo de entrada é necessária para cada transição de estado.

Um NFA não precisa obedecer a essas restrições, o que significa que cada DFA também é um NFA. E como ambos reconhecem linguagens regulares, cada NFA pode ser convertido em um DFA equivalente usando o algoritmo de construção do conjunto de potência.

Então, que tipo de regras podemos esperar encontrar nos NFAs, mas não nos DFAs?

1.  Um NFA pode ter uma transição de _cadeia vazia_ (geralmente denotada por um épsilon). O que significa que, quando em um determinado estado com um epsilon para uma regra de transição, a máquina pode passar para o próximo estado sem ler um símbolo de entrada
2.  Em um NFA, cada par de estado e símbolo de transição pode ter vários estados de destino, em oposição aos destinos exclusivos de pares nos DFAs
3.  Cada par de estado e símbolo de transição produz um "ramo" de cálculo para cada um dos seus possíveis destinos, criando algum tipo de sistema multithread.
4.  Um DFA rejeitará a string de entrada se ela cair em qualquer estado diferente do estado de aceitação. Em um NFA, precisamos apenas de um "branch" para chegar em um estado de aceitação para aceitar a string.