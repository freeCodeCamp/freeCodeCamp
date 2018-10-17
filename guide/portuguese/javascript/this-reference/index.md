---
title: this reference
localeTitle: esta referência
---
## `this` referência

Em JavaScript, cada função tem um `this` de referência criado automaticamente quando você declará-lo. Essa referência é bastante semelhante a `this` referência em outras linguagens baseadas em classes, como Java ou C # (JavaScript é uma linguagem baseada em protótipo e nenhum conceito de "classe"): _Aponta para qual objeto está chamando a função_ (esse objeto às vezes chamado como _contexto_ ). No JavaScript, no entanto, _`this` referência dentro de funções pode ser vinculada a objetos diferentes, dependendo de onde a função está sendo chamada_ . Aqui estão 5 regras básicas para `this` ligação em JavaScript:

### Regra 1

Quando uma função é chamada no escopo global, a referência `this` é, por padrão, vinculada ao **objeto global** ( `window` no navegador ou `global` em Node.js). Por exemplo:

```javascript
function foo() { 
  this.a = 2; 
 } 
 
 foo(); 
 console.log(a); // 2 
```

Nota: Se você declarar a `foo()` função acima no modo estrito, então você chamar essa função no escopo global, `this` será `undefined` e atribuição `this.a = 2` vai jogar `Uncaught TypeError` exceção.

### Regra 2

Vamos examinar o exemplo abaixo:

```javascript
function foo() { 
  this.a = 2; 
 } 
 
 var obj = { 
  foo: foo 
 }; 
 
 obj.foo(); 
 console.log(obj.a); // 2 
```

Claramente, no trecho acima, a função `foo()` está sendo chamada com o _contexto_ `obj` e `this` referência agora está vinculada ao `obj` . Portanto, quando uma função é chamada com um objeto de contexto, a referência `this` será vinculada a esse objeto.

### Regra 3

`.call` , `.apply` e `.bind` podem ser usados ​​no site de chamadas para vincular explicitamente `this` . Usar `.bind(this)` é algo que você pode ver em muitos componentes do React.

```javascript
var foo = function() { 
  console.log(this.bar) 
 } 
 
 foo.call({ bar: 1 }) // 1 
```

Aqui está um exemplo rápido de como cada um é usado para vincular `this` :

*   `.call()` : `fn.call(thisObj, fnParam1, fnParam2)`
*   `.apply()` : `fn.apply(thisObj, [fnParam1, fnParam2])`
*   `.bind()` : `const newFn = fn.bind(thisObj, fnParam1, fnParam2)`

### Regra 4

```javascript
function Point2D(x, y) { 
  this.x = x; 
  this.y = y; 
 } 
 
 var p1 = new Point2D(1, 2); 
 console.log(p1.x); // 1 
 console.log(p1.y); // 2 
```

A coisa que você deve notar é que a função `Point2D` é chamada com a `new` palavra-chave, e `this` referência está vinculada ao objeto `p1` . Portanto, quando uma função é chamada com uma `new` palavra-chave, ela criará um novo objeto e `this` referência será vinculada a esse objeto.

Nota: Como você chama uma função com uma `new` palavra-chave, também a chamamos como _função construtora_ .

### Regra 5

JavaScript determina o valor `this` em tempo de execução, com base no contexto atual. Então, `this` às vezes pode apontar para algo diferente do que você espera.

Considere este exemplo de uma classe Cat com um método chamado `makeSound()` , seguindo o padrão da Regra 4 (acima) com uma função construtora e a `new` palavra-chave.

```javascript
var Cat = function(name, sound) { 
    this.name = name; 
    this.sound = sound; 
    this.makeSound = function() { 
        console.log( this.name + ' says: ' + this.sound ); 
    }; 
 } 
 var kitty = new Cat('Fat Daddy', 'Mrrooowww'); 
 kitty.makeSound(); // Fat Daddy says: Mrrooowww 
```

Agora vamos tentar dar ao gato uma maneira de `annoy()` pessoas repetindo seu som 100 vezes, uma vez a cada meio segundo.

```javascript
var Cat = function(name, sound) { 
    this.name = name; 
    this.sound = sound; 
    this.makeSound = function() { 
        console.log( this.name + ' says: ' + this.sound ); 
    }; 
    this.annoy = function() { 
        var count = 0, max = 100; 
        var t = setInterval(function() { 
            this.makeSound(); // <-- this line fails with `this.makeSound is not a function` 
            count++; 
            if (count === max) { 
                clearTimeout(t); 
            } 
        }, 500); 
    }; 
 } 
 var kitty = new Cat('Fat Daddy', 'Mrrooowww'); 
 kitty.annoy(); 
```

Isso não funciona porque dentro do callback `setInterval` nós criamos um novo contexto com escopo global, então `this` não aponta mais para a nossa instância do kitty. Em um navegador da Web, `this` indicará o objeto Window, que não possui um método `makeSound()` .

Algumas maneiras de fazer isso funcionar:

1) Antes de criar o novo contexto, atribua `this` a uma variável local chamada `me` , `self` , ou o que você quiser chamá-lo, e use essa variável dentro do callback.

```javascript
var Cat = function(name, sound) { 
    this.name = name; 
    this.sound = sound; 
    this.makeSound = function() { 
        console.log( this.name + ' says: ' + this.sound ); 
    }; 
    this.annoy = function() { 
        var count = 0, max = 100; 
        var self = this; 
        var t = setInterval(function() { 
            self.makeSound(); 
            count++; 
            if (count === max) { 
                clearTimeout(t); 
            } 
        }, 500); 
    }; 
 } 
 var kitty = new Cat('Fat Daddy', 'Mrrooowww'); 
 kitty.annoy(); 
```

2) Com ES6 você pode evitar atribuir `this` a uma variável local usando uma função de seta, que liga `this` ao contexto do código circundante onde ele está definido.

```javascript
var Cat = function(name, sound) { 
    this.name = name; 
    this.sound = sound; 
    this.makeSound = function() { 
        console.log( this.name + ' says: ' + this.sound ); 
    }; 
    this.annoy = function() { 
        var count = 0, max = 100; 
        var t = setInterval(() => { 
            this.makeSound(); 
            count++; 
            if (count === max) { 
                clearTimeout(t); 
            } 
        }, 500); 
    }; 
 } 
 var kitty = new Cat('Fat Daddy', 'Mrrooowww'); 
 kitty.annoy(); 
```

### Outros recursos

*   [javascriptissexy.com](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)
*   [Você não sabe JS](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md)