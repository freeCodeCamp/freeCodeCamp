---
id: 5900f4cd1000cf542c50ffe0
title: 'Problema 353: Luna rischiosa'
challengeType: 1
forumTopicId: 302013
dashedName: problem-353-risky-moon
---

# --description--

Una luna potrebbe essere descritta dalla sfera $C(r)$ con centro (0, 0, 0) e raggio $r$.

Ci sono stazioni sulla luna nei punti sulla superficie di $C(r)$ con coordinate intere. La stazione a (0, 0, $r$) si chiama Stazione Polo Nord, la stazione a (0, 0, $-r$) si chiama Stazione Polo Sud.

Tutte le stazioni sono collegate tra loro attraverso la strada più breve sul grande arco attraverso le stazioni. Un viaggio tra due stazioni è rischioso. Se $d$ è la lunghezza della strada tra due stazioni, $\{\left(\frac{d}{πr}\right)}^2$ è una misura per il rischio del viaggio (chiamiamolo il rischio della strada). Se il viaggio comprende più di due stazioni, il rischio del viaggio è la somma dei rischi delle strade usate.

Un viaggio diretto dalla stazione Polo Nord alla stazione Polo Sud ha la lunghezza $πr$ e il rischio 1. Il viaggio dalla stazione Polo Nord alla stazione Polo Sud attraverso (0, $r$, 0) ha la stessa lunghezza, ma un rischio minore:

$${\left(\frac{\frac{1}{2}πr}{πr}\right)}^2+{\left(\frac{\frac{1}{2}πr}{πr}\right)}^2 = 0.5$$

Il rischio minimo di un viaggio dalla stazione Polo Nord alla stazione Polo Sud su $C(r)$ è $M(r)$.

Ti viene dato che $M(7) = 0.178\\,494\\,399\\,8$ arrotondato a 10 cifre dietro il punto decimale.

Trova $\displaystyle\sum_{n = 1}^{15} M(2^n - 1)$.

Dai la tua risposta arrotondata a 10 cifre dietro il punto decimale nella forma a.bcdefghijk.

# --hints--

`riskyMoon()` dovrebbe restituire `1.2759860331`.

```js
assert.strictEqual(riskyMoon(), 1.2759860331);
```

# --seed--

## --seed-contents--

```js
function riskyMoon() {

  return true;
}

riskyMoon();
```

# --solutions--

```js
// solution required
```
