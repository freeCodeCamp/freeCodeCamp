---
id: 5a23c84252665b21eecc8038
title: Subleq
challengeType: 1
forumTopicId: 302328
dashedName: subleq
---

# --description--

Subleq è un esempio di un One-Instruction Set Computer (OISC).

Esso prende il nome dalla sua unica istruzione, che è **SU**btract e **B**ranch se **L**ess than or **EQ**ual to zero (sottrai e dirama se minore o uguale a zero).

Il tuo compito è quello di creare un interprete che emula una macchina del genere.

La memoria della macchina è costituita da una serie di numeri interi con segno. Qualsiasi dimensione ragionevole di parola va bene, ma la memoria deve essere in grado di contenere numeri negativi e positivi.

L'esecuzione inizia con il puntatore di istruzioni rivolto alla prima parola, che è l'indirizzo 0. Essa procede come segue:

<ol>
  <li>Sia A, B e C il valore memorizzato nelle tre parole consecutive in memoria a partire dal puntatore di istruzioni.</li>
  <li>Fai avanzare il puntatore di tre parole in modo da puntare all'indirizzo successivo a quello contenente C.</li>
  <li>Se A è -1, viene letto un carattere dallo standard input e il suo codice punto memorizzato nell'indirizzo indicato da B. C è inutilizzato.</li>
  <li>Se B è -1, allora il numero contenuto nell'indirizzo dato da A è interpretato come un punto di codice e viene fatto l'output del carattere corrispondente. C è di nuovo inutilizzato.</li>
  <li>Altrimenti, sia A che B sono trattati come gli indirizzi di luoghi di memoria. Il numero contenuto nell’indirizzo indicato da A viene sottratto dal numero all’indirizzo indicato da B (e il risultato memorizzato nell’indirizzo B). Se il risultato è zero o negativo, il valore C diventa il nuovo puntatore di istruzione.</li>
  <li>Se il puntatore di istruzioni diventa negativo, l'esecuzione si ferma.</li>
</ol>

Altri indirizzi negativi oltre a -1 possono essere trattati come equivalenti a -1, o generare un errore, come si ritiene opportuno.

La tua soluzione dovrebbe accettare un programma da eseguire sulla macchina, separatamente dall'input fornito al programma stesso.

Questo programma dovrebbe essere "linguaggio macchina" subleq grezzo - numeri decimali separati da spazi, senza nomi simbolici o altre estensioni a livello di assembly, da caricare in memoria a partire dall'indirizzo 0. Mostra l'output della tua soluzione quando alimentato con questo programma "Hello, world!". (Nota che l'esempio assume ASCII o un superset di esso, come uno dei set di caratteri Latin-N o Unicode. Puoi tradurlo in un altro set di caratteri se la tua implementazione è in un ambiente non compatibile con ASCII.)

<pre>15 17 -1 17 -1 -1 16 1 -1 16 3 -1 15 15 0 0 -1 72 101 108 108 111 44 32 119 111 114 108 100 33 10 0</pre>

Che corrisponde a qualcosa di simile in un ipotetico linguaggio assembler:

<pre>start:
    zero, message, -1
    message, -1, -1
    neg1, start+1, -1
    neg1, start+3, -1
    zero, zero, start
zero: 0
neg1: -1
message: "Hello, world!\n\0"
</pre>

# --instructions--

Scrivi una funzione che richiede un array di interi come parametro. Questo rappresenta gli elementi di memoria. La funzione deve interpretare la sequenza e restituire la stringa di output. Per questo compito, supponiamo che non ci sia uno standard input.

# --hints--

`Subleq` dovrebbe essere una funzione.

```js
assert(typeof Subleq == 'function');
```

`Subleq([15, 17, -1, 17, -1, -1, 16, 1, -1, 16, 3, -1, 15, 15, 0, 0, -1, 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33, 0])` dovrebbe restituire una stringa.

```js
assert(
  typeof Subleq([
    15,
    17,
    -1,
    17,
    -1,
    -1,
    16,
    1,
    -1,
    16,
    3,
    -1,
    15,
    15,
    0,
    0,
    -1,
    72,
    101,
    108,
    108,
    111,
    44,
    32,
    119,
    111,
    114,
    108,
    100,
    33,
    0
  ]) == 'string'
);
```

`Subleq([15, 17, -1, 17, -1, -1, 16, 1, -1, 16, 3, -1, 15, 15, 0, 0, -1, 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33, 0])` dovrebbe restituire `"Hello, world!"`.

```js
assert.equal(
  Subleq([
    15,
    17,
    -1,
    17,
    -1,
    -1,
    16,
    1,
    -1,
    16,
    3,
    -1,
    15,
    15,
    0,
    0,
    -1,
    72,
    101,
    108,
    108,
    111,
    44,
    32,
    119,
    111,
    114,
    108,
    100,
    33,
    0
  ]),
  'Hello, world!'
);
```

# --seed--

## --seed-contents--

```js
function Subleq(mem) {

}
```

# --solutions--

```js
function Subleq(mem) {
  var out = '';
  var instructionPointer = 0;
  do {
    var a = mem[instructionPointer];
    var b = mem[instructionPointer + 1];
    if (a === -1) {
    } else if (b === -1) {
      out += String.fromCharCode(mem[a]);
    } else {
      mem[b] -= mem[a];
      if (mem[b] < 1) {
        instructionPointer = mem[instructionPointer + 2];
        continue;
      }
    }
    instructionPointer += 3;
  } while (instructionPointer >= 0);

  return out;
}
```
