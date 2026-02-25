---
id: 68c850c5eb642cc96ed86544
title: Task 1
challengeType: 19
dashedName: task-1
lang: es
---
<!-- (Audio) whole audio Elena es-a1-1.1 -->

# --description--

In the last Learn block, you practiced phrases for greeting people, saying your name, talking about your profession, and saying goodbye at different times of the day.  

Now, let's see how Elena, Camila, and Esteban combine all of these to introduce themselves naturally.

Let's start with Elena!

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What does Elena say to introduce her name?

## --answers--

`Me llamo Elena.`

---

`Soy Elena.`

### --feedback--

This sentence is a correct way to introduce herself, but it's not what Elena says. Review the structure she is using right before saying her name.

---

`Mi nombre es Elena.`

### --feedback--

This is another way to say your name in Spanish, but it's not the phrase used in the audio. Review the structure she is using right before saying her name.

---

`Me Elena.`

### --feedback--

This is not a correct sentence in Spanish. Review the structure that Elena is using right before saying her name.

## --video-solution--

1

# --explanation--

`Me llamo...` means "My name is...".  

It's the most common way to introduce your name in a conversation. For example:

`Me llamo Elena.` – My name is Elena.

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
      "startTimestamp": 0.35,
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
      "finishTime": 2.83,
      "dialogue": {
        "text": "Hola, buenos días.",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "startTime": 3.04,
      "finishTime": 4.28,
      "dialogue": {
        "text": "Me llamo Elena.",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "startTime": 4.53,
      "finishTime": 6.07,
      "dialogue": {
        "text": "Soy diseñadora.",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "startTime": 6.33,
      "finishTime": 7.29,
      "dialogue": {
        "text": "Hasta luego.",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "startTime": 7.46,
      "finishTime": 8.21,
      "dialogue": {
        "text": "Adiós.",
        "align": "center"
      }
    },
    {
      "character": "Elena",
      "opacity": 0,
      "startTime": 8.71
    }
  ]
}
```
