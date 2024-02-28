---
id: 5a23c84252665b21eecc8038
title: Subleq
challengeType: 1
forumTopicId: 302328
dashedName: subleq
---

# --description--

Subleq é um exemplo de máquina de uma instrução (OISC).

Seu nome vem de sua única instrução, que é **SU**btract and **B**ranch if **L**ess than or **EQ**ual (subtraia e ramifique se for menor ou igual) a zero.

Sua tarefa é criar um interpretador que emule esse tipo de máquina.

A memória da máquina consiste em um array de números inteiros com sinal. Qualquer tamanho razoável de palavra é bom, mas a memória deve ser capaz de manter números negativos e positivos.

A execução começa com o ponteiro de instrução mirando a primeira palavra, que é o endereço 0. Ela prossegue da seguinte forma:

<ol>
  <li>Permita que A, B e C sejam valores armazenado nas três palavras consecutivas na memória, começando no ponteiro de instrução.</li>
  <li>Avance o ponteiro de instrução 3 palavras para apontar para o endereço após o que contém C.</li>
  <li>Se A é -1, então um caractere é lido a partir da entrada padrão e seu ponto de código armazenado no endereço fornecido por B. C não é usado.</li>
  <li>Se B é -1, então o número contido no endereço dado por A é interpretado como um ponto de código e a saída de caractere correspondente. C, mais uma vez, não é utilizado.</li>
  <li>Caso contrário, tanto A quanto B são tratados como endereços de locais de memória. O número contido no endereço fornecido por A é subtraído do número do endereço fornecido por B (e o resultado é armazenado de volta no endereço B). Se o resultado for zero ou negativo, o valor C se torna o novo ponteiro da instrução.</li>
  <li>Se o ponteiro da instrução se tornar negativo, a execução para.</li>
</ol>

Outros endereços negativos além de -1 podem ser tratados como equivalentes a -1 ou gerar um erro, como você achar adequado.

A solução deve aceitar um programa que será executado na máquina, separadamente da entrada alimentado no programa em si.

Este programa deve estar em "código de máquina" subleq puro - números decimais separados por espaços em branco, sem nomes simbólicos ou outras extensões de nível de assembly, a serem carregadas na memória começando no endereço 0. Mostre o resultado de sua solução quando receber o programa "Olá, mundo!". (Observe que o exemplo assume ASCII ou um superconjunto dele, como qualquer um dos conjuntos de caracteres Latin-N ou Unicode. Você pode traduzi-lo para outro conjunto de caracteres se a implementação estiver em um ambiente não compatível com ASCII.)

<pre>15 17 -1 17 -1 -1 16 1 -1 16 3 -1 15 15 0 0 -1 72 101 108 108 111 44 32 119 111 114 108 100 33 10 0</pre>

O que corresponde a algo assim em uma linguagem hipotética de assembler:

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

Escreva uma função que receba um array de números inteiros como parâmetro. Ele representa os elementos da memória. A função deve interpretar a sequência e retornar a string de saída. Para esta tarefa, considere que não há uma entrada padrão.

# --hints--

`Subleq` deve ser uma função.

```js
assert(typeof Subleq == 'function');
```

`Subleq([15, 17, -1, 17, -1, -1, 16, 1, -1, 16, 3, -1, 15, 15, 0, 0, -1, 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33, 0])` deve retornar uma string.

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

`Subleq([15, 17, -1, 17, -1, -1, 16, 1, -1, 16, 3, -1, 15, 15, 0, 0, -1, 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33, 0])` deve retornar `"Hello, world!"`.

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
