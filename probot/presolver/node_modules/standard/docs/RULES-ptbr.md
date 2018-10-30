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

Esse é um "TL;DR" (ou "muito grande; nemli") das regras do [standard](https://github.com/standard/standard)

A melhor forma de aprender sobre o `standard` é instalar e usar no seu código.


## Regras

* **Use 2 espaços** para identação.

  ```js
  function hello (name) {
    console.log('oi', name)
  }
  ```

* **Use aspas simples para strings** exceto para evitar escapamento.

  ```js
  console.log('olá, meu povo')
  $("<div class='box'>")
  ```

* **Sem variáveis não-utilizadas.**

  ```js
  function myFunction () {
    var result = something()   // ✗ evite
  }
  ```

* **Adicione um espaço após as keywords.**

  ```js
  if (condition) { ... }   // ✓ ok
  if(condition) { ... }    // ✗ evite
  ```

* **Adicione um espaço antes do parêntese de declaração de funções.**

  ```js
  function name (arg) { ... }   // ✓ ok
  function name(arg) { ... }    // ✗ evite

  run(function () { ... })      // ✓ ok
  run(function() { ... })       // ✗ evite
  ```

* **Sempre use** `===` ao invés de  `==`.<br>
  Exceção: `obj == null` é permitido pra checar se `null || undefined`.

  ```js
  if (name === 'John')   // ✓ ok
  if (name == 'John')    // ✗ evite
  ```

  ```js
  if (name !== 'John')   // ✓ ok
  if (name != 'John')    // ✗ evite
  ```

* **Operadores infix** devem ser espaçados.

  ```js
  // ✓ ok
  var x = 2
  var message = 'hello, ' + name + '!'
  ```

  ```js
  // ✗ evite
  var x=2
  var message = 'hello, '+name+'!'
  ```

* **Vírgulas devem ter um espaço** depois delas.

  ```js
  // ✓ ok
  var list = [1, 2, 3, 4]
  function greet (name, options) { ... }
  ```

  ```js
  // ✗ evite
  var list = [1,2,3,4]
  function greet (name,options) { ... }
  ```

* **Mantenha os else** na mesma linha das suas chaves.

  ```js
  // ✓ ok
  if (condition) {
    // ...
  } else {
    // ...
  }
  ```

  ```js
  // ✗ evite
  if (condition) {
    // ...
  }
  else {
    // ...
  }
  ```

* **Para ifs com mais de uma linha,** use chaves.

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
  // ✗ evite
  if (options.quiet !== true)
    console.log('done')
  ```

* **Sempre lide  ** com o parâmetro `err` .

  ```js
  // ✓ ok
  run(function (err) {
    if (err) throw err
    window.alert('done')
  })
  ```

  ```js
  // ✗ evite
  run(function (err) {
    window.alert('done')
  })
  ```

* **Sempre prefixe globais de browser** com `window.`.<br>
  Exceções: `document`, `console` e `navigator`.

  ```js
  window.alert('hi')   // ✓ ok
  ```

* **Não é permitido múltiplas linhas em branco.**

  ```js
  // ✓ ok
  var value = 'hello world'
  console.log(value)
  ```

  ```js
  // ✗ evite
  var value = 'hello world'


  console.log(value)
  ```

* **Se for usar operador ternário** em múltiplas linhas, deixe `?` e `:` em suas próprias linhas.

  ```js
  // ✓ ok
  var location = env.development ? 'localhost' : 'www.api.com'

  // ✓ ok
  var location = env.development
    ? 'localhost'
    : 'www.api.com'

  // ✗ evite
  var location = env.development ?
    'localhost' :
    'www.api.com'
  ```

* **Para declarações de var,** escreva cada declaração na sua própria instrução.

  ```js
  // ✓ ok
  var silent = true
  var verbose = true

  // ✗ evite
  var silent = true, verbose = true

  // ✗ evite
  var silent = true,
      verbose = true
  ```

* **Coloque parẽnteses adicionais** em declarações em condições. Isso torna mais claro que a expressão é uma declaração (`=`) e não um typo de equidade (`===`)

  ```js
  // ✓ ok
  while ((m = text.match(expr))) {
    // ...
  }

  // ✗ evite
  while (m = text.match(expr)) {
    // ...
  }
  ```
*
## Ponto-e-vírgula

* Não use. (veja: [1](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding), [2](http://inimino.org/%7Einimino/blog/javascript_semicolons), [3](https://www.youtube.com/watch?v=gsfbh17Ax9I))

  ```js
  window.alert('hi')   // ✓ ok
  window.alert('hi');  // ✗ evite
  ```

* Nunca comece uma linha com `(`, `[`, ou `` ` ``. Esse é o único problema em omitir ponto-e-vírgula, e standard te protege desse problema em potencial.

  ```js
  // ✓ ok
  ;(function () {
    window.alert('ok')
  }())

  // ✗ evite
  (function () {
    window.alert('ok')
  }())
  ```

  ```js
  // ✓ ok
  ;[1, 2, 3].forEach(bar)

  // ✗ evite
  [1, 2, 3].forEach(bar)
  ```

  ```js
  // ✓ ok
  ;`hello`.indexOf('o')

  // ✗ evite
  `hello`.indexOf('o')
  ```

  Nota: Se você frequentemente escreve código assim, você pode estar querendo ser o inteligentão. Cuidado.

  Atalhos inteligentes são desencorajados, em favor de expressões mais limpas e legíveis, sempre que possível.


  Ao invés disso:

  ```js
  ;[1, 2, 3].forEach(bar)
  ```

  Isso é bem melhor

  ```js
  var nums = [1, 2, 3]
  nums.forEach(bar)
  ```


## Uma leitura boa

- [An Open Letter to JavaScript Leaders Regarding Semicolons][1]
- [JavaScript Semicolon Insertion – Everything you need to know][2]

##### E um vídeo bem explicativo:

- [Are Semicolons Necessary in JavaScript? - YouTube][3]

Todos os minificadores de código populares usam minificação baseada em AST, logo, podem lidar com JavaScript sem ponto-e-vírgula sem problemas (já que ponto-e-vírgula não é obrigatório no JavaScript).

##### Um pedaço de *["An Open Letter to JavaScript Leaders Regarding Semicolons"][1]*, traduzido:

[Depender de inserção automática de ponto-e-vírgula] é algo bem seguro, e é perfeitamente válido, de forma que qualquer navegador entende. Compilador Closure, yuicompressos, packer e jsmin... todos conseguem minificar sem problemas. Não há impacto de performance.

Lamento que ao invés de educar, os líderes da comunidade dessa linguagem mentem pra você, te deixam com medo. Isso é vergonhoso. Eu recomendo aprender como declarações no JS são terminadas (e em que caso elas não são terminadas), para que você possa escrever os códigos que acha bonito.


De forma geral, `\n` termina uma declaração a menos que:
  1. A declaração possua um parêntese que não foi fechado, um array literal ou um objeto literal, ou termina de alguma outra forma que não seja um fim de declaração válido (por exemplo, `.` ou `,`)
  2. A linha é apenas `--` ou `++` (nesse caso vai decrementar ou incrementar o próximo token)
  3. Ela seja um `for()`, `while()`, `while()`, `do`, `if()`, ou `else`, e não possui `{`
  4. A próxima linha começa com  `[`, `(`, `+`, `*`, `/`, `-`, `,`, `.`, ou algum outro operador binário que só pode ser encontrado entre 2 tokens em uma única expressão.

A primeira linha é bem óbvia. Qualquer JSLint não vê problemas em `\n` em json e construtores "aparêntetizados", e com declarações `var` que se extendem por múltiplas linhas, terminado em `,`;
A segunda é muito esquisita. Nunca vi um caso (fora de ambientes específicos pra esse caso) onde você iria querer escrever `i\n++\nj`, mas pra todos os fins, isso é um `i; ++j`, e não `i++; j`.

A terceira é bem difundida,  embora geralmente deixada pra lá. `if (x)\ny()` é equivalente a `if (x) { y() }`. O construtor não termina até que ache um bloco, ou uma declaração.

`;` é uma declaração válida, logo `if(x);`  `if(x){}` ou, “se X, não faça nada". Isso é mais comum quando aplicado em loops onde a checagem do loop é a própria função de update. Incomum, mas não totalmente desconhecida.

A quarta é geralmente o que deixa a galera louca, tipo "meu deus, você precisa de ponto-e-vírgula!" Mas é bem fácil *prefixar* essas linhas com ponto-e-vírgula se você não quer que elas sejam continuações da linha anterior. Por exempl, ao invés disso:

```js
foo();
[1,2,3].forEach(bar);
```

você pode fazer isso

```js
foo()
;[1,2,3].forEach(bar)
```

A vantagem disso é que prefixos são mais fáceis de perceber, uma vez que você acostuma a nunca mias ver linhas com `(` e `[` sem semis.

*Fim da citação de "An Open Letter to JavaScript Leaders Regarding Semicolons".*

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://www.youtube.com/watch?v=gsfbh17Ax9I
