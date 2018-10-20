---
title: Go Channels
---
## Go Channels

Channels are a typed conduit through which you can send and receive values with the channel operator, <-. 

```go
ch <- v    // Send v to channel ch.
v := <-ch  // Receive from ch, and
           // assign value to v.
```

(The data flows in the direction of the arrow.)

Like maps and slices, channels must be created before use: 

```go
ch := make(chan int)
```
By default, sends and receives block until the other side is ready. This allows goroutines to synchronize without explicit locks or condition variables. 

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [A Tour of Go](https://tour.golang.org/concurrency/2)
* [Go By Example](https://gobyexample.com/channels)
* [Golang Book](https://www.golang-book.com/books/intro/10)
* [The Go Programming Language Specification](https://golang.org/ref/spec#Making_slices_maps_and_channels)
