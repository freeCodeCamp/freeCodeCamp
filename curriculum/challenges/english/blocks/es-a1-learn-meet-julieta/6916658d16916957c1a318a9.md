---
id: 6916658d16916957c1a318a9
title: Task 8
challengeType: 22
dashedName: task-8
lang: es
---

# --description--

Julieta is not only saying "see you tomorrow", but also using a polite farewell similar to `adiós` in Spanish.

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`Hasta mañana. BLANK.`

## --blanks--

`chao`

### --feedback--

This is an informal way to say "bye" in Spanish, often used among friends. It ends with the letter `o`.

# --explanation--

The phrase `Hasta mañana` means "see you tomorrow." 

The word `chao` is an informal way to say "bye" in Spanish, similar to the word `ciao` in Italian.

Saying `Hasta mañana. Chao.` is a friendly and polite farewell. You can use it when you expect to meet the person again the next day.

# --scene--

```json
{
  "setup": {
    "background": "interview-room3.png",
    "characters": [
      {
        "character": "Julieta",
        "position": {
          "x": 50,
          "y": 18,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_spanish_meet_julieta.mp3",
      "startTime": 1,
      "startTimestamp": 9.33,
      "finishTimestamp": 11.25
    }
  },
  "commands": [
    {
      "character": "Julieta",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Julieta",
      "startTime": 1,
      "finishTime": 2.1,
      "dialogue": {
        "text": "Hasta mañana.",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "startTime": 2.28,
      "finishTime": 2.92,
      "dialogue": {
        "text": "Chau.",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 3.42
    }
  ]
}
```

