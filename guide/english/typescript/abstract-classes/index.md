---
title: Abstract Classes
---

# Abstract Classes

Abstract classes are super classes which can be derived by other classes.The class marked with the `abstract` keyword is the abstract class and it can't be instantiate directly. The Abstract class may contain `abstract` or `non-abstract` member functions.

```typescript
abstract class FCC{
    abstract makeSkill(): void;
    getSound():void{
        console.log("Coding...");
    }
}
```

Methods enclosed to abstract class which are marked `abstract` do not contain a method body and must be implemented in the derived class.

```typescript
abstract class FCC{
    private name:string;
    constructor(name:string){
        this.name = name;
    }
    abstract makeSkill(skillName:string):void;
    displayName():void{
        console.log(`Hi, ${this.name} welcome to FreeCodeCamp!`);
    }
}

class Camper extends FCC{
    constructor(name:string){
        super(name);
    }
    makeSkill(skillName:string):void{
        console.log(`Hey, ${this.name} you made the ${skillName} skills`);
    }
}

let jack = new Camper('Jack Smith');
jack.displayName();
jack.makeSkill('Front-End Library');
```
