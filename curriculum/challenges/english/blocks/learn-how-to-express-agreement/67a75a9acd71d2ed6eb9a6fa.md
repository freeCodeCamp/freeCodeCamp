---
id: 67a75a9acd71d2ed6eb9a6fa
title: Task 20
challengeType: 22
dashedName: task-20
---

<!-- (Audio) Linda: Absolutely. And I can also prepare some user scenarios for testing, so we can ensure a smooth user experience. -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`Absolutely. And I can also prepare some BLANK for testing, so we can ensure a smooth user experience.`

## --blanks--

`user scenarios`

### --feedback--

This two-word phrase refers to different situations that represent how a person might interact with a product.

# --explanation--

`User scenarios` refers to different situations that describe how users interact with a product to achieve a goal. It helps teams test and improve the user experience. For example:

`We created user scenarios to see how customers navigate the checkout process.` – This means the team simulated different ways users complete a purchase to identify any issues.  

# --scene--

```json
{
  "setup": {
    "background": "company2-boardroom.png",
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
      "filename": "B1_10-1.mp3",
      "startTime": 1,
      "startTimestamp": 20.86,
      "finishTimestamp": 26.68
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
      "finishTime": 6.82,
      "dialogue": {
        "text": "Absolutely. And I can also prepare some user scenarios for testing so we can ensure a smooth user experience.",
        "align": "center"
      }
    },
    {
      "character": "Linda",
      "opacity": 0,
      "startTime": 7.32
    }
  ]
}
```
