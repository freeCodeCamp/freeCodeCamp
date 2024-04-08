---
id: 656ab31ebccec247fde7cee4
title: Aufgabe 63
challengeType: 22
dashedName: task-63
---

<!--
AUDIO REFERENCE:
Tom: Oh, awesome. My computer and drawing tablet are great, too. 
-->

# --description--

`Awesome` ist ein Wort, das Leute verwenden wenn sie etwas wirklich mögen. Es ist als wenn du sagst `very good!` Es ist ein informeller Weg, um Zustimmung oder Bewunderung zu zeigen.

# --fillInTheBlank--

## --sentence--

`_. My computer and drawing tablet are great, too.`

## -blanks--

`Awesome`

### --feedback--

Höre auf ein Wort, welches `very good` oder `I really like it.` bedeutet

# --blanks--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Tom",
        "position": { "x": 50, "y": 15, "z": 1.2 },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "1.1-2.mp3",
      "startTime": 1,
      "startTimestamp": 32.3,
      "finishTimestamp": 36
    }
  },
  "commands": [
    {
      "character": "Tom",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Tom",
      "startTime": 1,
      "finishTime": 4.25,
      "dialogue": {
        "text": "Awesome. My computer and drawing tablet are great too.",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 4.75
    }
  ]
}
```
