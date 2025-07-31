---
id: 67acaebb95dabb0ee05500f7
title: Task 21
challengeType: 22
dashedName: task-21
---

<!-- (Audio) Anna: If people are working with outdated computers, it can be a setback for productivity. -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`If people are working with outdated computers, it can be a BLANK for productivity.`

## --blanks--

`setback`

### --feedback--

This word means an obstacle or something that slows down progress.

# --explanation--

A `setback` is something that delays or prevents progress. Slow or inefficient computers might make tasks take longer, reducing efficiency. For example:

- `The project faced a setback due to a critical bug.` - The project was delayed or had problems because of a serious software issue.

- `Losing important data was a major setback for the team.` - Losing data created difficulties and slowed down the team's work.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
    "characters": [
      {
        "character": "Anna",
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
      "startTimestamp": 35.78,
      "finishTimestamp": 39.68
    }
  },
  "commands": [
    {
      "character": "Anna",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Anna",
      "startTime": 1,
      "finishTime": 4.9,
      "dialogue": {
        "text": "If people are working with outdated computers, it can be a setback for productivity.",
        "align": "center"
      }
    },
    {
      "character": "Anna",
      "opacity": 0,
      "startTime": 5.4
    }
  ]
}
```
