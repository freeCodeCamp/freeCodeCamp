---
title: Prototypes
localeTitle: Protótipos
---
## Protótipos

JavaScript é uma linguagem baseada em protótipos, portanto, compreender o objeto de protótipo é um dos conceitos mais importantes que os profissionais de JavaScript precisam conhecer. Este artigo lhe dará uma breve visão geral do objeto Prototype através de vários exemplos. Antes de ler este artigo, você precisará ter um conhecimento básico sobre [`this` referência em JavaScript](/src/pages/javascript/this-reference/index.md) .

### Objeto de protótipo

Por uma questão de clareza, vamos examinar o seguinte exemplo:

```javascript
function Point2D(x, y) { 
  this.x = x; 
  this.y = y; 
 } 
```

Como a função `Point2D` é declarada, uma propriedade padrão chamada `prototype` será criada para ela (note que, em JavaScript, uma função também é um objeto). O `prototype` propriedade é um objeto que contém um `constructor` propriedade e seu valor é `Point2D` função: `Point2D.prototype.constructor = Point2D` . E quando você chamar `Point2D` com uma `new` palavra _\-_ chave, _os objetos recém-criados herdarão todas as propriedades do_ `Point2D.prototype` . Para verificar isso, você pode adicionar um método chamado `move` into `Point2D.prototype` seguinte maneira:

```javascript
Point2D.prototype.move = function(dx, dy) { 
  this.x += dx; 
  this.y += dy; 
 } 
 
 var p1 = new Point2D(1, 2); 
 p1.move(3, 4); 
 console.log(p1.x); // 4 
 console.log(p1.y); // 6 
```

O `Point2D.prototype` é chamado de **objeto de protótipo** ou **protótipo** de objeto `p1` e para qualquer outro objeto criado com a `new Point2D(...)` sintaxe `new Point2D(...)` . Você pode adicionar mais propriedades ao objeto `Point2D.prototype` que desejar. O padrão comum é declarar métodos para `Point2D.prototype` e outras propriedades serão declaradas na função de construtor.

Objetos internos em JavaScript são construídos de maneira semelhante. Por exemplo:

*   O protótipo de objetos criados com a `new Object()` sintaxe `new Object()` ou `{}` é `Object.prototype` .
*   O protótipo de matrizes criadas com a `new Array()` sintaxe `new Array()` ou `[]` é `Array.prototype` .
*   E assim por diante com outros objetos `RegExp` , como `Date` e `RegExp` .

`Object.prototype` é herdado por todos os objetos e não possui protótipo (seu protótipo é `null` ).

### Cadeia de protótipo

O mecanismo da cadeia de protótipos é simples: quando você acessa uma propriedade `p` no objeto `obj` , o mecanismo JavaScript pesquisará essa propriedade dentro do objeto `obj` . Se o mecanismo falhar na pesquisa, ele continuará pesquisando no protótipo do objeto `obj` e assim por diante até atingir o `Object.prototype` . Se após a pesquisa terminar e nada for encontrado, o resultado será `undefined` . Por exemplo:

```javascript
var obj1 = { 
  a: 1, 
  b: 2 
 }; 
 
 var obj2 = Object.create(obj1); 
 obj2.a = 2; 
 
 console.log(obj2.a); // 2 
 console.log(obj2.b); // 2 
 console.log(obj2.c); // undefined 
```

No trecho acima, a declaração `var obj2 = Object.create(obj1)` criará `obj2` objeto com protótipo `obj1` objeto. Em outras palavras, `obj1` se torna o protótipo de `obj2` invés de `Object.prototype` por padrão. Como você pode ver, `b` não é uma propriedade de `obj2` , você ainda pode acessá-lo através da cadeia de protótipos. Para a propriedade `c` , no entanto, você obtém `undefined` valor `undefined` porque não pode ser localizado em `obj1` e `Object.prototype` .

### Classes

No ES2016, agora podemos usar a palavra-chave `Class` e os métodos mencionados acima para manipular o `prototype` . A `Class` JavaScript agrada aos desenvolvedores de origens de OOP, mas basicamente faz a mesma coisa que acima.

```javascript
class Rectangle { 
  constructor(height, width) { 
    this.height = height 
    this.width = width 
  } 
 
  get area() { 
    return this.calcArea() 
  } 
 
  calcArea() { 
    return this.height * this.width 
  } 
 } 
 
 const square = new Rectangle(10, 10) 
 
 console.log(square.area) // 100 
```

Isso é basicamente o mesmo que:

```javascript
function Rectangle(height, width) { 
  this.height = height 
  this.width = width 
 } 
 
 Rectangle.prototype.calcArea = function calcArea() { 
  return this.height * this.width 
 } 
```

Os métodos `getter` e `setter` em classes associam uma propriedade Object a uma função que será chamada quando essa propriedade for procurada. É apenas açúcar sintático para ajudar a facilitar a _pesquisa_ ou a _definição de_ propriedades.

**Leitura adicional:**

*   [MDN: protótipos de objetos](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)