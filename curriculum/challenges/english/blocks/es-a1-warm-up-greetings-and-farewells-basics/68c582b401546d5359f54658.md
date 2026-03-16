---
id: 68c582b401546d5359f54658
title: Task 2
challengeType: 19
dashedName: task-2
lang: es
---
<!-- (Audio) Elena: Buenos días -->

# --description--

It’s morning, so Elena is using a typical Spanish greeting for this time of day.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What greeting is Elena using to say "good morning"?

## --answers--

`¡Hola!`

### --feedback--

This means "Hi", which is used as a greeting.

---

`Buenas tardes.`

### --feedback--

This means "Good afternoon", which is used later in the day.

---

`Buenos días.`

---

`Buenas noches.`

### --feedback--

This means "Good night", and it's used at the end of the day.

## --video-solution--

3

# --explanation--

`Buenos días` is a common greeting used in the morning. It literally means "good days", but it's equivalent to "good morning". For example:  

`¡Hola, buenos días! ¿Cómo estás?` – Hello, good morning! How are you?

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
      "startTimestamp": 1,
      "finishTimestamp": 2.18
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
      "finishTime": 2.18,
      "dialogue": {
        "text": "Buenos días.",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "opacity": 0,
      "startTime": 2.68
    }
  ]
}
```
