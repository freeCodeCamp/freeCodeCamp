---
title: Imports
---

# Imports

Kotlin allows you to import other packages, classes, & objects, to use in other files. You can also use it to import top-level function & properties, as well as enums.

### Usage

```kotlin
import foo.Bar
```
This allows you to reference `Bar` in your file directly, rather than having to use the fully-qualified name (ie. foo.Bar).

If you needed access to all content in `foo`, you could instead use

```kotlin
import foo.*
```

You can also utilize `as` to resolve naming conflicts of imports. This only renames the local usage of the import.

```kotlin
import foo.Bar
import baz.Bar as bBar
```
