---
id: 698a5aa1ff49e32ceeaaccec
title: Task 6
challengeType: 22
dashedName: task-6
lang: es
---

<!-- (Audio) Camila: Número de teléfono -->

# --description--

Now Camila is practicing how to say `número de teléfono` in Spanish, which means "phone number".

Notice that the word `número` carries an accent mark in the letter `u` and the word `teléfono` carries an accent mark in the second letter `e`.

# --instructions--

Listen to the audio and write the word below.

# --fillInTheBlank--

## --sentence--

`BLANK de BLANK`

## --blanks--

`Número`

### --feedback--

This word literally means "number" in Spanish. Remember to write the accent mark in the letter `u`.

---

`teléfono`

### --feedback--

This word literally means "phone" in Spanish. Remember to write the accent mark in the second letter `e`.

# --explanation--

`Número de teléfono` means "phone number" in Spanish.

# --scene--

```json
{
  "setup": {
    "background": "company2-dining.png",
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
      "filename": "ES_A1_warm_up_describing_people_at_work.mp3",
      "startTime": 1,
      "startTimestamp": 10.45,
      "finishTimestamp": 12.39
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
      "finishTime": 2.94,
      "dialogue": {
        "text": "Número de teléfono",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "opacity": 0,
      "startTime": 3.44
    }
  ]
}
```
