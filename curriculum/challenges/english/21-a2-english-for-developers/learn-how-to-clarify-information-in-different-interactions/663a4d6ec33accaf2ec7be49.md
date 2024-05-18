---
id: 663a4d6ec33accaf2ec7be49
title: Task 27
challengeType: 22
dashedName: task-27
---

<!-- (Audio) Sophie: Sure. Tom is a tall guy with a friendly smile. -->

# --description--

A `smile` is what happens when you turn up the corners of your mouth to show happiness. It is something you do with your face when you are happy or want to be nice.

`Friendly` describes someone who is kind, nice, and easy to talk to. A friendly person makes others feel comfortable and happy.

`A friendly smile` is a smile that shows you are being kind and welcoming. It makes others feel good and shows you want to be friends.

Listen to the dialogue and fill in the blanks.

# --fillInTheBlank--

## --sentence--

`Sure. Tom is a tall guy with a _ _.`

## --blanks--

`friendly`

### --feedback--

This blank describes someone who is nice, easy to talk to and welcoming.

---

`smile`

### --feedback--

The action you do when you want to show happiness with your mouth.

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
