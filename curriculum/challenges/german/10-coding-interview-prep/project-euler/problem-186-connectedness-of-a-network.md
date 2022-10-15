---
id: 5900f4281000cf542c50ff39
title: 'Problem 186: Connectedness of a network'
challengeType: 1
forumTopicId: 301822
dashedName: problem-186-connectedness-of-a-network
---

# --description--

Here are the records from a busy telephone system with one million users:

| RecNr | Caller | Called |
|-------|--------|--------|
|   1   | 200007 | 100053 |
|   2   | 600183 | 500439 |
|   3   | 600863 | 701497 |
|  ...  |  ...   |  ...   |

The telephone number of the caller and the called number in record $n$ are $Caller(n) = S_{2n - 1}$ and $Called(n) = S_{2n}$ where ${S}_{1,2,3,\ldots}$ come from the "Lagged Fibonacci Generator":

For $1 ≤ k ≤ 55$, $S_k = [100003 - 200003k + 300007{k}^3]\\;(\text{modulo}\\;1000000)$

For $56 ≤ k$, $S_k = [S_{k - 24} + S_{k - 55}]\\;(\text{modulo}\\;1000000)$

If $Caller(n) = Called(n)$ then the user is assumed to have misdialled and the call fails; otherwise the call is successful.

From the start of the records, we say that any pair of users $X$ and $Y$ are friends if $X$ calls $Y$ or vice-versa. Similarly, $X$ is a friend of a friend of $Z$ if $X$ is a friend of $Y$ and $Y$ is a friend of $Z$; and so on for longer chains.

The Prime Minister's phone number is 524287. After how many successful calls, not counting misdials, will 99% of the users (including the PM) be a friend, or a friend of a friend etc., of the Prime Minister?

# --hints--

`connectednessOfANetwork()` should return `2325629`.

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
