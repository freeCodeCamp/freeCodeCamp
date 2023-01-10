---
id: 56533eb9ac21ba0edf2244b5
title: Anführungszeichen in Strings verwenden
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvgSr'
forumTopicId: 17568
dashedName: escaping-literal-quotes-in-strings
---

# --description--

Wenn du einen String definierst, musst du ihn mit einem einfachen oder doppelten Anführungszeichen beginnen und beenden. Was passiert, wenn du ein wörtliches Zitat benötigst: `"` oder `'` innerhalb deines Strings?

In JavaScript kannst du ein Anführungszeichen <dfn>"ausblenden"</dfn>, indem du einen <dfn>backslash</dfn> (`\`) vor das Anführungszeichen stellst.

```js
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
```

Dies signalisiert JavaScript, dass das folgende Anführungszeichen nicht das Ende eines Strings ist, sondern innerhalb des Strings stehen sollte. Wenn du dies auf der Konsole ausgibst, würdest du folgendes erhalten:

```js
Alan said, "Peter is learning JavaScript".
```

# --instructions--

Verwende <dfn>Backlashes</dfn>, um der Variablen `myStr` einen String zuzuweisen, so dass du ihn auf der Konsole ausgeben kannst:

```js
I am a "double quoted" string inside "double quotes".
```

# --hints--

Du solltest zwei doppelte Anführungszeichen (`"`) und vier versteckte doppelte Anführungszeichen (`\"`) verwenden.

```js
assert(code.match(/\\"/g).length === 4 && code.match(/[^\\]"/g).length === 2);
```

Die Variable `myStr` sollte den folgenden String enthalten: `I am a "double quoted" string inside "double quotes".`

```js
assert(/I am a "double quoted" string inside "double quotes(\."|"\.)$/.test(myStr));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    console.log("myStr = \"" + myStr + "\"");
  } else {
    console.log("myStr is undefined");
  }
})();
```

## --seed-contents--

```js
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
```
