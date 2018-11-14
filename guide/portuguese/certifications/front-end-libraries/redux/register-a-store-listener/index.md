---
title: Register a Store Listener
localeTitle: Registrar um ouvinte da loja
---
## Registrar um ouvinte da loja

Vamos quebrar as instruções para descobrir exatamente o que está perguntando.

> _Escreva uma função de retorno de chamada que aumente a contagem de variáveis ​​globais toda vez que a loja receber uma ação e passe essa função para o método store.subscribe ()._

Podemos resumir estes passos em pequenos pedaços:

1.  escrever uma função de retorno de chamada
2.  incrementar a contagem de variáveis ​​globais
3.  passe a função para o método `store.subscribe()` .

Impressionante! Agora vamos rever alguns dos princípios básicos novamente.

### O que é uma "função de retorno de chamada" em inglês simples?

Uma função de retorno de chamada é simplesmente uma função que é chamada depois que outra função é executada. No mundo real, pode ser algo assim:

```javascript
// You drop your car off at the mechanic and you want the shop to 'call you back' when your car is fixed. 
 let carIsBroken = true; 
 const callCarOwner = () => console.log('Hello your car is done!'); 
 const fixCar = (carIsBroken, callCarOwner) => { 
  if (carIsBroken === true) { 
    carIsBroken = false; 
  } 
  console.log(carIsBroken); 
  // After the car is fixed, the last thing we do is call the car owner - that's our 'callback function'. 
  callCarOwner(); 
 } 
 fixCar(carIsBroken, callCarOwner); 
```

### Como você aumenta uma variável numérica?

Podemos fazer isso usando o operador "+ =".

```javascript
let count = 1; 
 const addOne = () => count +=1; 
```

### Como você passa uma função para um método?

Podemos passar uma função para um método da mesma forma que podemos passar uma variável para um método. Apenas passe isso como um argumento!

```javascript
function sayHi() { 
  console.log('Hi!'); 
 } 
 store.subscribe(sayHi); 
```

Quer atualizar isso? [Edite este stub no GitHub.](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/front-end-libraries/redux/register-a-store-listener/index.md)