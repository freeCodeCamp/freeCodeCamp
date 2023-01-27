---
id: 5900f3d71000cf542c50fee9
title: 'Problema 106: somme di subset speciali: meta-testing'
challengeType: 1
forumTopicId: 301730
dashedName: problem-106-special-subset-sums-meta-testing
---

# --description--

Sia $S(A)$ la somma degli elementi in un set A di dimensione n. Lo chiamiamo un set di somma speciale se per ogni due subset non vuoi e distinti, B e C, le seguenti proprietà sono vere:

1. $S(B) ≠ S(C)$, cioè le somme dei subset non possono essere uguali.
2. Se B contiene più elementi di C allora $S(B) > S(C)$.

Per questo problema supponiamo che un dato set contiene n elementi in ordine strettamente crescente, e soddisfa la seconda regola.

Sorprendentemente, delle 25 possibili coppie di subset che possono essere ottenute da un set per cui n = 4, solo una di queste coppie deve essere testata per uguaglianza (prima regola). Similmente, quando n = 7, solo 70 delle 966 coppie di subset ha bisogno di essere testata.

Per n = 12, quante delle 261625 coppie di subset che possono essere ottenute devono essere testate per uguaglianza?

**Nota:** questo problema è legato ai problemi 103 e 105.

# --hints--

`subsetSumsMetaTesting()` dovrebbe restituire `21384`.

```js
assert.strictEqual(subsetSumsMetaTesting(), 21384);
```

# --seed--

## --seed-contents--

```js
function subsetSumsMetaTesting() {

  return true;
}

subsetSumsMetaTesting();
```

# --solutions--

```js
// solution required
```
