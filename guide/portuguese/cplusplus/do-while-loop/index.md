---
title: do while loop
localeTitle: fazer loop while
---
## Do While Loop

O `do while loop` é quase o mesmo que o loop while. O `do while loop` tem o seguinte formato:

```cpp
do 
 { 
  // do something; 
 } while(expression); 
```

Nota: Lembre-se de usar um ponto e vírgula ';' no final da condição.

## Detalhes sobre o loop do-while

O loop do-while é usado sempre que você tem certeza de que um determinado processo (dentro do loop) deve ser executado pelo menos uma vez. Ele tem muitas vantagens, como não inicializar a variável de verificação (por exemplo, char addmore = 'Y') etc. O ponto e vírgula no final do tempo é uma obrigação.

Faça algo primeiro e depois teste se tivermos que continuar. O resultado é que o bloco do é executado pelo menos uma vez. (Porque o teste de expressão vem depois). Dê uma olhada em um exemplo:

```cpp
#include <iostream> 
    using namespace std; 
 
    int main() 
    { 
        int counter, howmuch; 
 
        cin >> howmuch; 
        counter = 0; 
        do 
        { 
            counter++; 
            cout << counter << '\n'; 
        } 
        while ( counter < howmuch); 
        return 0; 
    } 

```