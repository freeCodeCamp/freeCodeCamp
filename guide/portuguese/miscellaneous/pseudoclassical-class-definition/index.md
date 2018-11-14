---
title: Pseudoclassical Class Definition
localeTitle: Definição de classe pseudo-clássica
---
A definição de classe clássica ocorre em 2 blocos de código em vez de um, o que acontece em outras linguagens como Python e PHP.

O primeiro bloco é chamado de "Função de Construtor", onde os atributos da classe são declarados. Esses são os aspectos da classe que são exclusivos para cada nova instância. Exemplo com carros é que marca, cor e localização podem ser diferentes. No segundo bloco de código, você declara os métodos que serão compartilhados por cada instância da classe. Exemplos são coisas que o carro pode fazer, dirigir para frente, parar, abrir a porta.

## Exemplo
```
var Car = function(brand, color, location) { 
 this.brand = brand; 
 this.color = color; 
 this.location = location 
 }; 
 
 Car.prototype = { 
 move: function() { this.location++; }, 
 stop: function() { this.location = 0; }, 
 }; 
```

## Explicação

A razão para declarar a classe inteira em 2 blocos é economizar na memória quando você começa a criar instâncias da classe. Se a declaração de classe era "Funcional", então há uma nova cópia do (s) método (s) feita (s) para **cada** instância. Ao declarar o estilo "Pseudoclássico" da classe, apenas uma _única_ cópia dos métodos é armazenada na memória.

Quando uma instância da classe tenta acessar um método:
```
var x_car = new Car('lexus', 'white', 0); 
 x_car.move(); 
```

Na verdade, o interpretador falhará _primeiro_ em encontrar o método chamado no próprio objeto, já que ele foi feito a partir da função de construtor Car. Como você pode ver acima, não há referência a nenhum dos métodos na função do construtor Car. A partir daí, o intérprete procura o `Car.prototype` que agora é compartilhado entre todas as instâncias. Lá o intérprete encontra o método que foi chamado!

### Leitura adicional:

[Blog de Natac](https://natacseanc.wordpress.com/2015/08/04/javascript-object-create-and-classes/)

[Classes MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)