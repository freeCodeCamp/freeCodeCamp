---
id: 5900f50b1000cf542c51001d
title: 'Problema 414: Costante di Kaprekar'
challengeType: 1
forumTopicId: 302083
dashedName: problem-414-kaprekar-constant
---

# --description--

6174 è un numero notevole; se ordiniamo le sue cifre in ordine crescente e sottraiamo quel numero dal numero che si ottiene quando si ordinano le cifre in ordine decrescente, riceviamo $7641 - 1467 = 6174$.

Ancora più notevole è che se partiamo da qualsiasi numero a 4 cifre e ripetiamo questo processo di smistamento e sottrazione, finiremo con 6174 o immediatamente con 0 se tutte le cifre sono uguali.

Questo funziona anche con numeri che hanno meno di 4 cifre se aggiungiamo al numero degli zeri iniziali fino a quando non abbiamo 4 cifre.

Ad es. iniziamo con il numero 0837:

$$\begin{align}   & 8730 - 0378 = 8352 \\\\
  & 8532 - 2358 = 6174 \end{align}$$

6174 è chiamata costante Kaprekar. Il processo di ordinamento e sottrazione e ripetizione fino a quando non si raggiunge lo 0 o la costante Kaprekar è chiamato la routine di Kaprekar.

Possiamo considerare la routine di Kaprekar per altre basi e numeri di cifre. Purtroppo, non è garantito che una costante di Kaprekar esista in tutti i casi; inoltre la routine può finire in un ciclo per alcuni numeri di ingresso o la costante a cui la routine arriva può essere diversa per numeri di input diversi. Tuttavia, può essere dimostrato che per 5 cifre e una base $b = 6t + 3 ≠ 9$, esiste una costante di Kaprekar.

Ad es. base 15: ${(10, 4, 14, 9, 5)}\_{15}$ base 21: $(14, 6, 20, 13, 7)\_{21}$

Definisci $C_b$ in modo tale che sia la costante di Kaprekar nella base $b$ per 5 cifre. Definisci la funzione $sb(i)$ in modo tale che:

- 0 se $i = C_b$ o se $i$ scritto in base $b$ consiste di 5 cifre identiche
- il numero di iterazioni necessarie alla routine di Kaprekar nella base $b$ per arrivare a $C_b$, altrimenti

Nota che possiamo definire $sb(i)$ per tutti gli interi $i &lt; b^5$. Se $i$ scritto in base $b$ richiede meno di 5 cifre, il numero è riempito con cifre iniziali zero fino a quando non abbiamo 5 cifre prima di applicare la routine Kaprekar.

Definisci $S(b)$ come la somma di $sb(i)$ per $0 &lt; i &lt; b^5$. Ad es. $S(15) = 5\\,274\\,369$ $S(111) = 400\\,668\\,930\\,299$

Trova la somma di $S(6k + 3)$ per $2 ≤ k ≤ 300$. Dai le ultime 18 cifre come risposta.

# --hints--

`kaprekarConstant()` dovrebbe restituire `552506775824935500`.

```js
assert.strictEqual(kaprekarConstant(), 552506775824935500);
```

# --seed--

## --seed-contents--

```js
function kaprekarConstant() {

  return true;
}

kaprekarConstant();
```

# --solutions--

```js
// solution required
```
