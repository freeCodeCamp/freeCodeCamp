---
id: 5900f4281000cf542c50ff39
title: 'Problem 186: Verbundenheit eines Netzes'
challengeType: 1
forumTopicId: 301822
dashedName: problem-186-connectedness-of-a-network
---

# --description--

Here are the records from a busy telephone system with one million users:

| RecNr | Caller | Called |
| ----- | ------ | ------ |
| 1     | 200007 | 100053 |
| 2     | 600183 | 500439 |
| 3     | 600863 | 701497 |
| ...   | ...    | ...    |

The telephone number of the caller and the called number in record $n$ are $Caller(n) = S_{2n - 1}$ and $Called(n) = S_{2n}$ where ${S}_{1,2,3,\ldots}$ come from the "Lagged Fibonacci Generator":

Für $1 ≤ k ≤ 55$, $S_k = [100003 - 200003k + 300007{k}^3]\\;(\text{modulo}\\;1000000)$

Für $56 ≤ k$, $S_k = [S_{k - 24} + S_{k - 55}]\\;(\text{modulo}\\;1000000)$

Wenn $Caller(n) = Called(n)$ ist, wird angenommen, dass der Benutzer sich verwählt hat, und der Anruf schlägt fehl; andernfalls ist der Anruf erfolgreich.

Von Beginn der Aufzeichnungen an sagen wir, dass ein beliebiges Paar von Benutzern $X$ und $Y$ befreundet ist, wenn $X$ $Y$ anruft oder andersherum. In ähnlicher Weise ist $X$ ein Freund eines Freundes von $Z$, wenn $X$ ein Freund von $Y$ ist und $Y$ ein Freund von $Z$ ist; und so weiter für längere Ketten.

Die Telefonnummer des Premierministers lautet 524287. Nach wie vielen erfolgreichen Anrufen, Fehlanrufe nicht mitgezählt, werden 99 % der Nutzer (einschließlich des Premierministers) ein Freund oder ein Freund eines Freundes usw. des Premierministers sein?

# --hints--

`connectednessOfANetwork()` sollte `2325629` zurückgeben.

```js
assert.strictEqual(connectednessOfANetwork(), 2325629);
```

# --seed--

## --seed-contents--

```js
function connectednessOfANetwork() {

  return true;
}

connectednessOfANetwork();
```

# --solutions--

```js
// solution required
```
