---
title: Classes
localeTitle: Classes
---
## Classes

JavaScript não tem o conceito de classes inerentemente.

Mas poderíamos simular as funcionalidades de uma classe aproveitando a natureza prototípica do JavaScript.

Este artigo pressupõe que você tenha uma compreensão básica de [protótipos](/src/pages/javascript/prototypes/index.md) .

Por uma questão de clareza, vamos supor que queremos criar uma classe que possa fazer o seguinte

```javascript
var p = new Person('James','Bond'); // create a new instance of Person class 
    p.log() // Output: 'I am James Bond' // Accessing a function in the class 
    // Using setters and getters 
    p.profession = 'spy' 
    p.profession // output: James bond is a spy 
```

### Usando a palavra-chave class

Como em qualquer outra linguagem de programação, agora você pode usar a palavra-chave `class` para criar uma classe.

Isso não é suportado em navegadores mais antigos e foi introduzido no ECMAScript 2015.

```javascript
class Person { 
    constructor(firstName, lastName) { 
        this._firstName = firstName; 
        this._lastName = lastName; 
    } 
 
    log() { 
        console.log('I am', this._firstName, this._lastName); 
    } 
 
    // setters 
    set profession(val) { 
        this._profession = val; 
    } 
    // getters 
    get profession() { 
        console.log(this._firstName, this._lastName, 'is a', this._profession); 
    } 
 
 } 
```

  
  

`class` é apenas um açúcar sintático sobre o modelo de herança baseado em protótipo existente do JavaScript.

Em geral, os programadores usam as seguintes formas para criar uma classe em JavaScript.

### Usando métodos adicionados a protótipos:

Aqui, todos os métodos são adicionados ao protótipo

```javascript
function Person(firstName, lastName) { 
    this._firstName = firstName; 
    this._lastName = lastName; 
 } 
 
 Person.prototype.log = function() { 
    console.log('I am', this._firstName, this._lastName); 
 } 
 
 // This line adds getters and setters for the profession object. Note that in general you could just write your own get and set functions like the 'log' method above. 
 // Since in this example we are trying the mimic the class above, we try to use the getters and setters property provided by JavaScript 
 Object.defineProperty(Person.prototype, 'profession', { 
    set: function(val) { 
        this._profession = val; 
    }, 
    get: function() { 
        console.log(this._firstName, this._lastName, 'is a', this._profession); 
    } 
 }) 
```

Você também pode escrever métodos de protótipo sobre a função `Person` como abaixo

```javascript
Person.prototype = { 
    log: function() { 
        console.log('I am ', this._firstName, this._lastName); 
    } 
    set profession(val) { 
        this._profession = val; 
    } 
 
    get profession() { 
        console.log(this._firstName, this._lastName, 'is a', this._profession); 
    } 
 
 } 
```

### Usando métodos adicionados internamente

Aqui os métodos são adicionados internamente ao invés do protótipo

```javascript
function Person(firstName, lastName) { 
    this._firstName = firstName; 
    this._lastName = lastName; 
 
    this.log = function() { 
        console.log('I am ', this._firstName, this._lastName); 
    } 
 
    Object.defineProperty(this, 'profession', { 
        set: function(val) { 
            this._profession = val; 
        }, 
        get: function() { 
            console.log(this._firstName, this._lastName, 'is a', this._profession); 
        } 
    }) 
 } 
```

### Ocultar detalhes em classes com símbolos

Geralmente, algumas propriedades e métodos precisam ser ocultados para impedir o acesso de fora da função. Com classes, para obter essa funcionalidade, uma maneira de fazer isso é usando símbolos. O símbolo é um novo tipo de JavaScript embutido, que pode ser chamado para fornecer um novo valor de símbolo. Cada Símbolo é único e pode ser usado como uma chave no objeto. Portanto, um caso de uso de símbolos é que você pode adicionar algo a um objeto que talvez não possua e talvez não queira colidir com outras chaves de objeto, portanto, criar um novo e adicioná-lo como propriedade a esse objeto usando o símbolo é o mais seguro . Além disso, quando o valor do símbolo é adicionado a um objeto; ninguém mais saberá como obtê-lo.

```javascript
class Person { 
    constructor(firstName, lastName) { 
        this._firstName = firstName; 
        this._lastName = lastName; 
    } 
 
    log() { 
        console.log('I am', this._firstName, this._lastName); 
    } 
 
    // setters 
    set profession(val) { 
        this._profession = val; 
    } 
    // getters 
    get profession() { 
        console.log(this._firstName, this._lastName, 'is a', this._profession); 
    } 
 // With the above code, even though we can access the properties outside the function to change their content what if we don't want that. 
 // Symbols come to rescue. 
 let s_firstname  = new Symbol(); 
 
 class Person { 
    constructor(firstName, lastName) { 
        this[s_firstName] = firstName; 
        this._lastName = lastName; 
    } 
 
    log() { 
        console.log('I am', this._firstName, this._lastName); 
    } 
 
    // setters 
    set profession(val) { 
        this._profession = val; 
    } 
    // getters 
    get profession() { 
        console.log(this[s_firstName], this._lastName, 'is a', this._profession); 
    } 
```

#### Mais Informações: