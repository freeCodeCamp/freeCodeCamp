---
id: 68c586973237a2ae8b8a9dcb
title: Task 3
challengeType: 19
dashedName: task-3
lang: es
---
<!-- (Audio) Camila: Buenas tardes -->

# --description--

It's the afternoon, so Camila is using a common Spanish greeting for this time of day.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What greeting does Camila use to say "good afternoon"?

## --answers--

`Buenos días.`

### --feedback--

This means "Good morning", and it's used earlier in the day.

---

`¡Hola!`

### --feedback--

This means "Hi", which is a general greeting, but it's not what you hear in the audio.

---

`¡Hola, buenos días!`

### --feedback--

This is a more specific morning greeting, not the phrase used in the audio.

---

`Buenas tardes.`

## --video-solution--

4

# --explanation--

`Buenas tardes` is a greeting used during the afternoon. It translates to "Good afternoon". For example:

`Buenas tardes, señora Gómez.` – A formal way to say "Good afternoon, Mrs. Gómez".

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
      "startTimestamp": 1,
      "finishTimestamp": 2.13
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
      "finishTime": 2.13,
      "dialogue": {
        "text": "Buenas tardes.",
        "align": "center"
      }
    },
    {
      "character": "Camila",
      "opacity": 0,
      "startTime": 2.63
    }
  ]
}
```
