---
id: 59667989bf71cf555dd5d2ff
title: Expressões S
challengeType: 1
forumTopicId: 302303
dashedName: s-expressions
---

# --description--

<a href="https://rosettacode.org/wiki/S-expressions" target="_blank" rel="noopener noreferrer nofollow">Expressões S</a> são uma maneira conveniente de analisar e armazenar dados.

# --instructions--

Escreva um leitor/analisador simples para Expressões S que lide com strings entre aspas ou não, números inteiros e flutuantes (decimais).

A função deve ler uma única Expressão S, porém aninhada, de uma string e retorná-la como um array (aninhado).

Novas linhas e outros tipos de espaço em branco devem ser ignorados a menos que estejam contidos em uma string entre aspas.

"`()`" em strings entre aspas não são interpretados, mas tratados como parte da string.

Tratar de aspas com escape dentro de uma string é opcional. Assim, "`(foo"bar)`" pode ser tratado como uma string "`foo"bar`" ou como um erro.

Para isso, o leitor não precisa reconhecer `\` para escape, mas deve, além disso, reconhecer números se a linguagem tiver tipos de dados apropriados.

Observe que, com a exceção de `()"` (`\`, se houver suporte a escape) e do espaço em branco, não há caracteres especiais. Todo o resto é permitido sem aspas.

O leitor deve poder ler a entrada a seguir

<pre>((data "quoted data" 123 4.5)
(data (!@# (4.5) "(more" "data)")))
</pre>

e transformá-la em uma estrutura de dados nativa.

# --hints--

`parseSexpr` deve ser uma função.

```js
assert(typeof parseSexpr === 'function');
```

`parseSexpr('(data1 data2 data3)')` deve retornar `['data1', 'data2', 'data3']`

```js
assert.deepEqual(parseSexpr(simpleSExpr), simpleSolution);
```

`parseSexpr('((data "quoted data" 123 4.5) (data (!@# (4.5) "(more" "data)")))')` deve retornar `[['data', '"quoted data"', 123, 4.5], ['data', ['!@#', [4.5], '"(more"', '"data)"']]]`.

```js
assert.deepEqual(parseSexpr(basicSExpr), basicSolution);
```

# --seed--

## --after-user-code--

```js
const simpleSExpr = '(data1 data2 data3)';
const simpleSolution = ['data1', 'data2', 'data3'];

const basicSExpr = '((data "quoted data" 123 4.5) (data (!@# (4.5) "(more" "data)")))';
const basicSolution = [["data","\"quoted data\"",123,4.5],["data",["!@#",[4.5],"\"(more\"","\"data)\""]]];
```

## --seed-contents--

```js
function parseSexpr(str) {

  return true;
}
```

# --solutions--

```js
function parseSexpr(str) {
  const t = str.match(/\s*("[^"]*"|\(|\)|"|[^\s()"]+)/g);
  for (var o, c = 0, i = t.length - 1; i >= 0; i--) {
    var n,
      ti = t[i].trim();
    if (ti == '"') return;
    else if (ti == '(') t[i] = '[', c += 1;
    else if (ti == ')') t[i] = ']', c -= 1;
    else if ((n = +ti) == ti) t[i] = n;
    else t[i] = `'${ti.replace('\'', '\\\'')}'`;
    if (i > 0 && ti != ']' && t[i - 1].trim() != '(') t.splice(i, 0, ',');
    if (!c) if (!o) o = true; else return;
  }
  return c ? undefined : eval(t.join(''));
}
```
