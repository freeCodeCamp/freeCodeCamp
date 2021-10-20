---
id: 587d7b8c367417b2b2512b58
title: Exportar apenas um valor com export default
challengeType: 1
forumTopicId: 301199
dashedName: create-an-export-fallback-with-export-default
---

# --description--

Na lição de `export` você aprendeu sobre a sintaxe que chamamos de <dfn>exportação nomeada</dfn>. Naquela lição você exportou múltiplas funções e variáveis que ficaram disponíveis para utilização em outros arquivos.

Há outra sintaxe para `export` que você precisa saber, conhecida como <dfn>exportação padrão</dfn>. Você usará essa sintaxe quando apenas um valor estiver sendo exportado de um arquivo ou módulo. Essa sintaxe também é usada para exportar um valor substituto caso o valor original não possa ser exportado.

Abaixo estão exemplos utilizando a sintaxe `export default`:

```js
export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}
```

O primeiro exemplo é uma função nomeada e o segundo é uma função anônima.

A sintaxe `export default` é usada para exportar um único valor de um arquivo ou módulo. Tenha em mente que você não pode usar o `export default` com `var`, `let` ou `const`

# --instructions--

A função a seguir deve ser o único valor a ser exportado. Adicione o código necessário para que apenas um valor seja exportado.

# --hints--

Você deve usar a sintaxe alternativa ao `export`.

```js
assert(
  code.match(
    /export\s+default\s+function(\s+subtract\s*|\s*)\(\s*x,\s*y\s*\)\s*{/g
  )
);
```

# --seed--

## --seed-contents--

```js
function subtract(x, y) {
  return x - y;
}
```

# --solutions--

```js
export default function subtract(x, y) {
  return x - y;
}
```
