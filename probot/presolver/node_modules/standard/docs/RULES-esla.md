# JavaScript Standard Style

<p align="center">
  <a href="RULES-en.md">English</a> •
  <a href="RULES-esla.md">Español (Latinoamérica)</a> •
  <a href="RULES-iteu.md">Italiano (Italian)</a> •
  <a href="RULES-kokr.md">한국어 (Korean)</a> •
  <a href="RULES-ptbr.md">Português (Brasil)</a> •
  <a href="RULES-zhcn.md">简体中文 (Simplified Chinese)</a> •
  <a href="RULES-zhtw.md">繁體中文 (Taiwanese Mandarin)</a>
</p>

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

Esto es un TL;DR (muy largo, no lo leí) de reglas JavaScript [standard](https://github.com/standard/standard).

La mejor manera de aprender acerca de `standard` es instalarlo darle una prueba en tu código.

## Reglas

* **Usar 2 espacios** como sangría.

  eslint: [`indent`](http://eslint.org/docs/rules/indent)

  ```js
  function hello (name) {
    console.log('hi', name)
  }
  ```

* **Usar comillas simples en cadenas de texto** con la excepcion para evitar escapado de texto

  eslint: [`quotes`](http://eslint.org/docs/rules/quotes)

  ```js
  console.log('hello there') // comillas simples
  $("<div class='box'>") // escapado de texto
  ```

* **No dejar variables sin usar.**

  eslint: [`no-unused-vars`](http://eslint.org/docs/rules/no-unused-vars)

  ```js
  function myFunction () {
    var result = something()   // ✗ evitar
  }
  ```

* **Espacio después de las palabras claves.**

  eslint: [`keyword-spacing`](http://eslint.org/docs/rules/keyword-spacing)

  ```js
  if (condition) { ... }   // ✓ ok
  if(condition) { ... }    // ✗ evitar
  ```

* **Agregar un espacio antes de los paréntesis de la función declarada**

  eslint: [`space-before-function-paren`](http://eslint.org/docs/rules/space-before-function-paren)

  ```js
  function name (arg) { ... }   // ✓ ok
  function name(arg) { ... }    // ✗ evitar

  run(function () { ... })      // ✓ ok
  run(function() { ... })       // ✗ evitar
  ```

* **Usar siempre** `===` en vez de `==`.<br>
  Exception: `obj == null` is allowed to check for `null || undefined`.

  eslint: [`eqeqeq`](http://eslint.org/docs/rules/eqeqeq)

  ```js
  if (name === 'John')   // ✓ ok
  if (name == 'John')    // ✗ evitar
  ```

  ```js
  if (name !== 'John')   // ✓ ok
  if (name != 'John')    // ✗ evitar
  ```

* **Operadores infijos** deben ser espaciados.

  eslint: [`space-infix-ops`](http://eslint.org/docs/rules/space-infix-ops)

  ```js
  // ✓ ok
  var x = 2
  var message = 'hello, ' + name + '!'
  ```

  ```js
  // ✗ evitar
  var x=2
  var message = 'hello, '+name+'!'
  ```

* **Comas deben tener un espacio** despues de ellas.

  eslint: [`comma-spacing`](http://eslint.org/docs/rules/comma-spacing)

  ```js
  // ✓ ok
  var list = [1, 2, 3, 4]
  function greet (name, options) { ... }
  ```

  ```js
  // ✗ evitar
  var list = [1,2,3,4]
  function greet (name,options) { ... }
  ```

* **Mantener declaracion else** en la misma linea que sus llaves.

  eslint: [`brace-style`](http://eslint.org/docs/rules/brace-style)

  ```js
  // ✓ ok
  if (condition) {
    // ...
  } else {
    // ...
  }
  ```

  ```js
  // ✗ evitar
  if (condition) {
    // ...
  }
  else {
    // ...
  }
  ```

* **Para declaraciones if multi-linea** debe usar llaves.

  eslint: [`curly`](http://eslint.org/docs/rules/curly)

  ```js
  // ✓ ok
  if (options.quiet !== true) console.log('done')
  ```

  ```js
  // ✓ ok
  if (options.quiet !== true) {
    console.log('done')
  }
  ```

  ```js
  // ✗ evitar
  if (options.quiet !== true)
    console.log('done')
  ```

* **Siempre gestionar** el parámetro `err` en las funciones.

  eslint: [`handle-callback-err`](http://eslint.org/docs/rules/handle-callback-err)
  ```js
  // ✓ ok
  run(function (err) {
    if (err) throw err
    window.alert('done')
  })
  ```

  ```js
  // ✗ evitar
  run(function (err) {
    window.alert('done')
  })
  ```

* **En las variables globales usar el sufijo** `window.`.<br>
  Con la excepcion de: `document`, `console` y `navigator`.

  eslint: [`no-undef`](http://eslint.org/docs/rules/no-undef)

  ```js
  window.alert('hi')   // ✓ ok
  ```

* **Múltiples líneas en blanco no está permitido.**

  eslint: [`no-multiple-empty-lines`](http://eslint.org/docs/rules/no-multiple-empty-lines)

  ```js
  // ✓ ok
  var value = 'hello world'
  console.log(value)
  ```

  ```js
  // ✗ evitar
  var value = 'hello world'


  console.log(value)
  ```

* **Para el operador ternario** en multi-linea, colocar el `?` y `:` en su propia nueva linea.

  eslint: [`operator-linebreak`](http://eslint.org/docs/rules/operator-linebreak)

  ```js
  // ✓ ok
  var location = env.development ? 'localhost' : 'www.api.com'

  // ✓ ok
  var location = env.development
    ? 'localhost'
    : 'www.api.com'

  // ✗ evitar
  var location = env.development ?
    'localhost' :
    'www.api.com'
  ```

* **Para declaraciones var,** escribir solo una asignación en cada declaracion

  eslint: [`one-var`](http://eslint.org/docs/rules/one-var)

  ```js
  // ✓ ok
  var silent = true
  var verbose = true

  // ✗ evitar
  var silent = true, verbose = true

  // ✗ evitar
  var silent = true,
      verbose = true
  ```

* **Envolver asignaciones condicionales** con paréntesis adicionales. Esto hace claro que la intención de la expresión es una asignación y no un error de igualdad (`===`).

  eslint: [`no-cond-assign`](http://eslint.org/docs/rules/no-cond-assign)

  ```js
  // ✓ ok
  while ((m = text.match(expr))) {
    // ...
  }

  // ✗ evitar
  while (m = text.match(expr)) {
    // ...
  }
  ```

* **Agregar espacios dentro de bloques de una sola linea.**

  eslint: [`block-spacing`](http://eslint.org/docs/rules/block-spacing)

  ```js
    function foo () {return true}    // ✗ evitar
    function foo () { return true }  // ✓ ok
  ```

* **Usar camelcase al nombre variables y funciones.**

  eslint: [`camelcase`](http://eslint.org/docs/rules/camelcase)

  ```js
    function my_function () { }    // ✗ avoid
    function myFunction () { }     // ✓ ok

    var my_var = 'hello'           // ✗ avoid
    var myVar = 'hello'            // ✓ ok
  ```

* **Comas adicionales no esta permitido.**

  eslint: [`comma-dangle`](http://eslint.org/docs/rules/comma-dangle)

  ```js
    var obj = {
      message: 'hello',   // ✗ avoid
    }
  ```

* **Comas deben colocarse al final de la linea actual.**

  eslint: [`comma-style`](http://eslint.org/docs/rules/comma-style)

  ```js
    var obj = {
      foo: 'foo'
      ,bar: 'bar'   // ✗ avoid
    }

    var obj = {
      foo: 'foo',
      bar: 'bar'   // ✓ ok
    }
  ```

* **El Puto debe ir en la misma linea que la propiedad.**

  eslint: [`dot-location`](http://eslint.org/docs/rules/dot-location)

  ```js
    console.
      log('hello')  // ✗ avoid

    console
      .log('hello') // ✓ ok
  ```

* **Archivos deben terminar con una nueva linea.**

  elint: [`eol-last`](http://eslint.org/docs/rules/eol-last)

* **Sin espacios entre el identificador de la funcion y su invocación.**

  eslint: [`func-call-spacing`](http://eslint.org/docs/rules/func-call-spacing)

  ```js
  console.log ('hello') // ✗ avoid
  console.log('hello')  // ✓ ok
  ```

* **Agregar espacio entre dos puntos (colon) y pares clave valor.**

  eslint: [`key-spacing`](http://eslint.org/docs/rules/key-spacing)

  ```js
  var obj = { 'key' : 'value' }    // ✗ avoid
  var obj = { 'key' :'value' }     // ✗ avoid
  var obj = { 'key':'value' }      // ✗ avoid
  var obj = { 'key': 'value' }     // ✓ ok
  ```

* **Nombres de Constructor deben empezar con letra Mayúscula.**

  eslint: [`new-cap`](http://eslint.org/docs/rules/new-cap)

  ```js
  function animal () {}
  var dog = new animal()    // ✗ avoid

  function Animal () {}
  var dog = new Animal()    // ✓ ok
  ```

* **Constructor sin argumentos debe ser invocado con paréntesis.**

  eslint: [`new-parens`](http://eslint.org/docs/rules/new-parens)

  ```js
  function Animal () {}
  var dog = new Animal    // ✗ avoid
  var dog = new Animal()  // ✓ ok
  ```

* **Objetos deben contener un getter cuando se ha definido un setter.**

  eslint: [`accessor-pairs`](http://eslint.org/docs/rules/accessor-pairs)

  ```js
  var person = {
    set name (value) {    // ✗ avoid
      this.name = value
    }
  }

  var person = {
    set name (value) {
      this.name = value
    },
    get name () {         // ✓ ok
      return this.name
    }
  }
  ```

* **Constructores de clases derivadas deben llamar `super`.**

  eslint: [`constructor-super`](http://eslint.org/docs/rules/constructor-super)

  ```js
  class Dog {
    constructor () {
      super()   // ✗ avoid
    }
  }

  class Dog extends Mammal {
    constructor () {
      super()   // ✓ ok
    }
  }
  ```

* **Usar array literales en vez de array constructor.**

  eslint: [`no-array-constructor`](http://eslint.org/docs/rules/no-array-constructor)

  ```js
  var nums = new Array(1, 2, 3)   // ✗ avoid
  var nums = [1, 2, 3]            // ✓ ok
  ```

* **Evitar usar arguments.calle y arguments.caller.**

  eslint: [`no-caller`](http://eslint.org/docs/rules/no-caller)

  ```js
  function foo (n) {
    if (n <= 0) return

    arguments.callee(n - 1)   // ✗ avoid
  }

  function foo (n) {
    if (n <= 0) return

    foo(n - 1)
  }
  ```

* **Evitar modificar variables que fueron declaradas como clase.**

  eslint: [`no-class-assign`](http://eslint.org/docs/rules/no-class-assign)

  ```js
  class Dog {}
  Dog = 'Fido'    // ✗ avoid
  ```

* **Evitar modifidicar variables declaracas usando `const`.**

  eslint: [`no-const-assign`](http://eslint.org/docs/rules/no-const-assign)

  ```js
  const score = 100
  score = 125       // ✗ avoid
  ```

* **Evitar usar expresiones constantes en condicionales (a excepcion de búcles).**

  eslint: [`no-constant-condition`](http://eslint.org/docs/rules/no-constant-condition)

  ```js
  if (false) {    // ✗ avoid
    // ...
  }

  if (x === 0) {  // ✓ ok
    // ...
  }

  while (true) {  // ✓ ok
    // ...
  }
  ```

* **Evitar carácteres de control de expresiones regulares.**

  eslint: [`no-control-regex`](http://eslint.org/docs/rules/no-control-regex)

  ```js
  var pattern = /\x1f/    // ✗ avoid
  var pattern = /\x20/    // ✓ ok
  ```

* **Evitar sentencias `debugger`.**

  eslint: [`no-debugger`](http://eslint.org/docs/rules/no-debugger)

  ```js
  function sum (a, b) {
    debugger      // ✗ avoid
    return a + b
  }
  ```
* **Evitar operador delete en variables.**

  eslint: [`no-delete-var`](http://eslint.org/docs/rules/no-delete-var)

  ```js
  var name
  delete name     // ✗ avoid
  ```

* **Evitar argumentos duplicados en definicion de funciones.**

  eslint: [`no-dupe-args`](http://eslint.org/docs/rules/no-dupe-args)

  ```js
  function sum (a, b, a) {  // ✗ avoid
    // ...
  }

  function sum (a, b, c) {  // ✓ ok
    // ...
  }
  ```

* **Evitar duplicados en miembros de clase.**

  eslint: [`no-dupe-class-members`](http://eslint.org/docs/rules/no-dupe-class-members)

  ```js
  class Dog {
    bark () {}
    bark () {}    // ✗ avoid
  }
  ```

* **Evitar duplicado de claves en objetos literales.**

  eslint: [`no-dupe-keys`](http://eslint.org/docs/rules/no-dupe-keys)

  ```js
  var user = {
    name: 'Jane Doe',
    name: 'John Doe'    // ✗ avoid
  }
  ```

* **Evitar dublicados de etiqueta `case` en sentencias `switch`.**

  eslint: [`no-duplicate-case`](http://eslint.org/docs/rules/no-duplicate-case)

  ```js
  switch (id) {
    case 1:
      // ...
    case 1:     // ✗ avoid
  }
  ```

* **Usar una unica sentencia `import` por modulo.**

  eslint: [`no-duplicate-imports`](http://eslint.org/docs/rules/no-duplicate-imports)

  ```js
  import { myFunc1 } from 'module'
  import { myFunc2 } from 'module'          // ✗ avoid

  import { myFunc1, myFunc2 } from 'module' // ✓ ok
  ```

* **Evitar classes de carácteres vacia en expresiones regulares.**

  eslint: [`no-empty-character-class`](http://eslint.org/docs/rules/no-empty-character-class)

  ```js
  const myRegex = /^abc[]/      // ✗ avoid
  const myRegex = /^abc[a-z]/   // ✓ ok
  ```

* **Evitar pratones de destructuración vacios.**

  eslint: [`no-empty-pattern`](http://eslint.org/docs/rules/no-empty-pattern)

  ```js
  const { a: {} } = foo         // ✗ avoid
  const { a: { b } } = foo      // ✓ ok
  ```

* **Evitar uso de `eval()`.**

  eslint: [`no-eval`](http://eslint.org/docs/rules/no-eval)

  ```js
  eval( "var result = user." + propName ) // ✗ avoid
  var result = user[propName]             // ✓ ok
  ```

* **Evitar reasignar excepciones en clausas `catch`.**

  eslint: [`no-ex-assign`](http://eslint.org/docs/rules/no-ex-assign)

  ```js
  try {
    // ...
  } catch (e) {
    e = 'new value'             // ✗ avoid
  }

  try {
    // ...
  } catch (e) {
    const newVal = 'new value'  // ✓ ok
  }
  ```

* **Evitar extender objetos nativos**

  eslint: [`no-extend-native`](http://eslint.org/docs/rules/no-extend-native)

  ```js
  Object.prototype.age = 21     // ✗ avoid
  ```

* **Evitar uso innecesario de bind en funciones.**

  eslint: [`no-extra-bind`](http://eslint.org/docs/rules/no-extra-bind)

  ```js
  const name = function () {
    getName()
  }.bind(user)    // ✗ avoid

  const name = function () {
    this.getName()
  }.bind(user)    // ✓ ok
  ```

* **Evitar hacer cast a booleanos.**

  eslint: [`no-extra-boolean-cast`](http://eslint.org/docs/rules/no-extra-boolean-cast)

  ```js
  const result = true
  if (!!result) {   // ✗ avoid
    // ...
  }

  const result = true
  if (result) {     // ✓ ok
    // ...
  }
  ```

* **Evitar paréntesis inncesario alrededor de expresión de funciones.**

  eslint: [`no-extra-parens`](http://eslint.org/docs/rules/no-extra-parens)

  ```js
  const myFunc = (function () { })   // ✗ avoid
  const myFunc = function () { }     // ✓ ok
  ```

* **Usar `break` para evitar pasar de largo `fallthrough` en casos `switch`.**

  eslint: [`no-fallthrough`](http://eslint.org/docs/rules/no-fallthrough)

  ```js
  switch (filter) {
    case 1:
      doSomething()    // ✗ avoid
    case 2:
      doSomethingElse()
  }

  switch (filter) {
    case 1:
      doSomething()
      break           // ✓ ok
    case 2:
      doSomethingElse()
  }

  switch (filter) {
    case 1:
      doSomething()
      // fallthrough  // ✓ ok
    case 2:
      doSomethingElse()
  }
  ```

* **Evitar decimales flotantes.**

  eslint: [`no-floating-decimal`](http://eslint.org/docs/rules/no-floating-decimal)

  ```js
  const discount = .5      // ✗ avoid
  const discount = 0.5     // ✓ ok
  ```

* **Evitar reasignación de declaraciones de funciones.**

  eslint: [`no-func-assign`](http://eslint.org/docs/rules/no-func-assign)

  ```js
  function myFunc () { }
  myFunc = myOtherFunc    // ✗ avoid
  ```

* **Evitar reasignación de variables globales de solo-lectura.**

  eslint: [`no-global-assign`](http://eslint.org/docs/rules/no-global-assign)

  ```js
  window = {}     // ✗ avoid
  ```

* **Evitar usar eval() implícito.**

  eslint: [`no-implied-eval`](http://eslint.org/docs/rules/no-implied-eval)

  ```js
  setTimeout("alert('Hello world')")                   // ✗ avoid
  setTimeout(function () { alert('Hello world') })     // ✓ ok
  ```

* **Evitar declaracion de funciones en bloques anidados.**

  eslint: [`no-inner-declarations`](http://eslint.org/docs/rules/no-inner-declarations)

  ```js
  if (authenticated) {
    function setAuthUser () {}    // ✗ avoid
  }
  ```

* **Evitar cadenas de texto expresiones regulares invalidas en costructores `RegExp`.**

  eslint: [`no-invalid-regexp`](http://eslint.org/docs/rules/no-invalid-regexp)

  ```js
  RegExp('[a-z')    // ✗ avoid
  RegExp('[a-z]')   // ✓ ok
  ```

* **Evitar espacios en blanco irregulares.**

  eslint: [`no-irregular-whitespace`](http://eslint.org/docs/rules/no-irregular-whitespace)

  ```js
  function myFunc () /*<NBSP>*/{}   // ✗ avoid
  ```

* **Evitar uso de `__iterator__`.**

  eslint: [`no-iterator`](http://eslint.org/docs/rules/no-iterator)

  ```js
  Foo.prototype.__iterator__ = function () {}   // ✗ avoid
  ```

* **Evitar etiquetas que comparten el nombre de una variable en scope.**

  eslint: [`no-label-var`](http://eslint.org/docs/rules/no-label-var)

  ```js
  var score = 100
  function game () {
    score: 50         // ✗ avoid
  }
  ```

* **Evitar sentencias etiquetadas.**

  eslint: [`no-labels`](http://eslint.org/docs/rules/no-labels)

  ```js
  label:
    while (true) {
      break label     // ✗ avoid
    }
  ```

* **Evitar bloques anidados innecesarios**

  eslint: [`no-lone-blocks`](http://eslint.org/docs/rules/no-lone-blocks)

  ```js
  function myFunc () {
    {                   // ✗ avoid
      myOtherFunc()
    }
  }

  function myFunc () {
    myOtherFunc()       // ✓ ok
  }
  ```

* **Evitar mezclar espacios y tabulaciones para sangría**

  eslint: [`no-mixed-spaces-and-tabs`](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs)

* **Evitar uso de espacios en blanco multiples a excepcion de sangría**

  eslint: [`no-multi-spaces`](http://eslint.org/docs/rules/no-multi-spaces)

  ```js
  const id =    1234    // ✗ avoid
  const id = 1234       // ✓ ok
  ```

* **Evitar cadenas de texto multi-linea**

  eslint: [`no-multi-str`](http://eslint.org/docs/rules/no-multi-str)

  ```js
  const message = 'Hello \
                   world'     // ✗ avoid
  ```

* **Evitar usar `new` sin asignar a el objecto a una variable**

  eslint: [`no-new`](http://eslint.org/docs/rules/no-new)

  ```js
  new Character()                     // ✗ avoid
  const character = new Character()   // ✓ ok
  ```

* **Evitar uso de constructor `Function`.**

  eslint: [`no-new-func`](http://eslint.org/docs/rules/no-new-func)

  ```js
  var sum = new Function('a', 'b', 'return a + b')    // ✗ avoid
  ```

* **Evitar uso de constructor `Object`**

  eslint: [`no-new-object`](http://eslint.org/docs/rules/no-new-object)

  ```js
  let config = new Object()   // ✗ avoid
  ```

* **Evitar uso de `new require`.**

  eslint: [`no-new-require`](http://eslint.org/docs/rules/no-new-require)

  ```js
  const myModule = new require('my-module')    // ✗ avoid
  ```

* **Evitar uso de constructor `Symbol`.**

  eslint: [`no-new-symbol`](http://eslint.org/docs/rules/no-new-symbol)

  ```js
  const foo = new Symbol('foo')   // ✗ avoid
  ```

* **Evitar envolturas de instancias primitivas.**

  eslint: [`no-new-wrappers`](http://eslint.org/docs/rules/no-new-wrappers)

  ```js
  const message = new String('hello')   // ✗ avoid
  ```

* **Evitar llamar propiedades de objetos globles como funciones.**

  eslint: [`no-obj-calls`](http://eslint.org/docs/rules/no-obj-calls)

  ```js
  const math = Math()   // ✗ avoid
  ```

* **Evitar uso de octal literal.**

  eslint: [`no-octal`](http://eslint.org/docs/rules/no-octal)

  ```js
  const num = 042     // ✗ avoid
  const num = '042'   // ✓ ok
  ```

* **Evitar escapado de secuencia octal en cadena de texto literal.**

  eslint: [`no-octal-escape`](http://eslint.org/docs/rules/no-octal-escape)

  ```js
  const copyright = 'Copyright \251'  // ✗ avoid
  ```

* **Evitar concatenacion de cadena de texto para `__dirname` y `__filename`.**

  eslint: [`no-path-concat`](http://eslint.org/docs/rules/no-path-concat)

  ```js
  const pathToFile = __dirname + '/app.js'            // ✗ avoid
  const pathToFile = path.join(__dirname, 'app.js')   // ✓ ok
  ```

* **Evitar uso de `__proto__`.** Use `getPrototypeOf` en su lugar.

  eslint: [`no-proto`](http://eslint.org/docs/rules/no-proto)

  ```js
  const foo = obj.__proto__               // ✗ avoid
  const foo = Object.getPrototypeOf(obj)  // ✓ ok
  ```

* **Evitar re-reclaración de variables.**

  eslint: [`no-redeclare`](http://eslint.org/docs/rules/no-redeclare)

  ```js
  let name = 'John'
  let name = 'Jane'     // ✗ avoid

  let name = 'John'
  name = 'Jane'         // ✓ ok
  ```

* **Evitar multiples espacios en expresiones regulares.**

  eslint: [`no-regex-spaces`](http://eslint.org/docs/rules/no-regex-spaces)

  ```js
  const regexp = /test   value/   // ✗ avoid

  const regexp = /test {3}value/  // ✓ ok
  const regexp = /test value/     // ✓ ok
  ```

* **Asignación de variables en el retorno de funciones debe estar rodeado de paréntesis.**

  eslint: [`no-return-assign`](http://eslint.org/docs/rules/no-return-assign)

  ```js
  function sum (a, b) {
    return result = a + b     // ✗ avoid
  }

  function sum (a, b) {
    return (result = a + b)   // ✓ ok
  }
  ```

* **Evitar asignar una variable a si misma.**

  eslint: [`no-self-assign`](http://eslint.org/docs/rules/no-self-assign)

  ```js
  name = name   // ✗ avoid
  ```

* **Evitar comparar una variable consigo mismo.**

  esint: [`no-self-compare`](http://eslint.org/docs/rules/no-self-compare)

  ```js
  if (score === score) {}   // ✗ avoid
  ```

* **Evitar uso de secuencia separado po comma.**

  eslint: [`no-sequences`](http://eslint.org/docs/rules/no-sequences)

  ```js
  if (doSomething(), !!test) {}   // ✗ avoid
  ```

* **Nombres restringidos no deben ser cambiados (shadowed).**

  eslint: [`no-shadow-restricted-names`](http://eslint.org/docs/rules/no-shadow-restricted-names)

  ```js
  let undefined = 'value'     // ✗ avoid
  ```

* **Array dispersos no estan permitidos.**

  eslint: [`no-sparse-arrays`](http://eslint.org/docs/rules/no-sparse-arrays)

  ```js
  let fruits = ['apple',, 'orange']       // ✗ avoid
  ```

* **No se deben usar Tabulaciones.**

  eslint: [`no-tabs`](http://eslint.org/docs/rule

* **Cadenas de textos regulares no deben contener placeholders de plantillas literales.**

  eslint: [`no-template-curly-in-string`](http://eslint.org/docs/rules/no-template-curly-in-string)

  ```js
  const message = 'Hello ${name}'   // ✗ avoid
  const message = `Hello ${name}`   // ✓ ok
  ```

* **`super()` debe ser llamado inmediatamente antes de usar `this`.**

  eslint: [`no-this-before-super`](http://eslint.org/docs/rules/no-this-before-super)

  ```js
  class Dog extends Animal {
    constructor () {
      this.legs = 4     // ✗ avoid
      super()
    }
  }
  ```

* **Solo se puede lanzar (`throw`) un objecto `Error`.**

  eslint: [`no-throw-literal`](http://eslint.org/docs/rules/no-throw-literal)

  ```js
  throw 'error'               // ✗ avoid
  throw new Error('error')    // ✓ ok
  ```

* **Espacios en blanco despues del final linea no estan permitidos .**

  eslint: [`no-trailing-spaces`](http://eslint.org/docs/rules/no-trailing-spaces)

* **Inicializar una variable con `undefined` no esta permitido.**

  eslint: [`no-undef-init`](http://eslint.org/docs/rules/no-undef-init)

  ```js
  let name = undefined    // ✗ avoid

  let name
  name = 'value'          // ✓ ok
  ```

* **Búcles no modificados no estan permitidos.**

  eslint: [`no-unmodified-loop-condition`](http://eslint.org/docs/rules/no-unmodified-loop-condition)

  ```js
  for (let i = 0; i < items.length; j++) {...}    // ✗ avoid
  for (let i = 0; i < items.length; i++) {...}    // ✓ ok
  ```

 * **Evitar usar operador ternario cuando existe una alternative mas simple.**

   eslint: [`no-unneeded-ternary`](http://eslint.org/docs/rules/no-unneeded-ternary)

   ```js
   let score = val ? val : 0     // ✗ avoid
   let score = val || 0          // ✓ ok
   ```

* **Evitar dejar código inalcanzable despues de sentencias `return`, `throw`, `continue`, y `break` .**

  eslint: [`no-unreachable`](http://eslint.org/docs/rules/no-unreachable)

  ```js
  function doSomething () {
    return true
    console.log('never called')     // ✗ avoid
  }
  ```

* **Evitar sentencias de control de flujo en bloques `finally`.**

  eslint: [`no-unsafe-finally`](http://eslint.org/docs/rules/no-unsafe-finally)

  ```js
  try {
    // ...
  } catch (e) {
    // ...
  } finally {
    return 42     // ✗ avoid
  }
  ```

* **El operando izquierdo en operaciones relacionales no debe ser negado.**

  eslint: [`no-unsafe-negation`](http://eslint.org/docs/rules/no-unsafe-negation)

  ```js
  if (!key in obj) {}       // ✗ avoid
  ```

* **Evitar uso inncesario de `.call()` y `.apply()`.**

  eslint: [`no-useless-call`](http://eslint.org/docs/rules/no-useless-call)

  ```js
  sum.call(null, 1, 2, 3)   // ✗ avoid
  ```

 * **Evitar usar constructores innecesarios.**

   eslint: [`no-useless-computed-key`](http://eslint.org/docs/rules/no-useless-computed-key)

   ```js
   const user = { ['name']: 'John Doe' }   // ✗ avoid
   const user = { name: 'John Doe' }       // ✓ ok
   ```

 * **Evitar uso inncesario de escapado de text.**

   eslint: [`no-useless-escape`](http://eslint.org/docs/rules/no-useless-escape)

   ```js
   let message = 'Hell\o'  // ✗ avoid
   ```

 * **Renombrar import, export o destructuración con el mismo nombre  no esta permitido**

   eslint: [`no-useless-rename`](http://eslint.org/docs/rules/no-useless-rename)

   ```js
   import { config as config } from './config'     // ✗ avoid
   import { config } from './config'               // ✓ ok
   ```

 * **Evitar espacios en blanco antes de una propiedad.**

   eslint: [`no-whitespace-before-property`](http://eslint.org/docs/rules/no-whitespace-before-property)

   ```js
   user .name      // ✗ avoid
   user.name       // ✓ ok
   ```

 * **Evitar uso de sentencia `with`.**

   eslint: [`no-with`](http://eslint.org/docs/rules/no-with)

   ```js
   with (val) {...}    // ✗ avoid
   ```

 * **Mantener consistencia de nuevas lineas entre las propiedades de un objecto .**

   eslint: [`object-property-newline`](http://eslint.org/docs/rules/object-property-newline)

   ```js
   const user = {
     name: 'Jane Doe', age: 30,
     username: 'jdoe86'            // ✗ avoid
   }

   const user = { name: 'Jane Doe', age: 30, username: 'jdoe86' }    // ✓ ok

   const user = {
     name: 'Jane Doe',
     age: 30,
     username: 'jdoe86'
   }                                                                 // ✓ ok
   ```

 * **Evitar espacios de relleno entre bloques.**

   eslint: [`padded-blocks`](http://eslint.org/docs/rules/padded-blocks)

   ```js
   if (user) {
                               // ✗ avoid
     const name = getName()

   }

   if (user) {
     const name = getName()    // ✓ ok
   }
   ```

 * **Evitar espacios en blanco entre el operador de propagacion y la expresion**

   eslint: [`rest-spread-spacing`](http://eslint.org/docs/rules/rest-spread-spacing)

   ```js
   fn(... args)    // ✗ avoid
   fn(...args)     // ✓ ok
   ```

 * **Punto y coma (semicolon) debe tener un espacio en blanco despues y no antes.**

   eslint: [`semi-spacing`](http://eslint.org/docs/rules/semi-spacing)

   ```js
   for (let i = 0 ;i < items.length ;i++) {...}    // ✗ avoid
   for (let i = 0; i < items.length; i++) {...}    // ✓ ok
   ```

 * **Mantener espacio despues de los bloques.**

   eslint: [`space-before-blocks`](http://eslint.org/docs/rules/space-before-blocks)

   ```js
   if (admin){...}     // ✗ avoid
   if (admin) {...}    // ✓ ok
   ```

 * **Evitar espacios en blanco entre paréntesis.**

   eslint: [`space-in-parens`](http://eslint.org/docs/rules/space-in-parens)

   ```js
   getName( name )     // ✗ avoid
   getName(name)       // ✓ ok
   ```

 * **Operador unario debe tener espacio en blanco despues.**

   eslint: [`space-unary-ops`](http://eslint.org/docs/rules/space-unary-ops)

   ```js
   typeof!admin        // ✗ avoid
   typeof !admin        // ✓ ok
   ```

 * **Usar espacios dentro de comentarios.**

  eslint: [`spaced-comment`](http://eslint.org/docs/rules/spaced-comment)

  ```js
  //comment           // ✗ avoid
  // comment          // ✓ ok

  /*comment*/         // ✗ avoid
  /* comment */       // ✓ ok
  ```

 * **Evitar espacios en blanco dentro de placeholders de plantillas literales.**

  eslint: [`template-curly-spacing`](http://eslint.org/docs/rules/template-curly-spacing)

  ```js
  const message = `Hello, ${ name }`    // ✗ avoid
  const message = `Hello, ${name}`      // ✓ ok
  ```

* **Usar `isNaN()` cuando se desea chequear `NaN`.**

  eslint: [`use-isnan`](http://eslint.org/docs/rules/use-isnan)

  ```js
  if (price === NaN) { }      // ✗ avoid
  if (isNaN(price)) { }       // ✓ ok
  ```

* **`typeof` debe ser comparado con una cadena de texto valida.**

  eslint: [`valid-typeof`](http://eslint.org/docs/rules/valid-typeof)

  ```js
  typeof name === 'undefimed'     // ✗ avoid
  typeof name === 'undefined'     // ✓ ok
  ```

* **Expressiones Funciones inmediatamente invocadas (IIFEs) deben ser envueltas en paréntesis.**

  eslint: [`wrap-iife`](http://eslint.org/docs/rules/wrap-iife)

  ```js
  const getName = function () { }()     // ✗ avoid

  const getName = (function () { }())   // ✓ ok
  const getName = (function () { })()   // ✓ ok
  ```

* **El `*` en expresiones `yield*` deben tener un espacio en blanco antes y despues.**

  eslint: [`yield-star-spacing`](http://eslint.org/docs/rules/yield-star-spacing)

  ```js
  yield* increment()    // ✗ avoid
  yield * increment()   // ✓ ok
  ```

* **Evitar condiciones Yoda.**

  eslint: [`yoda`](http://eslint.org/docs/rules/yoda)

  ```js
  if (42 === age) { }    // ✗ avoid
  if (age === 42) { }    // ✓ ok
  ```

## Puntos y comas (semicolons)

* Sin puntos y comas. (see: [1](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding), [2](http://inimino.org/%7Einimino/blog/javascript_semicolons), [3](https://www.youtube.com/watch?v=gsfbh17Ax9I))

  eslint: [`semi`](http://eslint.org/docs/rules/semi)

  ```js
  window.alert('hi')   // ✓ ok
  window.alert('hi');  // ✗ evitar
  ```

* Nunca empezar una linea con `(`, `[`, o `` ` ``. Este es el único problema cuando se omiten los puntos y comas, y `standard` te protege de problemas potenciales

  eslint: [`no-unexpected-multiline`](http://eslint.org/docs/rules/no-unexpected-multiline)

  ```js
  // ✓ ok
  ;(function () {
    window.alert('ok')
  }())

  // ✗ evitar
  (function () {
    window.alert('ok')
  }())
  ```

  ```js
  // ✓ ok
  ;[1, 2, 3].forEach(bar)

  // ✗ evitar
  [1, 2, 3].forEach(bar)
  ```

  ```js
  // ✓ ok
  ;`hello`.indexOf('o')

  // ✗ evitar
  `hello`.indexOf('o')
  ```

  Nota: si te encuentras a menudo escribiendo código de esta manera,
  quizás estás tratando de ser muy listo.

  esta taquigrafía es rechazada, en favor a expresiones claras y legibles, cuando sea posible.

  En vez de esto:

  ```js
  ;[1, 2, 3].forEach(bar)
  ```

  Se prefiere esto:

  ```js
  var nums = [1, 2, 3]
  nums.forEach(bar)
  ```


## Lectura de ayuda con referencia hacia los puntos y comas

- [An Open Letter to JavaScript Leaders Regarding Semicolons][1]
- [JavaScript Semicolon Insertion – Everything you need to know][2]

##### También un video:

- [Are Semicolons Necessary in JavaScript? - YouTube][3]

Los minificadores de código populares hoy en día están basados en AST
(Árbol abstracto de sintaxis), de manera que pueden gestionar JavaScript
sin puntos y comas sin problemas (puntos y comas no son requeridos en JavaScript).

##### Extrácto de *["An Open Letter to JavaScript Leaders Regarding Semicolons"][1]*:

[Depender de ASI (Inserción automática de puntos y comas)] es bastante seguro, y perfectamente válido que cualquier navegador web entiende, Compilador Closure, yuicompressor, packer y jsmin todos pueden perfectamente minificarlo. No existe impacto en el performance.

Lamento que, en vez de educarlos, sus líderes en este lenguaje les han dado mentiras y miedos. Que sinverguenza. Yo te recomiendo aprender como las declaraciones realmente terminan en JavaScript (y en cuales casos no terminan), de esta manera tu puedes escribir código que encuentres hermoso.

En general, `\n` termina una declaración a menos que
La declaración tiene sin cerrar un paréntesis, array literal, o objeto literal o termina de una manera no válida (por instancia, terminar con `.` o `,`)
La línea es `--` o `++` (en este caso esto decrementa/incrementa el proximo token)
Es un `for()`, `while()`, `do`, `if()`, o `else`, no exista una llave `{`
La próxima línea empieza con `[`, `(`, `+`, `*`, `/`, `-`, `,`, `.` o algún operador binario que solo se encuentra entre dos tokens en un sola expresión

El primero es bastante obvio. Incluso JSLint no tiene problemas con caracteres `\n` en JSON y constructores entre paréntesis, y con declaraciones `var` que lapsan múltiples líneas terminando con `,`.

El segundo es super raro. Yo nunca he visto un caso (fuera de este tipo de conversaciones) donde quisieras escribir `i\n++\nj`, pero, de hecho eso es analizado como `i; ++j;`y  no `j++; j`.

El tercero es bien entendido, es generalmente despreciado. `if (x)\ny()` es equivalente a `if (x) { y() }`. El constructor no termina hasta que alcanza un bloque o una declaración.

`;` es una declaración JavaScript válida, entonces `if(x);` es el equivalente a `if(x){}` o “Sí x, hacer nada” Esto es más comúnmente aplicado a bucles donde el bucle también chequea si la función actualiza, No es usual, pero existe.

El cuarto es generalmente el caso inducido “Oh no, necesitas puntos y comas”. Pero pasa que es bastante simple darle el prefijo a esas linas con puntos y comas, si no quieres que sean la continuacion de la linea previa. Por ejemplo, en vez de esto:

```js
foo();
[1,2,3].forEach(bar);
```

podrias hacer esto:

```js
foo()
;[1,2,3].forEach(bar)
```

La ventaja es que los prefijos son fáciles de notar, una vez te acostumbras a ver líneas que no empiecen con `(` o `[` sin puntos y comas.

*Fin the la cita de "An Open Letter to JavaScript Leaders Regarding Semicolons".*

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://www.youtube.com/watch?v=gsfbh17Ax9I
