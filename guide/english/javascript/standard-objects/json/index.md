---
title: JSON
---
JavaScript Object Notation or `JSON` uses the format of JavaScript Objects to store data. JSON is flexible because it allows for `Data Structures` with arbitrary combinations of `strings`, `numbers`, `booleans`, `arrays`, and `objects`.

Here is an example of a JSON object:

    var ourMusic = [
      {
        "artist": "Daft Punk",
        "title": "Homework",
        "release_year": 1997,
        "formats": [ 
          "CD", 
          "Cassette", 
          "LP" ],
        "gold": true
      }
    ];

This is an array of objects and the object has various pieces of `metadata` about an album. It also has a nested `formats` array. Additional album records could be added to the top level array.