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

這是 [standard](https://github.com/standard/standard) 語法規則的摘要。

最快速掌握 `standard` 的方法，就是直接安裝並在你的程式碼中開始使用。

## 規則

* **兩個空白** 當作縮排。

  eslint: [`indent`](http://eslint.org/docs/rules/indent)

  ```js
  function hello (name) {
    console.log('hi', name)
  }
  ```

* **字串用單引號** ，除非要避免跳脫字元。

  eslint: [`quotes`](http://eslint.org/docs/rules/quotes)

  ```js
  console.log('hello there')
  $("<div class='box'>")
  ```

* **沒有不必要的變數。**

  eslint: [`no-unused-vars`](http://eslint.org/docs/rules/no-unused-vars)

  ```js
  function myFunction () {
    var result = something()   // ✗ avoid
  }
  ```

* **關鍵字後加空白。**

  eslint: [`keyword-spacing`](http://eslint.org/docs/rules/keyword-spacing)

  ```js
  if (condition) { ... }   // ✓ ok
  if(condition) { ... }    // ✗ avoid
  ```

* **函數宣告時，括號前要加空白。**

  eslint: [`space-before-function-paren`](http://eslint.org/docs/rules/space-before-function-paren)

  ```js
  function name (arg) { ... }   // ✓ ok
  function name(arg) { ... }    // ✗ avoid

  run(function () { ... })      // ✓ ok
  run(function() { ... })       // ✗ avoid
  ```

* **統一用** `===` 取代 `==`。<br>
  例外： `obj == null` 可以用來檢查 `null || undefined`。

  eslint: [`eqeqeq`](http://eslint.org/docs/rules/eqeqeq)

  ```js
  if (name === 'John')   // ✓ ok
  if (name == 'John')    // ✗ avoid
  ```

  ```js
  if (name !== 'John')   // ✓ ok
  if (name != 'John')    // ✗ avoid
  ```

* **中綴運算子（infix operator）前後** 必須要加空白。

  eslint: [`space-infix-ops`](http://eslint.org/docs/rules/space-infix-ops)

  ```js
  // ✓ ok
  var x = 2
  var message = 'hello, ' + name + '!'
  ```

  ```js
  // ✗ avoid
  var x=2
  var message = 'hello, '+name+'!'
  ```

* **逗號後面要加一個空白。**

  eslint: [`comma-spacing`](http://eslint.org/docs/rules/comma-spacing)

  ```js
  // ✓ ok
  var list = [1, 2, 3, 4]
  function greet (name, options) { ... }
  ```

  ```js
  // ✗ avoid
  var list = [1,2,3,4]
  function greet (name,options) { ... }
  ```

* **把 else 語句** 放在大括弧的同一行。

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
  // ✗ avoid
  if (condition) {
    // ...
  }
  else {
    // ...
  }
  ```

* **在 if 語句多於一行時，** 加上大括弧。

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
  // ✗ avoid
  if (options.quiet !== true)
    console.log('done')
  ```

* **一定要處理 `err`** 參數。

  eslint: [`handle-callback-err`](http://eslint.org/docs/rules/handle-callback-err)
  ```js
  // ✓ ok
  run(function (err) {
    if (err) throw err
    window.alert('done')
  })
  ```

  ```js
  // ✗ avoid
  run(function (err) {
    window.alert('done')
  })
  ```

* **一定要對瀏覽器中的全域變數** 加上 `window` 前綴。<br>
  除了 `document`、`console` 和 `navigator` 可以不用。

  eslint: [`no-undef`](http://eslint.org/docs/rules/no-undef)

  ```js
  window.alert('hi')   // ✓ ok
  ```

* **不允許多行空白行。**

  eslint: [`no-multiple-empty-lines`](http://eslint.org/docs/rules/no-multiple-empty-lines)

  ```js
  // ✓ ok
  var value = 'hello world'
  console.log(value)
  ```

  ```js
  // ✗ avoid
  var value = 'hello world'


  console.log(value)
  ```
* **三元運算子（ternary operator）** 在多行的情況下，把 `?` 和 `:` 和後面敘述放在同一行。

  eslint: [`operator-linebreak`](http://eslint.org/docs/rules/operator-linebreak)

  ```js
  // ✓ ok
  var location = env.development ? 'localhost' : 'www.api.com'

  // ✓ ok
  var location = env.development
    ? 'localhost'
    : 'www.api.com'

  // ✗ avoid
  var location = env.development ?
    'localhost' :
    'www.api.com'
  ```

* **變數宣告時，** 每個宣告要獨自一行。

  eslint: [`one-var`](http://eslint.org/docs/rules/one-var)

  ```js
  // ✓ ok
  var silent = true
  var verbose = true

  // ✗ avoid
  var silent = true, verbose = true

  // ✗ avoid
  var silent = true,
      verbose = true
  ```

* **把條件語句中的賦值加上額外的括弧。** 可以更清楚表達這個賦值（`=`）是刻意的，而不是原本要打（`===`）打錯的。

  eslint: [`no-cond-assign`](http://eslint.org/docs/rules/no-cond-assign)

  ```js
  // ✓ ok
  while ((m = text.match(expr))) {
    // ...
  }

  // ✗ avoid
  while (m = text.match(expr)) {
    // ...
  }
  ```

* **在單行的程式區塊中，前後加入空白。**

  eslint: [`block-spacing`](http://eslint.org/docs/rules/block-spacing)

  ```js
    function foo () {return true}    // ✗ avoid
    function foo () { return true }  // ✓ ok
  ```

* **宣告變數和函式時使用駝峰（camelcase）命名。**

  eslint: [`camelcase`](http://eslint.org/docs/rules/camelcase)

  ```js
    function my_function () { }    // ✗ avoid
    function myFunction () { }     // ✓ ok

    var my_var = 'hello'           // ✗ avoid
    var myVar = 'hello'            // ✓ ok
  ```

* **不允許行尾逗號。**

  eslint: [`comma-dangle`](http://eslint.org/docs/rules/comma-dangle)

  ```js
    var obj = {
      message: 'hello',   // ✗ avoid
    }
  ```

* **逗號必須要放置在該行的最後，不要放到下一行。**

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

* **屬性和它前面的點應該放在同一行**

  eslint: [`dot-location`](http://eslint.org/docs/rules/dot-location)

  ```js
    console.
      log('hello')  // ✗ avoid

    console
      .log('hello') // ✓ ok
  ```

* **檔案結尾必須要是一個空白行。**

  eslint: [`eol-last`](http://eslint.org/docs/rules/eol-last)

* **呼叫函式時，函式和後面的括弧間不要加空白。**

  eslint: [`func-call-spacing`](http://eslint.org/docs/rules/func-call-spacing)

  ```js
  console.log ('hello') // ✗ avoid
  console.log('hello')  // ✓ ok
  ```

* **物件（object）宣告時，在冒號和後面的值中間加空白。**

  eslint: [`key-spacing`](http://eslint.org/docs/rules/key-spacing)

  ```js
  var obj = { 'key' : 'value' }    // ✗ avoid
  var obj = { 'key' :'value' }     // ✗ avoid
  var obj = { 'key':'value' }      // ✗ avoid
  var obj = { 'key': 'value' }     // ✓ ok
  ```

* **建構子（constructor）的名稱開頭要大寫。**

  eslint: [`new-cap`](http://eslint.org/docs/rules/new-cap)

  ```js
  function animal () {}
  var dog = new animal()    // ✗ avoid

  function Animal () {}
  var dog = new Animal()    // ✓ ok
  ```

* **沒有參數的建構子呼叫時必須要加括號。**

  eslint: [`new-parens`](http://eslint.org/docs/rules/new-parens)

  ```js
  function Animal () {}
  var dog = new Animal    // ✗ avoid
  var dog = new Animal()  // ✓ ok
  ```

* **物件的 setter 如果有設定時，getter 也要設定。**

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

* **建構子是繼承來時，一定要呼叫 `super`；反之，則一定不能呼叫。**

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

* **宣告陣列時，用中括弧宣告，不要用陣列建構子。**

  eslint: [`no-array-constructor`](http://eslint.org/docs/rules/no-array-constructor)

  ```js
  var nums = new Array(1, 2, 3)   // ✗ avoid
  var nums = [1, 2, 3]            // ✓ ok
  ```

* **不使用 `arguments.callee` 和 `arguments.caller`。**

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

* **避免重新定義宣告後的類別（class）。**

  eslint: [`no-class-assign`](http://eslint.org/docs/rules/no-class-assign)

  ```js
  class Dog {}
  Dog = 'Fido'    // ✗ avoid
  ```

* **避免修改 `const` 宣告的變數。**

  eslint: [`no-const-assign`](http://eslint.org/docs/rules/no-const-assign)

  ```js
  const score = 100
  score = 125       // ✗ avoid
  ```

* **避免在條件語句中使用常數表達式（除了迴圈）。**

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

* **正規表達式中不使用控制字元。**

  eslint: [`no-control-regex`](http://eslint.org/docs/rules/no-control-regex)

  ```js
  var pattern = /\x1f/    // ✗ avoid
  var pattern = /\x20/    // ✓ ok
  ```

* **不使用 `debugger` 語句。**

  eslint: [`no-debugger`](http://eslint.org/docs/rules/no-debugger)

  ```js
  function sum (a, b) {
    debugger      // ✗ avoid
    return a + b
  }
  ```

* **不對變數使用 `delete`。**

  eslint: [`no-delete-var`](http://eslint.org/docs/rules/no-delete-var)

  ```js
  var name
  delete name     // ✗ avoid
  ```

* **函數不使用相同名稱的參數。**

  eslint: [`no-dupe-args`](http://eslint.org/docs/rules/no-dupe-args)

  ```js
  function sum (a, b, a) {  // ✗ avoid
    // ...
  }

  function sum (a, b, c) {  // ✓ ok
    // ...
  }
  ```

* **類別中不使用相同名稱的成員。**

  eslint: [`no-dupe-class-members`](http://eslint.org/docs/rules/no-dupe-class-members)

  ```js
  class Dog {
    bark () {}
    bark () {}    // ✗ avoid
  }
  ```

* **物件中不使用相同名稱的屬性。**

  eslint: [`no-dupe-keys`](http://eslint.org/docs/rules/no-dupe-keys)

  ```js
  var user = {
    name: 'Jane Doe',
    name: 'John Doe'    // ✗ avoid
  }
  ```

* **`switch` 中不使用相同名稱的 `case`。**

  eslint: [`no-duplicate-case`](http://eslint.org/docs/rules/no-duplicate-case)

  ```js
  switch (id) {
    case 1:
      // ...
    case 1:     // ✗ avoid
  }
  ```

* **每個模組的引入只用一行。**

  eslint: [`no-duplicate-imports`](http://eslint.org/docs/rules/no-duplicate-imports)

  ```js
  import { myFunc1 } from 'module'
  import { myFunc2 } from 'module'          // ✗ avoid

  import { myFunc1, myFunc2 } from 'module' // ✓ ok
  ```

* **正規表達式中，不用空字元類別。**

  eslint: [`no-empty-character-class`](http://eslint.org/docs/rules/no-empty-character-class)

  ```js
  const myRegex = /^abc[]/      // ✗ avoid
  const myRegex = /^abc[a-z]/   // ✓ ok
  ```

* **不使用沒有建構出東西的賦值語句。**

  eslint: [`no-empty-pattern`](http://eslint.org/docs/rules/no-empty-pattern)

  ```js
  const { a: {} } = foo         // ✗ avoid
  const { a: { b } } = foo      // ✓ ok
  ```

* **不使用 `eval()`。**

  eslint: [`no-eval`](http://eslint.org/docs/rules/no-eval)

  ```js
  eval( "var result = user." + propName ) // ✗ avoid
  var result = user[propName]             // ✓ ok
  ```

* **在 `catch` 語句中不要重新定義錯誤。**

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

* **不要擴展原生物件。**

  eslint: [`no-extend-native`](http://eslint.org/docs/rules/no-extend-native)

  ```js
  Object.prototype.age = 21     // ✗ avoid
  ```

* **避免不必要的函數綁定（bind）。**

  eslint: [`no-extra-bind`](ㄠ)

  ```js
  const name = function () {
    getName()
  }.bind(user)    // ✗ avoid

  const name = function () {
    this.getName()
  }.bind(user)    // ✓ ok
  ```

* **避免不必要的布林型別轉換（boolean cast）。**

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

* **函式宣告時周圍不加多餘的括弧。**

  eslint: [`no-extra-parens`](http://eslint.org/docs/rules/no-extra-parens)

  ```js
  const myFunc = (function () { })   // ✗ avoid
  const myFunc = function () { }     // ✓ ok
  ```

* **在 `switch` 中使用 `break` 避免把所有的 case 都執行了。**

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

* **小數點前後都要有數字。**

  eslint: [`no-floating-decimal`](http://eslint.org/docs/rules/no-floating-decimal)

  ```js
  const discount = .5      // ✗ avoid
  const discount = 0.5     // ✓ ok
  ```

* **避免重新定義已經宣告過的函式。**

  eslint: [`no-func-assign`](http://eslint.org/docs/rules/no-func-assign)

  ```js
  function myFunc () { }
  myFunc = myOtherFunc    // ✗ avoid
  ```

* **避免重新定義唯讀（read-only）的全域變數。**

  eslint: [`no-global-assign`](http://eslint.org/docs/rules/no-global-assign)

  ```js
  window = {}     // ✗ avoid
  ```

* **不要間接使用 `eval()`。**

  eslint: [`no-implied-eval`](http://eslint.org/docs/rules/no-implied-eval)

  ```js
  setTimeout("alert('Hello world')")                   // ✗ avoid
  setTimeout(function () { alert('Hello world') })     // ✓ ok
  ```

* **不要在巢狀架構中宣告函式。**

  eslint: [`no-inner-declarations`](http://eslint.org/docs/rules/no-inner-declarations)

  ```js
  if (authenticated) {
    function setAuthUser () {}    // ✗ avoid
  }
  ```

* **不要在 `RegExp` 中使用錯誤的表達式句子。**

  eslint: [`no-invalid-regexp`](http://eslint.org/docs/rules/no-invalid-regexp)

  ```js
  RegExp('[a-z')    // ✗ avoid
  RegExp('[a-z]')   // ✓ ok
  ```

* **避免不正常的空白。**

  eslint: [`no-irregular-whitespace`](http://eslint.org/docs/rules/no-irregular-whitespace)

  ```js
  function myFunc () /*<NBSP>*/{}   // ✗ avoid
  ```

* **不使用 `__iterator__`。**

  eslint: [`no-iterator`](http://eslint.org/docs/rules/no-iterator)

  ```js
  Foo.prototype.__iterator__ = function () {}   // ✗ avoid
  ```

* **避免 label 和變數有相同的名稱。**

  eslint: [`no-label-var`](http://eslint.org/docs/rules/no-label-var)

  ```js
  var score = 100
  function game () {
    score: 50         // ✗ avoid
  }
  ```

* **避免 label 語法。**

  eslint: [`no-labels`](http://eslint.org/docs/rules/no-labels)

  ```js
  label:
    while (true) {
      break label     // ✗ avoid
    }
  ```

* **避免非必要的巢狀架構。**

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

* **縮排避免混雜著空白和 tab。**

  eslint: [`no-mixed-spaces-and-tabs`](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs)

* **除了縮排，不使用多個連續空白。**

  eslint: [`no-multi-spaces`](http://eslint.org/docs/rules/no-multi-spaces)

  ```js
  const id =    1234    // ✗ avoid
  const id = 1234       // ✓ ok
  ```

* **不使用跳脫字元建立多行字串。**

  eslint: [`no-multi-str`](http://eslint.org/docs/rules/no-multi-str)

  ```js
  const message = 'Hello \
                   world'     // ✗ avoid
  ```

* **不要使用 `new` 卻不把結果存下。**

  eslint: [`no-new`](http://eslint.org/docs/rules/no-new)

  ```js
  new Character()                     // ✗ avoid
  const character = new Character()   // ✓ ok
  ```

* **不使用 `Function` 建構子。**

  eslint: [`no-new-func`](http://eslint.org/docs/rules/no-new-func)

  ```js
  var sum = new Function('a', 'b', 'return a + b')    // ✗ avoid
  ```

* **不使用 `Object` 建構子。**

  eslint: [`no-new-object`](http://eslint.org/docs/rules/no-new-object)

  ```js
  let config = new Object()   // ✗ avoid
  ```

* **不使用 `new require`。**

  eslint: [`no-new-require`](http://eslint.org/docs/rules/no-new-require)

  ```js
  const myModule = new require('my-module')    // ✗ avoid
  ```

* **不使用 `Symbol` 建構子。**

  eslint: [`no-new-symbol`](http://eslint.org/docs/rules/no-new-symbol)

  ```js
  const foo = new Symbol('foo')   // ✗ avoid
  ```

* **不使用原始包裝器（primitive wrapper instances），比如說 String、Number 和 Boolean。**

  eslint: [`no-new-wrappers`](http://eslint.org/docs/rules/no-new-wrappers)

  ```js
  const message = new String('hello')   // ✗ avoid
  ```

* **不要把全域物件當成函式呼叫。**

  eslint: [`no-obj-calls`](http://eslint.org/docs/rules/no-obj-calls)

  ```js
  const math = Math()   // ✗ avoid
  ```

* **宣告數字時不使用八進位的表達式。**

  eslint: [`no-octal`](http://eslint.org/docs/rules/no-octal)

  ```js
  const num = 042     // ✗ avoid
  const num = '042'   // ✓ ok
  ```

* **字串中不使用八進位的跳脫序列。**

  eslint: [`no-octal-escape`](http://eslint.org/docs/rules/no-octal-escape)

  ```js
  const copyright = 'Copyright \251'  // ✗ avoid
  ```

* **避免連結字串的時候使用 `__dirname` 和 `__filename`。.**

  eslint: [`no-path-concat`](http://eslint.org/docs/rules/no-path-concat)

  ```js
  const pathToFile = __dirname + '/app.js'            // ✗ avoid
  const pathToFile = path.join(__dirname, 'app.js')   // ✓ ok
  ```

* **避免使用 `__proto__`.** 用 `getPrototypeOf` 替代.

  eslint: [`no-proto`](http://eslint.org/docs/rules/no-proto)

  ```js
  const foo = obj.__proto__               // ✗ avoid
  const foo = Object.getPrototypeOf(obj)  // ✓ ok
  ```

* **避免重新宣告變數。**

  eslint: [`no-redeclare`](http://eslint.org/docs/rules/no-redeclare)

  ```js
  let name = 'John'
  let name = 'Jane'     // ✗ avoid

  let name = 'John'
  name = 'Jane'         // ✓ ok
  ```

* **正規表達式中避免多個空白。**

  eslint: [`no-regex-spaces`](http://eslint.org/docs/rules/no-regex-spaces)

  ```js
  const regexp = /test   value/   // ✗ avoid

  const regexp = /test {3}value/  // ✓ ok
  const regexp = /test value/     // ✓ ok
  ```

* **在 return 語句中，如果要賦值的話，必須用括弧包住。**

  eslint: [`no-return-assign`](http://eslint.org/docs/rules/no-return-assign)

  ```js
  function sum (a, b) {
    return result = a + b     // ✗ avoid
  }

  function sum (a, b) {
    return (result = a + b)   // ✓ ok
  }
  ```

* **避免把變數賦值給自己。**

  eslint: [`no-self-assign`](http://eslint.org/docs/rules/no-self-assign)

  ```js
  name = name   // ✗ avoid
  ```

* **避免把變數跟自己比較。**

  esint: [`no-self-compare`](http://eslint.org/docs/rules/no-self-compare)

  ```js
  if (score === score) {}   // ✗ avoid
  ```

* **避免使用逗號運算子。**

  eslint: [`no-sequences`](http://eslint.org/docs/rules/no-sequences)

  ```js
  if (doSomething(), !!test) {}   // ✗ avoid
  ```

* **不可以把關鍵字遮蔽。**

  eslint: [`no-shadow-restricted-names`](http://eslint.org/docs/rules/no-shadow-restricted-names)

  ```js
  let undefined = 'value'     // ✗ avoid
  ```

* **避免使用稀疏陣列（sparse array）宣告。**

  eslint: [`no-sparse-arrays`](http://eslint.org/docs/rules/no-sparse-arrays)

  ```js
  let fruits = ['apple',, 'orange']       // ✗ avoid
  ```

* **不使用 Tab。**

  eslint: [`no-tabs`](http://eslint.org/docs/rules/no-tabs)

* **一般字串不使用樣板語法。**

  eslint: [`no-template-curly-in-string`](http://eslint.org/docs/rules/no-template-curly-in-string)

  ```js
  const message = 'Hello ${name}'   // ✗ avoid
  const message = `Hello ${name}`   // ✓ ok
  ```

* **`super()` 要在 `this` 之前被呼叫。**

  eslint: [`no-this-before-super`](http://eslint.org/docs/rules/no-this-before-super)

  ```js
  class Dog extends Animal {
    constructor () {
      this.legs = 4     // ✗ avoid
      super()
    }
  }
  ```

* **錯誤時只拋出（`throw`） `Error` 型態.**

  eslint: [`no-throw-literal`](http://eslint.org/docs/rules/no-throw-literal)

  ```js
  throw 'error'               // ✗ avoid
  throw new Error('error')    // ✓ ok
  ```

* **行尾不加空白。**

  eslint: [`no-trailing-spaces`](http://eslint.org/docs/rules/no-trailing-spaces)

* **避免用 `undefined` 初始化。**

  eslint: [`no-undef-init`](http://eslint.org/docs/rules/no-undef-init)

  ```js
  let name = undefined    // ✗ avoid

  let name
  name = 'value'          // ✓ ok
  ```

* **避免一成不變的循環條件。**

  eslint: [`no-unmodified-loop-condition`](http://eslint.org/docs/rules/no-unmodified-loop-condition)

  ```js
  for (let i = 0; i < items.length; j++) {...}    // ✗ avoid
  for (let i = 0; i < items.length; i++) {...}    // ✓ ok
  ```

* **避免不必要的三元運算子。**

  eslint: [`no-unneeded-ternary`](http://eslint.org/docs/rules/no-unneeded-ternary)

  ```js
  let score = val ? val : 0     // ✗ avoid
  let score = val || 0          // ✓ ok
  ```

* **避免在 `return`、`throw`、`continue` 和 `break` 後面有不會被執行的程式碼。**

  eslint: [`no-unreachable`](http://eslint.org/docs/rules/no-unreachable)

  ```js
  function doSomething () {
    return true
    console.log('never called')     // ✗ avoid
  }
  ```

* **避免在 `finally` 裡面加入控制流的語句。**

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

* **關係運算子的左運算元不可以被否定。**

  eslint: [`no-unsafe-negation`](http://eslint.org/docs/rules/no-unsafe-negation)

  ```js
  if (!key in obj) {}       // ✗ avoid
  ```

* **避免不必要的 `.call()` 和 `.apply()` 用法。**

  eslint: [`no-useless-call`](http://eslint.org/docs/rules/no-useless-call)

  ```js
  sum.call(null, 1, 2, 3)   // ✗ avoid
  ```

* **避免物件中使用多餘計算的屬性。**

  eslint: [`no-useless-computed-key`](http://eslint.org/docs/rules/no-useless-computed-key)

  ```js
  const user = { ['name']: 'John Doe' }   // ✗ avoid
  const user = { name: 'John Doe' }       // ✓ ok
  ```

* **避免不必要的建構子。**

  eslint: [`no-useless-constructor`](http://eslint.org/docs/rules/no-useless-constructor)

  ```js
  class Car {
    constructor () {      // ✗ avoid
    }
  }
  ```

* **避免不必要的跳脫字元。**

  eslint: [`no-useless-escape`](http://eslint.org/docs/rules/no-useless-escape)

  ```js
  let message = 'Hell\o'  // ✗ avoid
  ```

* **避免在 import、export 和 destructured 時，不必要的重新命名。**

  eslint: [`no-useless-rename`](http://eslint.org/docs/rules/no-useless-rename)

  ```js
  import { config as config } from './config'     // ✗ avoid
  import { config } from './config'               // ✓ ok
  ```

* **避免在屬性前加空白。**

  eslint: [`no-whitespace-before-property`](http://eslint.org/docs/rules/no-whitespace-before-property)

  ```js
  user .name      // ✗ avoid
  user.name       // ✓ ok
  ```

* **避免使用 `with`。**

  eslint: [`no-with`](http://eslint.org/docs/rules/no-with)

  ```js
  with (val) {...}    // ✗ avoid
  ```

* **維持物件屬性宣告時，換行的一致性。**

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

* **程式區塊前後不要加空行。**

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

* **展開運算子（spread operator）前不要加空格。**

  eslint: [`rest-spread-spacing`](http://eslint.org/docs/rules/rest-spread-spacing)

  ```js
  fn(... args)    // ✗ avoid
  fn(...args)     // ✓ ok
  ```

* **分號後面要加空格，前面不要加。**

  eslint: [`semi-spacing`](http://eslint.org/docs/rules/semi-spacing)

  ```js
  for (let i = 0 ;i < items.length ;i++) {...}    // ✗ avoid
  for (let i = 0; i < items.length; i++) {...}    // ✓ ok
  ```

* **程式區塊前要加空格。**

  eslint: [`space-before-blocks`](http://eslint.org/docs/rules/space-before-blocks)

  ```js
  if (admin){...}     // ✗ avoid
  if (admin) {...}    // ✓ ok
  ```

* **括弧內不要加空格。**

  eslint: [`space-in-parens`](http://eslint.org/docs/rules/space-in-parens)

  ```js
  getName( name )     // ✗ avoid
  getName(name)       // ✓ ok
  ```

* **一元運算子後面要加空格。**

  eslint: [`space-unary-ops`](http://eslint.org/docs/rules/space-unary-ops)

  ```js
  typeof!admin        // ✗ avoid
  typeof !admin        // ✓ ok
  ```

* **註解前要加空格。**

  eslint: [`spaced-comment`](http://eslint.org/docs/rules/spaced-comment)

  ```js
  //comment           // ✗ avoid
  // comment          // ✓ ok

  /*comment*/         // ✗ avoid
  /* comment */       // ✓ ok
  ```

* **樣板語法不加空格。**

  eslint: [`template-curly-spacing`](http://eslint.org/docs/rules/template-curly-spacing)

  ```js
  const message = `Hello, ${ name }`    // ✗ avoid
  const message = `Hello, ${name}`      // ✓ ok
  ```

* **用 `isNaN()` 檢查是否為 `NaN`.**

  eslint: [`use-isnan`](http://eslint.org/docs/rules/use-isnan)

  ```js
  if (price === NaN) { }      // ✗ avoid
  if (isNaN(price)) { }       // ✓ ok
  ```

* **`typeof` 比較的對象一定要是有效的字串。**

  eslint: [`valid-typeof`](http://eslint.org/docs/rules/valid-typeof)

  ```js
  typeof name === 'undefimed'     // ✗ avoid
  typeof name === 'undefined'     // ✓ ok
  ```

* **立即執行的函數需要被包起來。**

  eslint: [`wrap-iife`](http://eslint.org/docs/rules/wrap-iife)

  ```js
  const getName = function () { }()     // ✗ avoid

  const getName = (function () { }())   // ✓ ok
  const getName = (function () { })()   // ✓ ok
  ```

* **`yield*` 中的 `*` 前後要加空格。**

  eslint: [`yield-star-spacing`](http://eslint.org/docs/rules/yield-star-spacing)

  ```js
  yield* increment()    // ✗ avoid
  yield * increment()   // ✓ ok
  ```

* **避免使用 Yoda 語法。**

  eslint: [`yoda`](http://eslint.org/docs/rules/yoda)

  ```js
  if (42 === age) { }    // ✗ avoid
  if (age === 42) { }    // ✓ ok
  ```

## 分號

* 不要加分號。 (詳見： [1](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding), [2](http://inimino.org/%7Einimino/blog/javascript_semicolons), [3](https://www.youtube.com/watch?v=gsfbh17Ax9I))

  eslint: [`semi`](http://eslint.org/docs/rules/semi)

  ```js
  window.alert('hi')   // ✓ ok
  window.alert('hi');  // ✗ avoid
  ```

* 絕對不要用 `(` 、 `[` 或 `` ` `` 當開頭，這是不用分號 **唯一** 可能遇到的問題。

  eslint: [`no-unexpected-multiline`](http://eslint.org/docs/rules/no-unexpected-multiline)

  ```js
  // ✓ ok
  ;(function () {
    window.alert('ok')
  }())

  // ✗ avoid
  (function () {
    window.alert('ok')
  }())
  ```

  ```js
  // ✓ ok
  ;[1, 2, 3].forEach(bar)

  // ✗ avoid
  [1, 2, 3].forEach(bar)
  ```

  ```js
  // ✓ ok
  ;`hello`.indexOf('o')

  // ✗ avoid
  `hello`.indexOf('o')
  ```

  注意：如果你通常會這樣寫程式，你也許是太想讓自己的程式碼看起來比別人聰明了。

  一些看似很厲害的縮寫通常是對讀程式碼的人不友善的，你應該盡量把程式碼寫的清楚而且可讀性高。

  比起這種寫法：

  ```js
  ;[1, 2, 3].forEach(bar)
  ```

  這種寫法是更推薦的：

  ```js
  var nums = [1, 2, 3]
  nums.forEach(bar)
  ```


## 延伸閱讀

- [An Open Letter to JavaScript Leaders Regarding Semicolons][1]
- [JavaScript Semicolon Insertion – Everything you need to know][2]

##### 還有延伸影片：

- [Are Semicolons Necessary in JavaScript? - YouTube][3]

所有當今流行的程式語言都使用 AST 為基礎來做程式碼的最小化（code minification），所以可以完美的處理沒有分號的 JavaScript。

##### 節選自 *["An Open Letter to JavaScript Leaders Regarding Semicolons"][1]*:
>
> [依賴自動插入分號]非常的安全，而且合語法的 JavaScript 是跨瀏覽器都相容的。Closure compiler、yuicompressor、packer 和 jsmin 都可以正確的最小化，所以沒有效能的問題。
>
> 我很抱歉，這個語言社群的領導者們給你們謊言和恐懼，而不是教育你們。這是很羞恥的。我建議你們去學習一下 JavaScript 語句到底是如何結束的（還有哪些是不會結束的），如此你們就可以寫下漂亮的程式碼。
>
> 一般來說， `\n` 結束一個語句，除非：
>   1. 這個語句有未結束的括弧、陣列、或物件，或其他不正常結束的句子（比如說用 `.` 或 `,` 結尾）
>   2. 該行的內容是 `--` 或 `++` （這種情況下，他會減少或增加下一個遇到的元素）
>   3. 該行是 `for()`、`while()`、`do`、`if()` 或 `else`，而還沒有出現 `{`
>   4. 隔行的開頭是 `[`、`(`、`+`、`*`、`/`、`-`、`,`、`.` 或其他一定要兩個運算元的一元運算子。
>
> 第一種是非常顯而易見的。即使 JSLint 也允許 JSON 、有括弧的建構子和 `var` 誇多行語句的宣告可以有 `\n` 在其中。
>
> 第二種是非常奇怪的語法。我現實中沒有看過這種例子（除了在這類討論之外），會想寫出 `i\n++\nj` 這種奇怪的程式碼，這會被編譯器解讀成 `i; ++j`，而非 `i++; j`。
>
> 第三種就非常好理解。`if (x)\ny()` 和 `if (x) { y() }` 是相同的。建構子會一直往後找到一個區塊或一個語句。
>
> `;` 是一個合法的 JavaScript 語句。所以 `if(x);` 和 `if(x){}` 是相同的，代表 “如果 x, 什麼都不要做。” 當迴圈的判斷和更新是同一個函式的時候，有時候會被用到。不太常見，但是也不是沒看過。
>
> 第四種是那些常常被提到說：「看！你需要分號吧！」的例子。但是其實這很簡單可以避免，只要在該行開始前加個分號就好了。舉例來說，如果你原本要這樣寫：
>
> ```js
> foo();
> [1,2,3].forEach(bar);
> ```
>
> 你其實可以這樣寫：
>
> ```js
> foo()
> ;[1,2,3].forEach(bar)
> ```
>
> 這樣的好處是這些前綴字是很好被察覺的，你可以很容易發現那些 `(` 或 `[` 開頭而沒有分號的地方。

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://www.youtube.com/watch?v=gsfbh17Ax9I
