---
id: 680aef568ac1bd591eceb0dc
title: Task 98
challengeType: 22
dashedName: task-98
---

<!-- (Audio) Riker: The ads cost more than we thought they would. -->

# --instructions--

Listen to the audio and complete the sentence below.

# --fillInTheBlank--

## --sentence--

`The BLANK cost more than we thought they would.`

## --blanks--

`ads`

### --feedback--

This is a short form for something that means messages or content created to promote a product, service, or event. Use the plural form.

# --explanation--

An `ad` (short for `advertisement`) is a piece of content designed to get people's attention and encourage them to buy something, use a service, or take action. Ads can appear on social media, websites, TV, radio, and more. For example:

- `They launched a new ad campaign for their latest product.` – This means the company created and shared promotional content to raise interest in a product.

- `We saw a lot of online ads for the holiday sale.` – This means there were many promotional messages about the sale on websites or apps.

# --scene--

```json
{
  "setup": {
    "background": "company1-boardroom.png",
    "characters": [
      {
        "character": "Riker",
        "position": {
          "x": 50,
          "y": 15,
          "z": 1.2
        },
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "B1_18-3.mp3",
      "startTime": 1,
      "startTimestamp": 30.7,
      "finishTimestamp": 32.46
    }
  },
  "commands": [
    {
      "character": "Riker",
      "opacity": 1,
      "startTime": 0
    },
    {
      "character": "Riker",
      "startTime": 1,
      "finishTime": 2.76,
      "dialogue": {
        "text": "The ads cost more than we thought they would.",
        "align": "center"
      }
    },
    {
      "character": "Riker",
      "opacity": 0,
      "startTime": 3.26
    }
  ]
}
```
