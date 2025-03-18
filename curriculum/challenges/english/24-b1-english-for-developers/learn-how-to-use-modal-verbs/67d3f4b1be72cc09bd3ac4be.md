---
id: 67d3f4b1be72cc09bd3ac4be
title: Task 4
challengeType: 22
dashedName: task-4
---

<!-- (Audio) Jessica: There are a few things you must do to ensure compliance. -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`There are a few things you BLANK BLANK to ensure compliance.`

## --blanks--

`must`

### --feedback--

This modal verb expresses necessity or obligation.

---

`do`

### --feedback--

This verb follows `must` to indicate an action that is required.

# --explanation--

`Must` is a modal verb used to express necessity or obligation. For example:

- `You must wear a seatbelt while driving.` - It is required.

- `We must submit the report by Friday.` - It is necessary.

Modal verbs are always followed by the base form of the verb (without `to`).

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Jessica",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_14-1.mp3",
      "startTime": 1,
      "startTimestamp": 4.02,
      "finishTimestamp": 6.62
    }
  },
  "commands": [
    {
      "character": "Jessica",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Jessica",
      "startTime": 1,
      "finishTime": 3.6,
      "dialogue": {
        "text": "There are a few things you must do to ensure compliance.",
        "align": "center"
      }
    },
    {
      "character": "Jessica",
      "opacity": 0,
      "startTime": 4.1
    }
  ]
}
```
