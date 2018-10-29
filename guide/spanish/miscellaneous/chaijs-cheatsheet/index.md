---
title: Chaijs Cheatsheet
localeTitle: Chaijs Cheatsheet
---
## Afirmar
```
assert(val) 
 assert.fail(actual, expected) 
 assert.ok(val) // is truthy 
 assert.equal(actual, expected) // 'compare with ==' 
 assert.strictEqual 
 assert.deepEqual 
 
 assert.isTrue 
 assert.isFalse 
 
 assert.isNull 
 assert.isNotNull 
 assert.isUndefined 
 assert.isDefined 
 assert.isFunction 
 assert.isObject 
 assert.isArray 
 assert.isString 
 assert.isNumber 
 assert.isBoolean 
 
 assert.typeOf(/tea/, 'regexp') // Object.prototype.toString() 
 assert.instanceOf(chai, Tea) 
 assert.include(<a href='https://github.com/rstacruz/cheatsheets' target='_blank' rel='nofollow'> a,b,c ], a) 
 assert.match(val, /regexp/) 
 assert.property(obj, 'tea') // 'tea' in object 
 assert.deepProperty(obj, 'tea.green') 
 assert.propertyVal(person, 'name', 'John') 
 assert.deepPropertyVal(post, 'author.name', 'John') 
 
 assert.lengthOf(object, 3) 
 assert.throws(function() { ... }) 
 assert.throws(function() { ... }, /reference error/) 
 assert.doesNotThrow 
 
 assert.operator(1, '<', 2) 
 assert.closeTo(actual, expected) 
```

## Debe: cadenas
```
.to .be .been .is .that .and .have .with .at .of .same 
```

## No debería
```
expect(object).not.equal('x') 
```

## Esperanzas de heredar
```
expect(object) 
  .equal(expected) 
  .eql 
  .deep.equal(expected) // same as .eql 
  .be.a('string') 
  .include(val) 
 
  .be.ok(val) 
  .be.true 
  .be.false 
 
  .be.null 
  .be.undefined 
  .be.empty 
  .be.arguments 
  .be.function 
  .be.instanceOf 
 
  .gt(5)  # or .above .greaterThan 
  .gte    # or .at.least 
  .lt(5)  # or .below 
 
  .respondTo('bar') 
  .satisfy (n) -> n > 0 
 
  .have.members([2, 3, 4]) 
  .have.keys(['foo']) 
  .have.key('foo') 
 
  .exist 
 
 expect(-> ...) 
  .throw /not a function/ 
```

## Chai-jQuery
```
    global.jQuery = ...; 
    chai.use(require('chai-jquery')); 
 
    expect($body) 
 
      .have.attr('foo') 
      .have.prop('disabled') 
      .have.css('background') 
      .have.css('background-color', '#ffffff') 
      .have.data('foo') 
 
      .have.class('active') 
      .have.id('id') 
 
      .have.html('<em>hi</em>') 
      .have.text('hello') 
      .have.value('2013') 
 
      .be.visible 
      .be.hidden 
 
      .be.checked 
      .be.selected 
 
      .be.enabled 
      .be.disabled 
 
      .be.empty 
      .to.exist 
      .to.contain('text') 
      .to.have('.selector') 
```

> \[Hojas de trucos de ricostacruz
> 
> [Discutir sobre gitter](https://gitter.im/bothelp/testing)