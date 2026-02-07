---
id: 68c9881715d314368f261622
title: Task 3
challengeType: 19
dashedName: task-3
lang: es
---
<!-- (Audio) Camila ES_A1_1.2 -->

# --description--

Now let's hear how Camila introduces herself.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

At what time of day is Camila speaking?

## --answers--

Afternoon

---

Morning

### --feedback--

The phrase `buenas tardes` is not used in the morning. Try again!

---

Night

### --feedback--

The greeting Camila says used earlier in the day, not in the evening.

---

She doesn't mention the time of the day.

### --feedback--

Camila does mention the time of the day.

## --video-solution--

1

# --explanation--

`Buenas tardes` means "Good afternoon". It's used after **12:00 PM** and usually until sunset. For example:

`Hola, buenas tardes.` – Hello, good afternoon.

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
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
      "filename": "ES_A1_spanish_greetings_in_the_afternoon.mp3",
      "startTime": 1,
      "startTimestamp": 0.3,
      "finishTimestamp": 7.15
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
      "finishTime": 2.83,
      "dialogue": {
        "text": "Hola, buenas tardes.",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "startTime": 3.04,
      "finishTime": 4.13,
      "dialogue": {
        "text": "Soy Camila.",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "startTime": 4.37,
      "finishTime": 5.51,
      "dialogue": {
        "text": "Soy analista.",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "startTime": 5.91,
      "finishTime": 6.64,
      "dialogue": {
        "text": "Adiós.",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "startTime": 6.86,
      "finishTime": 7.85,
      "dialogue": {
        "text": "Hasta pronto.",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "opacity": 0,
      "startTime": 8.35
    }
  ]
}
```
