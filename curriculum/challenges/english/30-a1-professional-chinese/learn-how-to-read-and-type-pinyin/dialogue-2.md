---
id: 68a1b3f41d1a37da7ba66cbf
title: Initials
challengeType: 21
dashedName: initials
---

# --description--

This video will include the pronunciation of all 23 initials. Watch the video below to understand the context of the upcoming lessons.

# --assignment--

Watch the video.

# --scene--

```json
{
  "setup": {
    "background": "chaos.png",
    "characters": [
      {
        "character": "David",
        "position": {"x":50,"y":80,"z":8},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "1.1-1.mp3",
      "startTime": 1,
      "startTimestamp": 5.7,
      "finishTimestamp": 6.48
    }
  },
  "commands": [
    {
      "character": "David",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "David",
      "startTime": 1,
      "finishTime": 0.78,
      "dialogue": {
        "text": "I'm Tom.",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 1.28
    }
  ]
}
```
