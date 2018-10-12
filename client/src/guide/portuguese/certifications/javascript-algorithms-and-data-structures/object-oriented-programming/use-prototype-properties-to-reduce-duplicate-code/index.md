---
title: Use Prototype Properties to Reduce Duplicate Code
localeTitle: Use propriedades de protótipo para reduzir o código duplicado
---
## Use propriedades de protótipo para reduzir o código duplicado

### Método:

A propriedade `prototype` nos permite adicionar novas propriedades a um construtor de objetos de fora do bloco de código original. A propriedade prototype também permite adicionar novas funções ao construtor de objetos. O código a seguir demonstra como usar `.prototype` em um objeto para criar uma nova propriedade no construtor.

#### Exemplo:

```javascript
Obj.prototype.newProperty = "New Property!"; 
```

Usando essa lógica, basta criar uma nova propriedade de `prototype` para `numLegs` . Os casos de teste podem ser passados ​​substituindo o objeto `Bird` objeto `Dog` no exemplo fornecido - `Bird.prototype.numLegs = 2;`

### Solução:

```javascript
function Dog(name) { 
  this.name = name; 
 } 
 
 Dog.prototype.numLegs = 4; 
 
 // Add your code above this line 
 let beagle = new Dog("Snoopy"); 

```