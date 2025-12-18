---
id: 68c58b51686f9aea14946c1c
title: Task 11
challengeType: 19
dashedName: task-11
lang: es
---
<!-- (Audio) Elena: Diseñadora -->
# --description--

Elena is mentioning a profession. She's using the feminine form of a common job title.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What profession is Elena mentioning?

## --answers--

`Analista`

### --feedback--

This means "analyst", but it's not the profession mentioned in the audio.

---

`Ingeniera`

### --feedback--

This means "engineer", which is not the same as designer.

---

`Diseñadora`

---

`Desarrolladora`

### --feedback--

This means "developer", not designer.

## --video-solution--

3

# --explanation--

`Diseñadora` means "designer" and is the feminine form of `diseñador`. For example:  

`Soy diseñadora gráfica.` – I am a graphic designer.

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
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
      "filename": "ES_A1_spanish_greetings_in_the_morning.mp3",
      "startTime": 1,
      "startTimestamp": 4.38,
      "finishTimestamp": 5.42
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
      "finishTime": 2.04,
      "dialogue": {
        "text": "Diseñadora.",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "opacity": 0,
      "startTime": 2.54
    }
  ]
}
```
