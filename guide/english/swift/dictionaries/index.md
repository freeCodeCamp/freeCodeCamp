---
title: Dictionaries
---

# Dictionaries

A dictionary is a type of collection that stores an **unordered** list of associated "key-value" pairs. Each **key** is a unique identifier that stores a specified **value**, which then can be accessed or referenced later with the corresponding key.

## Initializationv

**Various ways to initialize a Dictionary:** 
```swift
//Full -> Dictionary<Key, Value>
var emptyDictionary1: Dictionary<String, String> = Dictionary();
var emptyDictionary2 = Dictionary<Int,String>()

//Shorthand -> [Key: Value] (preferred)
var emptyDictionary3 = [Int: Float]();
var emptyDictionary4: [Float: String] = [:]
```
**(1)** The shorthand variant(s) are the preferred style to use due to the brevity and clarity it provides in comparison to its "full" variations.  

**(2)** You can utilize any type as the key of a dictionary as long as it conforms to the **Hashable** Protocol. For more information check out [Protocols](https://docs.swift.org/swift-book/LanguageGuide/Protocols.html#ID268) and [Hashable](https://developer.apple.com/documentation/swift/hashable).

#### Create many Entries using a "Dictionary Literal".

A dictionary literal is a list of key-value pairs in the following shorthand form ... [ key1: value1, key2: value2, key3: value3 ]

```swift
var pokeDexionary: [Int: String] = [
    25: "Pitachew",
    10: "Caterpie",
    17: "Pidgeotto",
    1: "Bulbasaur",
    4: "Charmander"
]
```

## Accessing and Modifying

### Getting Values

When getting the values from a dictionary it will return an optional value as it's possible to not have a value associated with the key provided in the subscript.

```swift
let charmander = pokeDexionary[4] // Optional("Charmander")
let trySquirtle = pokeDexionary[7] // returns nil... cause no one will trade with me!
```

#### Adding New Values
```swift
pokeDexionary[7] = "Squirtle"
pokeDexionary[98] = "Krabby"
```

#### Updating Values
```swift
print(pokeDexionary[25]!) // outputs: "Pitachew"
pokeDexionary[25] = "Pikachu"
print(pokeDexionary[25]!) // outputs: "Pikachu"
```
#### "UpdateValue()" Method
You can also utilize the **updateValue** method to modify an entry or add a new one. The way it works is that if the key exists in the dictionary it updates the value for the key, otherwise it will add the key as a new entry with the given value. Also if updateValue adds a new entry it will return nil, but if the method modifies a current value then it will return the old value.

```swift
let nilValue = pokeDexionary.updateValue("RaticakeIsALie", forKey: 20); // nilValue = nil;
let oldValue = pokeDexionary.updateValue("Raticate", forKey: 20) //oldValue = "RaticakeIsALie"
```

#### Removing a value from a dictionary
```swift
pokeDexionary[20] = nil; //removed "Raticate" ...
pokeDexionary.updateValue("Butterfree", forKey: 12)// and added "Butterfree" instead
```

## Iteration

The most common way to iterate over a dictionary is by using a for-in loop.
```swift
for (key, value) in pokeDexionary {
    print("Who's That Pokemon? Its.... #\(key): \(value)")
}
```

#### Output For Above:

Who's That Pokemon? Its.... #4: Charmander.   
Who's That Pokemon? Its.... #10: Caterpie.   
Who's That Pokemon? Its.... #98: Krabby.   
Who's That Pokemon? Its.... #7: Squirtle.   
Who's That Pokemon? Its.... #1: Bulbasaur.   
Who's That Pokemon? Its.... #17: Pidgeotto.   
Who's That Pokemon? Its.... #25: Pikachu. 

**Note:** Because dictionaries have no designated order the above output can be in different order each time you run it.

### More Information:
* [Swift Dictionaries](https://docs.swift.org/swift-book/LanguageGuide/CollectionTypes.html#ID113)
* [Protocols](https://docs.swift.org/swift-book/LanguageGuide/Protocols.html#ID268)
* [Hashable Protocol](https://developer.apple.com/documentation/swift/hashable)
