---
id: 5900f42b1000cf542c50ff3e
title: 'Problema 191: Stringhe Premio'
challengeType: 1
forumTopicId: 301829
dashedName: problem-191-prize-strings
---

# --description--

Una scuola particolare offre premi in denaro ai bambini con una buona frequenza e puntualità. Se sono assenti per tre giorni consecutivi o in ritardo in più di un'occasione, allora perdono il loro premio.

Durante un periodo di n-giorni viene formata una stringa ternaria per ogni bambino costituita da L (tardi), O (in orario) e A (assente).

Anche se ci sono ottantuno stringhe ternarie che possono essere formate per un periodo di 4 giorni, esattamente quarantatre stringhe porterebbero a un premio:

```markup
OOOO OOOA OOOL OOAO OOAA OOAL OOLO OOLA OAOO OAOA
OAOL OAAO OAAL OALO OALA OLOO OLOA OLAO OLAA AOOO
AOOA AOOL AOAO AOAA AOAL AOLO AOLA AAOO AAOA AAOL
AALO AALA ALOO ALOA ALAO ALAA LOOO LOOA LOAO LOAA
LAOO LAOA LAAO
```

Quante stringhe "premio" esistono in un periodo di 30 giorni?

# --hints--

`prizeStrings()` dovrebbe restituire `1918080160`.

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
