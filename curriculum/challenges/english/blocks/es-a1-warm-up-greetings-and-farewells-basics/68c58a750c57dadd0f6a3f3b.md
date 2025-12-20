---
id: 68c58a750c57dadd0f6a3f3b
title: Task 6
challengeType: 19
dashedName: task-6
lang: es
---
<!-- (Audio) Esteban: Chao -->

# --description--

Esteban is saying goodbye, but he's keeping it casual. This word is very common in informal conversations across many Spanish-speaking countries.

# --instructions--

Listen to the audio and answer the question below.

# --questions--

## --text--

What word does Esteban use to say goodbye informally?

## --answers--

`Adiós`

### --feedback--

This is also a goodbye, but it's not the word you hear in the audio.

---

`¡Hola!`

### --feedback--

This means "Hi", a general greeting commonly used when you meet a person.

---

`Chao`

---

`Buenos días.`

### --feedback--

This means "Good morning", and it's not used to say goodbye.

## --video-solution--

3

# --explanation--

`Chao` is an informal way to say goodbye in Spanish. It translates to "Bye". For example:  

`Chao, hasta mañana.` – Bye, see you tomorrow.

**Note**: There are two common spellings: `chao` and `chau`. Both are correct and used in different regions:

- `Chao` is more common in countries like Chile, Colombia, and Spain.

- `Chau` is more frequent in Argentina, Uruguay, and Paraguay.

# --scene--

```json
{
  "setup": {
    "background": "company3-boardmeeting.png",
    "characters": [
      {
        "character": "Esteban",
        "position": {
          "x": 50,
          "y": 25,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_spanish_greetings_in_the_evening.mp3",
      "startTime": 1,
      "startTimestamp": 6.57,
      "finishTimestamp": 7.11
    }
  },
  "commands": [
    {
      "character": "Esteban",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Esteban",
      "startTime": 1,
      "finishTime": 1.54,
      "dialogue": {
        "text": "Chao.",
        "align": "center"
      }
    },
    {
      "character": "Esteban",
      "opacity": 0,
      "startTime": 2.04
    }
  ]
}
```
