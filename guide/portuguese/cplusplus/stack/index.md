---
title: stack
localeTitle: pilha
---
## Pilhas

`stack` é um dos contêineres mais usados ​​em C ++. Um contêiner é uma estrutura de dados que armazena uma coleção de objetos, alguns em ordem, outros não. Todos os contêineres possuem um conjunto diferente de funções que permitem acessar um objeto (s) nessa coleção.

`std::stack` faz parte da biblioteca padrão C ++ (daí o prefixo `std::` e permite que você armazene dados na ordem Last In First Out (LIFO). NOTA: **Todos os objetos dentro de uma pilha devem ser do mesmo tipo de dados**

O tipo de dados armazenado em uma pilha fica entre os colchetes angulares ao lado da palavra-chave da pilha. Por exemplo, se você gostaria de armazenar uma coleção de inteiros, a pilha seria `std::stack<int> stack_name`

### Stack LIFO Explanation

`stack` nos permite empurrar e pop em ordem específica. **Empurrar** significa inserir um objeto no topo da pilha. **Pop** significa retirar o último objeto inserido do topo da pilha. Então, quando você empurra, está no topo e quando você estala, extrai o último elemento inserido.

![alt text](https://github.com/mohammadaziz313/helloworld/blob/master/Lifo_stack.png "LIFO Stack Push and Pop Example")

### Operações de pilha

O contêiner de pilha suporta as seguintes operações:

*   empurrar
*   pop
*   vazio
*   Tamanho
*   costas

#### Empurrar

Permite inserir um novo elemento na parte superior da pilha, acima do elemento superior atual.

```cpp
//Push operation in Stack 
 #include <iostream>       // std::cout 
 #include <stack>          // std::stack 
 
 int main () 
 { 
  std::stack<int> s; 
 
  s.push(1);    //Pushing 1 at top of the stack 
  s.push(2);    //Pushing 2 at top of the stack 
 
  return 0; 
 } 
```

#### Topo

Permite que você acesse o elemento superior sem removê-lo de sua pilha.

```cpp
//Top operation in Stack 
 #include <iostream>       // std::cout 
 #include <stack>          // std::stack 
 
 int main () 
 { 
  std::stack<int> s; 
 
  s.push(1);    //Pushing 1 at top of the stack 
  s.push(2);    //Pushing 2 at top of the stack 
 
  std::cout<<s.top()<<'\n';     //Accessing the top of the stack 
  std::cout<<s.top()<<'\n';     //Accessing the top of the stack 
 
  return 0; 
 } 
```

```
Output: 
 2 
 2 
```

#### Pop

Remove o elemento no topo da pilha, reduzindo efetivamente o tamanho da pilha em um.

```cpp
//Pop operation in Stack 
 #include <iostream>       // std::cout 
 #include <stack>          // std::stack 
 
 int main () 
 { 
  std::stack<int> s; 
 
  s.push(1);    //Pushing 1 at top of the stack 
  s.push(2);    //Pushing 2 at top of the stack 
 
  std::cout<<s.top()<<'\n';   //Accessing the top of the stack 
  s.pop();                    //Removing element from the top of stack 
  std::cout<<s.top()<<'\n';   //Accessing the top of the stack 
 
 
  return 0; 
 } 
```

```
Output: 
 2 
 1 
```

#### Tamanho

Retorna o número de elementos na `stack` .

```cpp
//Size operation in Stack 
 #include <iostream>       // std::cout 
 #include <stack>          // std::stack 
 
 int main () 
 { 
  std::stack<int> s; 
 
  s.push(1);    //Pushing 1 at top of the stack 
  s.push(2);    //Pushing 2 at top of the stack 
 
  std::cout<<s.size()<<'\n';  //Showing the size of the stack 
  s.pop();                    //Removing element from the top of stack 
  std::cout<<s.size()<<'\n';  //Showing the size of the stack 
  s.pop();                    //Removing element from the top of stack 
  std::cout<<s.size()<<'\n';  //Showing the size of the stack 
 
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

Retorna se a `stack` está vazia, ou seja, se o tamanho da sua pilha é zero. Retorna `true` se o tamanho 0 da pilha retornar mais `false`

```cpp
//Empty operation in Stack 
 #include <iostream>       // std::cout 
 #include <stack>          // std::stack 
 
 int main () 
 { 
  std::stack<int> s; 
 
  s.push(1); 
  s.push(2); 
 
  while(s.empty() != false){ 
      std::cout<<s.top()<<'\n'; 
      s.pop(); 
  } 
 
  std::cout<<"Out of loop"<<'\n'; 
  return 0; 
 } 
```

```
Output: 
 2 
 1 
 Out of loop 

```