---
id: 5900f5461000cf542c510058
title: 'Problema 473: base numerica phi'
challengeType: 1
forumTopicId: 302150
dashedName: problem-473-phigital-number-base
---

# --description--

Sia $\varphi$ il rapporto aureo: $\varphi = \frac{1+\sqrt{5}}{2}.$

Incredibilmente, è possibile scrivere ogni numero intero positivo come somma delle potenze di $\varphi$ anche imponendo che ogni potenza di $\varphi$ venga usata al massimo una volta nella somma.

Anche in questo caso la rappresentazione non è unica.

Possiamo renderla unica richiedendo che non venga usata nessuna potenza con esponenti consecutivi e che la rappresentazione sia finita.

Ad es:

$2 = \varphi + \varphi^{-2}$ e $3 = \varphi^{2} + \varphi^{-2}$

Per rappresentare la somma delle potenze di $\varphi$ usiamo una stringa di 0 e 1 con un punto per indicare dove iniziano gli esponenti negativi. Questa rappresentazione è detta in base phi.

Quindi $1 = 1_{\varphi}$, $2 = 10.01_{\varphi}$, $3 = 100.01_{\varphi}$ e $14 = 100100.001001_{\varphi}$. Le stringhe che rappresentano 1,2 e 14 nella base numerica phi sono palindrome, mentre la stringa che rappresenta 3 non lo è ( il punto phi non è il carattere al centro).

La somma dei numeri interi minori di 1000 la cui rappresentazione in base phi è palindromica è 4345.

Trova la somma dei numeri interi positivi minori di $10^{10}$ la cui rappresentazione in base phi è palindromica.

# --hints--

`phigitalNumberBase()` dovrebbe restituire `35856681704365`.

```js
assert.strictEqual(phigitalNumberBase(), 35856681704365);
```

# --seed--

## --seed-contents--

```js
function phigitalNumberBase() {

  return true;
}

phigitalNumberBase();
```

# --solutions--

```js
// solution required
```
