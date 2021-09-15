---
id: 587d7db5367417b2b2512b95
title: Capturar um único caractere com múltiplas possibilidades
challengeType: 1
forumTopicId: 301357
dashedName: match-single-character-with-multiple-possibilities
---

# --description--

Você aprendeu a capturar padrões literais (`/literal/`) e usar o caractere curinga (`/./`). Eles são os extremos das expressões regulares: um encontra o texto exato e o outro captura qualquer coisa. Existem formas de balancear esses extremos.

Você pode ter alguma flexibilidade ao procurar um padrão literal usando <dfn>classes de caracteres</dfn>. Classes de caracteres permitem a definição de grupos de caracteres que você quer capturar ao colocá-los entre colchetes: `[` e `]`.

Por exemplo, se você quiser encontrar `bag`, `big` e `bug` mas não `bog`. Você pode escrever a regex `/b[aiu]g/` para isso. `[aiu]` é a classe de caracteres que só capturará `a`, `i` ou `u`.

```js
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
```

As quatro chamadas a `match` retornarão os seguintes valores, nesta ordem: `["big"]`, `["bag"]`, `["bug"]` e `null`.

# --instructions--

Use classe de caracteres de vogais (`a`, `e`, `i`, `o`, `u`) na sua regex `vowelRegex` para encontrar todas as vogais na string `quoteSample`.

**Observação:** você quer encontrar tanto maiúsculas quanto minúsculas.

# --hints--

Você deve encontrar todas as 25 vogais.

```js
assert(result.length == 25);
```

Você deve usar uma classe de caracteres na sua regex `vowelRegex`.

```js
assert(/\[.*\]/.test(vowelRegex.source));
```

Você deve usar a flag global na sua regex `vowelRegex`.

```js
assert(vowelRegex.flags.match(/g/).length == 1);
```

Você deve usar a flag de ignorar caixa na sua regex `vowelRegex`.

```js
assert(vowelRegex.flags.match(/i/).length == 1);
```

A regex não deve encontrar nenhuma consoante.

```js
assert(!/[b-df-hj-np-tv-z]/gi.test(result.join()));
```

# --seed--

## --seed-contents--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
```
