---
id: 657e1fd7b5ffaebc0ff4bd9f
title: Завдання 26
challengeType: 19
dashedName: task-26
---

<!-- (audio) Tom: Thanks for sharing, Sophie. I want to get more organized and your tips are a great help to me. -->

# --description--

Послухайте аудіо та дайте відповідь на запитання.

# --question--

## --text--

Чому Том дякує Софі?

## --answers--

Бо вона порадила застосунок для управління часом.

### --feedback--

Том дякує Софі за поради, а не за те, що порадила програму.

---

Тому що він вважає поради Софі корисними.

---

Бо вона запросила його на обід.

### --feedback--

Він дякує за поради, а не запрошення на обід.

---

За допомогу з проєктом.

### --feedback--

Подяка Тома пов’язана з порадами щодо організації, а не проєктом.

## --video-solution--

2

# --scene--

```json
{
  "setup": {
    "background": "company2-breakroom.png",
    "characters": [
      {
        "character": "Tom",
        "position": {"x":50,"y":15,"z":1.2},
        "opacity": 0
      }
    ],
    "audio": {
      "filename": "2.1-1.mp3",
      "startTime": 1,
      "startTimestamp": 58.29,
      "finishTimestamp": 63.00
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
      "finishTime": 5.71,
      "dialogue": {
        "text": "Thanks for sharing, Sophie. I want to get more organized and your tips are a great help to me.",
        "align": "center"
      }
    },
    {
      "character": "Tom",
      "opacity": 0,
      "startTime": 6.21
    }
  ]
}
```
