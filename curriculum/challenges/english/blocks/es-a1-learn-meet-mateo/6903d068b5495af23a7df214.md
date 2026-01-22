---
id: 6903d068b5495af23a7df214
title: Task 3
challengeType: 19
dashedName: task-3
lang: es
---

<!-- (Audio) Mateo: Soy ingeniero de software. -->

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What is Mateo's profession?

## --answers--

`Científica de datos`

### --feedback--

This option refers to a different profession related to data and it's in female form.

---

`Ingeniero de software`

---

`Estratega de marketing`

### --feedback--

This profession focuses on creating marketing strategies.

---

`Arquitecto`

### --feedback--

This refers to someone who designs buildings.

## --video-solution--

2

# --explanation--


`Soy ingeniero de software` means "I'm a software engineer".

Use `soy` when describing who you are or what you do. For example:

- `Soy diseñador UX.` – I'm a UX designer. (masculine)

- `Soy profesora.` – I'm a teacher. (feminine)

- `Soy estudiante.` – I'm a student. (neutral)

- `Soy Mateo.` – I'm Mateo.

# --scene--

```json
{
  "setup": {
    "background": "company3-reception.png",
    "characters": [
      {
        "character": "Mateo",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_spanish_meet_mateo.mp3",
      "startTime": 1,
      "startTimestamp": 3.85,
      "finishTimestamp": 5.39
    }
  },
  "commands": [
    {
      "character": "Mateo",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Mateo",
      "startTime": 1,
      "finishTime": 2.54,
      "dialogue": {
        "text": "Soy ingeniero de software.",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "opacity": 0,
      "startTime": 3.04
    }
  ]
}
```
