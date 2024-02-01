---
id: 657dbdae2bd6f60bda3226cc
title: Task 78
challengeType: 22
dashedName: task-78
---

<!-- (audio) Tom: Tell me about our team meetings, Sophie. Do they happen every week? -->
<!-- Sophie: Yes, they do. We have meetings on Monday mornings. -->


# --description--

When you want to know how often something happens, you can use `every` followed by a time period like `day,` `week,` or `year.` In this dialogue, Tom is asking about the frequency of the team meetings.

# --instructions--

Listen to the audio to complete the sentence below.

# --fillInTheBlank--

## --sentence--

`Tell me about our team meetings, Sophie. Do they happen _ week?`

## --blanks--

`every`

### --feedback--

Tom is asking if the meetings happen every week.


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
