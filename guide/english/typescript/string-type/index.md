---
title: String Type
---

# String Type

Strings can be written with `''` single quotation marks or `""` double quotation marks.
Be consistent with your code and choose a style.

```typescript
let dog: string = 'Fido';
let activity: string = "Playing Outside";
```

Strings can be written using template literals:
```typescript
let greeting: string = `Hello, ${firstName} ${lastName}, thank you for attending the ${eventName} event.`;
```

## Built-in methods
In TypeScript you can use some built-in functions for specific types. Each type has common and unique methods.
Below you can read about the most used common methods for the string type.

### split('separator', limit)
With the split function, you can split your string at a specified separator. You can set a limit number, that says how many splits to find and place in the returned array.
The split string returns in an array type.
```typescript
let names: string = 'Sarah,Lily,John,Paula,Harvey';
let array: string[] = names.split(',');
//array = ['Sarah','Lily','John','Paula','Harvey']
let array2: string[] = names.split(',',2);
//array2 = ['Sarah','Lily']
```

### substr(startAt,length)
This method returns a substring of length `length`, which starts at the `startAt` index of the original string.
```typescript
let names: string = 'Harvey Specter';
let substr: string = names.substr(2,10);
//substr = 'rvey Spect'
```

### substring(startAt,endAt)
This method is similar to substr(), but the second parameter `endAt` is the index of the first character to be excluded from the substring. That is, the substring does not include the character at index `endAt`.
```typescript
let names: string = 'Harvey Specter';
let substring: string = names.substring(2,10);
//substring = 'rvey Spe'
```
 

 [More methods and description at TutorialsPoint](https://www.tutorialspoint.com/typescript/typescript_strings.htm)
