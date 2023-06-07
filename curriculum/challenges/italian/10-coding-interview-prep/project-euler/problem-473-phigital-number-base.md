---
id: 5900f5461000cf542c510058
title: 'Problema 473: Base numerica pi-greco'
challengeType: 1
forumTopicId: 302150
dashedName: problem-473-phigital-number-base
---

# --description--

Sia $\varphi$ il rapporto aureo: $\varphi = \frac{1+\sqrt{5}}{2}.$

Degno di nota, è possibile scrivere ogni numero intero positivo come somma delle potenze di $\varphi$ anche con il limite che ogni potenza di $\varphi$ possa essere usata al massimo una volta nella somma.

Anche in questo caso la rappresentazione non è unica.

Possiamo renderla unica richiedendo che nessuna potenza con esponenti consecutivi sia usata e che la rappresentazione sia finita.

Ad es:

$2 = \varphi + \varphi^{-2}$ e $3 = \varphi^{2} + \varphi^{-2}$

Per rappresentare la somma delle potenze di $\varphi$ usiamo una stringa di 0 e 1 con un punto per indicare dove gli esponenti negativi iniziano. Chiamiamo questa rappresentazione in base pi-greco.

Quindi $1 = 1_{\varphi}$, $2 = 10.01_{\varphi}$, $3 = 100.01_{\varphi}$ e $14 = 100100.001001_{\varphi}$. Le stringhe che rappresentano 1,2 e 14 nella base numerica phigitale sono palindrome, mentre la stringa che rappresenta 3 non lo è ( il punto phigitale non è il carattere al centro).

La somma dei numeri interi che non eccedono 1000 la cui rappresentazione in base pi-greco è palindromica è 4345.

Trova la somma dei numeri interi positivi non eccedenti $10^{10}$ la cui rappresentazione in base pi-greco è palindromica.

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
