---
id: 598eea87e5cf4b116c3ff81a
title: I fattori di un numero di Mersenne
challengeType: 1
forumTopicId: 302264
dashedName: factors-of-a-mersenne-number
---

# --description--

Un numero di Mersenne è un numero nella forma di <code>2<sup>P</sup>-1</code>.

Se `P` è primo, il numero di Mersenne può essere un primo di Mersenne. (Se `P` non è primo, anche il numero di Mersenne non è primo.)

Nella ricerca di numeri primari di Mersenne è vantaggioso eliminare gli esponenti trovando un piccolo fattore prima di iniziare un potenzialmente lungo <a href="https://rosettacode.org/wiki/Lucas-Lehmer test" target="_blank" rel="noopener noreferrer nofollow">test di Lucas-Lehmer</a>.

Ci sono algoritmi molto efficienti per determinare se un numero divide <code>2<sup>P</sup>-1</code> (o equivalentemente, se <code>2<sup>P</sup> mod (il numero) = 1</code>).

Alcuni linguaggi hanno già implementazioni integrate di questa operazione esponente-e-modulo (chiamata modPow o simile).

Ecco come puoi implementare questo modPow:

Ad esempio, calcoliamo <code>2<sup>23</sup> mod 47</code>.

Converti l'esponente 23 in binario, ottenendo 10111. A partire da <code><tt>square</tt> = 1</code>, fai ripetutamente il quadrato.

Rimuovi il bit superiore dell'esponente, e se è 1 moltiplica `square` per la base dell'esponenziazione (2), poi calcola <code><tt>square</tt> modulo 47</code>.

Usa il risultato del modulo dall'ultimo passo come valore iniziale dello `square` nella fase successiva:

<pre>Remove   Optional
square        top bit  multiply by 2  mod 47
------------  -------  -------------  ------
1*1 = 1       1  0111  1*2 = 2           2
2*2 = 4       0   111     no             4
4*4 = 16      1    11  16*2 = 32        32
32*32 = 1024  1     1  1024*2 = 2048    27
27*27 = 729   1        729*2 = 1458      1
</pre>

Dal momento che <code>2<sup>23</sup> mod 47 = 1</code>, 47 è un fattore di <code>2<sup>P</sup>-1</code>.

(Per vedere questo, sottrai 1 da entrambi i lati: <code>2<sup>23</sup>-1 = 0 mod 47</code>.)

Dal momento che abbiamo dimostrato che 47 è un fattore, <code>2<sup>23</sup>-1</code> non è primo.

Ulteriori proprietà dei numeri di Mersenne ci permettono di affinare il processo ancora di più.

Qualsiasi fattore `q` di <code>2<sup>P</sup>-1</code> deve essere modulo `2kP+1`, essendo `k` un numero intero positivo o uguale a zero. Inoltre, `q` deve essere `1` o `7 mod 8`.

Infine ogni potenziale fattore `q` deve essere <a href="https://rosettacode.org/wiki/Primality_by_trial_division" target="_blank" rel="noopener noreferrer nofollow">un numero primo</a>.

Come in altri algoritmi di divisione di prova, l'algoritmo si ferma quando `2kP+1 > sqrt(N)`. Questi test funzionano principalmente solo su numeri Mersenne dove `P` è primo. Ad esempio, <code>M<sub>4</sub>=15</code> non produce fattori che utilizzano queste tecniche, ma fattori in 3 e 5, nessuno dei quali nella forma `2kP+1`.

# --instructions--

Utilizzando il metodo sopra descritto trovare un fattore di <code>2<sup>p</sup>-1</code>.

# --hints--

`check_mersenne` dovrebbe essere una funzione.

```js
assert(typeof check_mersenne === 'function');
```

`check_mersenne(3)` dovrebbe restituire una stringa.

```js
assert(typeof check_mersenne(3) == 'string');
```

`check_mersenne(3)` dovrebbe restituire la stringa `M3 = 2^3-1 is prime`.

```js
assert.equal(check_mersenne(3), 'M3 = 2^3-1 is prime');
```

`check_mersenne(23)` dovrebbe restituire la stringa `M23 = 2^23-1 is composite with factor 47`.

```js
assert.equal(check_mersenne(23), 'M23 = 2^23-1 is composite with factor 47');
```

`check_mersenne(929)` dovrebbe restituire la stringa `M929 = 2^929-1 is composite with factor 13007`.

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
