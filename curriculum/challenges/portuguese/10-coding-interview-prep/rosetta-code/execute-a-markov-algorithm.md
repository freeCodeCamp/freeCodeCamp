---
id: 59e09e6d412c5939baa02d16
title: Executar um algoritmo de Markov
challengeType: 1
forumTopicId: 302260
dashedName: execute-a-markov-algorithm
---

# --description--

Os conceitos de Markov são utilizados na aprendizagem de máquina, devido à abordagem simples na manipulação de dados. Com um número definido de regras (`rules`), você pode manipular dados (`data`) para criar uma saída (`output`) desejada.

Adicionamos em segundo plano:

As regras (`rules`) no formato de array aninhado e os dados (`data`) também na forma de um array.E as saídas (`outputs`) desejadas.

As regras (`rules`):

```js
let rules=[
[
"A -> apple","B -> bag","S -> shop","T -> the",
"the shop -> my brother","a never used -> .terminating rule"
],

[
 "A -> apple","B -> bag","S -> .shop","T -> the",
 "the shop -> my brother","a never used -> .terminating rule"
],

[
 "A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag",
 "->.* -> money","W -> WW","S -> .shop","T -> the",
 "the shop -> my brother","a never used -> .terminating rule"
],

[
 "_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX",
 "X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y",
 "1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "
],

[
"A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11",
"B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"
]

];
```

Os dados (`data`):

```js
let data=[
        "I bought a B of As from T S.",
        "I bought a B of As from T S.",
        "I bought a B of As W my Bgage from T S.",
        "_1111*11111_",
        "000000A000000"
        ];
```

As saídas (`outputs`):

```js
let outputs=[
    "I bought a bag of apples from my brother.",
    "I bought a bag of apples from T shop.",
    "I bought a bag of apples with my money from T shop.",
    "11111111111111111111",
    "00011H1111000"
    ]
```

Usando o algoritmo de Markov, altere os dados (`data`) para que as saídas (`outputs`) desejadas usem as regras (`rules`) fornecidas para você.

# --hints--

`markov` deve ser uma função.

```js
assert(typeof markov === 'function');
```

`markov(["A -> apple","B -> bag","S -> shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")` deve retornar a string `I bought a bag of apples from my brother.`.

```js
assert.deepEqual(markov(rules[0], datas[0]), outputs[0]);
```

`markov(["A -> apple","B -> bag","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")` deve retornar a string `I bought a bag of apples from T shop.`.

```js
assert.deepEqual(markov(rules[1], datas[1]), outputs[1]);
```

`markov(["A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag","->.* -> money","W -> WW","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As W my Bgage from T S.")` deve retornar a string `I bought a bag of apples with my money from T shop.`.

```js
assert.deepEqual(markov(rules[2], datas[2]), outputs[2]);
```

`markov(["_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX","X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y","1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "],"_1111*11111_")` deve retornar a string `11111111111111111111`.

```js
assert.deepEqual(markov(rules[3], datas[3]), outputs[3]);
```

`markov(["A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11","B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"],"")` deve retornar a string `00011H1111000`.

```js
assert.deepEqual(markov(rules[4], datas[4]), outputs[4]);
```

# --seed--

## --after-user-code--

```js

let rules=[["A -> apple","B -> bag","S -> shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
            ["A -> apple","B -> bag","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
            ["A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag","->.* -> money","W -> WW","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
            ["_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX","X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y","1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "],
            ["A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11","B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"]];
let datas=["I bought a B of As from T S.",
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
function markov(rules,data) {

}
```

# --solutions--

```js
function markov(rules,data) {
    let pattern = new RegExp("^([^#]*?)\\s+->\\s+(\\.?)(.*)");
    let origData = data;

    let captures = [];

    rules.forEach(function(rule){
        let m = pattern.exec(rule);
        for (let j = 0; j < m.length; j++)
            m[j] = m[j + 1];
        captures.push(m);
    });

    data = origData;
    let copy = data;
    for (let j = 0; j < captures.length; j++) {
        let c = captures[j];
        data = data.replace(c[0], c[2]);
        if (c[1]==".")
            break;
        if (data!=copy) {
            j = -1;
            copy = data;
        }
    }
    return data;
}
```
