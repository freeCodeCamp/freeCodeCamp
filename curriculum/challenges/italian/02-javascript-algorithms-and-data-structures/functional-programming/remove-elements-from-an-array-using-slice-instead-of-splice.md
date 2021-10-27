---
id: 9d7123c8c441eeafaeb5bdef
title: Rimuovere gli elementi da un array usando slice invece di splice
challengeType: 1
forumTopicId: 301236
dashedName: remove-elements-from-an-array-using-slice-instead-of-splice
---

# --description--

Un'operazione che si fa comunemente lavorando con gli array è quella di rimuovere degli elemento mantenendo il resto dell'array. A questo scopo JavaScript offre il metodo `splice`, che richiede degli argomenti per la posizione (indice) di dove iniziare a rimuovere gli elementi, e per il numero di elementi da rimuovere. Se il secondo argomento non è fornito, il comportamento predefinito è quello di rimuovere gli elementi fino alla fine. Tuttavia, il metodo `splice` muta l'array originale su cui viene chiamato. Ecco un esempio:

```js
const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);
```

Qui `splice` restituisce la stringa `London` e la elimina dall'array delle città. `cities` avrà il valore `["Chicago", "Delhi", "Islamabad", "Berlin"]`.

Come abbiamo visto nell'ultima sfida, il metodo `slice` non muta l'array originale, ma ne restituisce uno nuovo che può essere salvato in una variabile. Ricorda che il metodo `slice` richiede due argomenti per gli indici di inizio e fine (non inclusiva) della "fetta" (slice), e restituisce quegli elementi in un nuovo array. Usando il metodo `slice` invece di `splice` si evita qualsiasi effetto collaterale di mutazione dell'array.

# --instructions--

Riscrivi la funzione `nonMutatingSplice` usando `slice` invece di `splice`. Questo dovrebbe limitare l'array `cities` fornito a una lunghezza di 3, e restituire un nuovo array contenente solo i primi tre elementi.

Non mutare l'array originale fornito alla funzione.

# --hints--

Il tuo codice dovrebbe utilizzare il metodo `slice`.

```js
assert(code.match(/\.slice/g));
```

Il tuo codice non dovrebbe usare il metodo `splice`.

```js
assert(!code.match(/\.?[\s\S]*?splice/g));
```

L'array `inputCities` non dovrebbe cambiare.

```js
assert(
  JSON.stringify(inputCities) ===
    JSON.stringify(['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'])
);
```

`nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"])` dovrebbe restituire `["Chicago", "Delhi", "Islamabad"]`.

```js
assert(
  JSON.stringify(
    nonMutatingSplice(['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin'])
  ) === JSON.stringify(['Chicago', 'Delhi', 'Islamabad'])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.splice(3);

  // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
```

# --solutions--

```js
function nonMutatingSplice(cities) {
  return cities.slice(0,3);
}
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
```
