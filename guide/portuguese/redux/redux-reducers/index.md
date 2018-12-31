---
title: Redux Reducers
localeTitle: Redux Redutores
---
## Redux Redutores

Redutores Redux permitem que se façam alterações no estado da aplicação. 
Ações em Redux apenas informam a aplicação sobre o que aconteceu.

Quer tenha sido um evento de clique, ou movimentação do rato, apenas informará que isso aconteceu. 

Agora, como se altera o estado do sua aplicação que vive dentro da loja? Isto através de um redutor.

Um redutor em Redux irá ser sempre uma função pura. 

Uma função pura é um tipo de função que não tem efeitos colaterais adicionais. São fornecidos argumentos e esta retorna o resultado esperado. 

Por exemplo:

```javascript
function add(a,b) { 
 return a + b; 
 } 
 
 const sum = add(5,4); 
```

A função acima é pura, independentemente do que aconteça, irá retornar 9. 

Uma função que contém pedidos ajax ou acede a uma base de dados não é função pura. 
O caso de uma mutação e com isto a alteração de um valor de uma variável não irá ser considerado uma função pura.

Para  alterar o estado, usa-se então um redutor. 

Aqui está um exemplo de código de um redutor:

```javascript
 function todoReducer(state= [],action) { 
  case 'ADD_TODO': 
      return [...state,action.data] 
  case  'DELETE_TODO': 
      return state.filter(todo=>todo.id !== action.id) 
  default: 
      return state; 
 } 
```

O que o `todoReducer` está a fazer, não é nada mais nada menos que, dado o presente estado da aplicação e uma ação despoletada este irá retornar um novo estado.
Aqui usou-se a sintaxe es6 para parâmetros padrão, isto para atribuir ao array estado, um valor considerado por defeito.
O objeto ação para o redutor, poderia ser por exemplo ser algo semelhante 
ao seguinte:

```javascript
{ 
 type: 'ADD_TODO', 
 data: {name: 'Learn Redux',completed:false} 
 } 
```
A ação aqui tem uma propriedade do tipo 'ADD_TODO' e um objecto `data`.
Quando a ação é despoletada, irá ser recebida pelo redutor e em seguida, com base na cláusula `switch` irá retornar um novo array com os novos dados assim como os dados já existentes.

Resumindo os redutores não são nada mais nada menos que funções puras que retornam estados novos da aplicação.

#### Mais Informações:

[Documentação oficial Redux-Reducers](https://redux.js.org/basics/reducers)