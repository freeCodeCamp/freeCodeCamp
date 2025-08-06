---
id: 67b5b3dfdec8df1a5f326bc0
title: Task 110
challengeType: 22
dashedName: task-110
---

<!-- (audio) Maria: We've chosen a subtle color palette, but maybe adding some brighter tones would help. -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`We've chosen a BLANK color BLANK, but maybe adding some brighter tones would help.`

## --blanks--

`subtle`

### --feedback--

This means something that is not strong or obvious. It's something gentle or soft that you might not notice right away.

---

`palette`

### --feedback--

This refers to the range of colors used in a design or artwork. In this case, a `color palette` refers to the selection of colors chosen for the design of the app or project.

# --explanation--

`Subtle` refers to something that is delicate or not obvious. For example:

`The artist used subtle shades of blue in the painting.` - This means the artist used light or soft shades of blue that are not very strong or attention-grabbing.

`Palette` refers to the range of colors or materials an artist or designer uses. For example:

`The designer chose a warm palette for the website, using reds, oranges, and yellows.` - This means the designer selected a set of warm colors, such as red, orange, and yellow, for the website's design.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
    "characters": [
      {
        "character": "Maria",
        "position": {
          "x": 50,
          "y": 0,
          "z": 1.5
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_10-3.mp3",
      "startTime": 1,
      "startTimestamp": 36.2,
      "finishTimestamp": 39.94
    }
  },
  "commands": [
    {
      "character": "Maria",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Maria",
      "startTime": 1,
      "finishTime": 4.74,
      "dialogue": {
        "text": "We've chosen a subtle color palette, but maybe adding some brighter tones would help.",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "opacity": 0,
      "startTime": 5.24
    }
  ]
}
```
