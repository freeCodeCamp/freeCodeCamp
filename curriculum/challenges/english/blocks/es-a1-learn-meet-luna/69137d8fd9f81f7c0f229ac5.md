---
id: 69137d8fd9f81f7c0f229ac5
title: Task 3
challengeType: 19
dashedName: task-3
lang: es
---

<!-- (Audio) Luna: Me llamo Luna. -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What is the speaker's name?

## --answers--

`Marisol`

### --feedback--

The speaker does not introduce herself with this name. Listen carefully to what she says after `me llamo`.

---

`Julieta`

### --feedback--

This name does not match what you hear in the audio.

---

`Luna`

---

`Camila`

### --feedback--

This is another common name, but not the one mentioned by the speaker.

## --video-solution--

3

# --explanation--

`Me llamo` comes from the reflexive verb `llamarse`, which means **to call oneself**.

In Spanish, when introducing yourself, you say `Me llamo` + [your name]. For example:

- `Me llamo Mateo.` - My name is Mateo.

- `Me llamo Julieta.` - My name is Julieta.

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
      "startTimestamp": 2.4,
      "finishTimestamp": 3.49
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
      "finishTime": 2.09,
      "dialogue": {
        "text": "Me llamo Luna.",
        "align": "center"
      }
    },
    {
      "character": "Luna",
      "opacity": 0,
      "startTime": 2.59
    }
  ]
}
```
