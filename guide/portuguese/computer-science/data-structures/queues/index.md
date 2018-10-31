---
title: Queues
localeTitle: Filas
---
## Filas

Fila é uma Estrutura de Dados First In First Out (FIFO) em português o primeiro a entrar é o primeiro a sair. Muitos algoritmos usam filas em seu núcleo para melhorar o desempenho.

A fila é um dos tipos abstratos de dados abstratos (ADT). É semelhante a filas que temos em filmes ou supermercados. A primeira pessoa a chegar será servida primeiro, certo? Da mesma forma, o primeiro elemento a ser inserido será removido primeiro. Existem vários tipos de filas, como

1.  Fila Simples (ou Fila)
2.  Fila Circular (ou Simplismente encadeada)
3.  Fila de prioridade
4.  Dequeue (fila dupla terminada)

Se você puder entender a fila simples (que daqui em diante será chamada de 'Fila'), todas as outras serão igualmente fáceis, com poucas modificações.

As operações mais comuns disponíveis na fila são,

1.  Add / Offer - insere um elemento no final da fila.
2.  Remove / Poll - Remove um elemento do começo da fila.
3.  Peek - Retorna o elemento no início da fila, mas não o remove.
4.  Size / Count - Retorna o número de elementos atualmente presentes na fila.
5.  IsEmpty - Verifique se a fila está vazia ou não.

A implementação de uma fila é possível usando arrays ou listas vinculadas. A seguir, uma implementação de matriz simples da estrutura de dados da fila com suas operações mais comuns.

```javascript  
var Fila = function() {
    var fila = [];
    var inicio = 0;
    var final = 0;
    return {
        isEmpty: function() {
            return inicio >= final || fila.length === 0;
        },
        add: function(elem) {
            /* Você também pode fazer fila.push(elem) em JavaScript. 
              Assim é como se fazem em outras linguagens */
            fila[final++] = elem;
        },
        remove: function() {
            if (!this.isEmpty()) {
                return fila[inicio++]; // ou fila.shift()
            }
            else {
                throw new Error("A fila está vazia.");
            }
        },
        peek: function() {
            if (!this.isEmpty()) {
                return fila[inicio];
            }
        }
    }
};

var fila = new Fila();
console.log(fila.isEmpty()); // Verdadeiro
fila.add(1);
fila.add(2);
console.log(fila.remove()); // 1
console.log(fila.peek()); // 2
console.log(fila.remove()); // 2
console.log(fila.remove()); // exception
```

#### Aplicações

*   Simulação
*   Agendamento (Job Scheduling, Disk Scheduling)
*   Gestão Compartilhada de Recursos
*   Buffer do Teclado
*   Largura Primeira Pesquisa
*   Para lidar com o congestionamento na rede

#### Mais Informações:

*   [Mais informações sobre filas - GeeksForGeeks](http://www.geeksforgeeks.org/queue-data-structure/)
*   [Resolva Desafios Usando Filas - Hackerrank](https://www.hackerrank.com/domains/data-structures/queues)
*   [Vídeo do HackerRank Stacks and Queues](https://www.youtube.com/watch?v=wjI1WNcIntg)
