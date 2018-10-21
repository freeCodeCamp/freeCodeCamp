---
title: Object Instantiation
localeTitle: Instanciação de Objeto
---
## Instanciação de Objeto

Em Javascript e na maioria das outras linguagens, um objeto contém uma série de propriedades, que são um par de chave e valor. Existem várias opções disponíveis quando você precisa construir um objeto.

### Inicialize uma variável de objeto

Você pode criar um objeto com propriedades pré-definidas da seguinte forma:

```javascript
let myObject = { 
  name: "Dave", 
  age: 33 
 } 
```

### Criando um objeto vazio

Isso cria um objeto vazio dentro da nossa variável myObject:

```javascript
let myObject = new Object(); 
```

Quando você deseja adicionar propriedades ao seu objeto, basta usar a notação de ponto ou a notação de colchetes com o nome da propriedade de sua escolha:

```javascript
myObject.name = "Johnny Mnemonic" 
 myObject["age"] = 55 
```

### Usando uma função construtora

Você pode definir uma função construtora que você pode usar para criar seus objetos:

```javascript
function Kitten(name, cute, color) { 
  this.name = name, 
  this.cute = cute, 
  this.color = color 
 } 
```

Você pode definir uma variável contendo uma instanciação deste objeto chamando a função construtora:

```javascript
let myKitten = new Kitten("Nibbles", true, "white") 
```

### Object.create ()

O método Object.create () (primeiro definido no ECMAScript 5.1) permite criar objetos. Ele permite que você escolha o objeto de protótipo para seu novo objeto sem precisar definir uma função de construtor de antemão.

```javascript
// Our pre-defined object 
 let kitten = { 
  name: "Fluff", 
  cute: true, 
  color: "gray" 
 } 
 // Create a new object using Object.create(). kitten is used as the prototype 
 let newKitten = Object.create(kitten) 
 
 console.log(newKitten.name) // Will output "Fluff" 
```

#### Mais Informações

[Artigo do MDN sobre como trabalhar com objetos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)