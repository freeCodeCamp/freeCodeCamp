---
id: 68d2ba1468508398389487cf
title: "Challenge 74: Favorite Songs"
challengeType: 29
dashedName: challenge-74
---

# --description--

Remember iPods? The first model came out 24 years ago today, on Oct. 23, 2001.

Given an array of song objects representing your iPod playlist, return an array with the titles of the two most played songs, with the most played song first.

- Each object will have a `"title"` property (string), and a `"plays"` property (integer).

# --hints--

`favorite_songs([{"title": "Sync or Swim", "plays": 3}, {"title": "Byte Me", "plays": 1}, {"title": "Earbud Blues", "plays": 2} ])` should return `["Sync or Swim", "Earbud Blues"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(favorite_songs([{"title": "Sync or Swim", "plays": 3}, {"title": "Byte Me", "plays": 1}, {"title": "Earbud Blues", "plays": 2} ]), ["Sync or Swim", "Earbud Blues"])`)
}})
```

`favorite_songs([{"title": "Skip Track", "plays": 98}, {"title": "99 Downloads", "plays": 99}, {"title": "Clickwheel Love", "plays": 100} ])` should return `["Clickwheel Love", "99 Downloads"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(favorite_songs([{"title": "Skip Track", "plays": 98}, {"title": "99 Downloads", "plays": 99}, {"title": "Clickwheel Love", "plays": 100} ]), ["Clickwheel Love", "99 Downloads"])`)
}})
```

`favorite_songs([{"title": "Song A", "plays": 42}, {"title": "Song B", "plays": 99}, {"title": "Song C", "plays": 75} ])` should return `["Song B", "Song C"]`.

```js
({test: () => { runPython(`
from unittest import TestCase
TestCase().assertEqual(favorite_songs([{"title": "Song A", "plays": 42}, {"title": "Song B", "plays": 99}, {"title": "Song C", "plays": 75} ]), ["Song B", "Song C"])`)
}})
```

# --seed--

## --seed-contents--

```py
def favorite_songs(playlist):

    return playlist
```

# --solutions--

```py
def favorite_songs(playlist):
    sorted_songs = sorted(playlist, key=lambda x: x["plays"], reverse=True)
    return [song["title"] for song in sorted_songs[:2]]
```
