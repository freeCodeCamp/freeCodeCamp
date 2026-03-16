---
id: 6914d94cee63aa7cbcafab2c
title: Task 2
challengeType: 22
dashedName: task-2
lang: es
---

<!-- (Audio) Mateo: Soy Mateo. Soy ingeniero de software. -->

# --description--

Mateo is mentioning his name and profession in Spanish. 

Here, the verb `ser` is used to express his identity and profession.

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`BLANK Mateo. BLANK ingeniero de software.`

## --blanks--

`Soy`

### --feedback--

This verb form comes from the verb `ser` and is used to describe who you are or what you do.

---

`Soy`

### --feedback--

This verb form comes from the verb `ser` and is used to describe who you are or what you do.

# --explanation--


`Soy` is a verb used to describe who you are or what you do. For example:

`Soy Mateo. Soy ingeniero de software.` - I'm Mateo. I'm a software engineer.

# --scene--

```json
{
  "setup": {
    "background": "company3-reception.png",
    "characters": [
      {
        "character": "Mateo",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_spanish_meet_mateo.mp3",
      "startTime": 1,
      "startTimestamp": 2.35,
      "finishTimestamp": 5.39
    }
  },
  "commands": [
    {
      "character": "Mateo",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Mateo",
      "startTime": 1,
      "finishTime": 1.82,
      "dialogue": {
        "text": "Soy Mateo.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "startTime": 2.5,
      "finishTime": 4.04,
      "dialogue": {
        "text": "Soy ingeniero de software.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "opacity": 0,
      "startTime": 4.54
    }
  ]
}
```

