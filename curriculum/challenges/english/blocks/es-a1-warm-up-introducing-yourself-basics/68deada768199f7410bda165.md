---
id: 68deada768199f7410bda165
title: Task 1
challengeType: 19
dashedName: task-1
lang: es
---

<!-- (Audio) Mateo: Científica de datos. -->

# --description--

In Spanish, many professions have **masculine** and **feminine** forms. A common pattern is:

| Profession | Masculine  | Feminine |
|-------------|---------------------|--------------------|
| Engineer    | `ingeniero`         | `ingeniera`        |
| Designer    | `diseñador`         | `diseñadora`       |
| Scientist   | `científico`        | `científica`       |


The ending `-o` is often masculine and `-a` is often feminine. You'll learn more patterns as you continue practicing.

Mateo is mentioning a profession that analyzes large amounts of information to find patterns and help make decisions.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What profession is Mateo mentioning?

## --answers--

`Ingeniero de software`

### --feedback--

Mateo didn't mention a male software engineering.

---

`Estratega de marketing`

### --feedback--

Mateo didn't mention a female Marketing Strategist.

---

`Profesor de ciencias`

### --feedback--

Mateo didn’t mention a male Science Professor.

---

`Científica de datos`

## --video-solution--

4

# --explanation--

`Científica de datos` means "Data Scientist".  

In Spanish, many professions change their ending depending on whether the speaker is **female** or **male**. For example:

- `Científica de datos` – Data scientist (feminine).

- `Científico de datos` – Data scientist (masculine).

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
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
      "filename": "ES_A1_spanish_introducing_yourself_vocabulary.mp3",
      "startTime": 1,
      "startTimestamp": 1.5,
      "finishTimestamp": 3.87
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
      "finishTime": 3.37,
      "dialogue": {
        "text": "Científica de datos",
        "align": "center"
      }
    },
    {
      "character": "Mateo",
      "opacity": 0,
      "startTime": 3.87
    }
  ]
}
```
