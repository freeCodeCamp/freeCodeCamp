---
id: 67ed38f77f1fbd02acdcf5ff
title: Task 53
challengeType: 22
dashedName: task-53
---

<!-- (Audio) Lisa: Sure, Mark. What's going on? -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`Sure, Mark. What's BLANK?`

## --blanks--

`going on`

### --feedback--

This two-word phrase is used to ask about what is happening or what the situation is. The first word ends with `-ing`.

# --explanation--

`What's going on?` is a common way to ask someone what is happening, what the situation is, or what problem or event is taking place. For example:

`What's going on at the meeting?` – Someone is asking what is happening during the meeting.

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
      "filename": "B1_16-2.mp3",
      "startTime": 1,
      "startTimestamp": 7.92,
      "finishTimestamp": 9.1
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
      "finishTime": 2.18,
      "dialogue": {
        "text": "Sure, Mark. What's going on?",
        "align": "center"
      }
    },
    {
      "character": "Lisa",
      "opacity": 0,
      "startTime": 2.68
    }
  ]
}
```
