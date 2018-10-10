---
title: Execute Brain****
id: 59e0a8df964e4540d5abe599
challengeType: 5
videoUrl: ''
localeTitle: Ejecutar cerebro ****
---

## Description
<section id="description"><p> Escribe una función para implementar un intérprete de Brain ****. La función tomará una cadena como parámetro y debería devolver una cadena como salida. Se dan más detalles a continuación : </p><p> RCBF es un conjunto de compiladores e intérpretes <a href="http://rosettacode.org/wiki/Brainf***" title="Brainf ***">Brainf ***</a> escritos para Rosetta Code en varios idiomas. </p><p> A continuación hay enlaces a cada una de las versiones de RCBF. </p><p> Una implementación solo necesita implementar correctamente las siguientes instrucciones: </p><p> {| </p><p> !Mando </p><p> !Descripción </p><p> | - </p><p> | style = &quot;text-align: center&quot; | <code>&gt;</code> || Mueve el puntero a la derecha </p><p> | - </p><p> | style = &quot;text-align: center&quot; | <code>&lt;</code> || Mueve el puntero a la izquierda </p><p> | - </p><p> | style = &quot;text-align: center&quot; | <code>+</code> || Incrementar la celda de memoria debajo del puntero. </p><p> | - </p><p> | style = &quot;text-align: center&quot; | <code>-</code> || Disminuye la celda de memoria debajo del puntero. </p><p> | - </p><p> | style = &quot;text-align: center&quot; | <code>.</code> || Muestra el carácter que significa la celda en el puntero. </p><p> | - </p><p> | style = &quot;text-align: center&quot; | <code>,</code> || Ingrese un carácter y guárdelo en la celda en el puntero </p><p> | - </p><p> | style = &quot;text-align: center&quot; | <code>[</code> || Salta la coincidencia <code>]</code> si la celda debajo del puntero es 0 </p><p> | - </p><p> | style = &quot;text-align: center&quot; | <code>]</code> || Saltar de nuevo a la coincidencia <code>[</code> si la celda debajo del puntero no es cero </p><p> |} </p><p> Se permite cualquier tamaño de celda, la compatibilidad con EOF ( <u>E</u> nd- <u>O</u> - <u>F</u> ) es opcional, ya que tiene memoria limitada o no limitada. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>brain(bye)</code> debe retuen una cuerda
    testString: 'assert(typeof brain(bye) === "string", "<code>brain(bye)</code> should return a string");'
  - text: '<code>brain("++++++[>++++++++++<-]>+++++.")</code should return "A"'
    testString: 'assert.equal(brain("++++++[>++++++++++<-]>+++++."),"A", "<code>brain("++++++[>++++++++++<-]>+++++.")</code should return "A"");'
  - text: '<code>brain(bye)</code> debe devolver <code>Goodbye, World!\\r\\n</code>'
    testString: 'assert.equal(brain(bye), "Goodbye, World!\r\n", "<code>brain(bye)</code> should return <code>Goodbye, World!\\r\\n</code>");'
  - text: '<code>brain(hello)</code> debería devolver <code>Hello World!\\n</code> &#39;'
    testString: 'assert.equal(brain(hello), "Hello World!\n", "<code>brain(hello)</code> should return <code>Hello World!\\n</code>");'
  - text: '<code>brain(fib)</code> debe devolver <code>1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89</code>'
    testString: 'assert.equal(brain(fib), "1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89", "<code>brain(fib)</code> should return <code>1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function brain (prog) {
  // Good luck!
}

```

</div>

### Before Test
<div id='js-setup'>

```js
let fib=`+

++

+++

++++

+>+>>

>>++++

+++++++

++++++++

+++++++++

++++++++++

++++++>++++

++++++++++++

+++++++++++++

+++<<<<<<[>[>>

>>>>+>+<<<<<<<-

]>>>>>>>[<<<<<<<

+>>>>>>>-]<[>++++

++++++[-<-[>>+>+<<

<-]>>>[<<<+>>>-]+<[

>[-]<[-]]>[<<[>>>+<<

<-]>>[-]]<<]>>>[>>+>+

<<<-]>>>[<<<+>>>-]+<[>

[-]<[-]]>[<<+>>[-]]<<<<

<<<]>>>>>[++++++++++++++

+++++++++++++++++++++++++

+++++++++.[-]]++++++++++<[

->-<]>+++++++++++++++++++++

+++++++++++++++++++++++++++.

[-]<<<<<<<<<<<<[>>>+>+<<<<-]>

>>>[<<<<+>>>>-]<-[>>.>.<<<[-]]

<<[>>+>+<<<-]>>>[<<<+>>>-]<<[<+

>-]>[<+>-]<<<-]`;
let hello='++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.'
let bye='++++++++++[>+>+++>++++>+++++++>++++++++>+++++++++>++++++++++>+++++++++++>++++++++++++<<<<<<<<<-]>>>>+.>>>>+..<.<++++++++.>>>+.<<+.<<<<++++.<++.>>>+++++++.>>>.+++.<+++++++.--------.<<<<<+.<+++.---.';

```

</div>


</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
