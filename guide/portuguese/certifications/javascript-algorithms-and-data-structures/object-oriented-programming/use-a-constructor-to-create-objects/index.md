---
title: Use a Constructor to Create Objects
localeTitle: Use um construtor para criar objetos
---
## Use um construtor para criar objetos

### Método:

Vimos no último desafio como criar uma função construtora. Agora podemos simplesmente chamar essa função para criar um novo objeto com as propriedades já definidas no construtor. Simplesmente inicialize uma nova variável `hound` chamando o construtor `Dog()` .

### Solução:

```javascript
function Dog() { 
  this.name = "Rupert"; 
  this.color = "brown"; 
  this.numLegs = 4; 
 } 
 // Add your code below this line 
 let hound = new Dog(); 

```