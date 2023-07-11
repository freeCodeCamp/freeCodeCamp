---
id: 56533eb9ac21ba0edf2244bb
title: Lückentext (Word Blanks)
challengeType: 1
videoUrl: 'https://scrimba.com/c/caqn8zuP'
forumTopicId: 18377
dashedName: word-blanks
---

# --description--

Du erhältst Sätze mit einigen fehlenden Wörtern wie Nomen, Verben, Adjektiven und Adverbien. Anschließend ergänzt du die fehlenden Teile mit Wörtern deiner Wahl und so, dass der vollständige Satz einen Sinn ergibt.

Betrachte diesen Satz:

```md
It was really ____, and we ____ ourselves ____.
```

In diesem Satz fehlen drei Teile - ein Adjektiv, ein Verb und ein Adverb - und wir können Wörter unserer Wahl hinzufügen, um ihn zu vervollständigen. Anschließend können wir den vervollständigten Satz wie folgt einer Variable zuordnen:

```js
const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
```

# --instructions--

Bei dieser Aufgabe stellen wir dir ein Nomen, ein Verb, ein Adjektiv sowie ein Adverb zur Verfügung. Du musst einen vollständigen Satz mit Wörtern deiner Wahl und den von uns vorgegebenen Wörtern bilden.

Du musst den String-Verkettungsoperator `+` verwenden, um einen neuen String zu erstellen, indem du die angegebenen Variablen verwendest: `myNoun`, `myAdjective`, `myVerb` und `myAdverb`. Anschließend musst du den erstellten String der Variable `wordBlanks` zuweisen. Du solltest die Wörter, die den Variablen zugeordnet sind, nicht ändern.

You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. Das Ergebnis sollte einen vollständigen Satz darstellen.

# --hints--

`wordBlanks` sollte ein String sein.

```js
assert(typeof wordBlanks === 'string');
```

Du solltest die Werte von `myNoun`, `myVerb`, `myAdjective` oder `myAdverb` nicht verändern.

```js
assert(
  myNoun === 'dog' &&
    myVerb === 'ran' &&
    myAdjective === 'big' &&
    myAdverb === 'quickly'
);
```

Du solltest die Werte `dog`, `ran`, `big` oder `quickly` nicht direkt verwenden, um `wordBlanks` zu erstellen.

```js
const newCode = removeAssignments(code);
assert(
  !/dog/.test(newCode) &&
    !/ran/.test(newCode) &&
    !/big/.test(newCode) &&
    !/quickly/.test(newCode)
);
```

`wordBlanks` should contain all of the words assigned to the variables `myNoun`, `myVerb`, `myAdjective` and `myAdverb` separated by non-word characters (and any additional words of your choice).

```js
assert(
  /\bdog\b/.test(wordBlanks) &&
    /\bbig\b/.test(wordBlanks) &&
    /\bran\b/.test(wordBlanks) &&
    /\bquickly\b/.test(wordBlanks)
);
```

# --seed--

## --after-user-code--

```js
const removeAssignments = str => str
  .replace(/myNoun\s*=\s*["']dog["']/g, '')
  .replace(/myAdjective\s*=\s*["']big["']/g, '')
  .replace(/myVerb\s*=\s*["']ran["']/g, '')
  .replace(/myAdverb\s*=\s*["']quickly["']/g, '');
```

## --seed-contents--

```js
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = ""; // Change this line
// Only change code above this line
```

# --solutions--

```js
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

let wordBlanks = "Once there was a " + myNoun + " which was very " + myAdjective + ". ";
wordBlanks += "It " + myVerb + " " + myAdverb + " around the yard.";
```
