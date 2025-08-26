---
id: 66df6aad5cfef4692e2e2a5a
title: Task 74
challengeType: 22
dashedName: task-74
---
<!--
AUDIO REFERENCE:
Linda: Not yet, but I anticipate we'll start receiving more detailed reports as more users navigate the updated interface.
-->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`Not yet, but I anticipate we'll start receiving more detailed reports BLANK BLANK BLANK BLANK the updated interface.`

## --blanks--

`as`

### --feedback--

A word that shows two actions happening at the same time or one action depending on another.

---

`more`

### --feedback--

A word that indicates a greater quantity or number.

---

`users`

### --feedback--

A word that refers to the people navigating the updated interface.

---

`navigate`

### --feedback--

A word that means to move around or through something, such as a website or an app.

# --explanation--

`As` can be used to mean "while" or "when", showing that one action will happen while another action is taking place. For example:

- `As I was walking home, they called me.` - They called you while you were walking home.

- `You will get better at coding as you practice more.` - You will improve while or when you practice more.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Linda",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_3-2.mp3",
      "startTime": 1,
      "startTimestamp": 34.22,
      "finishTimestamp": 40.44
    }
  },
  "commands": [
    {
      "character": "Linda",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Linda",
      "startTime": 1,
      "finishTime": 4.82,
      "dialogue": {
        "text": "Not yet, but I anticipate we'll start receiving more detailed reports",
        "align": "center"
      }
    },
    {
      "character": "Linda",
      "startTime": 4.82,
      "finishTime": 7.22,
      "dialogue": {
        "text": "as more users navigate the updated interface.",
        "align": "center"
      }
    },
    {
      "character": "Linda",
      "opacity": 0,
      "startTime": 7.72
    }
  ]
}
```
