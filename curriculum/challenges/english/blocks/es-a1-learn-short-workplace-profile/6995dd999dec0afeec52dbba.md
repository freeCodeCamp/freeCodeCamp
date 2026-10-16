---
id: 6995dd999dec0afeec52dbba
title: Task 13
challengeType: 22
dashedName: task-13
lang: es
---

<!-- (Audio) Luna: Trabaja en la oficina de Medellín. -->

# --description--

The word `oficina` means "office".

Luna is using this word to reply to Sebastián's question.

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`Trabaja en la BLANK de Medellín.`

## --blanks--

`oficina`

### --feedback--

This word refers to the place where people work.

# --explanation--

Luna says that Carlos `trabaja en la oficina de Medellín`.

This means that he works at the Medellín office.

You should write the word `oficina` to complete the sentence.

# --scene--

```json
{
  "setup": {
    "background": "interview-room2.png",
    "characters": [
      {
        "character": "Sebastián",
        "position": {
          "x": -25,
          "y": 21,
          "z": 1.5
        },
        "opacity": 1
      },
      {
        "character": "Luna",
        "position": {
          "x": 125,
          "y": 21,
          "z": 1.6
        },
        "opacity": 1
      },
      {
        "character": "Carlos",
        "position": {
          "x": 125,
          "y": 10,
          "z": 1.2
        },
        "opacity": 1
      }
    ],
    "audio": {
      "filename": "ES_A1_basti_asks_luna_about_carlos_dialogue.mp3",
      "startTime": 1,
      "startTimestamp": 10.95,
      "finishTimestamp": 13.66
    },
    "alwaysShowDialogue": false
  },
  "commands": [
    {
      "character": "Sebastián",
      "position": {
        "x": 22,
        "y": 21,
        "z": 1.5
      },
      "startTime": 0
    },
    {
      "character": "Luna",
      "position": {
        "x": 46,
        "y": 21,
        "z": 1.6
      },
      "startTime": 0.5
    },
    {
      "character": "Carlos",
      "position": {
        "x": 81,
        "y": 10,
        "z": 1.2
      },
      "startTime": 0.7
    },
    {
      "character": "Luna",
      "startTime": 1,
      "finishTime": 3.71,
      "dialogue": {
        "text": "Trabaja en la oficina de Medellín.",
        "align": "left"
      }
    },
    {
      "character": "Carlos",
      "position": {
        "x": 125,
        "y": 10,
        "z": 1.2
      },
      "startTime": 4.21
    },
    {
      "character": "Luna",
      "position": {
        "x": 125,
        "y": 21,
        "z": 1.6
      },
      "startTime": 4.71
    },
    {
      "character": "Sebastián",
      "position": {
        "x": -25,
        "y": 21,
        "z": 1.5
      },
      "startTime": 4.91
    }
  ]
}
```
