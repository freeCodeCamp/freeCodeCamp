---
id: 598eea87e5cf4b116c3ff81a
title: Faktoren einer Mersenne-Zahl
challengeType: 1
forumTopicId: 302264
dashedName: factors-of-a-mersenne-number
---

# --description--

A Mersenne number is a number in the form of <code>2<sup>P</sup>-1</code>.

Wenn `P` eine Primzahl ist, kann die Mersenne-Zahl eine Mersenne-Primzahl sein. (Wenn `P` nicht prim ist, ist die Mersenne-Zahl auch nicht prim).

Bei der Suche nach Mersenne-Primzahlen ist es vorteilhaft, Exponenten zu eliminieren, indem man einen kleinen Faktor findet, bevor man einen möglicherweise langwierigen <a href="https://rosettacode.org/wiki/Lucas-Lehmer test" target="_blank" rel="noopener noreferrer nofollow">Lucas-Lehmer-Test</a> startet.

Es gibt sehr effiziente Algorithmen, um festzustellen, ob eine Zahl dividiert <code>2<sup>P</sup>-1</code> (oder gleichwertig, wenn <code>2<sup>P</sup> mod (die Zahl) = 1</code>).

Einige Sprachen verfügen bereits über integrierte Implementierungen dieser Exponent-und-Mod-Operation (modPow oder ähnlich genannt).

Im Folgenden wird beschrieben, wie du dieses ModPow selbst implementieren kannst:

Berechnen wir zum Beispiel <code>2<sup>23</sup> mod 47</code>.

Wandelt man den Exponenten 23 in Binärzahlen um, erhält man 10111. Beginnend mit <code><tt>square</tt> = 1</code>, wiederholt quadriert.

Entferne das oberste Bit des Exponenten, und wenn es 1 ist, multipliziere `square` mit der Basis der Potenzierung (2), dann berechnest du <code><tt>square</tt> modulo 47</code>.

Verwende das Ergebnis des Modulos aus dem letzten Schritt als Anfangswert von `square` im nächsten Schritt:

<pre>Remove   Optional
square        top bit  multiply by 2  mod 47
------------  -------  -------------  ------
1*1 = 1       1  0111  1*2 = 2           2
2*2 = 4       0   111     no             4
4*4 = 16      1    11  16*2 = 32        32
32*32 = 1024  1     1  1024*2 = 2048    27
27*27 = 729   1        729*2 = 1458      1
</pre>

Da <code>2<sup>23</sup> mod 47 = 1</code>, ist 47 ein Faktor von <code>2<sup>P</sup>-1</code>.

(Um dies zu sehen, ziehe 1 von beiden Seiten ab: <code>2<sup>23</sup>-1 = 0 mod 47</code>.)

Da wir gezeigt haben, dass 47 ein Faktor ist, ist <code>2<sup>23</sup>-1</code> keine Primzahl.

Weitere Eigenschaften der Mersenne-Zahlen erlauben es uns, das Verfahren noch weiter zu verfeinern.

Jeder Faktor `q` von <code>2<sup>P</sup>-1</code> muss die Form `2kP+1` haben, wobei `k` einer positiven Ganzzahl oder Null entspricht. Desweiteren muss `q` `1` oder `7 mod 8` sein.

Schließlich muss jeder potenzielle Faktor `q` <a href="https://rosettacode.org/wiki/Primality_by_trial_division" target="_blank" rel="noopener noreferrer nofollow">Primzahl</a> sein.

Wie bei anderen Versuchsdivisionsalgorithmen hält der Algorithmus an, wenn `2kP+1 > sqrt(N)`. Diese Tests funktionieren in erster Linie nur bei Mersenne-Zahlen, bei denen `P` eine Primzahl ist. Zum Beispiel liefert <code>M<sub>4</sub>=15</code> keine Faktoren, die diese Techniken anwenden, sondern die Faktoren 3 und 5, die beide nicht mit `2kP+1` zusammenpassen.

# --instructions--

Finde mit der obigen Methode einen Faktor von <code>2<sup>p</sup>-1</code>.

# --hints--

`check_mersenne` sollte eine Funktion sein.

```js
assert(typeof check_mersenne === 'function');
```

`check_mersenne(3)` sollte einen String zurückgeben.

```js
assert(typeof check_mersenne(3) == 'string');
```

`check_mersenne(3)` sollte den String `M3 = 2^3-1 is prime` zurückgeben.

```js
assert.equal(check_mersenne(3), 'M3 = 2^3-1 is prime');
```

`check_mersenne(23)` sollte den String `M23 = 2^23-1 is composite with factor 47` zurückgeben.

```js
assert.equal(check_mersenne(23), 'M23 = 2^23-1 is composite with factor 47');
```

`check_mersenne(929)` sollte den String `M929 = 2^929-1 is composite with factor 13007` zurückgeben.

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
