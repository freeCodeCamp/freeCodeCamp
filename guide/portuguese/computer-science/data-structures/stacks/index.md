---
title: Stacks
localeTitle: Pilhas
---
## Pilhas

Stacks é uma Estrutura de Dados First In Last Out (FILO). É uma estrutura de dados linear.

Você pode imaginar uma pilha como as placas de maneira foram organizadas em restaurante buffet. Você só pode escolher a placa no topo, caso contrário a pilha entrará em colapso. Geralmente, o último item a ser inserido será removido primeiro.

Algumas operações básicas da pilha são:

1.  Push - Insere um item no topo da pilha.
2.  Pop - Remove um item no topo da pilha.
3.  isEmpty - verifica se a pilha está vazia ou não
4.  Tamanho - Retorna o número de itens na pilha (Todas as operações podem ser feitas no tempo O (1))

A implementação de uma pilha é possível usando arrays ou listas vinculadas. A seguir, uma implementação de matriz simples da estrutura de dados da pilha com suas operações mais comuns.

```C++
//Stack implementation using array in C++ 
 //You can also include<stack> and then use the C++ STL Library stack class. 
 
 #include <bits/stdc++.h> 
 
 using namespace std; 
 
 class Stack { 
    int t; 
    int arr[MaxN]; 
 public: 
    Stack() { 
        t = 0; 
    } 
    int size() { 
        return t; 
    } 
    bool isEmpty() { 
        return t < 1; 
    } 
    int top() { 
        return arr[t]; 
    } 
    void push(int x) { 
        if (++t >= MaxN) { 
            cout << "Stack is full" << '\n'; 
            return; 
        } 
        arr[t] = x; 
    } 
    void pop() { 
        arr[t--] = 0; 
    } 
 }; 
 
 int main() { 
    Stack st; 
 
    st.push(4); 
    st.push(3); 
    st.push(5); 
    while (!st.isEmpty()) { 
        cout << st.size() << ' ' << st.top() << '\n'; 
        st.pop(); 
    } 
    return 0; 
 } 
```

#### Usando matrizes como pilhas

Em algumas linguagens de programação, uma matriz possui a funcionalidade de pilha, permitindo que o desenvolvedor realize operações **push** e **pop** sem a necessidade de uma estrutura de dados de pilha personalizada.

Por exemplo, uma matriz em JavaScript possui métodos **push** e **pop** , permitindo implementar facilmente a funcionalidade de pilha em um aplicativo.

```js
stack = []; 
 
 let i = 0; 
 while(i < 5) 
  stack.push(i++); 
 
 while(stack.length) { 
  stack.pop(); 
 } 
```

Uma lista no Python também pode executar a funcionalidade de pilha em um aplicativo. Em vez de **push** , pode-se usar o método **append** .

```python
stack = [] 
 
 for i in range(5): 
    stack.append(i) 
 
 while len(stack): 
    stack.pop() 
```

#### Aplicações

*   Transforme a recursão em loop.
*   Recursos de refazer desfazer.
*   Solucionador de Sudoku
*   Primeira pesquisa de profundidade.
*   Travessias de árvores
*   Expressão Infix -> Expressão Prefixo / Postfix
*   Parênteses válidos

#### Mais Informações:

*   [Mais informações sobre pilhas - GeeksForGeeks](http://www.geeksforgeeks.org/stack-data-structure/)
*   [Pilha - Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
*   [Tower of Hanoi Problem e como a solução usa pilhas e recursões](https://en.wikipedia.org/wiki/Tower_of_Hanoi)
*   [Vídeo do HackerRank Stacks and Queues](https://www.youtube.com/watch?v=wjI1WNcIntg)