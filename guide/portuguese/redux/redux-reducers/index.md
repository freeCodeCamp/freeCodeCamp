---
title: Redux Reducers
localeTitle: Redux Redutores
---
## Redux Redutores

Reduxores Redux permitem que você faça alterações em seu estado em sua aplicação. Ações no redux apenas informam ao aplicativo o que basicamente aconteceu. Quer tenha sido um evento de clique que ocorreu ou alguma rolagem do mouse, ele apenas informará que isso aconteceu. Agora, como você muda o estado do seu aplicativo que mora dentro da loja, você faz isso usando um redutor.

Agora um redutor no redux precisa ser uma função pura. Uma função pura é um tipo de função que não tem efeitos colaterais adicionais. Você passa alguns argumentos e retorna o resultado esperado. Por exemplo:

```javascript
function add(a,b) { 
 return a + b; 
 } 
 
 const sum = add(5,4); 
```

A função acima é pura, porque não importa o que aconteça, ela retornará 9. Uma função que tem ajax chama dentro dela ou faz algo como acessar um banco de dados não é uma função pura. Mesmo se nós mutarmos significando mudança, um valor variável pode ser considerado não uma função pura.

Agora, para fazer alterações no estado, você usa um redutor. Aqui está um exemplo de código de um redutor:

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

O que este todoReducer está fazendo é que ele pega o estado atual e a ação que foi disparada e então retorna um novo estado. Aqui usamos a sintaxe do parâmetro padrão es6 para atribuir um valor padrão ao array state. O objeto de ação para o redutor acima pode ser semelhante ao seguinte:

```javascript
{ 
 type: 'ADD_TODO', 
 data: {name: 'Learn Redux',completed:false} 
 } 
```

Aqui a ação tem uma propriedade type de 'ADD\_TODO' com um objeto de dados. Agora, quando esta ação é acionada, ela é recebida pelo redutor e, em seguida, com base na instrução switch, ela retornará um novo array com os dados existentes ao lado dos novos dados.

Então, resumir os redutores não são nada além de funções puras que retornam um novo estado para sua aplicação.

#### Mais Informações:

[Redux-Reducers Official Docs](https://redux.js.org/basics/reducers)