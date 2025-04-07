---
id: 67dbf936fe4d33ccbccae40d
title: Task 1
challengeType: 22
dashedName: task-1
---

<!-- (Audio) Alice: Hey, James. Sorry for the interruption earlier. -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`Hey, James. BLANK for the interruption earlier.`

## --blanks--

`Sorry`

### --feedback--

This is used to apologize for something that happened. Don't forget to capitalize.

# --explanation--

`To be sorry for something` is used when apologizing for an action that may have caused inconvenience or harm. For example:

`I'm sorry for being late to the meeting.` - This means the speaker regrets arriving late and is apologizing. Notice that `being` is in the `-ing` form as it is right after `for` (a preposition).

# --scene--

```json
{
  "setup": {
    "background": "interview-room2.png",
    "characters": [
      {
        "character": "Alice",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_15-1.mp3",
      "startTime": 1,
      "startTimestamp": 0,
      "finishTimestamp": 2.82
    }
  },
  "commands": [
    {
      "character": "Alice",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Alice",
      "startTime": 1,
      "finishTime": 3.82,
      "dialogue": {
        "text": "Hey, James. Sorry for the interruption earlier.",
        "align": "center"
      }
    },
    {
      "character": "Alice",
      "opacity": 0,
      "startTime": 4.32
    }
  ]
}
```
