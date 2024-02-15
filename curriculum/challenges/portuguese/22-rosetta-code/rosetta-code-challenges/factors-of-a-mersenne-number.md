---
id: 598eea87e5cf4b116c3ff81a
title: Fatores de um número de Mersenne
challengeType: 1
forumTopicId: 302264
dashedName: factors-of-a-mersenne-number
---

# --description--

Um número de Mersenne é um número na forma de <code>2<sup>P</sup>-1</code>.

Se `P` for primo, o número de Mersenne pode ser primo de Mersenne. (Se `P` não for primo, o número de Mersenne também não será primo.)

Na busca por números primos de Mersenne, é vantajoso eliminar expoentes, encontrando um pequeno fator antes de iniciar um <a href="https://rosettacode.org/wiki/Lucas-Lehmer test" target="_blank" rel="noopener noreferrer nofollow">teste de Lucas-Lehmer</a>, potencialmente extenso.

Existem algoritmos muito eficientes para determinar se um número divide <code>2<sup>P</sup>-1</code> (ou, de modo equivalente, se <code>2<sup>P</sup> mod (o número) = 1</code>).

Algumas linguagens já possuem implementações integradas desta operação exponente-e-mod (chamada modPow ou algo similar).

A seguir, vemos como você mesmo pode implementar este modPow:

Por exemplo, vamos calcular <code>2<sup>23</sup> mod 47</code>.

Converta o expoente 23 em binário, você obtém 10111. Começando com <code><tt>square</tt> = 1</code>, eleve-o repetidamente ao quadrado.

Remova a parte superior do expoente e, se for 1, multiplique `square` pela base da exponenciação (2). Então, calcule <code><tt>square</tt> modulo 47</code>.

Use o resultado do módulo da última etapa como o valor inicial de `square` na próxima etapa:

<pre>Remova   Opcional
square        pte sup  multiplique 2  mod 47
------------  -------  -------------  ------
1*1 = 1       1  0111  1*2 = 2           2
2*2 = 4       0   111     no             4
4*4 = 16      1    11  16*2 = 32        32
32*32 = 1024  1     1  1024*2 = 2048    27
27*27 = 729   1        729*2 = 1458      1
</pre>

Como <code>2<sup>23</sup> mod 47 = 1</code>, 47 é um fator de <code>2<sup>P</sup>-1</code>.

(Para ver isso, subtraia 1 de ambos os lados: <code>2<sup>23</sup>-1 = 0 mod 47</code>.)

Como mostramos que 47 é um fator, <code>2<sup>23</sup>-1</code> não é primo.

Outras propriedades dos números de Mersenne nos permitem refinar ainda mais o processo.

Qualquer fator `q` de <code>2<sup>P</sup>-1</code> deve ser no formato `2kP+1`, `k`, sendo um inteiro positivo ou zero. Além disso, `q` deve ser `1` ou `7 mod 8`.

Por fim, qualquer fator potencial `q` deve ser <a href="https://rosettacode.org/wiki/Primality_by_trial_division" target="_blank" rel="noopener noreferrer nofollow">primo</a>.

Como em outros algoritmos de divisão de teste, o algoritmo termina quando `2kP+1 > sqrt(N)`. Estes testes só funcionam em números de Mersenne, onde o `P` é primo. Por exemplo, <code>M<sub>4</sub>=15</code> não gera fatores usando essas técnicas, mas fator em 3 e 5, nenhum dos quais se ajusta a `2kP+1`.

# --instructions--

Usando o método acima, encontre um fator de <code>2<sup>p</sup>-1</code>.

# --hints--

`check_mersenne` deve ser uma função.

```js
assert(typeof check_mersenne === 'function');
```

`check_mersenne(3)` deve retornar uma string.

```js
assert(typeof check_mersenne(3) == 'string');
```

`check_mersenne(3)` deve retornar a string `M3 = 2^3-1 is prime`.

```js
assert.equal(check_mersenne(3), 'M3 = 2^3-1 is prime');
```

`check_mersenne(23)` deve retornar a string `M23 = 2^23-1 is composite with factor 47`.

```js
assert.equal(check_mersenne(23), 'M23 = 2^23-1 is composite with factor 47');
```

`check_mersenne(929)` deve retornar a string `M929 = 2^929-1 is composite with factor 13007`.

```js
assert.equal(
  check_mersenne(929),
  'M929 = 2^929-1 is composite with factor 13007'
);
```

# --seed--

## --seed-contents--

```js
function check_mersenne(p) {

}
```

# --solutions--

```js
function check_mersenne(p){
    function isPrime(value){
      for (let i=2; i < value; i++){
        if (value % i == 0){
          return false;
        }
        if (value % i != 0){
          return true;
         }
      }
    }

    function trial_factor(base, exp, mod){
      let square, bits;
      square = 1;
      bits = exp.toString(2).split('');
      for (let i=0,ln=bits.length; i<ln; i++){
        square = Math.pow(square, 2) * (bits[i] == 1 ? base : 1) % mod;
      }
      return (square == 1);
    }

    function mersenne_factor(p){
      let limit, k, q;
      limit = Math.sqrt(Math.pow(2,p) - 1);
      k = 1;
      while ((2*k*p - 1) < limit){
        q = 2*k*p + 1;
        if (isPrime(q) && (q % 8 == 1 || q % 8 == 7) && trial_factor(2,p,q)){
          return q; // q is a factor of 2**p-1
        }
        k++;
      }
      return null;
    }
  let f, result;
  result="M"+p+" = 2^"+p+"-1 is ";
  f = mersenne_factor(p);
  result+=f == null ? "prime" : "composite with factor "+f;
  return result;
}
```
