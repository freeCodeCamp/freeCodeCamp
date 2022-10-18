---
id: 5900f42b1000cf542c50ff3e
title: 'Problem 191: Preis-Strings'
challengeType: 1
forumTopicId: 301829
dashedName: problem-191-prize-strings
---

# --description--

Eine bestimmte Schule bietet Kindern mit guter Anwesenheit und Pünktlichkeit Geldprämien an. If they are absent for three consecutive days or late on more than one occasion then they forfeit their prize.

Während eines n-tägigen Zeitraums wird ein – aus den Buchstaben L (late), O (on time) und A (abwesend) bestehender – dreigliedriger String gebildet.

Although there are eighty-one trinary strings for a 4-day period that can be formed, exactly forty-three strings would lead to a prize:

```markup
OOOO OOOA OOOL OOAO OOAA OOAL OOLO OOLA OAOO OAOA
OAOL OAAO OAAL OALO OALA OLOO OLOA OLAO OLAA AOOO
AOOA AOOL AOAO AOAA AOAL AOLO AOLA AAOO AAOA AAOL
AALO AALA ALOO ALOA ALAO ALAA LOOO LOOA LOAO LOAA
LAOO LAOA LAAO
```

Wie viele "Preis"-Strings würden über einen dreißigtägigen Zeitraums entstehen?

# --hints--

`prizeStrings()` sollte `1918080160` zurückgeben.

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
