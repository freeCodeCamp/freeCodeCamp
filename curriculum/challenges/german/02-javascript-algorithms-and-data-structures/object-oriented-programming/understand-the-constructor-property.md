---
id: 587d7daf367417b2b2512b7e
title: Die Konstruktor-Eigenschaft verstehen
challengeType: 1
forumTopicId: 301327
dashedName: understand-the-constructor-property
---

# --description--

Es gibt eine spezielle Konstruktion (`constructor`)-Eigenschaft, die sich in den Objektinstanzen `duck` und `beagle` befindet, die in den vorherigen Aufgaben erstellt wurden:

```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
```

Beide `console.log`-Aufrufe würden `true` in der Konsole anzeigen.

Beachte, dass die Eigenschaft `constructor` ein Verweis auf die Konstruktorfunktion ist, die die Instanz erstellt hat. Der Vorteil der `constructor`-Eigenschaft ist, dass es möglich ist, nach dieser Eigenschaft zu suchen, um herauszufinden, um welche Art von Objekt es sich handelt. Hier ist ein Beispiel dafür, wie dies genutzt werden könnte:

```js
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```

**Hinweis:** Da die `constructor`-Eigenschaft überschrieben werden kann (was in den nächsten beiden Aufgaben behandelt wird), ist es im Allgemeinen besser, die `instanceof`-Methode zu verwenden, um den Typ eines Objekts zu überprüfen.

# --instructions--

Schreibe eine Funktion `joinDogFraternity`, die einen `candidate` als Parameter annimmt und mithilfe der `constructor`-Eigenschaft `true` zurückgibt, wenn der Kandidat ein Hund (`Dog`) ist, andernfalls `false`.

# --hints--

`joinDogFraternity` sollte als Funktion definiert werden.

```js
assert(typeof joinDogFraternity === 'function');
```

`joinDogFraternity` sollte `true` zurückgeben, wenn `candidate` eine Instanz von `Dog` ist.

```js
assert(joinDogFraternity(new Dog('')) === true);
```

`joinDogFraternity` sollte die `constructor`-Eigenschaft verwenden.

```js
assert(/\.constructor/.test(code) && !/instanceof/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {

}
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}
```
