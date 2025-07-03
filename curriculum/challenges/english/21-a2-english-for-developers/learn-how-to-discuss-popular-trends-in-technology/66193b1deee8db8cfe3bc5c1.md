---
id: 66193b1deee8db8cfe3bc5c1
title: Task 40
challengeType: 19
dashedName: task-40
---

<!-- (Audio) Tom: What other collaboration tools are there? Alice: Well, there are project management tools. They help teams to organize tasks. Also, cloud storage services make it easy to share and collaborate on documents. -->

# --description--

Listen to the audio and answer the question.

# --questions--

## --text--

What collaboration tools does Alice mention?

## --answers--

`Project management tools` and `cloud storage services`

---

`The internet` and `computer networks`

### --feedback--

Although these are important tools in today's world, they are not the tools Alice mentions.

---

`Screwdrivers` and `hammers`

### --feedback--

These are manual tools, not collaboration tools.

---

`Chat apps` and `email`

### --feedback--

These can be considered collaboration tools in a virtual environment, but Alice does not mention them.

## --video-solution--

1

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Tom",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      },
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
      "filename": "4.2-2.mp3",
      "startTime": 1,
      "startTimestamp": 30.82,
      "finishTimestamp": 42.02
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
      "finishTime": 3.04,
      "dialogue": {
        "text": "What other collaboration tools are there?",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 3.29
    },
    {
      "character": "Alice",
      "opacity": 1,
      "startTime": 3.29
    },
    {
      "character": "Alice",
      "startTime": 3.54,
      "finishTime": 7.46,
      "dialogue": {
        "text": "Well, there are project management tools. They help teams to organize tasks.",
        "align": "center"
      }
    },
    {
      "character": "Alice",
      "startTime": 8.06,
      "finishTime": 12.2,
      "dialogue": {
        "text": "Also, cloud storage services make it easy to share and collaborate on documents.",
        "align": "center"
      }
    },
    {
      "character": "Alice",
      "opacity": 0,
      "startTime": 12.7
    }
  ]
}
```
