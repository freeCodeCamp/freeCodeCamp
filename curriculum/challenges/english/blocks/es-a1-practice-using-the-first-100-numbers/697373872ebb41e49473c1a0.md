---
id: 697373872ebb41e49473c1a0
title: Task 5
challengeType: 22
dashedName: task-5
lang: es
---

<!-- NO AUDIO -->

# --description--

Now Elena is practicing three numbers in the 90s.

# --instructions--

Complete the sequence of numbers based on what you hear in the audio.

# --fillInTheBlank--

## --sentence--

`BLANK - Noventa y tres - BLANK`

## --blanks--

`Noventa y uno`

### --feedback--

This is the number 91 in Spanish.

---

`Noventa y seis`

### --feedback--

This is the number 96 in Spanish.

# --explanation--

Elena mentions three numbers in the 90s:

- 91 - `Noventa y uno`.

- 93 - `Noventa y tres`.

- 96 - `Noventa y seis`.

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
      "startTimestamp": 10.71,
      "finishTimestamp": 16.75
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
      "finishTime": 2.34,
      "dialogue": {
        "text": "Noventa y uno",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "startTime": 3.15,
      "finishTime": 4.74,
      "dialogue": {
        "text": "Noventa y tres",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "startTime": 5.37,
      "finishTime": 7.04,
      "dialogue": {
        "text": "Noventa y seis",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "opacity": 0,
      "startTime": 7.54
    }
  ]
}
```
