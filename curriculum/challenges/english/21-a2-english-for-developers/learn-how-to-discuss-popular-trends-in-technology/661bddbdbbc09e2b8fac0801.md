---
id: 661bddbdbbc09e2b8fac0801
title: Task 73
challengeType: 22
dashedName: task-73
---

<!-- (Audio) Alice: Also, it's used for identity verification at airports and secure facilities. -->

# --description--

The preposition `at` indicates a point on a map. It tells you a specific location or position. It helps you understand where something is happening or where someone is.

Examples:

`We'll meet at the coffee shop.` (in this sentence, `at` is used to specify the location where the meeting will take place - the coffee shop).

`I'll be waiting for you at the bus stop.` (`at` is used here to indicate the location where someone will be waiting - the bus stop). 

Listen to the sentence and fill in the blank.

# --fillInTheBlank--

## --sentence--

`Also, it's used for identity verification BLANK airports and secure facilities.`

## --blanks--

`at`

### --feedback--

The preposition used to help you understand where something is or happens.

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
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
      "filename": "4.2-4.mp3",
      "startTime": 1,
      "startTimestamp": 15.22,
      "finishTimestamp": 19.04
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
      "finishTime": 4.82,
      "dialogue": {
        "text": "Also, it's used for identity verification at airports and secure facilities.",
        "align": "center"
      }
    },
    {
      "character": "Alice",
      "opacity": 0,
      "startTime": 5.32
    }
  ]
}
```
