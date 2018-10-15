---
title: Build a Markdown Previewer
---
## Build a Markdown Previewer

1. Add an onChangeListener on the textarea
2. On every onChange event save the textarea's value into the state
3. Create the preview div, pass the textarea's value into the marked library and set the preview's html to the corresponding returned marked html output. With React you can do it using the dangerouslySetInnerHTML attribute:
```
  dangerouslySetInnerHTML={{
    __html: ...
  }}
```
