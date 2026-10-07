# flatted (Go)

A super light and fast circular JSON parser.

## Usage

```go
package main

import (
	"fmt"
	"github.com/WebReflection/flatted/golang/pkg/flatted"
)

type Group struct {
	Name string `json:"name"`
}

type User struct {
	Name   string `json:"name"`
	Friend *User  `json:"friend"`
	Group  *Group `json:"group"`
}

func main() {
	group := &Group{Name: "Developers"}
	alice := &User{Name: "Alice", Group: group}
	bob := &User{Name: "Bob", Group: group}

	alice.Friend = bob
	bob.Friend = alice // Circular reference

	// Stringify Alice
	s, _ := flatted.Stringify(alice)
	fmt.Println(s)
	// Output: [{"name":"Alice","friend":"1","group":"2"},{"name":"Bob","friend":"0","group":"2"},{"name":"Developers"}]

	// Flattening in action:
	// Index "0" is Alice, Index "1" is Bob, Index "2" is the shared Group.

	// Parse back into a generic map structure
	res, _ := flatted.Parse(s)
	aliceMap := res.(map[string]any)
	fmt.Println(aliceMap["name"]) // Alice
}
```

## CLI

Build the binary using the provided Makefile:

```bash
make build
```

Then use it to parse flatted JSON from stdin:

```bash
echo '[{"a":"1"},"b"]' | ./flatted
```
