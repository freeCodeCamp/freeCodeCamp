---
id: 6903913aedf7c8a38ed31413
title: Task 5
challengeType: 19
dashedName: task-5
lang: es
---

<!-- (Audio) Luna: Soy chilena. -->

# --description-- 

In Spanish, many professions and nationalities have gendered forms. Some common patterns are:

| Profession/Nationality | Masculine  | Feminine |
|-------------|---------------------|--------------------|
| Engineer    | `ingeniero`         | `ingeniera`        |
| Designer    | `diseñador`         | `diseñadora`       |
| Mexican     | `mexicano`          | `mexicana`         |
| Puerto Rican| `puertorriqueño`    | `puertorriqueña`   |


The ending `-o` is often masculine and `-a` is often feminine.

However, some nationalities and professions use the same word for both male and female. There is no fixed rule for identifying them, so the best way to learn them is by seeing them in real examples. For example:

`Soy costarricense.` - I'm Costa Rican. (neutral)

Luna is mentioning her nationality in Spanish.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What is Luna's nationality?

## --answers--

`Puertorriqueña`

### --feedback--

This means "Puerto Rican", but Luna did not say this.  

---

`Mexicana`

### --feedback--

This means "Mexican", but Luna's nationality is different.  

---

`Colombiana`

### --feedback--

This means "Colombian", but Luna said something else.  

---

`Chilena`

## --video-solution--

4

# --explanation--

The verb `soy` comes from `ser` and is used here to describe Luna's nationality. For example:

- `Soy chilena` - I'm Chilean. (feminine)

- `Soy mexicana.` – I'm Mexican. (feminine)  

- `Soy colombiano.` – I'm Colombian. (masculine)  

- `Soy puertorriqueño.` – I'm Puerto Rican. (masculine)

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
      "startTimestamp": 5.63,
      "finishTimestamp": 6.61
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
      "finishTime": 1.98,
      "dialogue": {
        "text": "Soy chilena.",
        "align": "center"
      }
    },
    {
      "character": "Luna",
      "opacity": 0,
      "startTime": 2.48
    }
  ]
}
```
