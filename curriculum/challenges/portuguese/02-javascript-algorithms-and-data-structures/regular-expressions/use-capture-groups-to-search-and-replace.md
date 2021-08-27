---
id: 587d7dbb367417b2b2512bab
title: Usar grupos de captura para buscar e substituir
challengeType: 1
forumTopicId: 301368
dashedName: use-capture-groups-to-search-and-replace
---

# --description--

Buscar texto é útil. É ainda mais útil quando você consegue modificar (ou substituir) o texto que você busca.

Você pode buscar e substituir texto em uma string usando o método `.replace()`. O primeiro parâmetro do `.replace()` é o padrão regex que você quer procurar. O segundo parâmetro é a string que substituirá o resultado da busca ou uma função que fará algo com ele.

```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
```

A chamada a `replace` aqui retorna a string `The sky is blue.`.

Você também pode acessar grupos de captura na string de substituição usando o cifrão (`$`).

```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
```

A chamada a `replace` aqui retorna a string `Camp Code`.

# --instructions--

Escreva uma regex, `fixRegex`, que usa três grupos de captura para procurar cada palavra na string `one two three`. Depois atualize a variável `replaceText` para trocar de `one two three` para `three two one` e atribuir o resultado à variável `result`. Certifique-se de estar utilizando grupos de captura na string de substituição usando o cifrão (`$`).

# --hints--

Você deve usar `.replace()` para buscar e substituir.

```js
assert(code.match(/\.replace\(.*\)/));
```

A regex deve mudar a string `one two three` para `three two one`

```js
assert(result === 'three two one');
```

Você não deve alterar a última linha.

```js
assert(code.match(/result\s*=\s*str\.replace\(.*?\)/));
```

`fixRegex` deve usar pelo menos três grupos de captura.

```js
assert(new RegExp(fixRegex.source + '|').exec('').length - 1 >= 3);
```

`replaceText` deve usar os grupos de captura por via da sintaxe $n onde n é o n-ésimo grupo capturado.

```js
{
  const re = /(\$\d{1,2})+(?:[\D]|\b)/g;
  assert(replaceText.match(re).length >= 3);
}
```

# --seed--

## --seed-contents--

```js
let str = "one two three";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = str.replace(fixRegex, replaceText);
```

# --solutions--

```js
let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/g; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
```
