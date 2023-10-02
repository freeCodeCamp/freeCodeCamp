---
id: 5a23c84252665b21eecc7eb0
title: I antes de E, exceto depois de C
challengeType: 1
forumTopicId: 302288
dashedName: i-before-e-except-after-c
---

# --description--

**<a href="http://www.rosettacode.org/wiki/I_before_E_except_after_C" target="_blank" rel="noopener noreferrer nofollow">"I antes do E, exceto após o C"</a>** é uma regra geral para a ortografia no inglês. Quando não temos certeza se uma palavra é escrita com o dígrafo `ei` ou `ie`, a rima sugere que a ordem correta é `ie`, a menos que a letra anterior seja `c`, caso no qual ele deve ser `ei`.

Usando as palavras fornecidas, verifique se as duas subcláusulas da frase são plausíveis individualmente:

<ol>
  <li>
    <i>"I antes de E quando não for precedido por C".</i>
  </li>
  <li>
    <i>"E antes de I quando for precedido por C".</i>
  </li>
</ol>

Se ambas as subfrases forem plausíveis, então a frase original pode ser considerada plausível.

# --instructions--

Escreva uma função que aceite uma palavra e verifique se a palavra segue esta regra. A função deve retornar verdadeiro se a palavra seguir a regra e falso se não seguir.

# --hints--

`IBeforeExceptC` deve ser uma função.

```js
assert(typeof IBeforeExceptC == 'function');
```

`IBeforeExceptC("receive")` deve retornar um booleano.

```js
assert(typeof IBeforeExceptC('receive') == 'boolean');
```

`IBeforeExceptC("receive")` deve retornar `true`.

```js
assert.equal(IBeforeExceptC('receive'), true);
```

`IBeforeExceptC("science")` deve retornar `false`.

```js
assert.equal(IBeforeExceptC('science'), false);
```

`IBeforeExceptC("imperceivable")` deve retornar `true`.

```js
assert.equal(IBeforeExceptC('imperceivable'), true);
```

`IBeforeExceptC("inconcebível")` deve retornar `verdadeiro`.

```js
assert.equal(IBeforeExceptC('inconceivable'), true);
```

`IBeforeExceptC("insuficiente")` deve retornar `falso`.

```js
assert.equal(IBeforeExceptC('insufficient'), false);
```

`IBeforeExceptC("onisciente")` deve retornar `falso`.

```js
assert.equal(IBeforeExceptC('omniscient'), false);
```

# --seed--

## --seed-contents--

```js
function IBeforeExceptC(word) {

}
```

# --solutions--

```js
function IBeforeExceptC(word)
{
    if(word.indexOf("c")==-1 && word.indexOf("ie")!=-1)
        return true;
    else if(word.indexOf("cei")!=-1)
        return true;
    return false;
}
```
