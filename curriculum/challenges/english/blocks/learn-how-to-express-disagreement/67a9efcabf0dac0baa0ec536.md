---
id: 67a9efcabf0dac0baa0ec536
title: Task 4
challengeType: 22
dashedName: task-4
---

<!-- (Audio) Bob: It seems most people prefer using it for office furniture. -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`It seems most people prefer using it for BLANK.`

## --blanks--

`office furniture`

### --feedback--

Think about what people need to improve their home workspace. This includes desks, chairs, and shelves.

# --explanation--

`Office furniture` refers to desks, chairs, shelves, and other items used in a workspace.

In this dialogue, Bob is talking about how employees are choosing to spend their remote work stipend. Since working from home requires a comfortable and productive setup, many people use the stipend to buy office furniture such as ergonomic chairs or spacious desks.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
    "characters": [
      {
        "character": "Bob",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_11-1.mp3",
      "startTime": 1,
      "startTimestamp": 4.46,
      "finishTimestamp": 8
    }
  },
  "commands": [
    {
      "character": "Bob",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Bob",
      "startTime": 1,
      "finishTime": 4.54,
      "dialogue": {
        "text": "It seems most people prefer using it for office furniture.",
        "align": "center"
      }
    },
    {
      "character": "Bob",
      "opacity": 0,
      "startTime": 5.04
    }
  ]
}
```
