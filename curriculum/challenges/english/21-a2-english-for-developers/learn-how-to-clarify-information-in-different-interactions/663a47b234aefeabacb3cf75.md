---
id: 663a47b234aefeabacb3cf75
title: Task 26
challengeType: 22
dashedName: task-26
---

<!-- (Audio) Sophie: Sure. Tom is a tall guy with a friendly smile. -->

# --description--

Another distinctive characteristic someone has is their height. You can say, for example, that someone is `tall` or `short`.
A `tall` person is someone above the average in terms of their height. The opposite is when someone is `short`, when this person is below the average.

# --fillInTheBlank--

## --sentence--

`Sure. Tom is a _ guy with a friendly smile.`

## --blanks--

`tall`

### --feedback--

Above the average in terms of height.

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Sophie",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.4
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "4.3-2.mp3",
      "startTime": 1,
      "startTimestamp": 15.12,
      "finishTimestamp": 17.74
    }
  },
  "commands": [
    {
      "character": "Sophie",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Sophie",
      "startTime": 1,
      "finishTime": 3.62,
      "dialogue": {
        "text": "Sure. Tom is a tall guy with a friendly smile.",
        "align": "center"
      }
    },
    {
      "character": "Sophie",
      "opacity": 0,
      "startTime": 4.12
    }
  ]
}
```
