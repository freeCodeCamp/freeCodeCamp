---
id: 6914b05e76110e437ed28598
title: Task 10
challengeType: 22
dashedName: task-10
lang: es
---

<!-- (Audio) Luna: Hasta luego. Adiós. -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`Hasta BLANK. BLANK.`

## --blanks--

`luego`

### --feedback--

This word is part of a common farewell expression in Spanish that literally means "until later".

---

`Adiós`

### --feedback--

This is a general way to say "goodbye" in Spanish, used in both formal and informal contexts. remember to use the accent mark on `ó`.

# --explanation--

`Hasta luego` means "see you later". It's a friendly farewell used when you expect to meet the person again soon. 

# --scene--

```json
{
  "setup": {
    "background": "desk.png",
    "characters": [
      {
        "character": "Luna",
        "position": {
          "x": 50,
          "y": 25,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_spanish_meet_luna.mp3",
      "startTime": 1,
      "startTimestamp": 8.79,
      "finishTimestamp": 10.57
    }
  },
  "commands": [
    {
      "character": "Luna",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Luna",
      "startTime": 1,
      "finishTime": 1.92,
      "dialogue": {
        "text": "Hasta luego.",
        "align": "center"
      }
    },
    {
      "character": "Luna",
      "startTime": 2.09,
      "finishTime": 2.78,
      "dialogue": {
        "text": "Adiós.",
        "align": "center"
      }
    },
    {
      "character": "Luna",
      "opacity": 0,
      "startTime": 3.28
    }
  ]
}
```
