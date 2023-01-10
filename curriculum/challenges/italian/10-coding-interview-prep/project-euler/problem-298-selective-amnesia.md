---
id: 5900f4971000cf542c50ffa9
title: 'Problema 298: Amnesia Selettiva'
challengeType: 1
forumTopicId: 301950
dashedName: problem-298-selective-amnesia
---

# --description--

Larry e Robin giocano un gioco di memoria che coinvolge una sequenza di numeri casuali tra 1 e 10, inclusi, che sono chiamati uno alla volta. Ogni giocatore può ricordare fino a 5 numeri precedenti. Quando il numero chiamato è nella memoria di un giocatore, a quel giocatore viene assegnato un punto. In caso contrario, il giocatore aggiunge il numero chiamato alla sua memoria, rimuovendo un altro numero se la sua memoria è piena.

Entrambi i giocatori iniziano con memoria vuota. Entrambi i giocatori aggiungono sempre nuovi numeri mancati alla loro memoria, ma usano una strategia diversa nel decidere quale numero rimuovere: la strategia di Larry è quella di rimuovere il numero che non è stato chiamato più lungo. La strategia di Robin è quella di rimuovere il numero che è stato più a lungo nella memoria.

Esempio di gioco:

| Turno | Numero chiamato | Memoria di Larry | Punteggio di Larry | Memoria di Robin | Punteggio di Robin |
| ----- | --------------- | ----------------:| ------------------ | ---------------- | ------------------ |
| 1     | 1               |                1 | 0                  | 1                | 0                  |
| 2     | 2               |              1,2 | 0                  | 1,2              | 0                  |
| 3     | 4               |            1,2,4 | 0                  | 1,2,4            | 0                  |
| 4     | 6               |          1,2,4,6 | 0                  | 1,2,4,6          | 0                  |
| 5     | 1               |          1,2,4,6 | 1                  | 1,2,4,6          | 1                  |
| 6     | 8               |        1,2,4,6,8 | 1                  | 1,2,4,6,8        | 1                  |
| 7     | 10              |       1,4,6,8,10 | 1                  | 2,4,6,8,10       | 1                  |
| 8     | 2               |       1,2,6,8,10 | 1                  | 2,4,6,8,10       | 2                  |
| 9     | 4               |       1,2,4,8,10 | 1                  | 2,4,6,8,10       | 3                  |
| 10    | 1               |       1,2,4,8,10 | 2                  | 1,4,6,8,10       | 3                  |

Denotando il punteggio di Larry con $L$ e il punteggio di Robin con $R$, qual è il valore aspettato di $|L - R|$ dopo 50 turni? Dai il tuo risultato arrotondato a otto cifre decimali usando il formato x.xxxxxxxx .

# --hints--

`selectiveAmnesia()` dovrebbe restituire `1.76882294`.

```js
assert.strictEqual(selectiveAmnesia(), 1.76882294);
```

# --seed--

## --seed-contents--

```js
function selectiveAmnesia() {

  return true;
}

selectiveAmnesia();
```

# --solutions--

```js
// solution required
```
