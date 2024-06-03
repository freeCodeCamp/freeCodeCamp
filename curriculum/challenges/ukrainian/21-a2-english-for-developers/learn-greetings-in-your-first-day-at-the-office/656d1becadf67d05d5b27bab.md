---
id: 656d1becadf67d05d5b27bab
title: Завдання 146
challengeType: 19
dashedName: task-146
---

# --description--

Ви вже дізнались про займенник `he`, а ось займенник `she` використовують до особи жіночої статі. Такі займенники дозволяють уникнути повторень в розмові. Гляньте на цю частину діалогу:

Софі: `Oh, come on, Brian!`

Браян: `But it is true. She's the person to go to if you need help!`

Браян використовує `she`, щоб поговорити про Софі. Замість того, щоб використовувати ім’я Софі, Браян використовує займенник `she`, щоб зробити розмову природнішою та уникнути повторень.

# --question--

## --text--

Яке слово використовує Браян, щоб уникнути повторення імені Софі?

## --answers--

`he`

### --feedback--

`He` є займенником, який позначає чоловіка.

---

`they`

### --feedback--

`They` позначає множину та стосується більше однієї людини.

---

`it`

### --feedback--

`It` зазвичай стосується речей та тварин.

---

`she`

### --feedback--

`She` є займенником, який позначає жінку.

## --video-solution--

4

# --scene--

```json
{
  "setup": {
    "background": "cafe.png",
    "characters": [
      {
        "character": "Sophie",
        "position": { "x": 25, "y": 0, "z": 1.3 },
        "opacity": 0
      },
      {
        "character": "Brian",
        "position": { "x": 75, "y": 15, "z": 1.2 },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "1.1-4.mp3",
      "startTime": 1,
      "startTimestamp": 22.6,
      "finishTimestamp": 28.16
    }
  },
  "commands": [
    {
      "character": "Sophie",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Brian",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sophie",
      "startTime": 1,
      "finishTime": 2.4,
      "dialogue": {
        "text": "Oh, come on, Brian.",
        "align": "left"
      }
    },
    {
      "character": "Brian",
      "startTime": 3.3,
      "finishTime": 6.35,
      "dialogue": {
        "text": "But it's true. She's the person to go to if you need help.",
        "align": "right"
      }
    },
    {
      "character": "Sophie",
      "opacity": 0,
      "startTime": 6.85
    },
    {
      "character": "Brian",
      "opacity": 0,
      "startTime": 6.85
    }
  ]
}
```
