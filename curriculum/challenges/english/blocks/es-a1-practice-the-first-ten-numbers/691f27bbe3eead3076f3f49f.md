---
id: 691f27bbe3eead3076f3f49f
title: Task 11
challengeType: 22
dashedName: task-11
lang: es
---

<!-- (AUDIO) Julieta: Ocho, Seis, Cuatro -->

# --description--

Julieta is practicing how to pronounce three numbers.

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`BLANK - Seis - BLANK`

## --blanks--

`Ocho`

### --feedback--

This is the number 8 in Spanish.

---

`Cuatro`

### --feedback--

This is the number 4 in Spanish.

# --explanation--

Julieta mentions this sequence of numbers: `Ocho - Seis - Cuatro`.

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
      "filename": "ES_A1_spanish_fundamentals_numbers_mixed.mp3",
      "startTime": 1,
      "startTimestamp": 13.81,
      "finishTimestamp": 17.07
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
      "finishTime": 1.71,
      "dialogue": {
        "text": "Ocho",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 2.19,
      "finishTime": 3.02,
      "dialogue": {
        "text": "Seis",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 3.64,
      "finishTime": 4.26,
      "dialogue": {
        "text": "Cuatro",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 4.76
    }
  ]
}
```
