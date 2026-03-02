---
id: 657dbdae2bd6f60bda3226cc
title: Task 81
challengeType: 22
dashedName: task-81
lang: en-US
---

<!-- (audio) Tom: Tell me about our team meetings, Sophie. Do they happen every week? -->

# --description--

When you want to know how often something happens, you can use `every` followed by a time period like `day`, `week`, or `year`.

In the dialogue, Tom is asking about the frequency of the team meetings.

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`Tell me about our team meetings, Sophie. Do they happen BLANK week?`

## --blanks--

`every`

### --feedback--

This word is used to ask if the meetings happen weekly.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Tom",
        "position": {"x":50,"y":15,"z":1.2},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "1.3-4.mp3",
      "startTime": 1,
      "startTimestamp": 0.00,
      "finishTimestamp": 3.70
    }
  },
  "commands": [
    {
      "character": "Tom",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Tom",
      "startTime": 1,
      "finishTime": 4.70,
      "dialogue": {
        "text": "Tell me about our team meetings, Sophie. Do they happen every week?",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 5.20
    }
  ]
}
```
