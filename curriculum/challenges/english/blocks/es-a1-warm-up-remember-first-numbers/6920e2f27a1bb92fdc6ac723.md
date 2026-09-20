---
id: 6920e2f27a1bb92fdc6ac723
title: Task 4
challengeType: 22
dashedName: task-4
lang: es
---

# --description--

Camila is practicing how to count in ascending order.

# --instructions--

Listen to the audio and complete the sequence of numbers below.

# --fillInTheBlank--

## --sentence--

`Cinco - BLANK - Siete - BLANK`

## --blanks--

`Seis`

### --feedback--

This number comes after `cinco` ("five").

---

`Ocho`

### --feedback--

This number comes after `siete` ("seven").

# --explanation--

Camila mentions the sequence: `Cinco - Seis - Siete - Ocho`.

# --scene--

```json
{
  "setup": {
    "background": "cafe.png",
    "characters": [
      {
        "character": "Camila",
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
      "startTimestamp": 11.93,
      "finishTimestamp": 18.93
    }
  },
  "commands": [
    {
      "character": "Camila",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Camila",
      "startTime": 1,
      "finishTime": 1.75,
      "dialogue": {
        "text": "Cinco",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "startTime": 3.05,
      "finishTime": 3.82,
      "dialogue": {
        "text": "Seis",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "startTime": 5.26,
      "finishTime": 6,
      "dialogue": {
        "text": "Siete",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "startTime": 7.4,
      "finishTime": 8,
      "dialogue": {
        "text": "Ocho",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "opacity": 0,
      "startTime": 8.5
    }
  ]
}
```
