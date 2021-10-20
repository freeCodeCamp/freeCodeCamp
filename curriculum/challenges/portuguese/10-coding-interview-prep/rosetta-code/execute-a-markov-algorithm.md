---
id: 59e09e6d412c5939baa02d16
title: Executar um algoritmo de Markov
challengeType: 5
forumTopicId: 302260
dashedName: execute-a-markov-algorithm
---

# --description--

Crie um interpretador para um [Algoritmo de Markov](https://en.wikipedia.org/wiki/Markov algorithm "wp: Markov algorithm").

As regras têm a seguinte sintaxe:

<pre>[ruleset] ::= (([comment] | [rule]) [newline]+)*
[comment] ::= # {[any character]}
[rule] ::= [pattern] [whitespace] -> [whitespace] [.] [replacement]
[whitespace] ::= ([tab] | [space]) [[whitespace]]
</pre>

Há uma regra por linha.

Se houver um `.` (ponto) presente antes de \[replacement], esta é uma regra de encerramento. Neste caso, o interpretador deve parar a execução.

Um conjunto de regras consiste em uma sequência de regras, com comentários opcionais.

Regras

Use os seguintes testes em entradas:

**Regra 1:**

<pre># Este arquivo de regras foi extraído da Wikipédia:
# <code>http://en.wikipedia.org/wiki/Markov_Algorithm</code>
A -> apple (maçã)
B -> bag (sacola)
S -> shop (loja)
T -> the (o/a)
the shop -> my brother (a loja -> meu irmão)
a nunca usado -> .regra de encerramento
</pre>

O texto de exemplo `I bought a B of As from T S.` deve gerar a saída `I bought a bag of apples from my brother.`

**Regra 2:**

Um teste da regra de encerramento

<pre># Levemente modificado a partir das regras da Wikipédia
A -> apple
B -> bag
S -> .shop
T -> the
the shop -> my brother
a nunca usado -> .regra de encerramento
</pre>

O texto de exemplo `I bought a B of As from T S.` deve gerar a saída `I bought a bag of apples from T shop.`

**Regra 3:**

Isto testa a ordem de substituição correta e pode capturar rotinas de substituição simples baseadas em regexp se caracteres especiais não forem escapados.

<pre># Regras de teste de sintaxe do formalismo de Backus-Naur
A -> apple (maçã)
WWWW -> with (com)
Bgage -> ->.*
B -> bag (sacola)
->.* -> money (dinheiro)
W -> WW
S -> .shop (.loja)
T -> the (o/a)
the shop -> my brother (a loja -> meu irmão)
a nunca usado -> .regra de encerramento
</pre>

O texto de exemplo `I bought a B of As W my Bgage from T S.` deve gerar `I bought a bag of apples with my money from T shop.`

**Regra 4:**

Esta regra testa a ordem correta de varredura das regras e pode capturar rotinas de substituição que fazem a varredura na ordem errada. Ela implementa um mecanismo de multiplicação unária geral. (Observe que a expressão de entrada deve ser colocada dentro dos sublinhados nesta implementação.)

<pre>### Mecanismo de multiplicação unária, para testar implementações do algoritmo de Markov
### Por Donal Fellows.
# Mecanismo de adição unária
_+1 -> _1+
1+1 -> 11+
# Passada para converter da divisão de multiplicação em simples
# adição
1! -> !1
,! -> !+
_! -> _
# Multiplicação unária pela duplicação do lado esquerdo, o lado direito de vezes
1*1 -> x,@y
1x -> xX
X, -> 1,1
X1 -> 1X
_x -> _X
,x -> ,X
y1 -> 1y
y_ -> _
# Próxima fase de aplicação
1@1 -> x,@y
1@_ -> @_
,@_ -> !_
++ -> +
# Limpeza de encerramento para a adição
_1 -> 1
1+_ -> 1
_+_ ->
</pre>

O texto de exemplo `_1111*11111_` deve gerar o resultado `11111111111111111111`

**Regra 5:**

Uma [Máquina de Turing](http://en.wikipedia.org/wiki/Turing_machine "link: http&#x3A;//en.wikipedia.org/wiki/Turing_machine") simples, implementando um [algoritmo do castor](http://en.wikipedia.org/wiki/Busy_beaver "link: http&#x3A;//en.wikipedia.org/wiki/Busy_beaver") de três estados.

A fita consiste em `0`s e `1`s, os estados são `A`, `B`, `C` e `H` (para `H`alt - parada), e a posição do cabeçote é indicada pela escrita da letra de estado antes do caractere onde o cabeçote está. Todas as partes da fita inicial que a máquina opera têm de ser fornecidas na entrada.

Além de demonstrar que o algoritmo de Markov está completo para Turing, essa regra também me fez pegar um bug na implementação de C ++, que não foi capturado pelas primeiras quatro regras.

<pre># Máquina de Turing: algoritmo do castor de três estados
#
# estado A, símbolo 0 => escreve 1, move para a direita, novo estado B
A0 -> 1B
# estado A, símbolo 1 => escreve 1, move para a esquerda, novo estado C
0A1 -> C01
1A1 -> C11
# estado B, símbolo 0 => escreve 1, move para a esquerda, novo estado A
0B0 -> A01
1B0 -> A11
# estado B, símbolo 1 => escreve 1, move para a direita, novo estado B
B1 -> 1B
# estado C, símbolo 0 => escreve 1, move para a esquerda, novo estado B
0C0 -> B01
1C0 -> B11
# estado C, símbolo 1 => escreve 1, move para a esquerda, para
0C1 -> H01
1C1 -> H11
</pre>

Este conjunto de regras deve transformar `000000A000000` em `00011H1111000`

# --hints--

`markov` deve ser uma função.

```js
assert(typeof markov === 'function');
```

`markov(["A -> apple","B -> bag","S -> shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")` deve retornar "I bought a bag of apples from my brother.".

```js
assert.deepEqual(markov(rules[0], tests[0]), outputs[0]);
```

`markov(["A -> apple","B -> bag","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")` deve retornar "I bought a bag of apples from T shop.".

```js
assert.deepEqual(markov(rules[1], tests[1]), outputs[1]);
```

`markov(["A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag","->.* -> money","W -> WW","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As W my Bgage from T S.")` deve retornar "I bought a bag of apples with my money from T shop.".

```js
assert.deepEqual(markov(rules[2], tests[2]), outputs[2]);
```

`markov(["_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX","X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y","1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "],"_1111*11111_")` deve retornar "11111111111111111111".

```js
assert.deepEqual(markov(rules[3], tests[3]), outputs[3]);
```

`markov(["A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11","B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"],"")` deve retornar "00011H1111000".

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
