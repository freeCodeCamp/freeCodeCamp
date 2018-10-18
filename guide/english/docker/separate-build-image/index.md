---
title: Separate Build Image
---
## Overview

Making lightweight docker images is key to having a fast development/deployment pipeline. For compiled code, building the binary inside a docker container has the benefit of being a repeatable and standardised build process. However, this can create a very large images which can become an issue down the line.

## Our code

In this example, we will use a simple webserver writen in [Go](https://golang.org/). The following code is just a simple hello world webserver listening on port `8080`.

```go
package main

import (
    "fmt"
    "log"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "Hello world!")
}

func main() {
    http.HandleFunc("/", handler)
    log.Fatal(http.ListenAndServe(":8080", nil))
}
```

### Dockerfile

The Dockerfile for this code might look something like this

```
FROM golang:1.11

ADD . /app

WORKDIR /app

RUN go build -o /myserver .

EXPOSE 8080

CMD [ "/myserver" ]
```

Building this image results in an image with a size of 783MB!! With an image that size for a simple application, it's easy to see how this can slow things down when deploying.

## A better solution

A better solution would be to use a separate build image to build the binary and then copy it to the final image. As Go generates a standalone binary, we can use the `scratch` docker image as a base which is about as small as it gets!

### Dockerfile

The following Dockerfile will first build the binary inside the golang image and then build a new image from scratch, copying the binary from the first image into the second.

```
FROM golang:1.11 as build

ADD . /app

WORKDIR /app

RUN go build -o /myserver .


FROM scratch

COPY --from=build /myserver /myserver

EXPOSE 8080

CMD [ "myserver" ]
```

Building from this dockerfile results in a final image size of only 6.55MB! That's over **100 times smaller** than our first attempt, making it 100 times faster to pull the image down from a registry!

### Bonus benefit

Not only do we now have a tiny docker image for our application, we also only have to worry about the security of our application as there is no other software running inside the container.