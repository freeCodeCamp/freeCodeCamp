---
title: Create a Stack Class
localeTitle: Crie uma classe de pilha
---
## Crie uma classe de pilha

### Método:

*   Stack é uma estrutura de dados abstrata.
*   Pilha segue o princípio LIFO / FILO.

## \- Neste desafio, precisamos adicionar os `.push()` , `.pop()` , `.peek()` , `.isEmpty()` e `.clear()` à classe.

*   `push()` método `push()` envia valor para a pilha.
*   `pop()` método `pop()` mostra o primeiro valor da pilha.
*   `peek()` método `peek()` retorna o primeiro valor da pilha.
*   `isEmpty()` método `isEmpty()` verifica se a pilha está vazia.

## \- `.clear()` método `.clear()` remove todos os elementos da pilha.

| DS | Acesso | Pesquisa | Inserir | Excluir | | ----- | ------ | ------ | ------ | ------ | | Pilha | n | n | 1 | 1 |

### Solução:

#### Básico:

```js
function Stack() { 
    var collection = []; 
    this.print = function() { 
        console.log(collection); 
    }; 
    this.push = function(val){ 
        return collection.push(val); 
    } 
    this.pop = function(){ 
        return collection.pop(); 
    } 
    this.peek = function(){ 
        return collection[collection.length-1]; 
    } 
    this.isEmpty = function(){ 
        return collection.length === 0; 
    } 
    this.clear = function(){ 
        collection.length = 0; 
    } 
 } 
```

#### Avançado - Sintaxe da classe ES6:

```js
class Stack { 
    constructor() { 
        this.collection = []; 
    } 
    print(){ 
        console.log(this.collection); 
    } 
    push(val){ 
        retiurn this.collection.push(val); 
    } 
    pop(){ 
        return this.collection.pop(); 
    } 
    peek(){ 
        return this.collection[this.collection.length-1]; 
    } 
    isEmpty(){ 
        return this.collection.length === 0; 
    } 
    clear(){ 
        return this.collection.length = 0; 
    } 
 } 
```

\### Recursos:

*   [Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))