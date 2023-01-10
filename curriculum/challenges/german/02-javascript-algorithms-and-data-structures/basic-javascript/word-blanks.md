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

Betrachte diesen Satz – Es war wirklich **\_\_\_\_** und wir **\_\_\_\_** uns selbst **\_\_\_\_**. In diesem Satz fehlen drei Teile – ein Adjektiv, ein Verb und ein Adverb. Wir können Wörter unserer Wahl hinzufügen, um ihn zu vervollständigen. Anschließend können wir den vervollständigten Satz wie folgt einer Variable zuordnen:

```js
const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
```

# --instructions--

In dieser Aufgabe stellen wir dir jeweils ein Nomen, ein Verb und ein Adjektiv sowie ein Adverb zur Verfügung. Du musst einen vollständigen Satz mit Wörtern deiner Wahl und den von uns vorgegebenen Wörtern bilden.

Du musst den String-Verkettungsoperator `+` verwenden, um einen neuen String mithilfe der vorgegebenen Variablen `myNoun`, `myAdjective`, `myVerb` und `myAdverb` zu kreieren. Anschließend musst du den so gebildeten String der Variable `wordBlanks` zuweisen. Du solltest die Wörter, die den Variablen zugeordnet sind, nicht ändern.

Berücksichtige zudem Leerzeichen in deinem String – die Wörter deines Satzes müssen von Leerzeichen umgeben sein. Das Ergebnis sollte ein vollständiger Satz sein.

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

Du solltest nicht ausschließlich die Werte `dog`, `ran`, `big` oder `quickly` zur Erstellung von `wordBlanks` verwenden.

```js
const newCode = removeAssignments(code);
assert(
  !/dog/.test(newCode) &&
    !/ran/.test(newCode) &&
    !/big/.test(newCode) &&
    !/quickly/.test(newCode)
);
```

`wordBlanks` sollte alle – durch beliebige Nichtwortzeichen getrennte – Wörter enthalten, die den Variablen `myNoun`, `myVerb`, `myAdjective` und `myAdverb` zugewiesen wurden. Du kannst zudem Wörter deiner Wahl hinzufügen.

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
