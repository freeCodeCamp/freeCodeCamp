---
id: 6914af61cb72593f7ad505cf
title: Task 9
challengeType: 19
dashedName: task-9
lang: es
---

<!-- (Audio) Luna: Hasta luego. Adiós. -->

# --description--

Luna is saying goodbye and expects to see you in the near future. 

One of the expressions she uses is commonly used in Spanish, in both formal and informal contexts, to indicate a temporary farewell.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What does Luna mean by saying `Hasta luego`?

## --answers--

She is saying good night.

### --feedback--

This phrase is not used to wish someone a good night. It's used when saying goodbye for now but expecting to meet again soon.

---

She expects to see you later.

---

She is introducing herself.

### --feedback--

This phrase is not used for introductions. It's used for saying goodbye.

---

She is asking how you are.

### --feedback--

This is not a question. Luna is ending the conversation politely.

## --video-solution--

2

# --explanation--

`Hasta luego` means **"until later"** and is used to say **"see you later"**.

It's a friendly and common way to say goodbye when you expect to see the person again soon. For example:

- `Hasta luego, nos vemos en la reunión.` – See you later, we'll see each other at the meeting.

- `Adiós, hasta luego.` – Goodbye, see you later.

- `Hasta mañana.` – See you tomorrow (a variation for the next day).

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
