---
id: 5a23c84252665b21eecc7e80
title: Grauer Code
challengeType: 1
forumTopicId: 302276
dashedName: gray-code
---

# --description--

Gray code is a form of binary encoding where transitions between consecutive numbers differ by only one bit.

Dies ist eine nützliche Kodierung zur Verringerung von Hardware-Datenrisiken bei Werten, die sich schnell ändern und/oder mit langsamer Hardware als Eingänge verbunden sind.

Sie ist auch nützlich, um Eingaben für Karnaugh-Maps in der Reihenfolge von links nach rechts oder von oben nach unten zu erzeugen.

# --instructions--

Erstelle eine Funktion, die eine Zahl in den Gray-Code kodiert und aus diesem dekodiert. Die Funktion sollte 2 Parameter besitzen.

Die erste wäre ein Boolean. Die Funktion sollte für true kodieren und für false dekodieren. Der zweite Parameter ist die zu kodierende/dekodierende Nummer.

Anzeige der normalen Binärdarstellung, der Gray-Code-Darstellung und der dekodierten Gray-Code-Werte für alle 5-Bit-Binärzahlen (0-31 einschließlich, führende 0s nicht erforderlich).

Es gibt viele mögliche Gray-Codes. Im Folgenden wird der sogenannte "binär reflektierte Gray-Code" verschlüsselt.

Kodierung (MSB ist Bit 0, b ist binär, g ist Gray-Code):

<pre>if b[i-1] = 1
  g[i] = not b[i]
else
  g[i] = b[i]
</pre>

Oder:

<pre>g = b xor (b logisch 1 Mal nach rechts verschoben)
</pre>

Entschlüsselung (MSB ist Bit 0, b ist binär, g ist Gray-Code):

<pre>b[0] = g[0]<br>
für andere Bits:
b[i] = g[i] xor b[i-1]
</pre>

# --hints--

`gray` sollte eine Funktion sein.

```js
assert(typeof gray == 'function');
```

`gray(true,177)` sollte eine Zahl zurückgeben.

```js
assert(typeof gray(true, 177) == 'number');
```

`gray(true,177)` sollte `233` zurückgeben.

```js
assert.equal(gray(true, 177), 233);
```

`gray(true,425)` sollte `381` zurückgeben.

```js
assert.equal(gray(true, 425), 381);
```

`gray(true,870)` sollte `725` zurückgeben.

```js
assert.equal(gray(true, 870), 725);
```

`gray(false,233)` sollte `177` zurückgeben.

```js
assert.equal(gray(false, 233), 177);
```

`gray(false,381)` sollte `425` zurückgeben.

```js
assert.equal(gray(false, 381), 425);
```

`gray(false,725)` sollte `870` zurückgeben.

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
