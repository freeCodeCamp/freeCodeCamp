---
id: 68c5893734d89dcb8e5b7a34
title: Task 5
challengeType: 19
dashedName: task-5
lang: es
---
<!-- (Audio) Elena: Adiós -->

# --description--

Elena is leaving, so she's using a common way to say goodbye in Spanish.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What word does Elena use to say "goodbye"?

## --answers--

`¡Hola!`

### --feedback--

This means "Hi", a general greeting, but it's not what Elena says.

---

`Buenas tardes.`

### --feedback--

This means "Good afternoon", but it's not the phrase you hear in the audio.

---

`Adiós`

---

`Buenos días.`

### --feedback--

This means "Good morning", and it's used earlier in the day.

## --video-solution--

3

# --explanation--

`Adiós` is a common way to say goodbye in Spanish. It translates to "Goodbye".

You can use `Adiós` in both formal and informal situations, usually when you don't expect to see the person again soon. For example:  

`Adiós, nos vemos otro día.` – Goodbye, see you another day.

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
      "startTimestamp": 6.81,
      "finishTimestamp": 7.56
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
      "finishTime": 1.75,
      "dialogue": {
        "text": "Adiós.",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "opacity": 0,
      "startTime": 2.25
    }
  ]
}
```
