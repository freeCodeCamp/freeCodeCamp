---
id: 5a23c84252665b21eecc7e80
title: Codice Gray
challengeType: 1
forumTopicId: 302276
dashedName: gray-code
---

# --description--

Il codice grigio è una forma di codifica binaria dove la transizione tra numeri consecutivi differisce di un solo bit.

Si tratta di una codifica utile per ridurre il rischio di perdita di dati hardware con valori che cambiano rapidamente e/o si collegano a un hardware più lento come input.

È anche utile generare gli input per le mappe di Karnaugh in ordine da sinistra a destra o da sopra a sotto.

# --instructions--

Crea una funzione per codificare e decodificare un numero in codice Gray. La funzione dovrebbe avere 2 parametri.

Il primo sarà un booleano. La funzione dovrebbe codificare per true e decodificare per false. Il secondo paramentro sarebbe il numero da codificare/decodificare.

Mostra la rappresentazione binaria normale, la rappresentazione in codice Gray, e i valori in codice Gray decodificati per tutti i numeri binari di dimensione 5-bit (0-31 inclusivo, gli zero davanti al numero non sono necessari).

Ci sono molti possibili codici Gray. Il seguente codifica quello che è chiamato "codice Gray riflesso binario".

Codificare (MSB è bit 0, b è binario, g è codice Gray):

<pre>if b[i-1] = 1
  g[i] = not b[i]
else
  g[i] = b[i]
</pre>

Oppure:

<pre>g = b xor (b logicamente spostato a destra 1 volta)
</pre>

Decodificare (MSB è bit 0, b è binario, g è codice Gray):

<pre>b[0] = g[0]<br>
per altri bit:
b[i] = g[i] xor b[i-1]
</pre>

# --hints--

`gray` dovrebbe essere una funzione.

```js
assert(typeof gray == 'function');
```

`gray(true,177)` dovrebbe restituire un numero.

```js
assert(typeof gray(true, 177) == 'number');
```

`gray(true,177)` dovrebbe restituire `233`.

```js
assert.equal(gray(true, 177), 233);
```

`gray(true,425)` dovrebbe restituire `381`.

```js
assert.equal(gray(true, 425), 381);
```

`gray(true,870)` dovrebbe restituire `725`.

```js
assert.equal(gray(true, 870), 725);
```

`gray(false,233)` dovrebbe restituire `177`.

```js
assert.equal(gray(false, 233), 177);
```

`gray(false,381)` dovrebbe restituire `425`.

```js
assert.equal(gray(false, 381), 425);
```

`gray(false,725)` dovrebbe restituire `870`.

```js
assert.equal(gray(false, 725), 870);
```

# --seed--

## --seed-contents--

```js
function gray(enc, number) {

}
```

# --solutions--

```js
function gray(enc, number){
  if(enc){
      return number ^ (number >> 1);
  }else{
      let n = number;

      while (number >>= 1) {
          n ^= number;
      }
      return n;
  }
}
```
