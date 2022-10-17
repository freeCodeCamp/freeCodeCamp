---
id: 56533eb9ac21ba0edf2244b4
title: Cercar uma string com aspas simples
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmnhM'
forumTopicId: 18260
dashedName: quoting-strings-with-single-quotes
---

# --description--

Valores de <dfn>string</dfn> em JavaScript podem ser escritas com aspas simples ou duplas, desde que você comece e termine com o mesmo tipo de aspas. Diferente de outras linguagens de programação, aspas simples e duplas funcionam da mesma forma em JavaScript.

```js
const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
```

O motivo pelo qual você pode querer usar um tipo de aspas no lugar da outra é se você vir a querer usar ambas em uma string. Isso pode acontecer se você quiser salvar uma conversa em uma string e ter a conversa entre aspas. Outro uso para isso seria salvar uma tag `<a>` com vários atributos em aspas, tudo dentro de uma string.

```js
const conversation = 'Finn exclaims to Jake, "Algebraic!"';
```

Porém, isso se torna um problema se você precisar usar as aspas mais extremas dentro dela. Lembre-se, uma string tem o mesmo tipo de aspas no início e no final. Mas se você tem aquela mesma aspa em algum lugar no meio, a string vai terminar mais cedo e lançará um erro.

```js
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';
```

Aqui `badStr` lançará um erro.

Na string <dfn>goodStr</dfn> acima, você pode usar ambas as aspas com segurança ao usar a barra invertida `\` como um caractere de escapamento.

**Observação:** a barra invertida `\` não deve ser confundida com a barra comum `/`. Elas não fazem a mesma coisa.

# --instructions--

Altere a string fornecida para uma string com aspas simples no início e no final e sem caracteres de escapamento.

Nesse momento, a tag `<a>` na string usa aspas duplas em todo canto. Você precisará alterar as aspas mais externas para aspas simples, para que você possa remover os caracteres de escapamento.

# --hints--

Você deve remover todas as barras invertidas (`\`).

```js
assert(
  !/\\/g.test(code) &&
    myStr.match(
      '\\s*<a href\\s*=\\s*"http://www.example.com"\\s*target\\s*=\\s*"_blank">\\s*Link\\s*</a>\\s*'
    )
);
```

Você deve ter duas aspas simples `'` e quatro aspas duplas `"`.

```js
assert(code.match(/"/g).length === 4 && code.match(/'/g).length === 2);
```

# --seed--

## --seed-contents--

```js
const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
```

# --solutions--

```js
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
```
