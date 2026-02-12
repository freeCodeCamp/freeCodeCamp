---
id: 69736d336e51a4ffef723422
title: Task 2
challengeType: 22
dashedName: task-2
lang: es
---

<!-- (AUDIO) Elena: Sesenta y dos, Sesenta y tres, Sesenta y cuatro -->

# --description--

Elena is practicing how to count in ascending order in Spanish.

# --instructions--

Based on the audio, complete the sequence of numbers below using digits.

# --fillInTheBlank--

## --sentence--

`BLANK - BLANK - BLANK`

## --blanks--

`62`

### --feedback--

This is the number `sesenta y dos` in Spanish.

---

`63`

### --feedback--

This is the number `sesenta y tres` in Spanish.

---

`64`

### --feedback--

This is the number `sesenta y cuatro` in Spanish.

# --explanation--

Elena mentions three consecutive numbers in the 60s:

- 62 - `Sesenta y dos`.

- 63 - `Sesenta y tres`.

- 64 - `Sesenta y cuatro`.

Remember that numbers in the 60s start with the word `sesenta`, followed by the conjunction `y`, and the units digit.

# --scene--

```json
{
  "setup": {
    "background": "company3-reception.png",
    "characters": [
      {
        "character": "Elena",
        "position": {
          "x": 50,
          "y": 25,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_describing_company_and_people_numbers_practice.mp3",
      "startTime": 1,
      "startTimestamp": 2.95,
      "finishTimestamp": 9.9
    }
  },
  "commands": [
    {
      "character": "Elena",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Elena",
      "startTime": 1,
      "finishTime": 2.61,
      "dialogue": {
        "text": "Sesenta y dos",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "startTime": 3.51,
      "finishTime": 5.37,
      "dialogue": {
        "text": "Sesenta y tres",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "startTime": 6.21,
      "finishTime": 7.95,
      "dialogue": {
        "text": "Sesenta y cuatro",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "opacity": 0,
      "startTime": 8.45
    }
  ]
}
```
