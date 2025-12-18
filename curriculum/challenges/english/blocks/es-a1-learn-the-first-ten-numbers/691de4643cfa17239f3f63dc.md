---
id: 691de4643cfa17239f3f63dc
title: Task 2
challengeType: 22
dashedName: task-2
lang: es
---

<!-- (AUDIO) Julieta: Cero -->

# --description--

In Spanish, the number 0 is called `cero`.

Practice this number's pronunciation until you feel more comfortable with its sound.

# --instructions--

Write this number in Spanish below.

# --fillInTheBlank--

## --sentence--

`BLANK`

## --blanks--

`Cero`

### --feedback--

This is the number 0 in Spanish.

# --scene--

```json
{
  "setup": {
    "background": "company1-breakroom.png",
    "characters": [
      {
        "character": "Julieta",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_spanish_fundamentals_numbers_0_9.mp3",
      "startTime": 1,
      "startTimestamp": 0.58,
      "finishTimestamp": 1.25
    }
  },
  "commands": [
    {
      "character": "Julieta",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Julieta",
      "startTime": 1,
      "finishTime": 1.67,
      "dialogue": {
        "text": "Cero",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 2.17
    }
  ]
}
```
