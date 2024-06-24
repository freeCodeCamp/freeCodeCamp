---
id: 662e4f2edbb46a1dc6efc94f
title: Task 36
challengeType: 22
dashedName: task-36
---

<!-- (Audio) Tom: Don't worry. Debugging is a common challenge for programmers. -->

# --description--

`Common` is used to describe something that happens often or is widely shared among many people. For example, `Colds are a common illness during the winter.` This means it's a usual health issue many people face during that time of year.

`Challenge` refers to a task or situation that requires special effort to accomplish because it is difficult. For instance, `Learning to ride a bike was a big challenge for her at first.` This sentence describes how learning to ride a bike presented difficulties initially.

# --fillInTheBlank--

## --sentence--

`Don't worry. Debugging is a _ _ for programmers.`

## --blanks--

`common`

### --feedback--

This adjective describes something that occurs frequently or is usual among a group.

---

`challenge`

### --feedback--

This noun refers to a difficult task or problem that requires effort to solve or overcome.

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
      }
    ],
    "audio": {
      "filename": "5.1-2.mp3",
      "startTime": 1,
      "startTimestamp": 5.02,
      "finishTimestamp": 8.18
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
      "finishTime": 4.16,
      "dialogue": {
        "text": "Don't worry. Debugging is a common challenge for programmers.",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 4.66
    }
  ]
}
```
