---
id: 67d83cac8f7ced9c5df81df9
title: Task 144
challengeType: 22
dashedName: task-144
---

<!-- (audio) Lisa: This will help us understand the extent of the breach and what they might have taken. -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`This will help us understand the extent of the breach and what they BLANK BLANK.`

## --blanks--

`might`

### --feedback--

This modal verb expresses possibility or uncertainty about a past event.

---

`have taken`

### --feedback--

This verb is the `Past Perfect` form, used to talk about something that could have happened in the past. Use two words.

# --explanation--  

`Might` expresses possibility.  

`Have taken` is the `Past Perfect` form of `take`, used to talk about a possible past action. For example:

`The attacker might have taken sensitive files.` - We don't know for sure, but it is possible.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Lisa",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_14-3.mp3",
      "startTime": 1,
      "startTimestamp": 53.8,
      "finishTimestamp": 57.7
    }
  },
  "commands": [
    {
      "character": "Lisa",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Lisa",
      "startTime": 1,
      "finishTime": 4.9,
      "dialogue": {
        "text": "This will help us understand the extent of the breach and what they might have taken.",
        "align": "center"
      }
    },
    {
      "character": "Lisa",
      "opacity": 0,
      "startTime": 5.4
    }
  ]
}
```
