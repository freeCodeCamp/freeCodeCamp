---
title: Verify an Object's Constructor with instanceof
localeTitle: Verificar o construtor de um objeto com instância de
---
## Verificar o construtor de um objeto com instância de

### Método:

Assim como no último desafio, crie um novo objeto - `myHouse` - usando o construtor fornecido.

#### Exemplo:

```javascript
let hound = new Dog(); 
```

Lembre-se de dar à função `House` um parâmetro para inicializar o número de quartos. Em seguida, basta chamar o operador `instanceof` para retornar true em sua nova casa.

### Solução:

```javascript
/* jshint expr: true */ 
 
 function House(numBedrooms) { 
  this.numBedrooms = numBedrooms; 
 } 
 
 // Add your code below this line 
 let myHouse = new House(5); 
 myHouse instanceof House; 

```