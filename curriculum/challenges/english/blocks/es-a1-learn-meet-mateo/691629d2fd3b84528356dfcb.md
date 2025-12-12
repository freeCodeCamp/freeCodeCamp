---
id: 691629d2fd3b84528356dfcb
title: Task 7
challengeType: 22
dashedName: task-7
lang: es
---

<!-- (Audio) Mateo: Adiós. Hasta pronto. -->

# --description--

Mateo is saying goodbye and indicating he expects to see the person again soon.

# --instructions--

Listen to the audio and answer the question below.

# --fillInTheBlank--

## --sentence--

`Adiós. Hasta BLANK.`

## --blanks--

`pronto`

### --feedback--

Think about which farewell means "See you soon", often used when you expect to see someone again shortly.

# --explanation--

`Hasta pronto` means "See you soon", expressing that Mateo expects to meet again in the near future.

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
      "startTimestamp": 9.69,
      "finishTimestamp": 11.62
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
      "finishTime": 1.63,
      "dialogue": {
        "text": "Adiós.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "startTime": 1.99,
      "finishTime": 2.93,
      "dialogue": {
        "text": "Hasta pronto.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "opacity": 0,
      "startTime": 3.43
    }
  ]
}
```
