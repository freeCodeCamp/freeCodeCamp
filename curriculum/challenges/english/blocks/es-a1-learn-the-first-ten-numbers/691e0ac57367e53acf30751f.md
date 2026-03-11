---
id: 691e0ac57367e53acf30751f
title: Task 5
challengeType: 22
dashedName: task-5
lang: es
---

<!-- (AUDIO) Julieta: Tres -->

# --description--

The number 3 is called `tres` in Spanish.

Practice this number's pronunciation until you feel more comfortable with its sound.

# --instructions--

Write this number in Spanish below.

# --fillInTheBlank--

## --sentence--

`BLANK`

## --blanks--

`Tres`

### --feedback--

This is the number 3 in Spanish.

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
      "startTimestamp": 7.09,
      "finishTimestamp": 7.99
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
      "finishTime": 1.9,
      "dialogue": {
        "text": "Tres",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 2.4
    }
  ]
}
```
