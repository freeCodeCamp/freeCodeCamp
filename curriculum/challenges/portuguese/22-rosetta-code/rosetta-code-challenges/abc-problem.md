---
id: 594810f028c0303b75339acc
title: Problema do ABC
challengeType: 1
forumTopicId: 302220
dashedName: abc-problem
---

# --description--

Você recebe uma coleção de blocos ABC (por exemplo, blocos de alfabeto de infância). Há 20 blocos com duas letras em cada bloco. Um alfabeto completo é garantido entre todos os lados dos blocos. A coleção de amostra de blocos:

<pre>(B O)
(X K)
(D Q)
(C P)
(N A)
(G T)
(R E)
(T G)
(Q D)
(F S)
(J W)
(H U)
(V I)
(A N)
(O B)
(E R)
(F S)
(L Y)
(P C)
(Z M)
</pre>

# --instructions--

Implemente uma função que recebe uma string (palavra) e determina se a palavra pode ser escrita com a coleção de blocos fornecida.

Algumas regras para se ter em mente:

<ul>
  <li>Quando uma letra em um bloco é usada, esse bloco não pode ser usado novamente.</li>
  <li>A função não deve distinguir maiúsculas e minúsculas.</li>
</ul>

# --hints--

`canMakeWord` deve ser uma função.

```js
assert(typeof canMakeWord === 'function');
```

`canMakeWord` deve retornar um booleano.

```js
assert(typeof canMakeWord('hi') === 'boolean');
```

`canMakeWord("bark")` deve retornar true.

```js
assert(canMakeWord(words[0]));
```

`canMakeWord("BooK")` deve retornar false.

```js
assert(!canMakeWord(words[1]));
```

`canMakeWord("TReAT")` deve retornar true.

```js
assert(canMakeWord(words[2]));
```

`canMakeWord("COMMON")` deve retornar false.

```js
assert(!canMakeWord(words[3]));
```

`canMakeWord("squAD")` deve retornar true.

```js
assert(canMakeWord(words[4]));
```

`canMakeWord("conFUSE")` deve retornar true.

```js
assert(canMakeWord(words[5]));
```

# --seed--

## --after-user-code--

```js
const words = ['bark', 'BooK', 'TReAT', 'COMMON', 'squAD', 'conFUSE'];
```

## --seed-contents--

```js
function canMakeWord(word) {

}
```

# --solutions--

```js
function canMakeWord(word) {
  const characters = 'BO XK DQ CP NA GT RE TG QD FS JW HU VI AN OB ER FS LY PC ZM';
  const blocks = characters.split(' ').map(pair => pair.split(''));

  const letters = [...word.toUpperCase()];
  let length = letters.length;
  const copy = new Set(blocks);

  letters.forEach(letter => {
    for (let block of copy) {
      const index = block.indexOf(letter);

      if (index !== -1) {
        length--;
        copy.delete(block);
        break;
      }
    }
  });
  return !length;
}
```
