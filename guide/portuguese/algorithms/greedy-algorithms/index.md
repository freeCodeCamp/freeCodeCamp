---
title: Greedy Algorithms
localeTitle: Algoritmos Greedy
---
## O que é um algoritmo ganancioso

Você deve ter ouvido falar sobre muitas técnicas de design algorítmico enquanto analisa alguns dos artigos aqui. Alguns deles são :

*   Força bruta
*   Dividir e conquistar
*   Programação gananciosa
*   Programaçao dinamica para nomear alguns. Neste artigo, você aprenderá sobre o que é um algoritmo guloso e como você pode usar essa técnica para resolver muitos problemas de programação que, de outra forma, não parecem triviais.

Imagine que você está indo para caminhadas e seu objetivo é atingir o maior pico possível. Você já tem o mapa antes de começar, mas existem milhares de caminhos possíveis mostrados no mapa. Você é muito preguiçoso e simplesmente não tem tempo para avaliar cada um deles. Aparafuse o mapa! Você começou a caminhar com uma estratégia simples - ser ganancioso e míope. Apenas pegue caminhos que se inclinem mais para cima. Esta parece ser uma boa estratégia para caminhadas. Mas é sempre o melhor?

Depois que a viagem termina e todo o seu corpo está dolorido e cansado, você olha para o mapa de trilhas pela primeira vez. Meu Deus! Há um rio lamacento que eu deveria ter atravessado, em vez de continuar subindo. Isso significa que um algoritmo guloso escolhe a melhor opção imediata e nunca reconsidera suas escolhas. Em termos de otimização de uma solução, isso significa simplesmente que a solução gulosa tentará encontrar soluções ótimas locais - que podem ser muitas - e poderá perder uma solução global ideal.

## Definição formal

Suponha que você tenha uma função objetiva que precisa ser otimizada (maximizada ou minimizada) em um determinado ponto. Um algoritmo Greedy faz escolhas gananciosas em cada etapa para garantir que a função objetivo seja otimizada. O algoritmo Greedy tem apenas uma chance para calcular a solução ótima, para que ela nunca retorne e reverta a decisão.

### Algoritmos gananciosos têm algumas vantagens e desvantagens:

*   É muito fácil criar um algoritmo guloso (ou mesmo vários algoritmos gulosos) para um problema. Analisar o tempo de execução para algoritmos gulosos geralmente será muito mais fácil do que para outras técnicas (como Dividir e conquistar). Para a técnica de dividir e conquistar, não está claro se a técnica é rápida ou lenta. Isso ocorre porque, em cada nível de recursão, o tamanho diminui e o número de subproblemas aumenta.
    
*   A parte difícil é que, para algoritmos gulosos, é preciso trabalhar muito mais para entender os problemas de correção. Mesmo com o algoritmo correto, é difícil provar por que está correto. Provar que um algoritmo guloso é correto é mais uma arte do que uma ciência. Envolve muita criatividade. Normalmente, a criação de um algoritmo pode parecer trivial, mas provar que é realmente correto é um problema completamente diferente.
    

## Problema de agendamento de intervalos

Vamos mergulhar em um problema interessante que você pode encontrar em quase qualquer indústria ou qualquer tipo de vida. Algumas instâncias do problema são as seguintes:

*   Você é dado um conjunto de N horários de palestras para um único dia em uma universidade. A programação para uma aula específica é da forma (s _tempo, f_ tempo) onde s _hora representa a hora de início daquela aula e da mesma forma o f_ representa o tempo de término. Dada uma lista de N horários de palestras, precisamos selecionar um conjunto máximo de palestras a serem realizadas durante o dia, de modo que **nenhuma das palestras se sobreponha, ou seja, se as lições Li e Lj estiverem incluídas em nossa seleção, então > = fim do tempo de i ou vice-versa** .
    
*   Seu amigo está trabalhando como conselheiro do acampamento, e ele é responsável por organizar atividades para um grupo de campistas. Um de seus planos é o seguinte exercício de mini-triathlon: cada competidor deve nadar 20 voltas de uma piscina, depois pedalar 10 milhas e correr 3 milhas.
    
*   O plano é enviar os competidores de maneira escalonada, através da seguinte regra: os competidores devem usar a piscina um de cada vez. Em outras palavras, primeiro um participante nada as 20 voltas, sai e começa a andar de bicicleta.
    
*   Assim que esta primeira pessoa estiver fora da piscina, um segundo competidor começa a nadar nas 20 voltas; assim que ele sai e começa a andar de bicicleta, um terceiro competidor começa a nadar e assim por diante.
    
*   Cada competidor tem um tempo de natação projetado, um tempo de ciclismo projetado e um tempo de execução projetado. Seu amigo quer decidir sobre uma programação para o triatlo: uma ordem para sequenciar o início dos competidores.
    
*   Digamos que o tempo de conclusão de uma programação seja o primeiro momento em que todos os participantes terminarão com as três pernas do triatlo, supondo que as projeções de tempo sejam precisas. Qual é a melhor ordem para enviar pessoas, se alguém quiser que toda a competição termine o mais rápido possível? Mais precisamente, forneça um algoritmo eficiente que produza um cronograma cujo tempo de conclusão seja o menor possível
    

### O problema do agendamento de palestras

Vamos examinar as várias abordagens para resolver esse problema.

1.  **Primeira Hora de Início Primeiro,** ou seja, selecione o intervalo que tem a hora de início mais antiga. Dê uma olhada no exemplo a seguir que quebra essa solução. Essa solução falhou porque pode haver um intervalo que começa muito cedo, mas isso é muito longo. Isso significa que a próxima estratégia que poderíamos tentar seria onde nós olhamos em intervalos menores primeiro. ![Primeiras Horas Iniciais Primeiro](https://algorithmsandme.files.wordpress.com/2015/03/f268b-jobs.png?w=840)
    
2.  **Intervalo Menor Primeiro,** ou seja, você acaba selecionando as palestras na ordem de seu intervalo geral, que não é nada além do `finish time - start time` . Mais uma vez, esta solução não está correta. Olhe o seguinte caso. ![Intervalo mais curto primeiro](https://i.stack.imgur.com/4bz2N.png)
    

Você pode ver claramente que a palestra de intervalo mais curta é a do meio, mas essa não é a solução ideal aqui. Vamos ver outra solução para esse problema, derivando insights dessa solução.

3.  **Intervalo de Conflito Menor Primeiro,** ou seja, você deve procurar intervalos que causem o menor número de conflitos. Mais uma vez, temos um exemplo em que essa abordagem não consegue encontrar uma solução ideal. ![Intervalo menos conflitante primeiro](https://i.stack.imgur.com/5LZ9V.png)

O diagrama nos mostra que o intervalo menos conflitante é aquele no meio com apenas 2 conflitos. Depois disso, só podemos escolher os dois intervalos nas extremidades com conflitos 3 cada. Mas a melhor solução é escolher os 4 intervalos no nível mais alto.

4.  **Primeiro tempo de acabamento primeiro** . Essa é a abordagem que sempre nos fornece a solução mais adequada para esse problema. Nós obtivemos muitos insights de abordagens anteriores e finalmente chegamos a essa abordagem. Classificamos os intervalos de acordo com a ordem crescente de seus tempos de acabamento e então começamos a selecionar os intervalos desde o início. Veja o seguinte pseudocódigo para mais clareza.
```
function interval_scheduling_problem(requests) 
    schedule \gets \{\} 
    while requests is not yet empty 
        choose a request i_r \in requests that has the lowest finishing time 
        schedule \gets schedule \cup \{i_r\} 
        delete all requests in requests that are not compatible with i_r 
    end 
    return schedule 
 end 
```

## Quando usamos Algoritmos Greedy?

Algoritmos Greedy podem ajudá-lo a encontrar soluções para muitos problemas aparentemente difíceis. O único problema com eles é que você pode encontrar a solução correta, mas talvez não consiga verificar se é a correta. Todos os problemas gananciosos compartilham uma propriedade comum que um ótimo local pode eventualmente levar a um mínimo global sem reconsiderar o conjunto de escolhas já considerado.

Algoritmos Greedy nos ajudam a resolver muitos tipos diferentes de problemas. Fique atento aos próximos tutoriais sobre cada um deles.

1.  Problema do caminho mais curto.
2.  Problema Mínimo da Árvore de Abrangência em um Gráfico.
3.  Problema de codificação de Huffman.
4.  Problema de K Centers

#### Mais Informações:

 [![Problemas gananciosos](http://img.youtube.com/vi/HzeK7g8cD0Y/0.jpg)](https://www.youtube.com/watch?v=HzeK7g8cD0Y) 

 [![Problemas gananciosos](http://img.youtube.com/vi/poWB2UCuozA/0.jpg)](https://www.youtube.com/watch?v=poWB2UCuozA)