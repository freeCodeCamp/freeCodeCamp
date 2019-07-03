---
title : Modifiers
---

# Modifiers

Modifiers can be used to limit the access of the class members scope. TypeScript has `public`,
`private` and `protected` modifier.

### public
In TypeScript, you do not need to mark a member of a class `public`, each member is `public` by default.

```typescript
class Tree {
    public name: string;
    public age: number;
    public constructor(name:string, age:number){
        this.name = name;
        this.age = number;
    }
    public detail(){
      console.log(`${this.name} is ${this.age} years old.`);
    }
}

```

### private
Sometimes you want to hide the member scope from outside classes. To do this, mark member of the class `private`. In TypeScript, `private` properties can't be accessed from outside the class scope.

```typescript
class Tree {
    private name: string;
    private age: number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
 }
 
 let tree = new Tree('Banyan', 102);
 tree.name; // Error: 'name' is private;
```

### protected
The `protected` modifier acts like the `private` modifier with the exception that members declared `protected` can also be accessed within deriving classes. For example:

```typescript
class Animal {
    protected name:string;
    protected constructor(name:string){
        this.name = name;
    }
}

class Cat extends Animal {
    private color: string;
    constructor(name:string,color:string){
        super(name);
        this.color = color;
    }
    public getAnimalDetail(){
        return `Hello, my name is ${this.name} and my skin color is ${this.color}`; 
    }    
}

let lucy = new Cat("Lucy","White");
let misty = new Animal("Misty"); // Error: The 'Animal' constructor is protected;
```
### readonly
We can make members of the class read-only by using the `readonly` keyword. Read-only properties must be initialized at their declaration or in the constructor.

```typescript
class SuperHero {
    readonly name:string;
    readonly author:string='Marvel';
    constructor(name:string){
        this.name = name;
    }
}

let hero = new SuperHero("Spider Man");
hero.name = "Thor"; //Error: name is readonly;
```



