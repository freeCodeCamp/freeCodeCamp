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
In Typescript's type you can use some built-in functions. Each type has common and unique methods.
Below you can read about the most used ones of the string type's methods.

### split('separator', limit)
With split function, you can split your string at a specified separator. You can set a limit number, thats says how many splits have to do.
The splitted string returns in an array type.
```typescript
let names: string = 'Sarah,Lily,John,Paula,Harvey';
let array: string[] = names.split(',');
//array = ['Sarah','Lily','John','Paula','Harvey']
let array2: string[] = names.split(',',2);
//array2 = ['Sarah','Lily']
```

### substr(startAt,length)
This method return with a substring, which stars at the `startAt` character of original string, and it's length is `length`.
```typescript
let names: string = 'Harvey Specter';
let substr: string = names.substr(3,10);
//substr = 'rvey Spect'
```

### substring(startAt,endAt)
This method is similar to substr(), but has different parameters. The second paramter is also an index about the original string, not a length number.
```typescript
let names: string = 'Harvey Specter';
let substring: string = names.substring(3,10);
//substring = 'rvey Spe'
```
 

 [More methods and description at TutorialsPoint](https://www.tutorialspoint.com/typescript/typescript_strings.htm)
