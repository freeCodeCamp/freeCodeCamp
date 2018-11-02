---
title: Multithreading
localeTitle: Multithreading
---## Multithreading

Multithreading é um processo de execução de vários processos simultaneamente. Java inicia o programa com um thread principal e outros threads são incluídos no thread principal sempre que qualquer usuário o cria. thread principal é o primeiro thread do usuário em qualquer programa Java. Além disso, a JVM garante que todos os encadeamentos do usuário sejam fechados antes do término do programa.

Um thread tem vantagens e desvantagens.

## Vantagens:

*   Executando código independentemente de outros segmentos.
*   Criação de um design modular.

## Desvantagens:

Condições de corrida e Deadlocks se os segmentos não estiverem sincronizados corretamente.

Tópicos podem ser divididos em duas classes:

*   Threads do Usuário
*   Threads Daemon

Um thread pode ser criado de duas maneiras:

1.  implementando a interface Runnable: Existe apenas um método na interface Runnable, isto é, public void run (). A implementação desse método garantirá que, sempre que esse encadeamento iniciar o código dentro de run (), seja executado.
    
2.  estendendo a classe de segmento. Esta classe também contém public void run () que precisamos sobrescrever para executar nosso próprio código. A desvantagem de usar esse método é que temos uma superclasse em Thread e não podemos estender nenhuma outra classe que possamos desejar.
    

O código para ambos pode ser encontrado aqui: http://ide.geeksforgeeks.org/k7GjcA.

Você notará que, se esse código for executado várias vezes, os resultados poderão ser diferentes. e isso é decidido pelo sistema operacional no qual ele é executado. O sistema operacional pode escolher qualquer thread de um estado executável e pode executá-lo. Nós não temos controle sobre isso. Se houver vários encadeamentos no estado executável (pronto para execução), qualquer um pode ser selecionado. Ainda não depende de prioridade.

Mais detalhes: https://www.ntu.edu.sg/home/ehchua/programming/java/J5e\_multithreading.html