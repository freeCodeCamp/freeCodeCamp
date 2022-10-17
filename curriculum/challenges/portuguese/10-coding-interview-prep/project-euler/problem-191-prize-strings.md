---
id: 5900f42b1000cf542c50ff3e
title: 'Problema 191: Strings de prêmios'
challengeType: 1
forumTopicId: 301829
dashedName: problem-191-prize-strings
---

# --description--

Uma determinada escola oferece recompensas em dinheiro para crianças com boa frequência e pontualidade. Se não estiverem presentes por três dias consecutivos ou atrasadas mais de uma vez, então perdem o seu prêmio.

Durante um período de n-dias, uma string ternária é formada para cada criança consistindo em L's (dias atrasado), O's (dias chegando na hora) e A's (dias ausente).

Embora existam oitenta e uma strings ternárias para um período de 4 dias que possam ser formadas, exatamente quarenta e três strings levariam a um prêmio:

```markup
OOOO OOOA OOOL OOAO OOAA OOAL OOLO OOLA OAOO OAOA
OAOL OAAO OAAL OALO OALA OLOO OLOA OLAO OLAA AOOO
AOOA AOOL AOAO AOAA AOAL AOLO AOLA AAOO AAOA AAOL
AALO AALA ALOO ALOA ALAO ALAA LOOO LOOA LOAO LOAA
LAOO LAOA LAAO
```

Quantas strings de "prêmio" existem em um período de 30 dias?

# --hints--

`prizeStrings()` deve retornar `1918080160`.

```js
assert.strictEqual(prizeStrings(), 1918080160);
```

# --seed--

## --seed-contents--

```js
function prizeStrings() {

  return true;
}

prizeStrings();
```

# --solutions--

```js
// solution required
```
