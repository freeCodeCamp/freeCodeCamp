# No-profanity compared to other packages

The no-profanity package was born because I was searching for an easy-to-use profanity filter, but found only outdated packages with tons of PR's and issues. 

But, I found a useful package I integrated into this package, namely `@coffeeandfun/google-profanity-words` which contains a list of profanity words.

## Compared to bad-words
The bad-words package, which this package aims to replace, has one major flaw. It loops through all the words in the list one by one, instead of incorporating it into a single regex. This makes it very slow. I compared the two packages by looping through 10.000 short strings, of which 1/3rd had a bad word in it. The results are as follows:

My code:

```js
console.time("bad-words");
arr.forEach((item) => {
    filter.clean(item);
});
console.timeEnd("bad-words");

console.time("no-profanity");
arr.forEach((item) => {
    replaceProfanities(item);
});
console.timeEnd("no-profanity");
```

The result, with 10.000 items:

```
bad-words: 37.993s
no-profanity: 241.211ms
```

As you can see this resulted in a massive speed increase. The no-profanity package is about 150 times faster than the bad-words package with this simple test.

Functionality wise they're the same, in fact, `no-profanity` supports almost the same options as bad-words. It's actually intended to be the replacement package for `bad-words`. 

## Migration from bad-words
If you're using bad-words, you can easily migrate to no-profanity. The only thing you need to do is change how you import and create the package, and maybe rename a few properties, though there's backwards compatibilty in place for most of them.

Instead of importing the package like this:

```js
const Filter = require('bad-words');
const filter = new Filter();

// more code

filter.clean('Don't be an ash0le');
```

You can now do this:

```js
const { replaceProfanities } = require('no-profanity');

// more code

replaceProfanities('Don't be an ash0le');
```

When dealing with options, you don't set it at the creation of `new Filter()`, but instead pass it as an argument to any method, like `replaceProfanities()`. 

For example, if you want to replace the bad words with `#` instead of `*`, you can do this:

```js
replaceProfanities({ testString: "Don't be an ash0le", options: { replacement: "#" });
```

### Renaming
Pretty much everything is compatible, but either named differently or different to include.

#### New Filter
Instead of creating a new filter, you can now just call methods directly.

```js
const { replaceProfanities, isProfane } = require('no-profanity');
```

#### clean()
Instead of calling `clean()` on the filter, you can now call `replaceProfanities()`.

```js
replaceProfanities("Don't be an ash0le");
```

#### isProfane()
The metod `isProfane()` is no longer called from the filter object, but can be called directly.

```js
isProfane("Don't be an ash0le");
```

#### addWords()
Instead of calling `addWords()` on the filter, you can now pass the words as an array to the `replaceProfanities()` method. 

```js
replaceProfanities({ testString: "Don't be an ash0le", options: { includes: ['be'] });
```

#### removeWords()
Instead of calling `removeWords()` on the filter, you can now pass the words as an array to the `replaceProfanities()` method. 

```js
replaceProfanities({ testString: "Don't be an ash0le", options: { excludes: ['ash0le'] });
```

#### EmptyList
EmptyList is still available, but now on the options object.
    
```js
replaceProfanities({ testString: "Don't be an ash0le", options: { emptyList: true });
```

#### Placeholder
The placeholder replacement is now called `replacement`.

```js
replaceProfanities({ testString: "Don't be an ash0le", options: { replacement: "#" });
```