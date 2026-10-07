<!-- To edit this file, edit /src/README.md, not /README.md -->

# style-mod

Minimal CSS module shim for generating CSS rules for sets of style
-declarations and attaching such a set to a document or shadow root.

Using it would look something like this:

```javascript
const {StyleModule} = require("style-mod")
const myModule = new StyleModule({
  "#main": {
    fontFamily: "Georgia, 'Nimbus Roman No9 L'",
    margin: "0"
  },
  ".callout": {
    color: "red",
    fontWeight: "bold",
    "&:hover": {color: "orange"}
  }
})
StyleModule.mount(document, myModule)
```

This code is open source, released under an MIT license.
    
## Documentation

@StyleModule

Where the `Style` type is defined as:

@Style
