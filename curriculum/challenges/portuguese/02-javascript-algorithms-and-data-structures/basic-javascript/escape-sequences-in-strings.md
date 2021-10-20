---
id: 56533eb9ac21ba0edf2244b6
title: Escapar sequências em strings
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqRh6'
forumTopicId: 17567
dashedName: escape-sequences-in-strings
---

# --description--

Aspas não são os únicos caracteres que podem ser <dfn>escapados</dfn> dentro de uma string. Há dois motivos para usar caracteres de escapamento:

1.  Para permitir que você use caracteres que você pode não ser capaz de digitar do contrário, como o caractere de retorno de carro.
2.  Para permitir que você represente várias aspas em uma string sem o JavaScript entender erroneamente o que você quis dizer.

Aprendemos isso no desafio anterior.

<table class='table table-striped'><thead><tr><th>Código</th><th>Saída</th></tr></thead><tbody><tr><td><code>\'</code></td><td>aspas simples</td></tr><tr><td><code>\"</code></td><td>aspas duplas</td></tr><tr><td><code>\\</code></td><td>barra invertida</td></tr><tr><td><code>\n</code></td><td>nova linha</td></tr><tr><td><code>\r</code></td><td>retorno de carro</td></tr><tr><td><code>\t</code></td><td>tab</td></tr><tr><td><code>\b</code></td><td>limite de palavra</td></tr><tr><td><code>\f</code></td><td>quebra de página</td></tr></tbody></table>

*Note que a própria barra invertida deve ser escapada para ser exibida como uma barra invertida.*

# --instructions--

Atribua as três linhas de texto a seguir em uma única variável `myStr` usando sequências de escapamento.

<blockquote>FirstLine<br>    \SecondLine<br>ThirdLine</blockquote>

Você precisará usar sequências de escapamento para inserir corretamente os caracteres especiais. Você também precisará seguir os espaçamentos assim como acima, sem espaços entre sequências de escapamento ou palavras.

**Observação:** a identação para `SecondLine` é alcançada com o caractere de espaçamento tab, e não com espaços.

# --hints--

`myStr` não deve conter espaços

```js
assert(!/ /.test(myStr));
```

`myStr` deve conter as strings `FirstLine`, `SecondLine` e `ThirdLine` (lembre-se da sensibilidade de maiúsculas e minúsculas 'case sensitivity')

```js
assert(
  /FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr)
);
```

`FirstLine` deve ser seguido pelo caractere de nova linha `\n`

```js
assert(/FirstLine\n/.test(myStr));
```

`myStr` deve conter o caractere de tabulação `\t`, que vem após um caractere de nova linha

```js
assert(/\n\t/.test(myStr));
```

`SecondLine` deve ser precedida pelo caractere de barra invertida `\`

```js
assert(/\\SecondLine/.test(myStr));
```

Deve ter um caractere de nova linha entre `SecondLine` e `ThirdLine`

```js
assert(/SecondLine\nThirdLine/.test(myStr));
```

`myStr` deve conter apenas caracteres mostrados nas instruções

```js
assert(myStr === 'FirstLine\n\t\\SecondLine\nThirdLine');
```

# --seed--

## --after-user-code--

```js
(function(){
if (myStr !== undefined){
console.log('myStr:\n' + myStr);}})();
```

## --seed-contents--

```js
var myStr; // Change this line
```

# --solutions--

```js
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```
