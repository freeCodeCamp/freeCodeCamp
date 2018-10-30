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

이것은 JavaScript [standard](https://github.com/standard/standard) 규칙입니다.

`standard`에 대해 배우는 가장 좋은 방법은 그냥 설치하고 코드에 시도해 보는 것입니다.

## 규칙

* 들여쓰기시 **2칸 공백사용** 을 사용합니다.

  eslint: [`indent`](http://eslint.org/docs/rules/indent)

  ```js
  function hello (name) {
    console.log('hi', name)
  }
  ```

* 이스케이프를 피하기 위해 **문자열에 작은 따옴표** 를 사용합니다.

  eslint: [`quotes`](http://eslint.org/docs/rules/quotes)

  ```js
  console.log('hello there')
  $("<div class='box'>")
  ```

* **사용하지 않는 변수를 정의하지 마세요.**

  eslint: [`no-unused-vars`](http://eslint.org/docs/rules/no-unused-vars)

  ```js
  function myFunction () {
    var result = something()   // ✗ 피하세요
  }
  ```

* **예약어 뒤에는 공백을 추가합니다.**

  eslint: [`keyword-spacing`](http://eslint.org/docs/rules/keyword-spacing)

  ```js
  if (condition) { ... }   // ✓ 좋아요
  if(condition) { ... }    // ✗ 피하세요
  ```

* **함수 선언 괄호 앞에 공백을 추가합니다.**

  eslint: [`space-before-function-paren`](http://eslint.org/docs/rules/space-before-function-paren)

  ```js
  function name (arg) { ... }   // ✓ 좋아요
  function name(arg) { ... }    // ✗ 피하세요

  run(function () { ... })      // ✓ 좋아요
  run(function() { ... })       // ✗ 피하세요
  ```

* **항상** `==` 대신 `===`을 **사용** 합니다.<br>
  예외: `null || undefined`는 `obj == null`로 확인할 수 있습니다.

  eslint: [`eqeqeq`](http://eslint.org/docs/rules/eqeqeq)

  ```js
  if (name === 'John')   // ✓ 좋아요
  if (name == 'John')    // ✗ 피하세요
  ```

  ```js
  if (name !== 'John')   // ✓ 좋아요
  if (name != 'John')    // ✗ 피하세요
  ```

* 공백사이에 **연산자를 넣어주세요.**

  eslint: [`space-infix-ops`](http://eslint.org/docs/rules/space-infix-ops)

  ```js
  // ✓ 좋아요
  var x = 2
  var message = 'hello, ' + name + '!'
  ```

  ```js
  // ✗ 피하세요
  var x=2
  var message = 'hello, '+name+'!'
  ```

* **쉽표 뒤에 공백** 이 있어야 합니다.

  eslint: [`comma-spacing`](http://eslint.org/docs/rules/comma-spacing)

  ```js
  // ✓ 좋아요
  var list = [1, 2, 3, 4]
  function greet (name, options) { ... }
  ```

  ```js
  // ✗ 피하세요
  var list = [1,2,3,4]
  function greet (name,options) { ... }
  ```

* **else 문은** 중괄호와 같은 줄에 **두어야 합니다.**

  eslint: [`brace-style`](http://eslint.org/docs/rules/brace-style)

  ```js
  // ✓ 좋아요
  if (condition) {
    // ...
  } else {
    // ...
  }
  ```

  ```js
  // ✗ 피하세요
  if (condition) {
    // ...
  }
  else {
    // ...
  }
  ```

* **여러줄의 if문을 사용할 경우** 중괄호를 사용해야합니다.

  eslint: [`curly`](http://eslint.org/docs/rules/curly)

  ```js
  // ✓ 좋아요
  if (options.quiet !== true) console.log('done')
  ```

  ```js
  // ✓ 좋아요
  if (options.quiet !== true) {
    console.log('done')
  }
  ```

  ```js
  // ✗ 피하세요
  if (options.quiet !== true)
    console.log('done')
  ```

* `err` 함수파라미터가 있을 경우 **항상 처리해줘야 합니다.**

  eslint: [`handle-callback-err`](http://eslint.org/docs/rules/handle-callback-err)
  ```js
  // ✓ 좋아요
  run(function (err) {
    if (err) throw err
    window.alert('done')
  })
  ```

  ```js
  // ✗ 피하세요
  run(function (err) {
    window.alert('done')
  })
  ```

* **항상 브라우저 전역 접두어에는** `window`를 붙여야 합니다.<br>
  예외의 경우들: `document`, `console`, `navigator`.

  eslint: [`no-undef`](http://eslint.org/docs/rules/no-undef)

  ```js
  window.alert('hi')   // ✓ 좋아요
  ```

* **여러 줄의 공백을 허용하지 않습니다.**

  eslint: [`no-multiple-empty-lines`](http://eslint.org/docs/rules/no-multiple-empty-lines)

  ```js
  // ✓ 좋아요
  var value = 'hello world'
  console.log(value)
  ```

  ```js
  // ✗ 피하세요
  var value = 'hello world'


  console.log(value)
  ```

여러 줄의 **삼항 연산자** 를 사용할 경우 `?`와 `:`를 각각의 행으로 처리해야합니다.

  eslint: [`operator-linebreak`](http://eslint.org/docs/rules/operator-linebreak)

  ```js
  // ✓ 좋아요
  var location = env.development ? 'localhost' : 'www.api.com'

  // ✓ 좋아요
  var location = env.development
    ? 'localhost'
    : 'www.api.com'

  // ✗ 피하세요
  var location = env.development ?
    'localhost' :
    'www.api.com'
  ```

* **var 선언의 경우** 각각 자체적으로 선언해야 합니다.

  eslint: [`one-var`](http://eslint.org/docs/rules/one-var)

  ```js
  // ✓ 좋아요
  var silent = true
  var verbose = true

  // ✗ 피하세요
  var silent = true, verbose = true

  // ✗ 피하세요
  var silent = true,
      verbose = true
  ```

* **조건부 할당을** 추가적으로 괄호로 묶습니다. 이것은 표현식이 등호 (`===`)에 대한 오타보다는 의도적으로 할당 (`=`)이라는 것을 분명히해야 합니다.

  eslint: [`no-cond-assign`](http://eslint.org/docs/rules/no-cond-assign)

  ```js
  // ✓ 좋아요
  while ((m = text.match(expr))) {
    // ...
  }

  // ✗ 피하세요
  while (m = text.match(expr)) {
    // ...
  }
  ```

* 한 줄에 중괄호로 처리할 경우 공백을 추가합니다.

  eslint: [`block-spacing`](http://eslint.org/docs/rules/block-spacing)

  ```js
    function foo () {return true}    // ✗ 피하세요
    function foo () { return true }  // ✓ 좋아요
  ```

* **변수나 함수이름 사용시 카멜케이스(camelcase)를 사용합니다.**

  eslint: [`camelcase`](http://eslint.org/docs/rules/camelcase)

  ```js
    function my_function () { }    // ✗ 피하세요
    function myFunction () { }     // ✓ 좋아요

    var my_var = 'hello'           // ✗ 피하세요
    var myVar = 'hello'            // ✓ 좋아요
  ```

* **뒤쪽에 쉼표는 허용하지 않습니다.**

  eslint: [`comma-dangle`](http://eslint.org/docs/rules/comma-dangle)

  ```js
    var obj = {
      message: 'hello',   // ✗ 피하세요
    }
  ```

* **쉼표를 사용할 경우 현재 행 끝에 있어야 합니다.**

  eslint: [`comma-style`](http://eslint.org/docs/rules/comma-style)

  ```js
    var obj = {
      foo: 'foo'
      ,bar: 'bar'   // ✗ 피하세요
    }

    var obj = {
      foo: 'foo',
      bar: 'bar'   // ✓ 좋아요
    }
  ```

* **점(Dot)은 각 속성과 같은 줄에 있어야 합니다.**

  eslint: [`dot-location`](http://eslint.org/docs/rules/dot-location)

  ```js
    console.
      log('hello')  // ✗ 피하세요

    console
      .log('hello') // ✓ 좋아요
  ```

* **파일은 개행으로 끝나야합니다.**

  eslint: [`eol-last`](http://eslint.org/docs/rules/eol-last)

* **함수식별자와 호출사이에는 공백이 없어야 합니다.**

  eslint: [`func-call-spacing`](http://eslint.org/docs/rules/func-call-spacing)

  ```js
  console.log ('hello') // ✗ 피하세요
  console.log('hello')  // ✓ 좋아요
  ```

* **콜론과 키 값 쌍의 값 사이에 공백을 추가해야 합니다.**

  eslint: [`key-spacing`](http://eslint.org/docs/rules/key-spacing)

  ```js
  var obj = { 'key' : 'value' }    // ✗ 피하세요
  var obj = { 'key' :'value' }     // ✗ 피하세요
  var obj = { 'key':'value' }      // ✗ 피하세요
  var obj = { 'key': 'value' }     // ✓ 좋아요
  ```

* **생성자 이름은 대문자로 시작해야합니다.**

  eslint: [`new-cap`](http://eslint.org/docs/rules/new-cap)

  ```js
  function animal () {}
  var dog = new animal()    // ✗ 피하세요

  function Animal () {}
  var dog = new Animal()    // ✓ 좋아요
  ```

* **인수가 없는 생성자는 괄호로 호출해야합니다.**

  eslint: [`new-parens`](http://eslint.org/docs/rules/new-parens)

  ```js
  function Animal () {}
  var dog = new Animal    // ✗ 피하세요
  var dog = new Animal()  // ✓ 좋아요
  ```

* **setter가 정의되면 객체에 getter가 포함되어 있어야 합니다.**

  eslint: [`accessor-pairs`](http://eslint.org/docs/rules/accessor-pairs)

  ```js
  var person = {
    set name (value) {    // ✗ 피하세요
      this.name = value
    }
  }

  var person = {
    set name (value) {
      this.name = value
    },
    get name () {         // ✓ 좋아요
      return this.name
    }
  }
  ```

* **파생 클래스의 생성자는 `super`를 호출해야합니다.**

  eslint: [`constructor-super`](http://eslint.org/docs/rules/constructor-super)

  ```js
  class Dog {
    constructor () {
      super()   // ✗ 피하세요
    }
  }

  class Dog extends Mammal {
    constructor () {
      super()   // ✓ 좋아요
    }
  }
  ```

* **배열 생성자 대신에 배열 리터럴을 사용하십시오.**

  eslint: [`no-array-constructor`](http://eslint.org/docs/rules/no-array-constructor)

  ```js
  var nums = new Array(1, 2, 3)   // ✗ 피하세요
  var nums = [1, 2, 3]            // ✓ 좋아요
  ```

* **`arguments.callee`과 `arguments.caller`를 사용하지 마십시오.**

  eslint: [`no-caller`](http://eslint.org/docs/rules/no-caller)

  ```js
  function foo (n) {
    if (n <= 0) return

    arguments.callee(n - 1)   // ✗ 피하세요
  }

  function foo (n) {
    if (n <= 0) return

    foo(n - 1)                // ✓ 좋아요
  }
  ```

* **클래스로 선언된 변수를 수정하지 마세요**

  eslint: [`no-class-assign`](http://eslint.org/docs/rules/no-class-assign)

  ```js
  class Dog {}
  Dog = 'Fido'    // ✗ 피하세요
  ```

* **`const`를 사용하여 선언 된 변수는 수정하지 마십시오.**

  eslint: [`no-const-assign`](http://eslint.org/docs/rules/no-const-assign)

  ```js
  const score = 100
  score = 125       // ✗ 피하세요
  ```

* **조건(반복 제외)에서 상수 표현식을 사용하지 마십시오.**

  eslint: [`no-constant-condition`](http://eslint.org/docs/rules/no-constant-condition)

  ```js
  if (false) {    // ✗ 피하세요
    // ...
  }

  if (x === 0) {  // ✓ 좋아요
    // ...
  }

  while (true) {  // ✓ 좋아요
    // ...
  }
  ```

* **정규식에는 제어 문자가 없습니다.**

  eslint: [`no-control-regex`](http://eslint.org/docs/rules/no-control-regex)

  ```js
  var pattern = /\x1f/    // ✗ 피하세요
  var pattern = /\x20/    // ✓ 좋아요
  ```

* **`debugger`문은 없습니다.**

  eslint: [`no-debugger`](http://eslint.org/docs/rules/no-debugger)

  ```js
  function sum (a, b) {
    debugger      // ✗ 피하세요
    return a + b
  }
  ```

** **변수에 `delete` 연산자는 없습니다.**

  eslint: [`no-delete-var`](http://eslint.org/docs/rules/no-delete-var)

  ```js
  var name
  delete name     // ✗ 피하세요
  ```

* **함수 정의시 중복된 인수를 사용할 수 없습니다.**

  eslint: [`no-dupe-args`](http://eslint.org/docs/rules/no-dupe-args)

  ```js
  function sum (a, b, a) {  // ✗ 피하세요
    // ...
  }

  function sum (a, b, c) {  // ✓ 좋아요
    // ...
  }
  ```

* **클래스 멤버에 중복된 이름을 사용할 수 없습니다.**

  eslint: [`no-dupe-class-members`](http://eslint.org/docs/rules/no-dupe-class-members)

  ```js
  class Dog {
    bark () {}
    bark () {}    // ✗ 피하세요
  }
  ```

* **객체 리터럴에서 중복된 키 값을 사용할 수 없습니다.**

  eslint: [`no-dupe-keys`](http://eslint.org/docs/rules/no-dupe-keys)

  ```js
  var user = {
    name: 'Jane Doe',
    name: 'John Doe'    // ✗ 피하세요
  }
  ```

* **`switch`문에서 중복된 `case` 라벨을 사용할 수 없습니다.**

  eslint: [`no-duplicate-case`](http://eslint.org/docs/rules/no-duplicate-case)

  ```js
  switch (id) {
    case 1:
      // ...
    case 1:     // ✗ 피하세요
  }
  ```

* **모듈 당 하나의 import 문을 사용해야 합니다.**

  eslint: [`no-duplicate-imports`](http://eslint.org/docs/rules/no-duplicate-imports)

  ```js
  import { myFunc1 } from 'module'
  import { myFunc2 } from 'module'          // ✗ 피하세요

  import { myFunc1, myFunc2 } from 'module' // ✓ 좋아요
  ```

* **정규식에서 빈 문자 클래스가 없어야 합니다.**

  eslint: [`no-empty-character-class`](http://eslint.org/docs/rules/no-empty-character-class)

  ```js
  const myRegex = /^abc[]/      // ✗ 피하세요
  const myRegex = /^abc[a-z]/   // ✓ 좋아요
  ```

* **비어있는 구조의 패턴이 없어야 합니다.**

  eslint: [`no-empty-pattern`](http://eslint.org/docs/rules/no-empty-pattern)

  ```js
  const { a: {} } = foo         // ✗ 피하세요
  const { a: { b } } = foo      // ✓ 좋아요
  ```

* **`eval()`을 사용하지 않습니다.**

  eslint: [`no-eval`](http://eslint.org/docs/rules/no-eval)

  ```js
  eval( "var result = user." + propName ) // ✗ 피하세요
  var result = user[propName]             // ✓ 좋아요
  ```

* **`catch`절의 예외를 재할당하면 안됩니다.**

  eslint: [`no-ex-assign`](http://eslint.org/docs/rules/no-ex-assign)

  ```js
  try {
    // ...
  } catch (e) {
    e = 'new value'             // ✗ 피하세요
  }

  try {
    // ...
  } catch (e) {
    const newVal = 'new value'  // ✓ 좋아요
  }
  ```

* **네이티브 객체를 확장하지 않습니다.**

  eslint: [`no-extend-native`](http://eslint.org/docs/rules/no-extend-native)

  ```js
  Object.prototype.age = 21     // ✗ 피하세요
  ```

* **불필요한 함수 바인딩을 피해야 합니다.**

  eslint: [`no-extra-bind`](http://eslint.org/docs/rules/no-extra-bind)

  ```js
  const name = function () {
    getName()
  }.bind(user)    // ✗ 피하세요

  const name = function () {
    this.getName()
  }.bind(user)    // ✓ 좋아요
  ```

* **불필요한 boolean 캐스트를 피해야 합니다.**

  eslint: [`no-extra-boolean-cast`](http://eslint.org/docs/rules/no-extra-boolean-cast)

  ```js
  const result = true
  if (!!result) {   // ✗ 피하세요
    // ...
  }

  const result = true
  if (result) {     // ✓ 좋아요
    // ...
  }
  ```

* **함수 표현식에는 불필요한 괄호가 없어야 합니다.**

  eslint: [`no-extra-parens`](http://eslint.org/docs/rules/no-extra-parens)

  ```js
  const myFunc = (function () { })   // ✗ 피하세요
  const myFunc = function () { }     // ✓ 좋아요
  ```

* **'switch'경우에 완료되지 못하는 것을 막기 위해 'break'를 사용하십시오.**

  eslint: [`no-fallthrough`](http://eslint.org/docs/rules/no-fallthrough)

  ```js
  switch (filter) {
    case 1:
      doSomething()    // ✗ 피하세요
    case 2:
      doSomethingElse()
  }

  switch (filter) {
    case 1:
      doSomething()
      break           // ✓ 좋아요
    case 2:
      doSomethingElse()
  }

  switch (filter) {
    case 1:
      doSomething()
      // fallthrough  // ✓ 좋아요
    case 2:
      doSomethingElse()
  }
  ```

* **부동 소숫점이 없어야 합니다.**

  eslint: [`no-floating-decimal`](http://eslint.org/docs/rules/no-floating-decimal)

  ```js
  const discount = .5      // ✗ 피하세요
  const discount = 0.5     // ✓ 좋아요
  ```

* **함수 선언을 재지정하지 말아야 합니다.**

  eslint: [`no-func-assign`](http://eslint.org/docs/rules/no-func-assign)

  ```js
  function myFunc () { }
  myFunc = myOtherFunc    // ✗ 피하세요
  ```

* **읽기전용 전역 변수를 재정의하지 말아야합니다.**

  eslint: [`no-global-assign`](http://eslint.org/docs/rules/no-global-assign)

  ```js
  window = {}     // ✗ 피하세요
  ```

* **`eval()`이 포함되지 않도록 합니다.**

  eslint: [`no-implied-eval`](http://eslint.org/docs/rules/no-implied-eval)

  ```js
  setTimeout("alert('Hello world')")                   // ✗ 피하세요
  setTimeout(function () { alert('Hello world') })     // ✓ 좋아요
  ```

* **중괄호 안에서 함수가 선언되지 말아야 합니다.**

  eslint: [`no-inner-declarations`](http://eslint.org/docs/rules/no-inner-declarations)

  ```js
  if (authenticated) {
    function setAuthUser () {}    // ✗ 피하세요
  }
  ```

* **`RegExp` 생성자에 잘못된 정규 표현식 문자열이 없어야 합니다.**

  eslint: [`no-invalid-regexp`](http://eslint.org/docs/rules/no-invalid-regexp)

  ```js
  RegExp('[a-z')    // ✗ 피하세요
  RegExp('[a-z]')   // ✓ 좋아요
  ```

* **불규칙한 공백이 없어야 합니다.**

  eslint: [`no-irregular-whitespace`](http://eslint.org/docs/rules/no-irregular-whitespace)

  ```js
  function myFunc () /*<NBSP>*/{}   // ✗ 피하세요
  ```

* **`__iterator__`를 사용하지 않아야 합니다.**

  eslint: [`no-iterator`](http://eslint.org/docs/rules/no-iterator)

  ```js
  Foo.prototype.__iterator__ = function () {}   // ✗ 피하세요
  ```

* **범위 변수와 이름을 공유하는 라벨이 없어야 합니다.**

  eslint: [`no-label-var`](http://eslint.org/docs/rules/no-label-var)

  ```js
  var score = 100
  function game () {
    score: 50         // ✗ 피하세요
  }
  ```

* **라벨문을 사용하지 말아야 합니다.**

  eslint: [`no-labels`](http://eslint.org/docs/rules/no-labels)

  ```js
  label:
    while (true) {
      break label     // ✗ 피하세요
    }
  ```

* **불필요하게 중첩된 블록이 없어야 합니다.**

  eslint: [`no-lone-blocks`](http://eslint.org/docs/rules/no-lone-blocks)

  ```js
  function myFunc () {
    {                   // ✗ 피하세요
      myOtherFunc()
    }
  }

  function myFunc () {
    myOtherFunc()       // ✓ 좋아요
  }
  ```

* **공백과 탭을 섞어서 사용하지 말아야 합니다.**

  eslint: [`no-mixed-spaces-and-tabs`](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs)

* **들여 쓰기를 제외하고는 여러 공백을 사용하지 말아야 합니다.**

  eslint: [`no-multi-spaces`](http://eslint.org/docs/rules/no-multi-spaces)

  ```js
  const id =    1234    // ✗ 피하세요
  const id = 1234       // ✓ 좋아요
  ```

* **멀티라인 문자열을 사용하지 말아야 합니다.**

  eslint: [`no-multi-str`](http://eslint.org/docs/rules/no-multi-str)

  ```js
  const message = 'Hello \
                   world'     // ✗ 피하세요
  ```

* **변수에 객체를 대입하지 않고 `new`를 사용하면 안됩니다.**

  eslint: [`no-new`](http://eslint.org/docs/rules/no-new)

  ```js
  new Character()                     // ✗ 피하세요
  const character = new Character()   // ✓ 좋아요
  ```

* **`Function` 생성자를 사용하지 않아야 합니다.**

  eslint: [`no-new-func`](http://eslint.org/docs/rules/no-new-func)

  ```js
  var sum = new Function('a', 'b', 'return a + b')    // ✗ 피하세요
  ```

* **`Object` 생성자를 사용하지 않아야 합니다.**

  eslint: [`no-new-object`](http://eslint.org/docs/rules/no-new-object)

  ```js
  let config = new Object()   // ✗ 피하세요
  ```

* **`new require`를 사용하지 않아야 합니다.**

  eslint: [`no-new-require`](http://eslint.org/docs/rules/no-new-require)

  ```js
  const myModule = new require('my-module')    // ✗ 피하세요
  ```

* **`Symbol` 생성자를 사용하지 않아야 합니다.**

  eslint: [`no-new-symbol`](http://eslint.org/docs/rules/no-new-symbol)

  ```js
  const foo = new Symbol('foo')   // ✗ 피하세요
  ```

* **원시 래퍼 인스턴스를 사용하지 않아야 합니다.**

  eslint: [`no-new-wrappers`](http://eslint.org/docs/rules/no-new-wrappers)

  ```js
  const message = new String('hello')   // ✗ 피하세요
  ```

* **전역 개체 속성을 함수로 호출하지 않아야 합니다.**

  eslint: [`no-obj-calls`](http://eslint.org/docs/rules/no-obj-calls)

  ```js
  const math = Math()   // ✗ 피하세요
  ```

* **8진수를 사용하지 않습니다.**

  eslint: [`no-octal`](http://eslint.org/docs/rules/no-octal)

  ```js
  const num = 042     // ✗ 피하세요
  const num = '042'   // ✓ 좋아요
  ```

* **문자열 리터럴에는 8 진수 이스케이프 시퀀스가 없습니다.**

  eslint: [`no-octal-escape`](http://eslint.org/docs/rules/no-octal-escape)

  ```js
  const copyright = 'Copyright \251'  // ✗ 피하세요
  ```

* **`__dirname`과 `__filename`을 사용할 때 문자열 연결을 피해야 합니다.**

  eslint: [`no-path-concat`](http://eslint.org/docs/rules/no-path-concat)

  ```js
  const pathToFile = __dirname + '/app.js'            // ✗ 피하세요
  const pathToFile = path.join(__dirname, 'app.js')   // ✓ 좋아요
  ```

* **`__proto__` 사용은 피해야 합니다.** 대신에 `getPrototypeOf`를 사용할 수 있습니다.

  eslint: [`no-proto`](http://eslint.org/docs/rules/no-proto)

  ```js
  const foo = obj.__proto__               // ✗ 피하세요
  const foo = Object.getPrototypeOf(obj)  // ✓ 좋아요
  ```

* **변수를 새로 재정의하지 말아야 합니다.**

  eslint: [`no-redeclare`](http://eslint.org/docs/rules/no-redeclare)

  ```js
  let name = 'John'
  let name = 'Jane'     // ✗ 피하세요

  let name = 'John'
  name = 'Jane'         // ✓ 좋아요
  ```

* **정규 표현식 리터럴에서는 공백을 피해야 합니다.**

  eslint: [`no-regex-spaces`](http://eslint.org/docs/rules/no-regex-spaces)

  ```js
  const regexp = /test   value/   // ✗ 피하세요

  const regexp = /test {3}value/  // ✓ 좋아요
  const regexp = /test value/     // ✓ 좋아요
  ```

* **반환 내용에 대한 대입 값은 괄호로 묶어야 합니다.**

  eslint: [`no-return-assign`](http://eslint.org/docs/rules/no-return-assign)

  ```js
  function sum (a, b) {
    return result = a + b     // ✗ 피하세요
  }

  function sum (a, b) {
    return (result = a + b)   // ✓ 좋아요
  }
  ```

* **변수 자체에 자기 자신은 할당하지 않아야 합니다.**

  eslint: [`no-self-assign`](http://eslint.org/docs/rules/no-self-assign)

  ```js
  name = name   // ✗ 피하세요
  ```

* **변수를 자기 자신과 비교하지 말아야 합니다.**

  eslint: [`no-self-compare`](http://eslint.org/docs/rules/no-self-compare)

  ```js
  if (score === score) {}   // ✗ 피하세요
  ```

* **쉼표 연산자를 사용하지 말아야 합니다.**

  eslint: [`no-sequences`](http://eslint.org/docs/rules/no-sequences)

  ```js
  if (doSomething(), !!test) {}   // ✗ 피하세요
  ```

* **제한된 이름을 음영 처리해서는 안됩니다.**

  eslint: [`no-shadow-restricted-names`](http://eslint.org/docs/rules/no-shadow-restricted-names)

  ```js
  let undefined = 'value'     // ✗ 피하세요
  ```

* **빈공간 배열은 허용되지 않습니다.**

  eslint: [`no-sparse-arrays`](http://eslint.org/docs/rules/no-sparse-arrays)

  ```js
  let fruits = ['apple',, 'orange']       // ✗ 피하세요
  ```

* **탭을 사용해서는 안됩니다.**

  eslint: [`no-tabs`](http://eslint.org/docs/rules/no-tabs)

* **일반 문자열에는 템플릿 리터럴 자리 표시자가 없어야 합니다.**

  eslint: [`no-template-curly-in-string`](http://eslint.org/docs/rules/no-template-curly-in-string)

  ```js
  const message = 'Hello ${name}'   // ✗ 피하세요
  const message = `Hello ${name}`   // ✓ 좋아요
  ```

* **`this`를 사용하기 전에 `super()`를 호출해야 합니다.**

  eslint: [`no-this-before-super`](http://eslint.org/docs/rules/no-this-before-super)

  ```js
  class Dog extends Animal {
    constructor () {
      this.legs = 4     // ✗ 피하세요
      super()
    }
  }
  ```

* **반드시 `throw`는 `Error` 객체여야 합니다.**

  eslint: [`no-throw-literal`](http://eslint.org/docs/rules/no-throw-literal)

  ```js
  throw 'error'               // ✗ 피하세요
  throw new Error('error')    // ✓ 좋아요
  ```

* **줄 끝에서 공백을 사용할 수 없습니다.**

  eslint: [`no-trailing-spaces`](http://eslint.org/docs/rules/no-trailing-spaces)

* **'undefined'로 초기화하는 것은 허용되지 않습니다.**

  eslint: [`no-undef-init`](http://eslint.org/docs/rules/no-undef-init)

  ```js
  let name = undefined    // ✗ 피하세요

  let name
  name = 'value'          // ✓ 좋아요
  ```

* **반복문에서 수정될 수 없는 조건이 없어야 합니다.**

  eslint: [`no-unmodified-loop-condition`](http://eslint.org/docs/rules/no-unmodified-loop-condition)

  ```js
  for (let i = 0; i < items.length; j++) {...}    // ✗ 피하세요
  for (let i = 0; i < items.length; i++) {...}    // ✓ 좋아요
  ```

* **더 간단한 대안이 있을 때 삼항연산자를 사용하지 않습니다.**

  eslint: [`no-unneeded-ternary`](http://eslint.org/docs/rules/no-unneeded-ternary)

  ```js
  let score = val ? val : 0     // ✗ 피하세요
  let score = val || 0          // ✓ 좋아요
  ```

* **`return`,`throw`,`continue`,`break` 문 다음에 도달 할 수없는 코드는 없습니다.**

  eslint: [`no-unreachable`](http://eslint.org/docs/rules/no-unreachable)

  ```js
  function doSomething () {
    return true
    console.log('never called')     // ✗ 피하세요
  }
  ```

* **`finally` 블록에 흐름을 제어할 수 있는 명령문이 없어야 합니다.**

  eslint: [`no-unsafe-finally`](http://eslint.org/docs/rules/no-unsafe-finally)

  ```js
  try {
    // ...
  } catch (e) {
    // ...
  } finally {
    return 42     // ✗ 피하세요
  }
  ```

* **관계 연산자의 왼쪽 피연산자를 부정해서는 안됩니다.**

  eslint: [`no-unsafe-negation`](http://eslint.org/docs/rules/no-unsafe-negation)

  ```js
  if (!key in obj) {}       // ✗ 피하세요
  ```

* **`.call ()`과`.apply ()`를 불필요하게 사용하지 말아야 합니다.**

  eslint: [`no-useless-call`](http://eslint.org/docs/rules/no-useless-call)

  ```js
  sum.call(null, 1, 2, 3)   // ✗ 피하세요
  ```

* **객체에서 불필요하게 계산 된 속성 키를 사용하지 말아야 합니다.**

  eslint: [`no-useless-computed-key`](http://eslint.org/docs/rules/no-useless-computed-key)

  ```js
  const user = { ['name']: 'John Doe' }   // ✗ 피하세요
  const user = { name: 'John Doe' }       // ✓ 좋아요
  ```

* **불필요한 생성자가 없어야 합니다**

  eslint: [`no-useless-constructor`](http://eslint.org/docs/rules/no-useless-constructor)

  ```js
  class Car {
    constructor () {      // ✗ 피하세요
    }
  }
  ```

* **불필요한 이스케이프가 없어야 합니다.**

  eslint: [`no-useless-escape`](http://eslint.org/docs/rules/no-useless-escape)

  ```js
  let message = 'Hell\o'  // ✗ 피하세요
  ```

* **import, export 및 소멸된 할당의 이름을 동일한 이름으로 바꾸는 것은 허용되지 않습니다.**

  eslint: [`no-useless-rename`](http://eslint.org/docs/rules/no-useless-rename)

  ```js
  import { config as config } from './config'     // ✗ 피하세요
  import { config } from './config'               // ✓ 좋아요
  ```

* **속성 앞에 공백이 없어야 합니다.**

  eslint: [`no-whitespace-before-property`](http://eslint.org/docs/rules/no-whitespace-before-property)

  ```js
  user .name      // ✗ 피하세요
  user.name       // ✓ 좋아요
  ```

* `with`문을 사용하지 않습니다.**

  eslint: [`no-with`](http://eslint.org/docs/rules/no-with)

  ```js
  with (val) {...}    // ✗ 피하세요
  ```

* **객체 속성 간의 일관성을 유지합니다.**

  eslint: [`object-property-newline`](http://eslint.org/docs/rules/object-property-newline)

  ```js
  const user = {
    name: 'Jane Doe', age: 30,
    username: 'jdoe86'            // ✗ 피하세요
  }

  const user = { name: 'Jane Doe', age: 30, username: 'jdoe86' }    // ✓ 좋아요

  const user = {
    name: 'Jane Doe',
    age: 30,
    username: 'jdoe86'
  }                                                                 // ✓ 좋아요
  ```

* **블록 안에 패딩이 없어야 합니다.**

  eslint: [`padded-blocks`](http://eslint.org/docs/rules/padded-blocks)

  ```js
  if (user) {
                              // ✗ 피하세요
    const name = getName()

  }

  if (user) {
    const name = getName()    // ✓ 좋아요
  }
  ```

* **스프레드 연산자와 표현식 사이에 공백이 없어야 합니다.**

  eslint: [`rest-spread-spacing`](http://eslint.org/docs/rules/rest-spread-spacing)

  ```js
  fn(... args)    // ✗ 피하세요
  fn(...args)     // ✓ 좋아요
  ```

* **세미콜론은 뒤쪽에 공백을 두고 앞쪽에는 공백을 두지 않아야 합니다.**

  eslint: [`semi-spacing`](http://eslint.org/docs/rules/semi-spacing)

  ```js
  for (let i = 0 ;i < items.length ;i++) {...}    // ✗ 피하세요
  for (let i = 0; i < items.length; i++) {...}    // ✓ 좋아요
  ```

* **블록 앞에 공간이 있어야 합니다.**

  eslint: [`space-before-blocks`](http://eslint.org/docs/rules/space-before-blocks)

  ```js
  if (admin){...}     // ✗ 피하세요
  if (admin) {...}    // ✓ 좋아요
  ```

* **괄호 안에 공백이 없어야 합니다.**

  eslint: [`space-in-parens`](http://eslint.org/docs/rules/space-in-parens)

  ```js
  getName( name )     // ✗ 피하세요
  getName(name)       // ✓ 좋아요
  ```

* **단항 연산자 뒤에 공백이 있어야 합니다.**

  eslint: [`space-unary-ops`](http://eslint.org/docs/rules/space-unary-ops)

  ```js
  typeof!admin        // ✗ 피하세요
  typeof !admin        // ✓ 좋아요
  ```

* **주석 안에는 공백을 사용해야 합니다.**

  eslint: [`spaced-comment`](http://eslint.org/docs/rules/spaced-comment)

  ```js
  //comment           // ✗ 피하세요
  // comment          // ✓ 좋아요

  /*comment*/         // ✗ 피하세요
  /* comment */       // ✓ 좋아요
  ```

* **템플릿 문자열에는 간격이 없습니다.**

  eslint: [`template-curly-spacing`](http://eslint.org/docs/rules/template-curly-spacing)

  ```js
  const message = `Hello, ${ name }`    // ✗ 피하세요
  const message = `Hello, ${name}`      // ✓ 좋아요
  ```

* **`NaN`을 검사 할 때 `isNaN()`을 사용하십시오.**

  eslint: [`use-isnan`](http://eslint.org/docs/rules/use-isnan)

  ```js
  if (price === NaN) { }      // ✗ 피하세요
  if (isNaN(price)) { }       // ✓ 좋아요
  ```

* **`typeof`는 유효한 문자열과 비교되어야 합니다.**

  eslint: [`valid-typeof`](http://eslint.org/docs/rules/valid-typeof)

  ```js
  typeof name === 'undefimed'     // ✗ 피하세요
  typeof name === 'undefined'     // ✓ 좋아요
  ```

* **즉시 호출 된 함수 식(IIFE)은 줄 바꿈되어야 합니다.**

  eslint: [`wrap-iife`](http://eslint.org/docs/rules/wrap-iife)

  ```js
  const getName = function () { }()     // ✗ 피하세요

  const getName = (function () { }())   // ✓ 좋아요
  const getName = (function () { })()   // ✓ 좋아요
  ```

* **`yield *`표현식의 `*`은 앞뒤에 공백이 있어야 합니다.**

  eslint: [`yield-star-spacing`](http://eslint.org/docs/rules/yield-star-spacing)

  ```js
  yield* increment()    // ✗ 피하세요
  yield * increment()   // ✓ 좋아요
  ```

* **Yoda 조건을 피하십시오.**

  eslint: [`yoda`](http://eslint.org/docs/rules/yoda)

  ```js
  if (42 === age) { }    // ✗ 피하세요
  if (age === 42) { }    // ✓ 좋아요
  ```

## 세미콜론

* 세미콜론은 사용하지 않습니다.. (볼거리: [1](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding), [2](http://inimino.org/%7Einimino/blog/javascript_semicolons), [3](https://www.youtube.com/watch?v=gsfbh17Ax9I))

  eslint: [`semi`](http://eslint.org/docs/rules/semi)

  ```js
  window.alert('hi')   // ✓ 좋아요
  window.alert('hi');  // ✗ 피하세요
  ```

* `(`, `[`, or `` ` ``를 사용하여 라인을 시작하지 마십시오. 이것은 세미콜론을 생략한 유일한 시도이며 standard는 이 잠재적인 문제로부터 여러분을 보호합니다.

  eslint: [`no-unexpected-multiline`](http://eslint.org/docs/rules/no-unexpected-multiline)

  ```js
  // ✓ 좋아요
  ;(function () {
    window.alert('ok')
  }())

  // ✗ 피하세요
  (function () {
    window.alert('ok')
  }())
  ```

  ```js
  // ✓ 좋아요
  ;[1, 2, 3].forEach(bar)

  // ✗ 피하세요
  [1, 2, 3].forEach(bar)
  ```

  ```js
  // ✓ 좋아요
  ;`hello`.indexOf('o')

  // ✗ 피하세요
  `hello`.indexOf('o')
  ```

  참고: 만약 종종 이런 식으로 코드를 작성한다면, 영리해 지려고 노력할지도 모릅니다.

  영리한 비글들은 가능할 때마다 명확하고 읽기 쉬운 표현들을 선호한다.

  다음과 같은 이점이 있습니다.

  ```js
  ;[1, 2, 3].forEach(bar)
  ```

  이는 강력하게 선호합니다.

  ```js
  var nums = [1, 2, 3]
  nums.forEach(bar)
  ```


## 도움될만한 읽을거리

- [An Open Letter to JavaScript Leaders Regarding Semicolons][1]
- [JavaScript Semicolon Insertion – Everything you need to know][2]

##### 도움될만한 영상

- [Are Semicolons Necessary in JavaScript? - YouTube][3]

현재 사용되는 모든 인기 code minifiers는 AST 기반 축소를 사용하므로 아무런 문제없이 세미콜론이없는 JavaScript를 처리 할 수 있습니다. (JavaScript에서는 세미콜론이 필요하지 않기 때문에)

##### Excerpt from *["An Open Letter to JavaScript Leaders Regarding Semicolons"][1]*:

> [자동 세미콜론 삽입에 의존]은 매우 안전하며 모든 브라우저가 이해할 수있는 완벽하게 유효한 JS입니다. Closure 컴파일러, yuicompressor, packer 및 jsmin은 모두이를 적절히 축소 할 수 있습니다. 어디서나 성능에 영향을 미치지 않습니다.
>
> 당신을 교육하는 대신,이 언어 공동체의 지도자들이 거짓말과 두려움을 주셨다는 것을 유감스럽게 생각합니다. 부끄러운 일 이었어. JS에서의 진술이 어떻게 실제로 종료되었는지 (어떤 경우에는 종료되지 않았는지) 배우는 것이 좋습니다. 그래서 당신이 아름답게 찾은 코드를 작성할 수 있습니다.
>
> 일반적으로 `\n`은 다음과 같은 경우를 제외하고는 명령문을 끝냅니다 :
>   1. 명령문은 닫히지 않은 괄호, 배열 리터럴 또는 객체 리터럴을 가지거나 명령문을 종료하는 유효한 방법이 아닌 다른 방법으로 끝납니다. (예 :. 또는,로 끝남)
>   2. 선은 -- 또는 ++입니다 (이 경우 다음 토큰을 감소/증가시킵니다).
>   3. { 가 없는 경우 중에서 for(), while(), do, if(), else 입니다.
>   4. 다음 줄은 [, (, +, *, /, -, ,, ., 또는 단일 표현식에서 두 개의 토큰 사이에서만 발견 될 수있는 다른 이항 연산자로 시작합니다.
>
> 첫 번째는 꽤 분명합니다. JSLint조차 JSON과 괄호로 묶인 구조체의 `\n` 문자와 `,`로 끝나는 여러 줄에 걸쳐있는 `var` 문과도 괜찮습니다.
>
> 두 번째는 아주 이상합니다. 나는 당신이 'i\n++\nj`라고 쓰고 싶지만, (이런 종류의 대화 밖에서) 파싱 된 사실을 본 적이 없습니다. `i; ++j`가 아니라 `i++;j`입니다.
>
> 세 번째는 일반적으로 멸시받는 경우 잘 이해됩니다. `if (x)\ny()`는 `if (x) { y() }`와 같습니다. 구문은 블록이나 명령문에 도달 할 때까지 끝나지 않습니다.
>
> `if(x);`는 `if (x) {}` 또는 "If x, nothing do nothing"과 동일합니다. 이것은 일반적으로 루프 체크가 수행되는 루프에 적용됩니다 또한 업데이트 기능입니다. 비정상적이지만 전례가 아닙니다.
>
> 네 번째는 일반적으로 "오, 설마, 당신은 세미콜론이 필요합니다!"라는 사례가 있습니다. 하지만, 이전 라인의 연속이 아니더라도 세미콜론으로 *접두어*를 붙이는 것은 쉽습니다. 예를 들어, 다음코드로 대신할 수 있습니다.
>
> ```js
> foo();
> [1,2,3].forEach(bar);
> ```
>
> 다음과 같이 할 수 있습니다.
>
> ```js
> foo()
> ;[1,2,3].forEach(bar)
> ```
>
> 장점은 `(` 또는 `[` 없이 세미콜론으로 시작하는 줄을 보지 못한다면 익숙해지기 쉽습니다.

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://www.youtube.com/watch?v=gsfbh17Ax9I
