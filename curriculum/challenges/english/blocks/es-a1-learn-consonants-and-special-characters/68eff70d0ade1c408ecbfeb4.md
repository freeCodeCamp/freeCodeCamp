---
id: 68eff70d0ade1c408ecbfeb4
title: Task 6
challengeType: 22
dashedName: task-6
---

# --description--

The letter `d` is called `de` (pronounced `deh`).

At the beginning of a word or after `l` or `n`, its sound is similar to the English letter `d`. However, between vowels, the letter `d` softens to a sound similar to the "th" in "this".

An example is `doctor` ("doctor").

# --fillInTheBlank--

## --sentence--

`Write the letter: BLANK`

## --blanks--

`d`

### --feedback--

This is the fourth letter in the alphabet.

# --scene--

```json
{
  "setup": {
    "background": "living-room.png",
    "characters": [
      {
        "character": "Julieta",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "ES_A1_alphabet.mp3",
      "startTime": 1,
      "startTimestamp": 8.39,
      "finishTimestamp": 9.39
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
      "finishTime": 2,
      "dialogue": {
        "text": "d",
        "align": "center"
      }
    },
    {
      "character": "Julieta",
      "opacity": 0,
      "startTime": 2.5
    }
  ]
}
```
