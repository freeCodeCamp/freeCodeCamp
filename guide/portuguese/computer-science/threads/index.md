---
title: Threads
localeTitle: Tópicos
---
## Tópicos

Uma sequência de instruções de programa fornecidas ao sistema operacional para execução. É a menor seqüência síncrona que pode ser executada. Sendo síncronas, as instruções em um thread são lineares e executadas uma após a outra. Se um programa tiver vários encadeamentos, o programa como um todo pode ser assíncrono, já que esses encadeamentos executam suas próprias instruções independentemente uns dos outros (simultaneamente).

Um thread é uma abstração que os sistemas operacionais usam para representar a CPU para os programas. Não existe um conceito real de threads no código da máquina ou nas linguagens assembly.

Os threads são uma maneira de programar para executar várias tarefas ao mesmo tempo.

Uma distinção comum que se deve fazer é a diferença entre threads e processos. Um thread é filho de um processo, por assim dizer.  
Pode haver qualquer número de encadeamentos filhos no contexto de um processo. Threads podem aumentar a velocidade de execução de um programa, aumentando a porcentagem de CPU usada para a tarefa.  
Observe que aumentar drasticamente o número de encadeamentos em um programa pode exigir muito da CPU e, se 100% da CPU estiver sendo usada, os encadeamentos não afetarão a velocidade da execução.

![Segmentos dentro de um gráfico de processo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Multithreaded_process.svg/440px-Multithreaded_process.svg.png)

Suponha que você tenha vários programas abertos - cada compartilhamento de programa do tempo da CPU é representado por um ou mais encadeamentos associados a esse programa. Quando o **agendador** do sistema operacional decide que é a vez do Programa A executar, o SO alimenta (ou, para ser mais preciso, multiplexa) instruções no thread do Programa A para a CPU, que então executa essas instruções.

Um thread para um determinado programa consiste em algumas ou todas as instruções compiladas do programa, além de algumas informações necessárias para a CPU executar essas instruções.

**Multithreading** é um conceito de programação em que um programa gera vários threads durante a execução, de modo a executar tarefas mais rapidamente.

Aqui está um exemplo simples de multithreading em python que imprime os números de 1 a 10, gerando um thread separado para cada instrução print.
```
import threading 
 
 def print_number(number): 
    print(number) 
 
 if __name__ == "__main__": 
    for i in range(1, 11): 
        threading.Thread(target=print_number, args=(i,)).start() 
```

#### Mais Informações:

*   [Tópicos (Wikipedia)](https://en.wikipedia.org/wiki/Thread_(computing))
*   [Noções básicas sobre multithreading](http://www.nakov.com/inetjava/lectures/part-1-sockets/InetJava-1.3-Multithreading.html)