# Enumerations

#### An  _enumeration_  defines a common type for a group of related values and enables you to work with those values in a type-safe way within your code.

If you are familiar with C, you will know that C enumerations assign related names to a set of integer values. Enumerations in Swift are much more flexible, and do not have to provide a value for each case of the enumeration. If a value (known as a “raw” value)  _is_ provided for each enumeration case, the value can be a string, a character, or a value of any integer or floating-point type.

Alternatively, enumeration cases can specify associated values of  _any_  type to be stored along with each different case value, much as unions or variants do in other languages. You can define a common set of related cases as part of one enumeration, each of which has a different set of values of appropriate types associated with it.

Enumerations in Swift are first-class types in their own right. They adopt many features traditionally supported only by classes, such as computed properties to provide additional information about the enumeration’s current value, and instance methods to provide functionality related to the values the enumeration represents. Enumerations can also define initializers to provide an initial case value; can be extended to expand their functionality beyond their original implementation; and can conform to protocols to provide standard functionality.

## Enumeration Syntax

You introduce enumerations with the  `enum`  keyword and place their entire definition within a pair of braces:

```swift
enum SomeEnumeration {
	// enumeration definition goes here
}
```

Here’s an example for the four main points of a compass:
```swift
enum CompassPoint {
	case north
	case south
	case east
	case west
}
```

The values defined in an enumeration (such as  `north`,  `south`,  `east`, and  `west`) are its  _enumeration cases_. You use the  `case`  keyword to introduce new enumeration cases.

Multiple cases can appear on a single line, separated by commas:
```swift
enum Planet {
	case mercury, venus, earth, mars, jupiter, saturn, uranus, neptune
}
```

Each enumeration definition defines a new type. Like other types in Swift, their names (such as  `CompassPoint`  and  `Planet`) should start with a capital letter. Give enumeration types singular rather than plural names, so that they read as self-evident:

```swift 
var directionToHead = CompassPoint.west
```

The type of  `directionToHead`  is inferred when it is initialized with one of the possible values of  `CompassPoint`. Once  `directionToHead`  is declared as a  `CompassPoint`, you can set it to a different  `CompassPoint`  value using a shorter dot syntax:

```swift
directionToHead = .east
```

The type of  `directionToHead`  is already known, and so you can drop the type when setting its value. This makes for highly readable code when working with explicitly typed enumeration values.
