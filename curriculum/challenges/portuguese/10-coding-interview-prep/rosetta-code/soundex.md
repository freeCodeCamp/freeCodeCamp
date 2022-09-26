---
id: 5a23c84252665b21eecc8017
title: Soundex
challengeType: 1
forumTopicId: 302320
dashedName: soundex
---

# --description--

O **Algoritmo Soundex** lida com as *intenções* das palavras. Ele cria uma representação para palavras que soam semelhantes.

Ele é usado para pesquisar <em>nomes</em> e <em>endereços</em>. Isso significa que a pessoa que preencheu o <em>nome</em> pode se concentrar em como ele soa em vez de corrigir a ortografia dos <em>nomes</em>.

Por exemplo:

Se você está ouvindo o nome `Quenci` pela primeira vez e o escreveu errado, receberá o código **Soundex** `Q520`.

Quando você soletrar o nome `Quincy` corretamente na próxima vez, ainda receberá o mesmo código `Q520`, o que significa que você pode vincular múltiplas pronúncias do nome para a mesma <em>pessoa</em> sem a necessidade de adicionar cada ortografia.

Aqui estão as regras: 

<ul>
  <li>Se uma vogal (A, E, I, O, U) separa duas consoantes que tenham o mesmo código soundex, a consoante à direita da vogal é codificada. Tymczak é codificado como T-522 (T, 5 para M, 2 para o C, Z ignorado – veja a regra "Lado a lado" acima –, 2 para o K). Uma vez que a vogal "A" separa Z e K, o K está codificado.</li>
  <li>Se "H" ou "W" separa duas consoantes que tenham o mesmo código soundex, a consoante à direita da vogal não é codificada. Exemplo: Ashcraft está codificado A-261 (A, 2 para o S, C ignorado, 6 para o R, 1 para o F). Ele não é codificado A-226.</li>
</ul>

# --instructions--

Escreva uma função que receba uma string como parâmetro e retorne a string codificada.

# --hints--

`soundex` deve ser uma função.

```js
assert(typeof soundex == 'function');
```

`soundex("Soundex")` deve retornar uma string.

```js
assert(typeof soundex('Soundex') == 'string');
```

`soundex("Soundex")` deve retornar `"S532"`.

```js
assert.equal(soundex('Soundex'), 'S532');
```

`soundex("Example")` deve retornar `"E251"`.

```js
assert.equal(soundex('Example'), 'E251');
```

`soundex("Sownteks")` deve retornar `"S532"`.

```js
assert.equal(soundex('Sownteks'), 'S532');
```

`soundex("Ekzampul")` deve retornar `"E251"`.

```js
assert.equal(soundex('Ekzampul'), 'E251');
```

`soundex("Euler")` deve retornar `"E460"`.

```js
assert.equal(soundex('Euler'), 'E460');
```

`soundex("Gauss")` deve retornar `"G200"`.

```js
assert.equal(soundex('Gauss'), 'G200');
```

`soundex("Hilbert")` deve retornar `"H416"`.

```js
assert.equal(soundex('Hilbert'), 'H416');
```

`soundex("Knuth")` deve retornar `"K530"`.

```js
assert.equal(soundex('Knuth'), 'K530');
```

`soundex("Lloyd")` deve retornar `"L300"`.

```js
assert.equal(soundex('Lloyd'), 'L300');
```

`soundex("Lukasiewicz")` deve retornar `"L222"`.

```js
assert.equal(soundex('Lukasiewicz'), 'L222');
```

# --seed--

## --seed-contents--

```js
function soundex(s) {

}
```

# --solutions--

```js
function soundex(s) {
  var a = s.toLowerCase().split('');
  var f = a.shift(),
    r = '',
    codes = {
      a: '',
      e: '',
      i: '',
      o: '',
      u: '',
      b: 1,
      f: 1,
      p: 1,
      v: 1,
      c: 2,
      g: 2,
      j: 2,
      k: 2,
      q: 2,
      s: 2,
      x: 2,
      z: 2,
      d: 3,
      t: 3,
      l: 4,
      m: 5,
      n: 5,
      r: 6
    };
  r =
    f +
    a
      .map(function(v, i, a) {
        return codes[v];
      })
      .filter(function(v, i, a) {
        return i === 0 ? v !== codes[f] : v !== a[i - 1];
      })
      .join('');

  return (r + '000').slice(0, 4).toUpperCase();
}
```
