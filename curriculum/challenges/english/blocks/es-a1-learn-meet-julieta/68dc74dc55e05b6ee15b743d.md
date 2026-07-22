---
id: 68dc74dc55e05b6ee15b743d
title: Task 1
challengeType: 22
dashedName: task-1
lang: es
---

<!-- (Audio) Julieta: Hola, buenas noches. -->

# --description--

Julieta is using a common greeting used from evening until midnight. It's a polite and common way to greet someone when you meet the person after dark.

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`BLANK, buenas BLANK.`

## --blanks--

`Hola`

### --feedback--

This is the most common way to greet someone in Spanish.

---

`noches`

### --feedback--

This words describes the period of the day that comes after the afternoon.

# --explanation--

Spanish greetings vary depending on the time of day. For example:

`Buenos días` is used during the morning.

`Buenas tardes` is used during the afternoon.

`Buenas noches` is used when saying goodbye at night or wishing someone a restful night.

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
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
      "filename": "ES_A1_spanish_meet_julieta.mp3",
      "startTime": 1,
      "startTimestamp": 0.61,
      "finishTimestamp": 2.44
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
      "finishTime": 2.83,
      "dialogue": {
        "text": "Hola, buenas noches.",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 3.33
    }
  ]
}
```


