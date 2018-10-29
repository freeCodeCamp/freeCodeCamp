---
title: Range
---
## Range

To iterate over a collection in Go, we can use the range.

Range differs from for-loops as the item in a collection is not accessed by an index. 

If you want to access a specifc element in a collection, a for-loop is probably the better options. 

Here is an example:

```go
package main

import "fmt"

func main() {
  fruits := []string{"apple", "orange", "pear"}
  
  for _, fruit := range fruits {
    fmt.Println(fruit)
   }
}
```

Will output:

````
apple
orange
pear
````

You might have noticed the blank identifer that was used. 

The blank identifer (or the first variable returned from range) is the index of the item. 

This is best suited when ranging over a map, so you can get the key and value:

```go
package main

import "fmt"

func main() {
    kvs := map[string]string{"a": "apple", "b": "banana"}
    for k, v := range kvs {
        fmt.Printf("%s -> %s\n", k, v)
    
   }
}
```go

Outputs:

````
a -> apple
b -> banana
````
