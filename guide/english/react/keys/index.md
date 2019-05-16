---
title: Keys
---

# Keys

Keys are the eyes and ears on your application battlefield letting React know which items have changed or were added.
```javascript
const bestCereal = ['cookie crisp','waffle crisp','fruit loops','cinnamon toast crunch','cocoa puffs'];
const cerealItems = bestCereal.map((cereal) =>
  <ul key={cereal}>
    {cereal}
   </ul>
);
```
Notice that the keys selected were all unique. The `key` is required to be unique. If you are unable to provide a unique key from the list of items you are iterating over, you can use the `index`.
```javascript
const troops = ['general','major','platoon leader','cadet','cadet'];
const troopItems = troops.map((soldier, index) =>
  <ul key={index}>
    {soldier}
   </ul>
);
```
Although it is not recommended to use index if the order of items change. Many in the React community use index as a last resort.

### More Information
- [Keys Doc](https://reactjs.org/docs/lists-and-keys.html)
- [Dangers of Using Index as the Key](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)
