---
title: queue
localeTitle: fila
---
## Filas

`queue` é um dos contêineres mais usados ​​em C ++. Um contêiner é uma estrutura de dados que armazena uma coleção de objetos, alguns em ordem, outros não. Todos os contêineres possuem um conjunto diferente de funções que permitem acessar um objeto (s) nessa coleção.

`std::queue` faz parte da biblioteca padrão C ++ (daí o prefixo `std::` e permite que você armazene dados na ordem First In First Out (FIFO). NOTA: **Todos os objetos em uma fila devem ser do mesmo tipo de dados**

O tipo de dados armazenado em uma fila fica entre colchetes angulares ao lado da palavra-chave da fila. Por exemplo, se você gostaria de armazenar uma coleção de inteiros, a fila seria `std::queue<int> queue_name`

### Explicação LIFO da fila

`queue` nos permite enviar / enfileirar e colocar / soltar em ordem específica. **Empurrar** significa inserir um objeto na frente da fila. **Pop** significa retirar o objeto "mais antigo" do final da fila. Então, quando você empurra, está na frente e, quando você abre, extrai o elemento mais antigo.

![alt text](https://github.com/mohammadaziz313/helloworld/blob/master/Fifo_queue.png "Exemplo de Enfileiramento e Desenfileiramento de Filas FIFO")

### Operações de fila

O contêiner de filas suporta as seguintes operações:

*   empurrar (enfileirar)
*   pop (dequeue)
*   vazio
*   Tamanho
*   frente
*   costas

#### Empurrar

Permite inserir um novo elemento no final da fila, depois do último elemento atual.

```cpp
//Push operation in Queue 
 #include <iostream>       // std::cout 
 #include <queue>          // std::queue 
 
 int main () 
 { 
  std::queue<int> q; 
 
  q.push(1);    //Pushing 1 at front of the queue 
  q.push(2);    //Pushing 2 at front of the queue 
 
  return 0; 
 } 
```

#### Frente

Permite que você acesse o próximo elemento na fila sem removê-lo. O próximo elemento é o elemento "mais antigo" na fila.

```cpp
//Front operation in Queue 
 #include <iostream>       // std::cout 
 #include <queue>          // std::queue 
 
 int main () 
 { 
  std::queue<int> q; 
 
  q.push(1);    //Pushing 1 at front of the queue 
  q.push(2);    //Pushing 2 at front of the queue 
 
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue 
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue 
 
  return 0; 
 } 
```

```
Output: 
 1 
 1 
```

#### Pop

Permite que você remova o próximo elemento na fila, reduzindo efetivamente seu tamanho em um. O elemento removido é o elemento "mais antigo".

```cpp
//Pop operation in Queue 
 #include <iostream>       // std::cout 
 #include <queue>          // std::queue 
 
 int main () 
 { 
  std::queue<int> q; 
 
  q.push(1);    //Pushing 1 at front of the queue 
  q.push(2);    //Pushing 2 at front of the queue 
 
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue 
  q.pop();                        //Removing the oldest element 
  std::cout<<q.front()<<'\n';     //Accessing the front of the queue 
  q.pop();                        //Removing the oldest element 
 
  return 0; 
 } 
```

```
Output: 
 1 
 2 
```

#### Tamanho

Retorna o número de elementos na `queue` .

```cpp
//Size operation in Queue 
 #include <iostream>       // std::cout 
 #include <queue>          // std::queue 
 
 int main () 
 { 
  std::queue<int> q; 
 
  q.push(1);    //Pushing 1 at front of the queue 
  q.push(2);    //Pushing 2 at front of the queue 
 
  std::cout<<q.size()<<'\n';     //Accessing the front of the queue 
  q.pop();                        //Removing the oldest element 
  std::cout<<q.size()<<'\n';     //Accessing the front of the queue 
  q.pop();                        //Removing the oldest element 
  std::cout<<q.size()<<'\n';     //Accessing the front of the queue 
 
  return 0; 
 } 
```

```
Output: 
 2 
 1 
 0 
```

#### Vazio

Retorna se a `queue` está vazia, ou seja, se o tamanho da sua fila é zero. Retorna `true` se o tamanho da fila 0 retornar mais `false`

\`\` \`cpp // Operação vazia na fila

# incluir // std :: cout

# incluir // std :: stack

int main () { std :: queue q;

q.push (1); q.push (2);

while (q.empty ()! = true) { std :: cout << q.front () << '\\ n'; q.pop (); }

std :: cout << "Fora de loop" << '\\ n'; return 0; }
```
    Output: 
    1 
    2 
    Out of loop 
 
 #### Back 
 
 Allows you to access the last element in the queue without removing it. 
 The next element is the "newest" element in the queue. 
```

cpp // Voltar operação na fila

# incluir // std :: cout

# incluir // std :: queue

int main () { std :: queue q;

q.push (1); // Empurrando 1 na frente da fila q.push (2); // Empurrando 2 na frente da fila

std :: cout << q.back () << '\\ n'; // Acessando a parte de trás da fila std :: cout << q.back () << '\\ n'; // Acessando a parte de trás da fila

return 0; } \`\` \`
```
Output: 
 2 
 2 
```

### Para mais recursos:

http://www.cplusplus.com/reference/queue/queue/

### Citações:

Imagem Cortesia: https://en.wikipedia.org/wiki/FIFO _(computação_ and\_electronics)