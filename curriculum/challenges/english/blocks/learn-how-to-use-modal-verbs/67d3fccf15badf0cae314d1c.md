---
id: 67d3fccf15badf0cae314d1c
title: Task 7
challengeType: 22
dashedName: task-7
---

<!-- (Audio) Mark: Sure, Jessica. What do I need to do? -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`Sure, Jessica. What do I BLANK to BLANK?`

## --blanks--

`need`

### --feedback--

This verb shows necessity, meaning something is required.

---

`do`

### --feedback--

This verb follows `need` to when asking about an action.

# --explanation--

`Need to` is used when asking about necessary actions. It is followed by the base form of the verb (`do`). For example:

- `We need to do more testing before releasing the app.` - It is necessary to test the app before launching it.

- `We need to do some updates to fix the bugs.` - It is necessary to update the system to solve problems.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Mark",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_14-1.mp3",
      "startTime": 1,
      "startTimestamp": 7,
      "finishTimestamp": 9.08
    }
  },
  "commands": [
    {
      "character": "Mark",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Mark",
      "startTime": 1,
      "finishTime": 3.08,
      "dialogue": {
        "text": "Sure, Jessica. What do I need to do?",
        "align": "center"
      }
    },
    {
      "character": "Mark",
      "opacity": 0,
      "startTime": 3.58
    }
  ]
}
```
