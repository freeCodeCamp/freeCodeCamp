---
id: 657ddcd61f516cacdc7a04ca
title: Task 124
challengeType: 19
dashedName: task-124
---

<!-- (audio) Maria: The bookstores I remember are all downtown. There is a bus that stops two blocks away. -->

# --description--

Maria informs Tom about public transportation options, specifically mentioning a transportation that stops nearby. This is important for getting around the city, especially to places that are not within walking distance.

`Two blocks away` means that you need to walk past two street corners to get to a place. It's a short walk in a city.

`Downtown` is the heart of a city where there are many shops, restaurants, and usually tall buildings.

# --question--

## --text--

What does Maria say stops two blocks away?

## --answers--

A taxi.

### --feedback--

Maria mentions a public transportation option, not a private service.

---

A train.

### --feedback--

Trains don't typically stop at blocks; they stop at stations.

---

A bus.

---

A bicycle rental.

### --feedback--

Rentals are usually stationary services, not something that stops.

## --video-solution--

3

# --scene--

```json
{
  "setup": {
    "background": "company2-center.png",
    "characters": [
      {
        "character": "Maria",
        "position": {"x":50,"y":0,"z":1.5},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "1.3-5.mp3",
      "startTime": 1,
      "startTimestamp": 37.92,
      "finishTimestamp": 42.38
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
      "finishTime": 5.46,
      "dialogue": {
        "text": "The bookstores I remember are all downtown, but there's a bus that stops two blocks away.",
        "align": "center"
      }
    },
    {
      "character": "Maria",
      "opacity": 0,
      "startTime": 5.96
    }
  ]
}
