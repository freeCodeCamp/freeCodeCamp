---
title: Object Freeze
localeTitle: Congelamento de Objetos
---
## Congelamento de Objetos

O método `Object.freeze()` congela um objeto. Um objeto congelado _impedirá você_ de:

*   Adicionando novas propriedades a ele
*   Removendo propriedades existentes dele
*   Alterando a enumerabilidade, configurabilidade ou capacidade de gravação de suas propriedades existentes

### Sintaxe

```javascript
Object.freeze(obj) 
```

### Parâmetros

`obj`

*   O objeto para congelar.

### Retorna

O objeto congelado.

### Nota importante

A tentativa de adicionar, remover ou modificar propriedades de um objeto congelado resultará em uma falha. Essa falha será silenciosa ou será lançada como um `TypeError` (se o Modo Estrito estiver habilitado). Além disso, `Object.freeze()` é uma operação superficial. Isso significa que objeto aninhado, de um objeto congelado, é modificável.

### Exemplo

```javascript
// Create your object 
 let person = { 
  name: 'Johnny', 
  age: 23, 
  guild: 'Army of Darkness', 
  hobbies: ['music', 'gaming', 'rock climbing'] 
 } 
 
 // Modify your object 
 person.name = 'John' 
 person.age = 24 
 person.hobbies.splice(1,1) 
 delete person.guild 
 
 // Verify your object has been modified 
 console.log(person) // { name: 'John', age: 24, hobbies: ['music', 'rock climbing'] 
 
 // Freeze your object 
 Object.freeze(person) 
 
 // Verify that your object can no longer be modified 
 person.name = 'Johnny' // fails silently 
 person.age = 23 // fails silently 
 console.log(person) // { name: 'John', age: 24, hobbies: ['music', 'rock climbing'] 
 
 // The freeze is "shallow" and nested objects (including arrays) can still be modified 
 person.hobbies.push('basketball') 
 consol.log(person.hobbies) // ['music', 'rock climbing', 'basketball'] 
```

#### Mais Informações:

[Documentação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)