---
id: 59e09e6d412c5939baa02d16
title: Eseguire un algoritmo di Markov
challengeType: 5
forumTopicId: 302260
dashedName: execute-a-markov-algorithm
---

# --description--

Crea un interprete per un [Algoritmo di Markov](https://en.wikipedia.org/wiki/Markov algorithm "wp: Markov algorithm").

Le regole hanno questa sintassi:

<pre>[ruleset] ::= (([comment] | [rule]) [newline]+)*
[comment] ::= # {[any character]}
[rule] ::= [pattern] [whitespace] -> [whitespace] [.] [replacement]
[whitespace] ::= ([tab] | [space]) [[whitespace]]
</pre>

C'è una regola per riga.

Se c'è un `.` (punto) prima del \[replacement], allora questa è una regola di termine, in tal caso l'interprete deve fermare l'esecuzione.

Un set di regole consiste in una sequenza di regole, con commenti opzionali.

Set di regole

Usa i seguenti test sulle voci:

**Set di regole 1:**

<pre># Questo file di regole è estratto da wikipedia
# <code>http://en.wikipedia.org/wiki/Markov_Algorithm</code>
A -> apple
B -> bag
S -> shop
T -> the
the shop -> my brother
a never used -> .terminating rule
</pre>

Il testo di esempio `I bought a B of As from T S.` dovrebbe generare l'output di `I bought a bag of apples from my brother.`

**Set di regole 2:**

Un test della regola di termine

<pre># Modificato leggermente dalle regole prese da Wikipedia
A -> apple
B -> bag
S -> .shop
T -> the
the shop -> my brother
a never used -> .terminating rule
</pre>

Il test di esempio `I bought a B of As from T S.` dovrebbe generare `I bought a bag of apples from T shop.`

**Set di regole 3:**

Questo verifica il corretto ordine di sostituzione e può contenere semplici routine di sostituzione basate su espressioni regolari se non viene fatto l'escape dei caratteri speciali regexp.

<pre># BNF Syntax testing rules
A -> apple
WWWW -> with
Bgage -> ->.*
B -> bag
->.* -> money
W -> WW
S -> .shop
T -> the
the shop -> my brother
a never used -> .terminating rule
</pre>

Il testo di esempio `I bought a B of As W my Bgage from T S.` dovrebbe generare `I bought a bag of apples with my money from T shop.`

**Set di regole 4:**

Questo verifica il corretto ordine di scansione delle regole, e può contenere routine di sostituzione che scansionano in ordine sbagliato. Implementa un generico motore di moltiplicazione unario. (Si noti che l'espressione di input deve essere inserita all'interno di underscore in questa implementazione.)

<pre>### Macchina di moltiplicazione unitaria, per testare l'implementazione dell'algoritmo di Markov
### By Donal Fellows.
# Macchina di addizione unitaria
_+1 -> _1+
1+1 -> 11+
# Passaggio per convertire dalla separazione della moltiplicazione
# ad ordinaria addizione
1! -> !1
,! -> !+
_! -> _
# Moltiplicazione unaria, duplicando il lato sinistro tante volte quante dice il lato destro
1*1 -> x,@y
1x -> xX
X, -> 1,1
X1 -> 1X
_x -> _X
,x -> ,X
y1 -> 1y
y_ -> _
# Prossima fase di apllicazione
1@1 -> x,@y
1@_ -> @_
,@_ -> !_
++ -> +
# Pulizia dei terminali per l'addizione
_1 -> 1
1+_ -> 1
_+_ ->
</pre>

Il testo di esempio `_1111*11111_` dovrebbe generare l'output `11111111111111111111`

**Set di regole 5:**

Una semplice [macchina di Turing](http://en.wikipedia.org/wiki/Turing_machine "link: http&#x3A;//en.wikipedia.org/wiki/Turing_machine"), che implementa un [alacre castoro](https://it.wikipedia.org/wiki/Alacre_castoro "link: http&#x3A;//it.wikipedia.org/wiki/Alacre_castoro") a tre stati.

Il nastro è costituito da `0` e `1`, gli stati sono `A`, `B`, `C` e `H` (per `H`alt), e la posizione della testa è indicata scrivendo la lettera di stato prima del carattere in cui si trova la testa. Tutte le parti del nastro iniziale su cui la macchina opera devono essere fornite in ingresso.

Oltre a dimostrare che l'algoritmo di Markov è Turing-completo, mi ha anche fatto catturare un bug nell'implementazione C++ che non era stato catturato dalle prime quattro regole.

<pre># Macchina di Turing: castoro alacre
#
# stato A, simbolo 0 => scrive 1, si sposta a destra, nuovo stato B
A0 -> 1B
# stato A, simbolo 1 => scrive 1, si sposta a sinistra, nuovo stato C
0A1 -> C01
1A1 -> C11
# state B, simbolo 0 => scrive 1, si sposta a sinistra, nuovo stato A
0B0 -> A01
1B0 -> A11
# stato B, simbolo 1 => scrive 1, si sposta a destra, nuovo stato B
B1 -> 1B
# stato C, simbolo 0 => scrive 1, si sposta a sinistra, nuovo stato B
0C0 -> B01
1C0 -> B11
# stato C, simbolo 1 => scrive 1, si sposta a sinistra, si ferma
0C1 -> H01
1C1 -> H11
</pre>

Questa regola dovrebbe trasformare `000000A000000` in `00011H1111000`

# --hints--

`markov` dovrebbe essere una funzione.

```js
assert(typeof markov === 'function');
```

`markov(["A -> apple","B -> bag","S -> shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")` dovrebbe restituire "I bought a bag of apples from my brother.".

```js
assert.deepEqual(markov(rules[0], tests[0]), outputs[0]);
```

`markov(["A -> apple","B -> bag","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")` dovrebbe restituire "I bought a bag of apples from T shop.".

```js
assert.deepEqual(markov(rules[1], tests[1]), outputs[1]);
```

`markov(["A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag","->.* -> money","W -> WW","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As W my Bgage from T S.")` dovrebbe restituire "I bought a bag of apples with my money from T shop.".

```js
assert.deepEqual(markov(rules[2], tests[2]), outputs[2]);
```

`markov(["_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX","X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y","1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "],"_1111*11111_")` dovrebbe restituire "11111111111111111111".

```js
assert.deepEqual(markov(rules[3], tests[3]), outputs[3]);
```

`markov(["A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11","B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"],"")` dovrebbe restituire "00011H1111000".

```js
assert.deepEqual(markov(rules[4], tests[4]), outputs[4]);
```

# --seed--

## --after-user-code--

```js

let rules=[["A -> apple","B -> bag","S -> shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
            ["A -> apple","B -> bag","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
            ["A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag","->.* -> money","W -> WW","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
            ["_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX","X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y","1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "],
            ["A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11","B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"]];
let tests=["I bought a B of As from T S.",
            "I bought a B of As from T S.",
            "I bought a B of As W my Bgage from T S.",
            "_1111*11111_",
            "000000A000000"];
let outputs=["I bought a bag of apples from my brother.",
            "I bought a bag of apples from T shop.",
            "I bought a bag of apples with my money from T shop.",
            "11111111111111111111",
            "00011H1111000"]

```


## --seed-contents--

```js
function markov(rules,test) {

}
```

# --solutions--

```js
function markov(rules,test) {
    let pattern = new RegExp("^([^#]*?)\\s+->\\s+(\\.?)(.*)");
    let origTest = test;

    let captures = [];

    rules.forEach(function(rule){
        let m = pattern.exec(rule);
        for (let j = 0; j < m.length; j++)
            m[j] = m[j + 1];
        captures.push(m);
    });

    test = origTest;
    let copy = test;
    for (let j = 0; j < captures.length; j++) {
        let c = captures[j];
        test = test.replace(c[0], c[2]);
        if (c[1]==".")
            break;
        if (test!=copy) {
            j = -1;
            copy = test;
        }
    }
    return test;
}
```
