---
title: Manipulating Complex Objects
---
# Manipulating Complex Objects


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

 After string `// Add record here` we add new album to the `myMusic`. You need to start from `,`. And you can just copy already created album:

```
{
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
```
 
 and paste after `,`:
 
```
  // Add record here
  ,
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
```

Now, you can change values your album:

```
  // Add record here
  ,
  {
    "artist": "Deep Purple",
    "title": "Smoke on the water",
    "release_year": 1976,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];
```

 Here’s a full solution:
 
```javascript
var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true
  },
  // Add record here
  {
    artist: "Deep Purple",
    title: "Smoke on the water",
    release_year: 1976,
    formats: ["CD", "8T", "LP"]
  }
];
```
</details>
