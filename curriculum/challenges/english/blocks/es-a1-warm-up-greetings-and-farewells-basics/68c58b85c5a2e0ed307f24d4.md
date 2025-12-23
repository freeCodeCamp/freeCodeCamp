---
id: 68c58b85c5a2e0ed307f24d4
title: Task 12
challengeType: 19
dashedName: task-12
lang: es
---
<!-- (Audio) Camila: Analista -->

# --description--

Camila is mentioning a profession. She uses a word for someone who works with information and analysis.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What profession is Camila mentioning?

## --answers--

`Analista`

---

`Desarrollador`

### --feedback--

This means "developer", but it's not the word Camila says.

---

`Ingeniera`

### --feedback--

This means "engineer", and it's not the correct profession from the audio.

---

`Diseñadora`

### --feedback--

This means "designer", not the word you hear.

## --video-solution--

1

# --explanation--

`Analista` means "analyst". It refers to someone who examines information to find patterns or make decisions. For example: 

`Soy analista de datos.` – I am a data analyst.

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
      "startTimestamp": 4.07,
      "finishTimestamp": 4.81
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
      "finishTime": 1.74,
      "dialogue": {
        "text": "Analista.",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "opacity": 0,
      "startTime": 2.24
    }
  ]
}
```
