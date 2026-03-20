---
id: 68dc747c75837c6bb82aeeb8
title: Task 1
challengeType: 19
dashedName: task-1
lang: es
---

<!-- (Audio) Luna: Hola, buenos días. -->

# --description--

In this audio, Luna uses a morning greeting in Spanish.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

Which greeting is Luna using?

## --answers--

`Hola, buenas tardes.`

### --feedback--

This greeting is used in the afternoon, not in the morning.

---

`Hola, buenos días.`

---

`Hola, buenas noches.`

### --feedback--

This greeting is used at night or when saying goodbye before going to sleep.

---

`¡Hola! ¿Qué tal?`

### --feedback--

This is an informal greeting to say hi and ask how the person is doing, but it doesn't specify the time of day.

## --video-solution--

2

# --explanation--

`Hola, buenos días` is a way to say hi and wish the person a good day. It's used in the morning.

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
      "startTimestamp": 0.39,
      "finishTimestamp": 2.25
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
      "finishTime": 2.86,
      "dialogue": {
        "text": "Hola, buenos días.",
        "align": "center"
      }
    },
    {
      "character": "Luna",
      "opacity": 0,
      "startTime": 3.36
    }
  ]
}
```
