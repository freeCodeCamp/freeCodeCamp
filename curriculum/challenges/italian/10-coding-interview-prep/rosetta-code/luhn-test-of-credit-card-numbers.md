---
id: 5ea28156e79528a9ab248f27
title: Test di Luhn dei numeri delle carte di credito
challengeType: 1
forumTopicId: 385284
dashedName: luhn-test-of-credit-card-numbers
---

# --description--

Il test di Luhn è usato da alcune compagnie di carte di credito per distinguere numeri di carte di credito validi da quello che potrebbe essere una selezione casuale di cifre.

Le società che utilizzano numeri di carta di credito che possono essere convalidati dal test di Luhn hanno numeri che superano il seguente test:

<ol>
  <li> Inverte l'ordine delle cifre nel numero.</li>
  <li> Prende la prima, la terza, ... e ogni altra cifra dispari nelle cifre invertite e le somma per formare la somma parziale s1</li>
  <li> Prende la seconda, la quarta... e ogni altra cifra pari nelle cifre invertite:</li>
    <ol>
      <li>Moltiplica ogni cifra per due e somma le cifre se la risposta è maggiore di nove per formare somme parziali per le cifre pari.</li>
      <li>Somma le somme parziali delle cifre pari per formare s2.</li>
    </ol>
  <li>Se s1 + s2 termina in zero allora il numero originale ha la forma di un numero di carta di credito valido, stando alla verifica del test di Luhn.</li>
</ol>

Ad esempio, se il numero da testare è 49927398716:

```bash
Reverse the digits:
  61789372994
Sum the odd digits:
  6 + 7 + 9 + 7 + 9 + 4 = 42 = s1
The even digits:
    1, 8, 3, 2, 9
  Two times each even digit:
    2, 16, 6, 4, 18
  Sum the digits of each multiplication:
    2, 7, 6, 4, 9
  Sum the last:
    2 + 7 + 6 + 4 + 9 = 28 = s2

s1 + s2 = 70 which ends in zero which means that 49927398716 passes the Luhn test.
```

# --instructions--

Scrivi una funzione che convaliderà un numero con il test Luhn. Restituisce vero se è un numero valido. Altrimenti, restituisci falso.

# --hints--

`luhnTest` dovrebbe essere una funzione.

```js
assert(typeof luhnTest === 'function');
```

`luhnTest("4111111111111111")` dovrebbe restituire un booleano.

```js
assert(typeof luhnTest('4111111111111111') === 'boolean');
```

`luhnTest("4111111111111111")` dovrebbe restituire `true`.

```js
assert.equal(luhnTest('4111111111111111'), true);
```

`luhnTest("4111111111111112")` dovrebbe restituire `false`.

```js
assert.equal(luhnTest('4111111111111112'), false);
```

`luhnTest("49927398716")` dovrebbe restituire `true`.

```js
assert.equal(luhnTest('49927398716'), true);
```

`luhnTest("49927398717")` dovrebbe restituire `false`.

```js
assert.equal(luhnTest('49927398717'), false);
```

`luhnTest("1234567812345678")` dovrebbe restituire `false`.

```js
assert.equal(luhnTest('1234567812345678'), false);
```

`luhnTest("1234567812345670")` dovrebbe restituire `true`.

```js
assert.equal(luhnTest('1234567812345670'), true);
```

# --seed--

## --seed-contents--

```js
function luhnTest(str) {

}
```

# --solutions--

```js
function luhnTest(str) {
  var luhnArr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
  var counter = 0;
  var incNum;
  var odd = false;
  var temp = String(str).replace(/[^\d]/g, '');
  if (temp.length == 0) return false;
  for (var i = temp.length - 1; i >= 0; --i) {
    incNum = parseInt(temp.charAt(i), 10);
    counter += (odd = !odd) ? incNum : luhnArr[incNum];
  }
  return counter % 10 == 0;
}
```
